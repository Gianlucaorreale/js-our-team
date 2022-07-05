/*Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
# MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
# MILESTONE 1:
Stampare su console le informazioni di nome, ruolo e la stringa della foto
# MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
 
Consigli del giorno:
Ragioniamo come sempre a step.
Prima la logica in italiano e poi traduciamo in codice.
E ricordiamoci che console.log() è nostro amico!
Buon lavoro! */
// # DATI
/*
Wayne Barnett |	Founder & CEO        |	wayne-barnett-founder-ceo.jpg
Angela Caroll |	Chief Editor         |	angela-caroll-chief-editor.jpg
Walter Gordon |	Office Manager       |	walter-gordon-office-manager.jpg
Angela Lopez  |	Social Media Manager |	angela-lopez-social-media-manager.jpg
Scott Estrada |	Developer            |	scott-estrada-developer.jpg
Barbara Ramos |	Graphic Designer     |	barbara-ramos-graphic-designer.jpg */

const office = [
    {
        founderAndCEO : 'Wayne Barnett',
        chiefEditor : 'Angela Caroll',
        officeManager : 'Walter Gordon',
        socialMediaManager : 'Angela Lopez',
        developer : 'Scott Estrada ',
        graphicDesigner : 'Barbara Ramos',

        images : ['wayne-barnett-founder-ceo.jpg',
                  'angela-caroll-chief-editor.jpg',
                  'walter-gordon-office-manager.jpg',
                  'angela-lopez-social-media-manager.jpg',
                  'scott-estrada-developer.jpg',
                  'barbara-ramos-graphic-designer.jpg '
                   ]

    }
]

console.table(office)