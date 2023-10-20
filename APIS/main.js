const obtenerPersonajes = (done)=> {
    const resultados = fetch("https://rickandmortyapi.com/api/character")

    resultados
    .then(res => res.json())
    .then(data => done(data))
}
obtenerPersonajes((data) => {
    console.log(data)

    data.results.forEach((personaje) => {
        crearTarjeta(personaje)
    });
});


function crearTarjeta(personaje) {
    let tarjeta = document.createRange().createContextualFragment(
        `
        <div class="tarjetas">
            <div class="contenedor_imagen">
                <img src="${personaje.image}" alt="personaje" class="imagen">
            </div>
            <div class="contenedor_texto">
                <p><span class="txt">Nombre: </span>${personaje.name}</p>
                <p><span class="txt">Estado: </span>${personaje.status}</p>
                <p><span class="txt">Origen: </span>${personaje.origin.name}</p>
                <p><span class="txt">Especie: </span>${personaje.species}</p>
                <p><span class="txt">Visto: </span>${personaje.episode.length}</p>
            </div>
        </div>
        `    
    )
    let main = document.getElementById("dinosaurio");
    main.append(tarjeta)
}


const obtenerEpisodios = (done)=> {
    const resultados1 = fetch("https://rickandmortyapi.com/api/episode")

    resultados1
    .then(res => res.json())
    .then(data => done(data))
}
obtenerEpisodios((data) => {
    console.log(data)
});