export {crearCard}




function crearCard(movie){
    return `
    <article class="flex flex-wrap w-80 rounded p-5 mt-4 bg-slate-700 shadow-[0_5px_20px_rgba(75,85,99)]">
        <img class="h-44 rounded-md" src="${movie.image}" alt="Imagen de una ${movie.nombre}">
        <h2 class="font-bold text-purple-300 text-xl w-full">${movie.title}</h2>
        <h3 class="italic underline text-xl font-small text-slate-300">${movie.tagline}</h3>
        <p class="text-lg text-white line-clamp-5 overflow-auto">${movie.overview}</p>
    </article>
    `;
}