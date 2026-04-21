import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {

  const listaUl = document.querySelector('#lista-dominios');

  let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon'];

  let domains = [".com" ,".net",".us",".io", ".es"]

  let combinaciones = []

  
  for (let p of pronoun) {
    for (let ad of adj) {
      for (let no of noun){
        for (let dom of domains) {
            combinaciones.push(`${p}${ad}${no}${dom}`)
            
        }
      } 
    }
  }
   listaUl.innerHTML = combinaciones
    .map(dominio => `<li>${dominio}</li>`) 
    .join(''); 
};
