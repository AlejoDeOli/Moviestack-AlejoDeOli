export {printCards, filtrerForTitle, printOptions, filterForGenre}




function crearCard(movie){
    return `
    <article class="flex flex-wrap w-80 rounded p-5 mt-4 bg-slate-700 shadow-[0_5px_20px_rgba(75,85,99)]">
        <img class="h-44 rounded-md" src="${movie.image}" alt="Image ${movie.title}">
        <h2 class="font-bold text-purple-300 text-xl w-full">${movie.title}</h2>
        <h3 class="italic underline text-xl font-small text-slate-300">${movie.tagline}</h3>
        <p class="text-lg text-white line-clamp-5 overflow-auto">${movie.overview}</p>
        <a class="text-md underline text-purple-500" href="./detail.html?id=${movie.id}&name=${movie.title}">Details</a>
    </article>
    `;
}



function printCards(listCards, elemento){
    let template = " "
    for (const movieIterada of listCards) {
        template += crearCard(movieIterada)
    }
    elemento.innerHTML = template
}



function filtrerForTitle(listMovie, title){
    return listMovie.filter( movie => movie.title.toLowerCase().startsWith(title.toLowerCase()) )
    
}



const printOptions = function (array, elemento){
    let options = ""
    const genresRepeated = array.flatMap((movie) => movie.genres).filter((value, index, arreglo) => arreglo.indexOf(value) === index);
    genresRepeated.forEach((genre) => {
        options += `<option value="${genre}">${genre}</option>`
    });
    elemento.innerHTML = `<option value="all">All Genres</option>` + options;
};



const filterForGenre = function (array, genre){
    return array.filter((movie) => movie.genres.includes(genre))
}