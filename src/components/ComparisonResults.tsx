// 1.IMPORTAZIONI -- Importo i tipi necessari. 
import type { Dev, ComparisonResultItem } from "../types";

// Importo la funzione che genera i risultati del confronto.
import { getComparisonResults } from "../functions";

// -----------------------------------------------------------------------------------------------------------------------
// 2. TIPO DELLE PROPS -- Definisco i due sviluppatori ricevuti dal componente.
type ComparisonResultsProps = {
    devA: Dev; // devA contiene i dati dello sviluppatore A.
    devB: Dev; // devB contiene i dati dello sviluppatore B.
};

// -----------------------------------------------------------------------------------------------------------------------
// 3. FUNZIONE PER LE CLASSI DEL RISULTATO -- Questa funzione costruisce la stringa contenente le classi CSS da assegnare a un singolo risultato. Riceve un oggetto di tipo ComparisonResultItem e restituisce una stringa con le classi CSS.
function getResultClass(
    result: ComparisonResultItem): string {

     // Tutti i risultati possiedono inizialmente la classe CSS result-item.
    let className = "result-item";
     // Aggiungo una seconda classe in base al tono del risultato. Per esempio: tone = "purple"  -> result-purple tone = "green"   -> result-green e poi tone = "yellow"  -> result-yellow.
    className += " result-" + result.tone;

    // Se fullWidth è true, significa che il risultato deve occupare tutta la larghezza della griglia. In questo caso aggiungo la classe final-result.
    if (result.fullWidth === true) {
        className += " final-result";
    }
    return className;
}

// -----------------------------------------------------------------------------------------------------------------------
// 4. FUNZIONE PER IL COLORE DEL NOME -- Questa funzione restituisce la classe CSS da applicare al nome dello sviluppatore vincitore. Il colore cambia in base al valore di result.winner.
function getWinnerClass(result: ComparisonResultItem): string {
    // Se il vincitore è Dev A, il nome riceve la classe azzurra winner-a.
    if (result.winner === "A") {
        return "winner-name winner-a";
    }
    // Se il vincitore è Dev B, il nome riceve la classe rosa winner-b.
    if (result.winner === "B") {
        return "winner-name winner-b";
    }
    // In caso di parità non viene aggiunto nessun colore specifico.
    return "winner-name";
}

// -----------------------------------------------------------------------------------------------------------------------
// 5. COMPONENTE COMPARISON RESULTS -- Questo componente riceve Dev A e Dev B, genera i risultati del confronto e mostra tutte le frasi nella pagina.
function ComparisonResults({ devA, devB }: ComparisonResultsProps) {

    // Richiamo la funzione getComparisonResults passando i due sviluppatori ricevuti tramite props. La funzione restituisce un array di oggetti ComparisonResultItem.
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
                        <p key={index} // key permette a React di riconoscere
                            // ogni elemento creato con map.
                        className={getResultClass(result)}>  //Le classi CSS vengono costruite dalla funzione getResultClass.
                        
                            {/* Mostra la parte iniziale della frase. */}
                            {result.text}

                            {/* Controllo se highlightedName contiene effettivamente un nome. Se il nome è presente, mostro uno span con il nome evidenziato. Se il nome non è presente, non mostro nulla. */}
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
