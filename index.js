import {crearCard, filtrerForTitle, printOptions, filterForGenre, render} from "./assets/module/function.js"


let divMain = document.createElement (`div`);
divMain.id = `contenedor`
divMain.className = "flex flex-row justify-evenly flex-wrap gap-5 mt-8 mb-24"
document.querySelector('main').appendChild(divMain);



let movies = []
const $inputText = document.getElementById(`inputText`)
const select = document.getElementById(`select`)
const $url = `https://moviestack.onrender.com/api/movies`
const init = {
    method: "GET",
    headers: {
        "x-api-key" : "0ff70d54-dc0b-4262-9c3d-776cb0f34dbd"
    }
}




fetch( $url, init)
    .then(response => response.json() )
    .then((data) => {
        movies = data.movies
        render (movies, divMain, crearCard)
        printOptions(movies, select)
    })
    .catch(err => console.log(`error`, err))


//
select.addEventListener("change", () => {
    const titleFilters = filtrerForTitle(movies, $inputText.value)//Devuelve Array por nombre
    const movieFilters = filterForGenre(titleFilters, select.value)//Filtra Array por Genero
    if(select.value === "all"){
        render(titleFilters, divMain, crearCard)
    }else{
        render(movieFilters, divMain, crearCard)
    }
})


$inputText.addEventListener(`input`, () => {
    const titleFilters = filtrerForTitle(movies, $inputText.value)//Devuelve Array por nombre
    const movieFilters = filterForGenre(titleFilters, select.value)//Filtra Array por Genero
    if(select.value === "all"){
        render(titleFilters, divMain, crearCard)
    }else{
        render(movieFilters, divMain, crearCard)
    }
})

