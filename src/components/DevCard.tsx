// 1. IMPORTAZIONI -- Importo i tipi necessari.
import type { Dev, SelectionSide } from "../types";

// Importo il componente che mostra le competenze.
import SkillBar from "./SkillBar";

// Importo le funzioni utili per mostrare nome completo, data, genere e le medie.
import { getFullname, formatBirthDate, getGenderText, getAverageByType, getOverallAverage } from "../functions";

// -----------------------------------------------------------------------------------------------------------------------
// 2. TIPO DELLE PROPS -- Definisco i dati ricevuti dal componente DevCard.
type DevCardProps = {
    dev: Dev; // Dati dello sviluppatore.
    side: SelectionSide; // Indica se la card è A oppure B.
};

// -----------------------------------------------------------------------------------------------------------------------
// 3. COMPONENTE DEV CARD -- Mostro tutte le info di uno sviluppatore. 
function DevCard({ dev, side }: DevCardProps) {

    // Calcolo la media delle competenze front-end.
    const frontEndAverage = getAverageByType(dev, "front-end");

    // Calcolo la media delle competenze back-end.
    const backEndAverage = getAverageByType(dev, "back-end");

    // Calcolo la media complessiva di tutte le competenze.
    const overallAverage = getOverallAverage(dev);

    // Restituisco la card completa dello sviluppatore.
    return (
        <article className={"dev-card dev-card-" + side.toLowerCase()}>

            {/* Parte sup con immagine, badge e dati personali. */}
            <header className="dev-card-header">

                {/* Immagine dello sviluppatore. */}
                <img src={dev.imageUrl} alt={getFullname(dev)} />

                {/* Badge DEV A oppure DEV B. La classe cambia in base al lato della card. */}
                <span className={
                    "dev-badge dev-badge-" + side.toLowerCase()
                }>DEV {side}</span>

                {/* Nome, data di nascita e genere. */}
                <div className="dev-personal-info">
                    <h2> {getFullname(dev)}</h2>
                    <p> Nato/a il {" "} {formatBirthDate(dev.birthDate)}</p>
                    <p> Genere: {" "} {getGenderText(dev.gender)}</p>
                </div>
            </header>
            {/* Parte inf con medie e competenze. */}
            <section className="dev-card-content">

                {/* Contiene le 3 medie principali. */}
                <div className="averages">

                    {/* Media front-end */}
                    <article className="average-box">
                        <span>FRONT-END</span>
                        <strong>{frontEndAverage.toFixed(1)}</strong>
                    </article>
                    {/* Media back-end */}
                    <article className="average-box">
                        <span>BACK-END</span>
                        <strong>{backEndAverage.toFixed(1)}</strong>
                    </article>
                    {/* Media complessiva */}
                    <article className="average-box">
                        <span>OVERALL</span>
                        <strong>{overallAverage.toFixed(1)}</strong>
                    </article>
                </div>
                {/* Elenco delle competenze dello sviluppatore. */}
                <section className="skills-list">

                    {/* map scorre tutte le competenze. */}
                    {dev.skills.map((skill) => {

                        // Per ogni competenza crea un componente SkillBar.
                        return (
                        <SkillBar
                            // Key identifica ogni competenza.
                            key={dev.id + "-" + skill.label}
                            // Passa la competenza corrente al componente.
                            skill={skill} />
                        );
                    })}
                </section>
            </section>
        </article>
    );
}
// -----------------------------------------------------------------------------------------------------------------------
// 4. ESPORTAZIONE -- Esporto il componente per utilizzarlo in DevArena.
export default DevCard;