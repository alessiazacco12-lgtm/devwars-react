// 1. TIPO DELLA COMPETENZA -- Indico se una competenza appartiene al front-end oppure al back-end.
type SkillType = "front-end" | "back-end"; // Può essere solo front-end oppure back-end.

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------
// 2. COMPETENZA -- Definisco le proprietà di una singola competenza.
type Skill = {
    label:string; // Nome della tecnologia.
    type: SkillType; // Categoria front-end o back-end.
    value:number; // Livello della competenza da 1 a 100.
};


// --------------------------------------------------------------------------------------------------------------------------------------------------------------------
// 3. GENERE -- Definisco i valori disponibili per il genere dello sviluppatore.
type Gender = "m" | "f" | "unknown"; // Valori ammessi per il genere.


// --------------------------------------------------------------------------------------------------------------------------------------------------------------------
// 4. SVILUPPATORE -- Definisco tutte le proprietà di uno sviluppatore.
type Dev ={
    id:number; // Identificatore univoco.
    imageUrl: string; // Indirizzo dell'immagine.
    firstname:string; // Nome.
    lastname: string; // Cognome.
    birthDate:string; // Data di nascita.
    gender: Gender;   // Genere del dev.
    skills: Skill []; // Elenco delle competenze.
};

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------
// 5. LATO DELLA SELEZIONE -- Indico se l'utente sta selezionando il Dev di tipo A o il Dev di tipo B.
type SelectionSide = "A" | "B";

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------
// 6. RISULTATO DEL CONFRONTO -- Indico il vincitore o la parità.
type ComparisonValue = "A" | "B" | "equal";

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------
// 7. TONO DEL RISULTATO -- Indico il colore utilizzato per andare a distinguere i diversi risultati. 
type ResultTone = "purple" | "green" | "yellow"; // Colore associato al risultato.

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------
// 8. SINGOLO RISULTATO TESTUALE -- Definisco tutte le info di una frase del confronto.
type ComparisonResultItem = {
    text: string; // Parte principale della frase.
    highlightedName: string; // Nome dello sviluppatore evidenziato.
    tone: ResultTone; // Colore del risult.
    winner: ComparisonValue; // Vincitore A, B oppure parità.
    fullWidth: boolean; // Indica se il risultato occupa tutta la larghezza.
};

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------
// 9. ESPORTAZIONI 
export type{SkillType,Skill,Gender,Dev,SelectionSide,ComparisonValue,ResultTone,ComparisonResultItem};