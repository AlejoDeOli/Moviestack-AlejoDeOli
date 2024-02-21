let divMain = document.createElement (`div`);
divMain.id = `contenedor`
divMain.className = "flex flex-row justify-evenly flex-wrap gap-5 mt-8 mb-24"
document.querySelector('main').appendChild(divMain);
let divCapturado = document.getElementById('contenedor');

let cardFrutas = document.getElementById (`contenedor`)

function crearCard(movie){
    return `
    <article class="flex flex-wrap w-80 rounded p-5 mt-4 bg-slate-700 shadow-[0_5px_20px_rgba(75,85,99)]">
        <img class="h-44 rounded-md" src="${movie.image}" alt="Imagen de una ${movie.nombre}">
        <h2 class="font-bold text-xl w-full">${movie.title}</h2>
        <h3 class="italic underline text-xl font-small text-neutral-400">${movie.tagline}</h3>
        <p class="text-md text-slate-200 line-clamp-5 overflow-auto">${movie.overview}</p>
    </article>
    `;
}

for (const movieIterada of movies) {
    divMain.innerHTML += crearCard(movieIterada)
}
