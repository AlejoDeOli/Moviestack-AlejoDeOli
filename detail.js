const urlParams = new URLSearchParams (location.search)
const id = urlParams.get(`id`)
const movieFind = movies.find( movie => movie.id == id)



let divMain = document.createElement (`div`);
divMain.className = "m-10"
document.querySelector('main').appendChild(divMain);



divMain.innerHTML = `
<article class="flex flex-wrap">
    <img class="rounded-md mb-14" src="${movieFind.image}" alt="Image ${movieFind.title}">
    <div class="w-1/2 ml-14">
    <h1 class="font-bold text-purple-300 text-2xl pb-5">${movieFind.title}</h1>
    <h2 class="italic underline text-xl font-small text-slate-300 pb-5">${movieFind.tagline}</h2>
    <h3 class="text-white pb-5">${movieFind.genres}</h3>
    <p class="text-sm text-white md:text-xl">${movieFind.overview}</p>
    </div>
</article>

<div class="flex gap-14">
<table class="border border-solid text-white w-80 h-56 bg-gray-800">
    <tbody>
        <tr>
            <td class="p-1 border border-solid text-white">Original Language</td>
            <td class="p-1 border border-solid text-white">${movieFind.original_language}</td>
        </tr>
        <tr>
            <td class="p-1 border border-solid text-white">Release Date</td>
            <td class="p-1 border border-solid text-white">${movieFind.release_date}</td>
        </tr>
        <tr>
            <td class="p-1 border border-solid text-white">Runtime</td>
            <td class="p-1 border border-solid text-white">${movieFind.runtime}</td>
        </tr>
        <tr>
            <td class="p-1 border border-solid text-white">Status</td>
            <td class="p-1 border border-solid text-white">${movieFind.status}</td>
        </tr>
    </tbody>
</table>
<table class="border border-solid text-white w-80 h-40 bg-gray-800">
    <tbody>
        <tr>
            <td class="p-1 border border-solid text-white">Vote Average</td>
            <td class="p-1 border border-solid text-white">${movieFind.vote_average}</td>
        </tr>
        <tr>
            <td class="p-1 border border-solid text-white">Budget</td>
            <td class="p-1 border border-solid text-white">${movieFind.budget.toLocaleString()}</td>
        </tr>
        <tr>
            <td class="p-1 border border-solid text-white">Revenue</td>
            <td class="p-1 border border-solid text-white">${movieFind.revenue.toLocaleString()}</td>
        </tr>
    </tbody>
</table>
</div>
`