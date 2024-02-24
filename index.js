import {crearCard} from "./assets/module/function.js"




let divMain = document.createElement (`div`);
divMain.id = `contenedor`
divMain.className = "flex flex-row justify-evenly flex-wrap gap-5 mt-8 mb-24"
document.querySelector('main').appendChild(divMain);





for (const movieIterada of movies) {
    divMain.innerHTML += crearCard(movieIterada)
}
