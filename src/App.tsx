// 1. IMPORTAZIONI -- Importo useState da React. 
import { useState } from "react";

// Importo i componenti principali dell'applicazione. 
import DevSelector from "./components/DevSelector";
import DevArena from "./components/DevArena";
import ComparisonResults from "./components/ComparisonResults";

// Importo l'array dei 6 sviluppatori.
import {developers} from "./data";
import type {Dev,SelectionSide} from "./types";

// Importo i file CSS.
import "./styles/layout.css";
import "./styles/selector.css";
import "./styles/card.css";
import "./styles/results.css";

// 2. COMPONENTE PRINCIPALE -- 
function App (){
  // 3. STATI -- 
  // Salva lo sviluppatore selezionato come Dev A. Inizialmente viene mostrato il primo sviluppatore dell'array. 
  const [selectedDevA,setSelectedDevA]= useState<Dev>(developers[0]);
  // Salva lo sviluppatore selezionato come Dev B. Inizialmente viene mostrato il secondo sviluppatore dell'array. 
  const [selectedDevB,setSelectedDevB]= useState<Dev>(developers[1]);

  // Indica se l'utente sta selezioando il Dev A oppure il Dev B.
  const [activeSelection, setActiveSelection]= useState<SelectionSide>("A");
  
  // 4. SELEZIONE DELLO SVILUPPATORE -- Riceve lo sviluppatore cliccato e controlla che il genere sia corretto per Dev A oppure Dev B.
function selectDeveloper(dev: Dev): void {

    // Dev A può essere selezionato solo se è maschio.
    if (activeSelection === "A" && dev.gender === "m") {
        setSelectedDevA(dev);
    }

    // Dev B può essere selezionato se è femmina oppure se il genere non è specificato.
    if (activeSelection === "B" &&
        (dev.gender === "f" || dev.gender === "unknown")
    ) {
        setSelectedDevB(dev);
    }
}

//  5. TEMPLATE -- Restituisco la struttura principale dell'applicazione.
return (
  <main className= "main-container">
    {/* Intestazione principale della pagina. */}
    <header className = "main-header">
      <h1> <span>DEV</span>WARS</h1>
      <p> Seleziona due sviluppatori, confronta le loro competenze e scopri quale scegliere per il tuo progetto.</p>
    </header>
    {/* Sezione per scegliere Dev A e Dev B. */}
    <DevSelector
    developers =  {developers}
    selectedDevA= {selectedDevA}
    selectedDevB= {selectedDevB}
    activeSelection = {activeSelection}
    setActiveSelection={setActiveSelection}
    selectDeveloper= {selectDeveloper}/>
    {/* Arena che mostra i due sviluppatori uno di fronte all'altro. */}
    <DevArena devA= {selectedDevA} devB = {selectedDevB} />
    {/* Sezione con i risultati del confronto. */}
    <ComparisonResults devA= {selectedDevA} devB= {selectedDevB} />
  </main> 
);
}
// 6. ESPORTAZIONE -- Esporto il componente principale 
export default App;