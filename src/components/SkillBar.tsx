// 1. IMPORTAZIONI -- Importo il tipo Skill dal file types.ts.
import type {Skill} from "../types";
// 2. TIPO DELLE PROPS -- Definisco i dati ricevuti dal componente SkillBar.
type SkillBarProps ={
    skill: Skill;
};

// 3. COMPONENTE SKILL BAR -- Mostro una singola competenza con: nome, tipologia, valore numerico e barra grafica.
function SkillBar ({skill} : SkillBarProps){
    return(
        <article className="skill-item">
        {/* Parte sup della competenza */}
    <div className = "skill-info">

    {/* Contiene il nome e la tipologia della competenza */}
    <div>
        <span className = "skill-label"> {skill.label} </span>
        <span className = "skill-type"> {skill.type} </span>
    </div>

    {/* Mostro il valore numerico della competenza. */}
    <strong className = "skill-value"> {skill.value}/100 </strong>
    </div>
    {/* Sfondo completo della barra. */}
    <div className = "skill-bar">

    {/* Parte colorata della barra.*/}
    <div className = {"skill-progress " + skill.type }
    // La larghezza della barra dipende dal valore della competenza. 
    style= {{width: skill.value + "%" }}>
    </div>
    </div>
    </article>
    );
}

// 4. ESPORTAZIONE -- Esporto il componente per poi utilizzarlo in DevCard.
export default SkillBar;
    