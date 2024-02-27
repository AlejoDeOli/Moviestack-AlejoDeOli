export {crearCard, filtrerForTitle, printOptions, filterForGenre, render}//Exportando Funciones


function crearCard(movie){
    return `
    <article class="flex flex-wrap w-80 rounded p-5 mt-4 bg-slate-700 shadow-[0_5px_20px_rgba(75,85,99)]">
        <img class="h-44 rounded-md" src="https://moviestack.onrender.com/static/${movie.image}" alt="Image ${movie.title}">
        <h2 class="font-bold text-purple-300 text-xl w-full">${movie.title}</h2>
        <h3 class="italic underline text-xl font-small text-slate-300">${movie.tagline}</h3>
        <p class="text-lg text-white line-clamp-5 overflow-auto">${movie.overview}</p>
        <a class="text-md underline text-purple-500" href="./detail.html?id=${movie.id}&name=${movie.title}">Details</a>
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
