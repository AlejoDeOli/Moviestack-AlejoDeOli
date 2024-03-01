export {crearCard, filtrerForTitle, printOptions, filterForGenre, render, actualizarBotones}//Exportando Funciones


function crearCard(movie){
    return `
    <article id="${movie.id}" class="relative flex flex-wrap w-80 rounded p-5 mt-4 bg-slate-700 shadow-[0_5px_20px_rgba(75,85,99)]">
        <button data-fav="botonFav" data-cardid="${movie.id}" class=" bg-gray-600 text-xl font-semibold border-2 border-solid border-black bg-opacity-80 absolute rounded right-[20px]" type="button" >🤍</button>
        <img class="h-44 rounded-md" src="https://moviestack.onrender.com/static/${movie.image}" alt="Image ${movie.title}">
        <h2 class="font-bold text-purple-300 text-xl w-full">${movie.title}</h2>
        <h3 class="italic underline text-xl font-small text-slate-300">${movie.tagline}</h3>
        <p class="text-lg text-white line-clamp-5 overflow-auto mb-4">${movie.overview}</p>
        <a class="text-md font-sans underline text-purple-900 hover:bg-white transition-all absolute bottom-1 font-semibold no-underline border-2 border-solid rounded bg-gray-400 p-0.5" href="./detail.html?id=${movie.id}&name=${movie.title}">Details</a>
    </article>
    `;
}//Retorna la estructura de la card usada en index.js



function filtrerForTitle(listMovie, title){
    return listMovie.filter( movie => movie.title.toLowerCase().startsWith(title.toLowerCase()) )
    
}//Filtra escribiendo, por titulo.


const printOptions = function (array, elemento){
    let options = ""
    const genresRepeated = array.flatMap((movie) => movie.genres).filter((value, index, arreglo) => arreglo.indexOf(value) === index);
    genresRepeated.forEach((genre) => {
        options += `<option value="${genre}">${genre}</option>`
    });
    elemento.innerHTML = `<option value="all">All Genres</option>` + options;
};//Crea las opciones dependiendo los generos.


const filterForGenre = function (array, genre){
    return array.filter((movie) => movie.genres.includes(genre))
}//Filtra el Array de movies por genero.


function render (array, elemento, fn){
    let template = ""
    for (const item of array) {
        template += fn(item)
    }
    elemento.innerHTML = template
}//Funcion para saber que array, donde y que funcion.



function actualizarBotones(favorites) {
    const botonesFav = document.querySelectorAll('[data-fav]');
    botonesFav.forEach(boton => {
        const cardID = boton.dataset.cardid;
        if (favorites.includes(cardID)) {
            boton.dataset.fav = 'botonFavPrendido';
        } else {
            boton.dataset.fav = 'botonFav';
        }
    });
}//Funcion para pintar el boton de gris si no esta en el array de favoritos y de rojo si esta incluido en el array de favoritos