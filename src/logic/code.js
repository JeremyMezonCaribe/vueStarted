
    function mostrar(a,b){
        return a < b 
        ? console.log(`${a} es menor que ${b}`) 
        : console.log(`${b} es menor que ${a}`);
    }

    function games(){
        const gameList = [
            {
                titleCard: "Red Dead Redemption II",
                imgSrc: "https://missingnumber.com.mx/wp-content/uploads/2018/05/Portada-Red-Dead.jpg",
                imgAlt: "Red Dead",
                textCard: "Redemption II, es un videojuego de acción-aventura western, en un mundo abierto y en perspectiva de primera y tercera persona",
                generes: ['Adventure','Violence','Action']
            },
            {
                titleCard: "Grand Theft Auto V",
                imgSrc: "https://i.blogs.es/9b3767/gta-20v-20portada/450_1000.jpg",
                imgAlt: "GTAV",
                textCard: "Grand Theft Auto V es un videojuego de acción-aventura de mundo abierto desarrollado por el estudio Rockstar North y distribuido por Rockstar Games.",
                generes: ['Action','Violence']
            },
            {
                titleCard: "Resident Evil Village",
                imgSrc: "https://as01.epimg.net/meristation/imagenes/2020/06/12/noticias/1591952507_470156_1591952814_portada_normal.jpg",
                imgAlt: "RE8",
                textCard: "Resident Evil Village es un videojuego perteneciente al género de los videojuegos de terror desarrollado y publicado por Capcom.",
                generes: ['Terror','Violence']
            }
        ]

        return gameList
    }

export {
    mostrar,games
}


