import {crearCard, render, actualizarBotones} from "./assets/module/function.js"


let divMain = document.createElement (`div`);//Crea div 
divMain.id = `contenedor`//Le da un ID
divMain.className = "flex flex-row justify-evenly flex-wrap gap-5 mt-8 mb-24"//Agrega clases de Tailwind
document.querySelector('main').appendChild(divMain);//Asocia el div creado a main




let movies = []//Declaro movies como Array
const $url = `https://moviestack.onrender.com/api/movies`//Traigo el URL de la API
const init = {
    method: "GET",
    headers: {
        "x-api-key" : "0ff70d54-dc0b-4262-9c3d-776cb0f34dbd"
    }
}//Agrego metodo y headers




fetch( $url, init)//Trae la API
.then(response => response.json() )//Lo pasa a idioma entendible por JS
.then((data) => {
    movies = data.movies
    const moviesFavoritas = movies.filter(movie => favorites.includes(movie.id));//Filtra el array de movies y trae solo las que esten incluidas en el array del local storage
    render (moviesFavoritas, divMain, crearCard)//Imprime solo las cards que esten influidas en el local storage
    actualizarBotones(favorites)//Pinta los botones de favoritos
})//Trae el array de movies y lo declaro, asocio toda funcion que deba usarse fuera, adentro.
.catch(err => console.log(`error`, err))//Limpia el error




let favorites = JSON.parse(localStorage.getItem('favorites')) || [];//Extraemos el array del local storage
let $contenedor = document.getElementById(`contenedor`)//Declaramos el contenedor donde se van a imprimir las cards
$contenedor.addEventListener(`click`, (e) => {
    const moviE = e.target
    const cardID = moviE.dataset.cardid

        if(favorites.includes(cardID)){
            favorites = favorites.filter( fav => fav !== cardID)
            moviE.dataset.fav=`botonFav`
        }//Le decimos al condicional que si hay ID de movies en el array del local storage, al apretar el boton de favoritos en una de esas la saque del array
        
    localStorage.setItem("favorites", JSON.stringify( favorites ))
    const moviesFavoritas = movies.filter(movie => favorites.includes(movie.id));
    render (moviesFavoritas, divMain, crearCard)//Volvemos a filtrar el array y volvemos a imprimir las cards sin la card sacada de favoritos
    actualizarBotones(favorites)
}) //Utilizamos el e target para diferenciar donde apretamos y saber que contiene los ID de las movies(El boton)