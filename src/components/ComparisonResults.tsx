// 1.IMPORTAZIONI -- Importo i tipi necessari. 
import type { Dev, ComparisonResultItem } from "../types";
// Importo la funzione che genera i risultati del confronto.
import { getComparisonResults } from "../functions";

// -----------------------------------------------------------------------------------------------------------------------
// 2. TIPO DELLE PROPS -- Definisco i due sviluppatori ricevuti dal componente.
type ComparisonResultsProps = {
    devA: Dev;
    devB: Dev;
};

// -----------------------------------------------------------------------------------------------------------------------
// 3. FUNZIONE PER LE CLASSI DEL RISULTATO -- Cocstruisco le classi CSS del singolo risultato.
function getResultClass(
    result: ComparisonResultItem): string {
    let className = "result-item";
    // Aggiunge il colore del bordo.
    className += " result-" + result.tone;

    // Se è il risultato finale occupa tutta la larghezza.
    if (result.fullWidth === true) {
        className += " final-result";
    }
    return className;
}

// -----------------------------------------------------------------------------------------------------------------------
// 4. FUNZIONE PER IL COLORE DEL NOME -- Restituisco la classe del nome evidenziato.
function getWinnerClass(result: ComparisonResultItem): string {
    if (result.winner === "A") {
        return "winner-name winner-a";
    }
    if (result.winner === "B") {
        return "winner-name winner-b";
    }
    return "winner-name";
}

// -----------------------------------------------------------------------------------------------------------------------
// 5. COMPONENTE COMPARISON RESULTS -- Mostro tutte le frasi generate dal confronto.
function ComparisonResults({ devA, devB }: ComparisonResultsProps) {

    // Recupera i risultati del confronto. 
    const results = getComparisonResults(devA, devB);
    return (
        <section className="comparison-results">
            {/* Titolo della sezione. */}
            <h2>Chi dovresti scegliere?</h2>
            {/* Contiene tutte le frasi del confronto. */}
            <div className="results-list">
                {/* Scorre l'array dei risultati. */}
                {results.map((result, index) => {
                    return (
                        <p key={index} className={getResultClass(result)}
                        >
                            {/* Mostra la parte iniziale della frase. */}
                            {result.text}
                            {/* Mostra il nome del vincitore se presente. */}
                            {result.highlightedName !== "" ? (
                                <span className={getWinnerClass(result)}>
                                    {result.highlightedName}
                                </span>
                            ) : ""}
                            {/* Aggiunge il punto solo se è presente un nome. */}
                            {result.highlightedName !== "" ? "." : ""}</p>
                    );
                })}
            </div>
        </section>
    );
}
// -----------------------------------------------------------------------------------------------------------------------

// 6. ESPORTAZIONE -- Esporto il componente per utilizzarlo in App.
export default ComparisonResults;
