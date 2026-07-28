// 1. IMPORTAZIONI -- Importo i tipi necessari dal file types.ts.
import type{Dev,Gender,Skill,SkillType} from "./types";

// 2. NOME COMPLETO -- La funzione riceve uno sviluppatore e restituisce il nome e il cognome uniti. 
function getFullname(dev: Dev) : string{
    return dev.firstname + " " + dev.lastname;
}

// 3. FORMATTAZIONE DELLA DATA -- La funzione riceve una data nel formato AA/MM/GG e la restituisce nel formato GG/MM/AA.
function formatBirthDate (birthDate: string) : string {
    const dateParts= birthDate.split("-");
    const year = dateParts [0];
    const month = dateParts [1];
    const day = dateParts [2];
    return day + "/" + month + "/" + year;
}
// 4. TESTO DEL GENERE -- La funzione riceve il valore del genere e restituisce il testo completo da mostrare. 
function getGenderText(gender: Gender): string {
    switch(gender){
        case "m":
            return "Maschile";
        case "f":
            return "Femminile";
        case "unknown":
            return "Non specificato";
    }
}

// 5. RICERCA DI UNA COMPETENZA -- La funzione cerca una competenza attraverso il suo nome.
function getSkillByLabel(dev:Dev,skillLabel:string): Skill | undefined {
    const skill = dev.skills.find((skill) => {
        return skill.label === skillLabel;
    });
    return skill;
}
// 6. MEDIA PER TIPOLOGIA -- La funzione calcola la media delle competenze front-end oppure back-end. 
function getAverageByType(dev:Dev, skillType: SkillType): number{
    const selectedSkills = dev.skills.filter((skill) =>{
        return skill.type === skillType;
});
    if (selectedSkills.length === 0 ){
    return 0;
}
let total = 0;
selectedSkills.forEach((skill) =>{
    total += skill.value;
});
return total/selectedSkills.length;
}
// 7. MEDIA COMPLESSICA -- La funzione calcola la media di tutte le competenze dello sviluppatore. 
function getOverallAverage(dev: Dev) : number{
    if (dev.skills.length === 0){
        return 0;
    }
    let total = 0;
    dev.skills.forEach((skill) =>{
        total += skill.value;
    });
return total/dev.skills.length;
}
// 8. ESPORTAZIONI -- Esporto le funzioni che poi utilizzerò in altri file.
export{getFullname,formatBirthDate,getGenderText,getSkillByLabel,getAverageByType,getOverallAverage};