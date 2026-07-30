// 1. IMPORTAZIONI -- Importo il tipo Dev dal file types.ts.
import type {Dev} from "./types";
// -----------------------------------------------------------------------------------------------------------------------

// 2. ARRAY DEGLI SVILUPPATORI -- Creo un array contenente i 6 sviluppatori. Ogni elemento rispetta il type Dev e deve contenre: id, img, fn, ln, birthDate, gender e skills.
const developers : Dev [] = [
    {id: 1,
    imageUrl: "https://i.pravatar.cc/600?img=12",firstname: "Luca", lastname:  "Ferrari", birthDate: "1992-04-18", gender: "m",
    skills:[
        {label: "HTML/CSS", type: "front-end", value: 88},
        {label: "JavaScript", type: "front-end", value: 91},
        {label: "TypeScript", type: "front-end", value: 84},
        {label: "React", type: "front-end", value: 86},
        { label: "Node.js", type: "back-end", value: 72},
        {label: "Algorithms", type: "back-end", value: 68},
    ]
},
{id: 2,
    imageUrl: "https://i.pravatar.cc/600?img=47", firstname: "Anna", lastname:  "Bianchi", birthDate: "1995-09-07", gender: "f",
    skills:[
        {label: "HTML/CSS", type: "front-end", value: 96},
        {label: "JavaScript", type: "front-end",value: 89},
        {label: "TypeScript", type: "front-end", value: 92},
        {label: "React", type: "front-end", value: 94},
        {label: "Node.js", type: "back-end", value: 70},
        {label: "Algorithms", type: "back-end", value: 75},
    ]
},
{id: 3,
    imageUrl: "https://i.pravatar.cc/600?img=11", firstname: "Marco", lastname:  "Romano", birthDate: "1992-02-23", gender: "m",
    skills:[
        {label: "HTML/CSS", type: "front-end", value: 72},
        {label: "JavaScript", type: "front-end",value: 78},
        {label: "TypeScript", type: "front-end", value: 74},
        {label: "React", type: "front-end", value: 69},
        {label: "Node.js", type: "back-end", value: 91},
        {label: "Algorithms", type: "back-end", value: 88},
    ]
},
{id: 4,
    imageUrl: "https://i.pravatar.cc/600?img=32", firstname: "Sara", lastname:  "Conti", birthDate: "1997-06-21", gender: "f",
    skills:[
        {label: "HTML/CSS", type: "front-end", value: 90},
        {label: "JavaScript", type: "front-end", value: 85},
        {label: "TypeScript", type: "front-end", value: 82},
        {label: "React", type: "front-end", value: 88},
        {label: "Node.js", type: "back-end", value: 64},
        {label: "Algorithms", type: "back-end", value: 70},
    ]
},
{id: 5,
    imageUrl: "https://i.pravatar.cc/600?img=14", firstname: "Davide", lastname:  "Greco", birthDate: "1993-11-03", gender: "m",
    skills:[
        {label: "HTML/CSS", type: "front-end", value: 81},
        {label: "JavaScript", type: "front-end", value: 87},
        {label: "TypeScript", type: "front-end", value: 90},
        {label: "React", type: "front-end", value: 84},
        {label: "Node.js", type: "back-end", value: 93},
        {label: "Algorithms", type: "back-end", value: 86},
    ]
},
{id: 6,
    imageUrl: "https://i.pravatar.cc/600?img=49", firstname: "Elena", lastname:  "Marini", birthDate: "1996-08-15", gender: "unknown",
    skills:[
        {label: "HTML/CSS", type: "front-end", value: 85},
        {label: "JavaScript", type: "front-end", value: 80},
        {label: "TypeScript", type: "front-end", value: 79},
        {label: "React", type: "front-end", value: 83},
        {label: "Node.js", type: "back-end", value: 88},
        {label: "Algorithms", type: "back-end", value: 92},
    ]
}
];

// -----------------------------------------------------------------------------------------------------------------------
// 3. ESPORTAZIONE -- Esporto array developers per poterlo importare in App.tsx e utilizzarlo per mostrare e selez. gli sviluppatori.
export {developers};