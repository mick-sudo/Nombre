let divVie = document.querySelector('.vie');
let message = document.getElementById("message");
let formulaire = document.getElementById("inputBox");
let input = document.getElementById("number");
let btnE = document.getElementById("btnE");
let btnR = document.getElementById("btnR");
let body = document.getElementsByTagName("body")[0]

const play = () => {
    const randomNumber = Math.floor(Math.random()*21)
    const totalVies = 5;
    let vie = totalVies;
    console.log(randomNumber);
    
    formulaire.addEventListener('submit', (e) => {
        e.preventDefault();
        const valeurInput = parseInt(input.value);
        if(valeurInput < 0 || valeurInput > 100) return;
        if(valeurInput === randomNumber){
            message.textContent = `Vous avez gagné le nombre était bien ${randomNumber}`
            btnE.setAttribute("disabled", "");
        }else if(valeurInput < randomNumber){
            message.textContent = "c'est plus"
            vie--;
        }else{
            message.textContent = "c'est moins"
            vie--;
        }
        console.log(vie);
        loose()
    })

function loose(){
    if(vie === 0){
        btnE.setAttribute("disabled", "");
        message.textContent = "Looser";
        btnR.display = document.location.reload(true);
    }
}
}

play()