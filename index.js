import {crearCard, filtrerForTitle, printOptions, filterForGenre, render} from "./assets/module/function.js"//Importando funciones


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
        movies = data.movies
        render (movies, divMain, crearCard)
        printOptions(movies, select)
    })//Trae el array de movies y lo declado, asocio toda funcion que deba usarse fuera, adentro.
    .catch(err => console.log(`error`, err))//Limpia el error


//
select.addEventListener("change", () => {
    const titleFilters = filtrerForTitle(movies, $inputText.value)//Devuelve Array por nombre
    const movieFilters = filterForGenre(titleFilters, select.value)//Filtra Array por Genero
    if(select.value === "all"){
        render(titleFilters, divMain, crearCard)
    }else{
        render(movieFilters, divMain, crearCard)
    }
})//Filtro


$inputText.addEventListener(`input`, () => {
    const titleFilters = filtrerForTitle(movies, $inputText.value)//Devuelve Array por nombre
    const movieFilters = filterForGenre(titleFilters, select.value)//Filtra Array por Genero
    if(select.value === "all"){
        render(titleFilters, divMain, crearCard)
    }else{
        render(movieFilters, divMain, crearCard)
    }
})//Filtro

