// 1. TIPO DELLA COMPETENZA -- Indico se una competenza appartiene al front-end oppure al back-end.
type SkillType = "front-end" | "back-end";

// 2. COMPETENZA -- Definisco le proprietà di una singola competenza.
type Skill = {
    label:string;
    type: SkillType;
    value:number;
};

// 3. GENERE -- Definisco i valori disponibili per il genere dello sviluppatore.
type Gender = "m" | "f" | "unknown";

// 4. SVILUPPATORE -- Definisco tutte le proprietà di uno sviluppatore.
type Dev ={
    id:number;
    imageUrl: string;
    firstname:string;
    lastname: string;
    birthDate:string;
    gender: Gender;
    skills: Skill [];
};

// 5. LATO DELLA SELEZIONE -- Indico se l'utente sta selezionando il Dev di tipo A o il Dev di tipo B.
type SelectionSide = "A" | "B";

// 6. RISULTATO DEL CONFRONTO -- Indico quale valore è > oppure se i due valori sono =.
type ComparisonValue = "A" | "B" | "equal";

// 7. TONO DEL RISULTATO -- Indico il colore utilizzato per andare a distinguere i diversi risultati. 
type ResultTone = "purple" | "green" | "yellow";

// 8. SINGOLO RISULTATO TESTUALE -- Definisco tutte le info di una frase del confronto.
type ComparisonResultItem = {
    text: string;
    highlightedName: string;
    tone: ResultTone;
    winner: ComparisonValue;
    fullWidth: boolean;
};

// 9. ESPORTAZIONI 
export type{SkillType,Skill,Gender,Dev,SelectionSide,ComparisonValue,ResultTone,ComparisonResultItem};