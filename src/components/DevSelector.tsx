// 1. IMPORTAZIONI -- Importo i tipi necessari.
import type {Dev,SelectionSide} from "../types";

// Importo la funzione che restituisce nome e cognome.
import {getFullname} from "../functions";

// 2. TIPO DELLE PROPS -- Definisco i dati ricevuti dal componente DevSelector.
type DevSelectorProps = {
    developers: Dev[];
    selectedDevA: Dev;
    selectedDevB: Dev;
    activeSelection: SelectionSide;

// Funzione che indica se stiamo scegliendo Dev A  oppure Dev B. 
setActiveSelection: (side: SelectionSide) => void;

// Funzione che aggiorna lo sviluppatore selezionato.
selectDeveloper: (dev: Dev) => void;
};

// 3. COMPONENTE DEV SELECTOR -- Mostro i pulsanti di selezione e le miniature dei 6 sviluppatori.
function DevSelector({developers,selectedDevA,selectedDevB,activeSelection,setActiveSelection,selectDeveloper}: DevSelectorProps){
    // Restituisco tutta la sezione di selezione. 
    return ( 
        <section className = "dev-selector">
            {/* Pulsanti per scegliere se modificare Dev A oppure Dev B. */}
            <div className = "selection-buttons">
             {/*Pulsante per selezionare Dev A.  */}
             <button className = {
                activeSelection === "A" ? "selection-button active-a" : "selection-button"}
                onClick= {() => {
                    setActiveSelection ("A");
                }}>Seleziona Dev A</button>

                {/* Pulsante per selezionare Dev B. */}
                <button className = {
                activeSelection === "B" ? "selection-button active-b" : "selection-button"}
                onClick= {() => {
                    setActiveSelection ("B");
                }}>Seleziona Dev B</button>
            </div>
            {/* Contiene le miniature dei 6 sviluppatori. */}
            <section className = "developers-grid">
                {/* Scorre l'array degli sviluppatori. */}
                {developers.map((dev) => {
                    // Controllo se lo sviluppatore è selezionato come Dev A.
                    const isDevA = dev.id === selectedDevA.id;
                    // Controllo se lo sviluppatore è selezionato come Dev B. 
                    const isDevB = dev.id === selectedDevB.id;
                    // Variabile che conterrà le classi della miniatura selezionata.
                    let selectedClass = "";
                // Se è Dev A aggiunge la classe selected-a.
                if (isDevA){
                    selectedClass = "selected-a";
                }
                    // Se è Dev B aggiunge la classe selected-b.
                if (isDevB){
                    selectedClass += "selected-b";}
                // Crea una miniatura per ogni sviluppatore.
                return(
                    <article 
                    key ={dev.id} 
                    className= {"developer-thumbnail" + selectedClass}
                    onClick={() => {
                        selectDeveloper(dev);
                    }}
>
{/* Immagine dello sviluppatore. */}
<img src={dev.imageUrl} alt ={getFullname(dev)}/>

{/* Nome completo dello sviluppatore. */}
<p>{getFullname(dev)}</p>

{/* Mostra la lettera A se è selezionato come Dev A */}
{isDevA ? (
    <span className ="thumbnail-badge badge-a">A</span> ):""}
{/* Mostra la lettera B se è selezionato come Dev B */}
{isDevB ? (
    <span className ="thumbnail-badge badge-b">B</span> ): ""}
</article>
);
})}
</section>
</section>
);
}

export default DevSelector;