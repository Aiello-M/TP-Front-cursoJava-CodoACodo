document.addEventListener("DOMContentLoaded", function() {


    // HEADER --> cambiar color fondo con scroll
    window.addEventListener('scroll', function() {
        var navbar = document.querySelector(".header");
        if (window.scrollY > 150) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });



    // SEARCH --> se abra el input para buscar al hacer click en lupa
    let input_search = document.querySelector(".search-input");
    let btn_search = document.querySelector(".search-link");

    btn_search.addEventListener("click", () => {
        let visible = document.querySelector(".visible");
        if (visible) {
            input_search.style.width = "0";
            input_search.style.padding = "0";
            input_search.classList.remove("visible");
        } else {
            input_search.style.width = "15rem";
            input_search.style.padding = "0.5rem 0 0.5rem 0.5rem";
            input_search.classList.add("visible");
        }
    });





    // CARROUSEL -> clonar los elementos carrousel
    const peliculasSection = document.querySelector('.peliculas');
    const elementoClonado = peliculasSection.querySelector('.carrousel-container');
    const elementoExistente = peliculasSection.querySelector('.peliculas-coleccion');
    const clon = elementoClonado.cloneNode(true);

    // (2) Modifico elementos clonados
    // Cambio el titulo del carrousel
    const tituloDestacado = clon.querySelector('.carrousel-title');
    tituloDestacado.innerHTML = '<span class="destacado">Aclamadas</span> por la crítica';

    // Cambio las imágenes del carrousel
    // Seleccionar todas las imágenes dentro del contenedor clonado y los textos (titulos)
    const imagenesNuevas = clon.querySelectorAll('.aclamadas-img');
    const textosAclamados = clon.querySelectorAll('.aclamadas-texto');

    // Array con las rutas de las nuevas imágenes y con los nuevos textos 
    const nuevasRutasImagenes = [
        '../assets/img/aclamadas-pelicula2.webp',
        '../assets/img/aclamadas-pelicula3.jpg',
        '../assets/img/aclamadas-pelicula4.webp',
        '../assets/img/aclamadas-pelicula5.jpg',
        '../assets/img/aclamadas-pelicula7.jpg',
        '../assets/img/aclamadas-pelicula6.webp',
        '../assets/img/aclamadas-pelicula1.jpg',
        '../assets/img/aclamadas-pelicula8.jpg',
        '../assets/img/aclamadas-pelicula9.jpg',
        '../assets/img/aclamadas-pelicula10.jpg',
        '../assets/img/aclamadas-pelicula11.jpg',
        '../assets/img/aclamadas-pelicula12.jpg',
        '../assets/img/aclamadas-pelicula13.jpg',
        '../assets/img/aclamadas-pelicula14.jpg',
        '../assets/img/aclamadas-pelicula15.jpg',
        '../assets/img/aclamadas-pelicula16.jpg',
        '../assets/img/aclamadas-pelicula17.jpg',
        '../assets/img/aclamadas-pelicula18.jpg',
        '../assets/img/aclamadas-pelicula19.jpg',
        '../assets/img/aclamadas-pelicula20.jpg',
        '../assets/img/aclamadas-pelicula21.jpg',
    ];

    const nuevosTextos = [
        '<h3>Gladiador</h3>',
        '<h3>Whiplash</h3>',
        '<h3>John Wick 4</h3>',
        '<h3>Matrix</h3>',
        '<h3>The Jocker</h3>',
        '<h3>El padrino</h3>',
        '<h3>El pianista</h3>',
        '<h3>El caballero oscuro</h3>',
        '<h3>Chihiro</h3>',
        '<h3>El club de la pelea</h3>',
        '<h3>Interstellar</h3>',
        '<h3>Origen</h3>',
        '<h3>Old boy</h3>',
        '<h3>American history X</h3>',
        '<h3>La Sociedad poetas muertos</h3>',
        '<h3>El resplandor</h3>',
        '<h3>El último hombre</h3>',
        '<h3>Thriller</h3>',
        '<h3>American beauty</h3>',
        '<h3>Orgullo y prejuicio</h3>',
        '<h3>- 1917 -</h3>'
    ];

    // Iterar sobre cada imagen y establecer el atributo src con la nueva ruta de imagen correspondiente
    imagenesNuevas.forEach((imagen, i) => {
        imagen.src = nuevasRutasImagenes[i];
    });
    // Iterar sobre cada texto y establecer el nuevo contenido
    textosAclamados.forEach((texto, index) => {
        texto.innerHTML = nuevosTextos[index];
    });

    // (3) Inserto lo cloado en el html
    peliculasSection.insertBefore(clon, elementoExistente);




    // MENÚ HAMBURGUESA DESPLEGABLE
    // Elementos: boton de hamburguesa y el menu móvil
    let mobile_btn = document.querySelector(".nav__mobile-btn");
    let mobile_menu = document.querySelector(".nav-list-mobile");


    // Al hacer click en botón hamburguesa
    mobile_btn.addEventListener("click", () => {

        // veo si existe elemento menu_open
        // si está abierto, entonces lo cierro. Si no existe (cerrado) lo abro
        let menu_open = document.querySelector(".menu_open");

        if(!menu_open){
            mobile_menu.style.display = "block";
            mobile_menu.classList.add("menu_open");
        } else{
            mobile_menu.style.display = "none";
            mobile_menu.classList.remove("menu_open");
        }
    });


    //REDIMENSIONADO (al profe se le sigue viendo el menú de hamburguesa al agrandar. A mi no)
    window.addEventListener("resize", () => {
        let win = parseFloat.document.body.clientWidth;

        if(win > 1024){
            mobile_menu.style.display = "none";
            mobile_menu.classList.remove("menu_open");
        }


    });



});
