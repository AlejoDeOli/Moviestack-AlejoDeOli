import {printCards, filtrerForTitle, printOptions, filterForGenre} from "./assets/module/function.js"


let divMain = document.createElement (`div`);
divMain.id = `contenedor`
divMain.className = "flex flex-row justify-evenly flex-wrap gap-5 mt-8 mb-24"
document.querySelector('main').appendChild(divMain);

const $inputText = document.getElementById(`inputText`)
const select = document.getElementById(`select`)
const genres = movies.map(movie => movie.genres).flat()
const setgenres = new Set( genres )








select.addEventListener("change", () => {
    const movieFilters = filterForGenre(movies, select.value)
    if(select.value === "all"){
        printCards(movies, divMain)
    }else{
        printCards(movieFilters, divMain)
    }
})


$inputText.addEventListener(`input`, () => {
    const titleFilters = filtrerForTitle(movies, $inputText.value)
    printCards(titleFilters, divMain)
})



printOptions(movies, select)
printCards(movies, divMain)