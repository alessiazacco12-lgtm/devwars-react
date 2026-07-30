// 1. IMPORTAZIONI -- Importo i tipi necessari dal file types.ts.
import type { Dev, Gender, Skill, SkillType, ComparisonValue, ResultTone, ComparisonResultItem } from "./types";
// -----------------------------------------------------------------------------------------------------------------------
// 2. NOME COMPLETO -- La funzione riceve un oggetto di tipo Dev. Restituisce una stringa formata dal nome e dal cognome, separati da uno spazio.
function getFullname(dev: Dev): string {
    return dev.firstname + " " + dev.lastname;
}
// -----------------------------------------------------------------------------------------------------------------------
// 3. FORMATTAZIONE DELLA DATA -- // La funzione riceve una data salvata nel formato AAAA-MM-GG. Con split("-") divide la stringa in tre parti: anno, mese e giorno. Infine restituisce la data nel formato GG/MM/AAAA.
function formatBirthDate(birthDate: string): string {
    const [year, month, day] = birthDate.split("-");
    return day + "/" + month + "/" + year;
}
// -----------------------------------------------------------------------------------------------------------------------
// 4. TESTO DEL GENERE -- La funzione riceve uno dei valori ammessi dal type Gender. Lo switch controlla il valore ricevuto e restituisce il testo completo da mostrare nella card dello sviluppatore.
function getGenderText(gender: Gender): string {
    switch (gender) {
        case "m":
            return "Maschile";
        case "f":
            return "Femminile";
        case "unknown":
            return "Non specificato";
    }
}
// -----------------------------------------------------------------------------------------------------------------------
// 5. RICERCA DI UNA COMPETENZA -- La funzione riceve uno sviluppatore e il nome di una competenza. 
function getSkillByLabel(dev: Dev, skillLabel: string): Skill | undefined {
    const skill = dev.skills.find((skill) => { // find cerca dentro l'array dev.skills la prima competenza con una label uguale a skilllabel. 
        return skill.label === skillLabel;
    });
    // Il risultato può essere o un oggetto Skill (se la competenza viene trovata) oppure undefined se lo sviluppatore non possiede quella dt competenza.
    return skill;
}
// -----------------------------------------------------------------------------------------------------------------------
// 6. MEDIA PER TIPOLOGIA -- La funzione calcola la media delle competenze appartenenti a una determinata categoria. Il parametro skillType può essere front-end o back-end.  
function getAverageByType(dev: Dev, skillType: SkillType): number {
    const selectedSkills = dev.skills.filter((skill) => { // filter crea un nuovo array contenente soltanto le competenze del tipo richiesto.
        return skill.type === skillType; 
    });
    // Se non esistono competenze di quel tipo, restituisco 0 per evitare una divisione per zero.
    if (selectedSkills.length === 0) {
        return 0;
    }
    // Variabile che conterrà la somma dei valori.
    let total = 0;
     // Scorro tutte le competenze selezionate e sommo il valore di ciascuna.
    selectedSkills.forEach((skill) => {
        total += skill.value;
    });
    // Divido il totale per il numero delle competenze per ottenere la media.
    return total / selectedSkills.length;
}
// -----------------------------------------------------------------------------------------------------------------------
// 7. MEDIA COMPLESSIVA -- La funzione calcola la media di tutte le competenze che possiede lo sviluppatore. 
function getOverallAverage(dev: Dev): number {
    // Se l'array delle competenze è vuoto, restituisco 0 per evitare una divisione per zero.
    if (dev.skills.length === 0) {
        return 0;
    }
    // Variabile che contiene la somma di tutti i valori.
    let total = 0;
    // Scorro tutte le competenze dello sviluppatore e aggiungo ogni valore al totale.
    dev.skills.forEach((skill) => {
        total += skill.value;
    });
    // Calcolo la media dividendo la somma per il numero totale delle competenze.
    return total / dev.skills.length;
}
// -----------------------------------------------------------------------------------------------------------------------
// 8. CONFRONTO TRA DUE VALORI -- La funzione riceve due numeri e va a stabilire quale sia maggiore. Restituisce "A" se valueA è maggiore, "B" se valueB è maggiore, "equal" se i due valori sono uguali.
function compareValues(valueA: number, valueB: number): ComparisonValue {
    if (valueA > valueB) {
        return "A";
    }
    if (valueB > valueA) {
        return "B";
    }
    return "equal";
}
// -----------------------------------------------------------------------------------------------------------------------
// 9. CREAZIONE DI UN RISULTATO -- La funzione crea e restituisce un oggetto ComparisonResultItem. L'oggetto contiene tutte le info necessarie per mostrare una singola frase nella sezione dei risultati.
function createResultItem(text: string, highlightedName: string, tone: ResultTone, winner: ComparisonValue, fullWidth: boolean = false): ComparisonResultItem {
    return {text, highlightedName, tone, winner, fullWidth};
}
// -----------------------------------------------------------------------------------------------------------------------
// 10. RISULTATI DEL CONFRONTO --
// Confronto le competenze condivise, le medie front-end, le medie back-end e la media complessiva.
function getComparisonResults(devA: Dev, devB: Dev): ComparisonResultItem[] {
const results: ComparisonResultItem[] = [];

    // CONFRONTO DELLE SINGOLE COMPETENZE --
 devA.skills.forEach((skillA) => {
    const skillB = getSkillByLabel(devB, skillA.label);
    if (skillB) {
        const comparison = compareValues(skillA.value, skillB.value);

        // Dev A ha il valore più alto.
        if (comparison === "A") {
            results.push(
                createResultItem( "Se cerchi il migliore in " + skillA.label + ", scegli ", getFullname(devA), "purple", "A")
            );
        }

        // Dev B ha il valore più alto.
        if (comparison === "B") {
            results.push(
                createResultItem( "Se cerchi il migliore in " + skillA.label + ", scegli ", getFullname(devB), "purple", "B")
            );
        }

        // I due sviluppatori hanno lo stesso valore.
        if (comparison === "equal") {
            results.push(
                createResultItem( "Se vuoi il migliore in " + skillA.label + ", ", "i due sviluppatori sono alla pari", "purple", "equal")
            );
        }
    }
});

    // CONFRONTO FRONT-END --
    const frontEndA = getAverageByType(devA, "front-end");
    const frontEndB = getAverageByType(devB, "front-end");

    const frontEndComparison = compareValues( frontEndA, frontEndB);

    if (frontEndComparison === "A") {
        results.push(
            createResultItem( "Per il front-end, la scelta migliore è ", getFullname(devA), "green", "A")
        );
    }

    if (frontEndComparison === "B") {
        results.push(
            createResultItem("Per il front-end, la scelta migliore è ", getFullname(devB), "green", "B" )
        );
    }

   if (frontEndComparison === "equal") {
    results.push(
        createResultItem( "Per il front-end, ", "i due sviluppatori sono alla pari", "green","equal")
    );
}

    // CONFRONTO BACK-END --
    const backEndA = getAverageByType(devA, "back-end");
    const backEndB = getAverageByType(devB, "back-end");

    const backEndComparison = compareValues( backEndA,backEndB);

    if (backEndComparison === "A") {
        results.push(
            createResultItem( "Per il back-end, la scelta migliore è ", getFullname(devA), "green", "A")
        );
    }

    if (backEndComparison === "B") {
        results.push(
            createResultItem( "Per il back-end, la scelta migliore è ", getFullname(devB), "green", "B")
        );
    }
    if (backEndComparison === "equal") {
    results.push(
        createResultItem( "Per il back-end, ", "i due sviluppatori sono alla pari", "green", "equal")
    );
}
    

    // CONFRONTO COMPLESSIVO --
    const overallA = getOverallAverage(devA);
    const overallB = getOverallAverage(devB);

    const overallComparison = compareValues(
        overallA,
        overallB
    );

    if (overallComparison === "A") {
        results.push(
            createResultItem( "Complessivamente, lo sviluppatore più completo è ", getFullname(devA), "yellow", "A", true)
        );
    }

    if (overallComparison === "B") {
        results.push(
            createResultItem( "Complessivamente, lo sviluppatore più completo è ", getFullname(devB), "yellow", "B", true)
        );
    }
    if (overallComparison === "equal") {
    results.push(
        createResultItem( "Complessivamente, ", "i due sviluppatori sono alla pari", "yellow","equal", true)
    );
}
   

    return results;
}
// -----------------------------------------------------------------------------------------------------------------------
// 11. ESPORTAZIONI -- Esporto le funzioni che poi utilizzerò in altri file.
export { getFullname, formatBirthDate, getGenderText, getSkillByLabel, getAverageByType, getOverallAverage, compareValues, getComparisonResults };