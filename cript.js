

let questionse = ["qui est le roi des animaux ?",
     "quel est l'animal qui court le plus vite ?"];

let reponsese = ["lion","guepard"];
 

for (let i = 0; i <questions.length; i++) {
    let reponseUtilisateur = prompt(questions[i]);
 
    if (reponseUtilisateur === reponses[i]) {
        alert("Bonne reponse");
    } else {
        alert("mauvaisse reponse");
    }
}