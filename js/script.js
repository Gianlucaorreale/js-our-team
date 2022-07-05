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


const office = document.getElementById('office'); 

const components = [
    {
        firstName: 'Wayne',
        lastName: 'Barnett',
        role: 'Founder & CEO', 
        photo:'wayne-barnett-founder-ceo.jpg' 
    },

    {
        firstName: 'Angela',
        lastName: 'Carrol',
        role: 'Chief Editor',
        photo: 'angela-caroll-chief-editor.jpg'
    },

    {
        firstName: 'Walter',
        lastName: 'Gordon',
        role: 'Office Manager',
        photo: 'walter-gordon-office-manager.jpg'
    },

    {
        firstName: 'Angela',
        lastName: 'Lopez',
        role: 'Social Media Manager',
        photo: 'angela-lopez-social-media-manager.jpg'
    },

    {
        firstName: 'Scott',
        lastName: 'Estrada', 
        role: 'Developer',
        photo: 'scott-estrada-developer.jpg'
    },

    {
        firstName: 'Barbara', 
        lastName: 'Ramos', 
        role: 'Graphic Designer',
        photo: 'barbara-ramos-graphic-designer.jpg'
    },

           ]
let lines = '';

for(let i = 0; i < components.length; i++){
    const currentComponent = components [i];
    lines += `<li>${currentComponent.firstName}</li>`
    lines += `<li>${currentComponent.lastName}</li>`
    lines += `<li>${currentComponent.role}</li>`
    lines += `<li>${currentComponent.photo}</li>`
    
    console.log('nome :' + currentComponent.firstName);
    console.log('cognome :' + currentComponent.lastName);
    console.log('ruolo :' + currentComponent.role);
    console.log('foto :' + currentComponent.photo)
}

office.innerHTML = lines;