
document.addEventListener("DOMContentLoaded", () => {

    const imagenes = document.querySelectorAll(".imagen-clicable");

    const visor = document.getElementById("visorImagen");

    const imagenAmpliada = document.getElementById("imagenAmpliada");

    const cerrar = document.getElementById("cerrarVisor");


    /* =========================================
       ABRIR IMAGEN
    ========================================= */

    imagenes.forEach((imagen) => {

        imagen.addEventListener("click", () => {

            imagenAmpliada.src = imagen.src;

            imagenAmpliada.alt = imagen.alt;

            visor.classList.add("activo");

            visor.setAttribute("aria-hidden", "false");

            document.body.style.overflow = "hidden";

        });

    });


    /* =========================================
       CERRAR VISOR
    ========================================= */

    function cerrarVisor() {

        visor.classList.remove("activo");

        visor.setAttribute("aria-hidden", "true");

        document.body.style.overflow = "";

    }


    /* BOTÓN X */

    cerrar.addEventListener("click", cerrarVisor);


    /* CLIC FUERA DE LA IMAGEN */

    visor.addEventListener("click", (evento) => {

        if (evento.target === visor) {

            cerrarVisor();

        }

    });


    /* TECLA ESC */

    document.addEventListener("keydown", (evento) => {

        if (evento.key === "Escape") {

            cerrarVisor();

        }

    });

});

