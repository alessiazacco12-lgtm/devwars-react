// 1. IMPORTAZIONI --
// Importo il tipo Dev dal file types.ts.
import type { Dev } from "../types";

// Importo il componente che mostra la card dello sviluppatore.
import DevCard from "./DevCard";

// -----------------------------------------------------------------------------------------------------------------------
// 2. TIPO DELLE PROPS -- Definisco le proprietà che il componente DevArena deve ricevere dal componente padre App.  devA contiene lo sviluppatore selezionato come Dev A e devB contiene lo sviluppatore selezionato come Dev B.
type DevArenaProps = {
    devA: Dev;
    devB: Dev;
};

// -----------------------------------------------------------------------------------------------------------------------
// 3. COMPONENTE DEV ARENA -- Questo componente mostra i due sviluppatori uno di fronte all'altro. Riceve devA e devB tramite props e li passa ai due componenti DevCard.
function DevArena({ devA, devB }: DevArenaProps) {
    return (
        <section className="dev-arena">
            {/* Mostro la card dello sviluppatore selezionato come Dev A. La prop dev contiene tutti i dati dello sviluppatore. La prop side indica che questa è la card del lato A. */}
            <DevCard dev={devA} side="A" />

            {/* Mostro la scritta VS tra le due card. Questa scritta viene posizionata al centro grazie alla griglia CSS della classe dev-arena. */}
            <div className="versus"> VS </div>

             {/* Mostro la card dello sviluppatore selezionato come Dev B. La prop dev contiene tutti i dati dello sviluppatore.La prop side indica che questa è la card del lato B. */}
            <DevCard dev={devB} side="B" />
        </section>
    );
}
// -----------------------------------------------------------------------------------------------------------------------
// 4. ESPORTAZIONE -- Esporto il componente per poi importarlo e utilizzarlo in App.tsx.
export default DevArena;