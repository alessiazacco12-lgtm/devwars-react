// 1. IMPORTAZIONI -- Importo i tipi necessari dal file types.ts.
import type { Dev, Gender, Skill, SkillType, ComparisonValue, ResultTone, ComparisonResultItem } from "./types";
// -----------------------------------------------------------------------------------------------------------------------
// 2. NOME COMPLETO -- La funzione riceve uno sviluppatore e restituisce il nome e il cognome uniti. 
function getFullname(dev: Dev): string {
    return dev.firstname + " " + dev.lastname;
}
// -----------------------------------------------------------------------------------------------------------------------
// 3. FORMATTAZIONE DELLA DATA -- La funzione riceve una data nel formato AA/MM/GG e la restituisce nel formato GG/MM/AA.
function formatBirthDate(birthDate: string): string {
    const [year, month, day] = birthDate.split("-");
    return day + "/" + month + "/" + year;
}
// -----------------------------------------------------------------------------------------------------------------------
// 4. TESTO DEL GENERE -- La funzione riceve il valore del genere e restituisce il testo completo da mostrare. 
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
// 5. RICERCA DI UNA COMPETENZA -- La funzione cerca una competenza attraverso il suo nome.
function getSkillByLabel(dev: Dev, skillLabel: string): Skill | undefined {
    const skill = dev.skills.find((skill) => {
        return skill.label === skillLabel;
    });
    return skill;
}
// -----------------------------------------------------------------------------------------------------------------------
// 6. MEDIA PER TIPOLOGIA -- La funzione calcola la media delle competenze front-end oppure back-end. 
function getAverageByType(dev: Dev, skillType: SkillType): number {
    const selectedSkills = dev.skills.filter((skill) => {
        return skill.type === skillType;
    });
    if (selectedSkills.length === 0) {
        return 0;
    }
    let total = 0;
    selectedSkills.forEach((skill) => {
        total += skill.value;
    });
    return total / selectedSkills.length;
}
// -----------------------------------------------------------------------------------------------------------------------
// 7. MEDIA COMPLESSIVA -- La funzione calcola la media di tutte le competenze dello sviluppatore. 
function getOverallAverage(dev: Dev): number {
    if (dev.skills.length === 0) {
        return 0;
    }
    let total = 0;
    dev.skills.forEach((skill) => {
        total += skill.value;
    });
    return total / dev.skills.length;
}
// -----------------------------------------------------------------------------------------------------------------------
// 8. CONFRONTO TRA DUE VALORI -- Confronto due valori e restituisco A se è maggiore il primo e B se è maggiore il secondo ed equal se sono uguali.
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
// 9. CREAZIONE DI UN RISULTATO -- Creo un oggetto contenente tutte le info necessarie per mostrare una frase del confronto.
function createResultItem(text: string, highlightedName: string, tone: ResultTone, winner: ComparisonValue, fullWidth: boolean = false): ComparisonResultItem {
    return {
        text, highlightedName, tone, winner, fullWidth
    };
}
// -----------------------------------------------------------------------------------------------------------------------
// 10. RISULTATI DEL CONFRONTO -- Confronto tutte le competenze condivise, le medie front-end back-end e complx.
function getComparisonResults(devA: Dev, devB: Dev): ComparisonResultItem[] {
    const results: ComparisonResultItem[] = [];
    // Confronto ogni competenza di Dev A con la stessa competenza del Dev B.
    devA.skills.forEach((skillA) => {
        const skillB = getSkillByLabel(devB, skillA.label);
        // Esegue il confronto solo se entrambi possiedono la stessa competenza.
        if (skillB) {
            const comparison = compareValues(skillA.value, skillB.value);
            if (comparison === "A") {
                results.push(
                    createResultItem(
                        "Se cerchi il migliore in " + skillA.label + ", scegli ", getFullname(devA), "purple", "A"));
            }
            if (comparison === "B") {
                results.push(
                    createResultItem("Se cerchi il migliore in " + skillA.label + ", scegli ", getFullname(devB), "purple", "B"));
            }
            if (comparison === "equal") {
                results.push(
                    createResultItem("In " + skillA.label + " i due sviluppatori sono alla pari.", "", "purple", "equal"));
            }
        }
    });

    // CONFRONTO FRONT-END --
    const frontEndA = getAverageByType(devA, "front-end");
    const frontEndB = getAverageByType(devB, "front-end");
    const frontEndComparison = compareValues(frontEndA, frontEndB);
    if (frontEndComparison === "A") {
        results.push(
            createResultItem("Per il front-end, scegli ", getFullname(devA), "green", "A"));
    }
    if (frontEndComparison === "B") {
        results.push(
            createResultItem("Per il front-end, scegli ", getFullname(devB), "green", "B"));
    }
    if (frontEndComparison === "equal") {
        results.push(
            createResultItem("Nel front-end i due sviluppatori sono alla pari.", "", "green", "equal"));
    }

    // CONFRONTO BACK-END --
    const backEndA = getAverageByType(devA, "back-end");
    const backEndB = getAverageByType(devB, "back-end");
    const backEndComparison = compareValues(backEndA, backEndB);
    if (backEndComparison === "A") {
        results.push(
            createResultItem("Per il back-end, scegli ", getFullname(devA), "green", "A"));
    }
    if (backEndComparison === "B") {
        results.push(
            createResultItem("Per il back-end, scegli ", getFullname(devB), "green", "B"));
    }
    if (backEndComparison === "equal") {
        results.push(
            createResultItem("Nel back-end i due sviluppatori sono alla pari.", "", "green", "equal"));
    }

    // CONFRONTO COMPLESSIVO --
    const overallA = getOverallAverage(devA);
    const overallB = getOverallAverage(devB);
    const overallComparison = compareValues(overallA, overallB);
    if (overallComparison === "A") {
        results.push(
            createResultItem("Complessivamente, scegli ", getFullname(devA), "yellow", "A", true));
    }
    if (overallComparison === "B") {
        results.push(
            createResultItem("Complessivamente, scegli ", getFullname(devB), "yellow", "B", true));
    }
    if (overallComparison === "equal") {
        results.push(
            createResultItem("Complessivamente, i due sviluppatori sono alla pari.", "", "yellow", "equal", true));
    }
    return results;
}
// -----------------------------------------------------------------------------------------------------------------------
// 11. ESPORTAZIONI -- Esporto le funzioni che poi utilizzerò in altri file.
export { getFullname, formatBirthDate, getGenderText, getSkillByLabel, getAverageByType, getOverallAverage, compareValues, getComparisonResults };