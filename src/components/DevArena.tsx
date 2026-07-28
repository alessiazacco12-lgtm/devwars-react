// 1. IMPORTAZIONI --
// Importo il tipo Dev dal file types.ts.
import type {Dev} from "../types";

// Importo il componente che mostra la card dello sviluppatore.
import DevCard from "./DevCard";

// 2. TIPO DELLE PROPS -- Definisce i due sviluppatori ricevuti dal componente App.
type DevArenaProps ={
    devA: Dev;
    devB: Dev;
};

// 3. COMPONENTE DEV ARENA -- Mostro i due sviluppatori uno di fronte all'altro.
function DevArena ({devA,devB}: DevArenaProps){
    return (
        <section className= "dev-arena">
            {/* Mostro la card dello sviluppatore selezionato come Dev A. */}
            <DevCard dev= {devA} side = "A"/>
            {/* Mostro  la scritta VS tra i due sviluppatori.*/}
            <div className = "versus"> VS </div>
            {/* Mostro la card dello sviluppatore selezionato come DevB. */}
            <DevCard dev = {devB} side = "B"/>
        </section>
    );
}
// 4. ESPORTAZIONE -- Esporto il componente per utilizzarlo in App.
export default DevArena;