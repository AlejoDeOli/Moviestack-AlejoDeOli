import {crearCard, filtrerForTitle, printOptions, filterForGenre, render, actualizarBotones} from "./assets/module/function.js"//Importando funciones


let divMain = document.createElement (`div`);//Crea div 
divMain.id = `contenedor`//Le da un ID
divMain.className = "flex flex-row justify-evenly flex-wrap gap-5 mt-8 mb-24"//Agrega clases de Tailwind
document.querySelector('main').appendChild(divMain);//Asocia el div creado a main



let movies = []//Declaro movies como Array
const $inputText = document.getElementById(`inputText`)//Traigo el ID
const select = document.getElementById(`select`)//Traigo el ID
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
        movies = data.movies//Declaramos el array de las movies
        render (movies, divMain, crearCard)//Imprimimos las cards de las movies
        printOptions(movies, select)//Imprimimos las cards depende el genero
        actualizarBotones(favorites)//Actualiza el color de los botones
})//Trae el array de movies y lo declaro, asocio toda funcion que deba usarse fuera, adentro.
.catch(err => console.log(`error`, err))//Limpia el error





let favorites = JSON.parse(localStorage.getItem(`favorites`)) || [] //Extraemos el array de favorites desde el local storage
let $contenedor = document.getElementById(`contenedor`)//Declaramos el contenedor donde se van a imprimir las cards
$contenedor.addEventListener(`click`, (e) => {
    const moviE = e.target
    if(moviE.dataset.fav == "botonFav" || moviE.dataset.fav == "botonFavPrendido"){
        const cardID = moviE.dataset.cardid//Declaramos que los botones contienen la ID de la movie
        if(favorites.includes(cardID)){//Si el array de favorites incluye un ID de una movie, la filtre y la saque
            favorites = favorites.filter( fav => fav !== cardID)
            moviE.dataset.fav=`botonFav`
        }else{//Y si no la incluye, la agregue
            favorites.push(cardID)
            moviE.dataset.fav=`botonFavPrendido`
        }    
    }    
    
    localStorage.setItem("favorites", JSON.stringify( favorites ))//Guardamos en el local storage en el array favorites los ID de las movies
    actualizarBotones(favorites)
})     //Utilizamos el e target para diferenciar donde apretamos y saber que contiene los ID de las movies(El boton)




select.addEventListener("change", () => {
    const titleFilters = filtrerForTitle(movies, $inputText.value)//Devuelve Array por nombre
    const movieFilters = filterForGenre(titleFilters, select.value)//Filtra Array por Genero
    if(select.value === "all"){
        render(titleFilters, divMain, crearCard)
    }else{
        render(movieFilters, divMain, crearCard)
    }
    actualizarBotones(favorites)
})//Filtro


$inputText.addEventListener(`input`, () => {
    const titleFilters = filtrerForTitle(movies, $inputText.value)//Devuelve Array por nombre
    const movieFilters = filterForGenre(titleFilters, select.value)//Filtra Array por Genero
    if(select.value === "all"){
        render(titleFilters, divMain, crearCard)
    }else{
        render(movieFilters, divMain, crearCard)
    }
    actualizarBotones(favorites)
})//Filtro

