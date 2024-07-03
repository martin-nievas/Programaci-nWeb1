
    function IniciarSesion(){
       
        var nombreUsuario = document.getElementById("nombre").value;
        var contraseña = document.getElementById("contraseña").value;

        var nuevoUsuario = document.getElementById("crearUsuario").value;
        var nuevaContraseña = document.getElementById("nuevaContraseña").value;

        var errorNombre = document.getElementById("errorNombre");
        var errorContraseña = document.getElementById("errorContraseña");
        
        var flag = true;
        
        if (nombreUsuario !== nuevoUsuario) {
            errorNombre.style.display = "block";
            flag = false;
        } else {
            errorNombre.style.display = "none";
        }

        if (contraseña !== nuevaContraseña) {
            errorContraseña.style.display = "block";
            flag = false;
        } else {
            errorContraseña.style.display = "none";
        }
       
        if (flag) {
            IniciandoSesion();
        }
            
    }
    function IniciandoSesion() {
        var mensaje = document.getElementById("iniciandoSesion");
        mensaje.style.display = "block";
        setTimeout(function() {
            window.location.href = "home.html";
        }, 2000);
      }

    function NuevoUsuario(){
        var mensaje = document.getElementById("usuarioRegistrado");
        var usuario = document.getElementById("formNuevoUsuario");

        mensaje.style.display = "block";
        setTimeout(function() {
            mensaje.style.display = "none";
        }, 2000);
        setTimeout(function() {
            usuario.style.display = "none";
        }, 2000);
       
    }

    function MostrarFormNuevoUsuario(){
        var formulario = document.getElementById("formNuevoUsuario");
        formulario.style.display = "block";
    }
    
    function Comentar(){

        var nombre = document.getElementById("nombre").value;
        var comentario = document.getElementById("comentario").value;
        var gracias = document.getElementById("GraciasPorComentar");
        var errorNombre = document.getElementById("errorNombre");
        var errorComentario = document.getElementById("errorComentario");
        

        if (nombre == "" || comentario == "") {
            errorNombre.style.display = "block";
            errorComentario.style.display = "block";
        } else {
                document.getElementById("comentario").value = "";
                document.getElementById("nombre").value = "";
                errorNombre.style.display = "none";
                errorComentario.style.display = "none";
                gracias.style.display = "block";
                gracias.style.transform = "scale(1.5)";
                gracias.style.transition = "1.5s";
                setTimeout(function() {
                                        gracias.style.display = "none";
                                        }, 2000);
                }
    }

    function AgregarAlCarrito(){

        var mensaje = document.getElementById("mensajeProductoAgregadoAlCarrito");
        
        mensaje.style.display = "block";

         setTimeout(function() {
             mensaje.style.display = "none";
         }, 2000);
    }

   function ActualizarInformacion(){

        var mensaje = document.getElementById("mensajeInfoActualizada");

        mensaje.style.display = "block";

         setTimeout(function() {
             mensaje.style.display = "none";
         }, 2000);
   }

   document.addEventListener('DOMContentLoaded', function() {
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    const menu = document.querySelector('.hamburger-menu ul.menu');

    // Agregar evento de clic al ícono hamburguesa
    hamburgerIcon.addEventListener('click', function() {
        // Alternar la clase 'open' en el menú para mostrar u ocultar
        menu.classList.toggle('open');
    });

    // Si deseas cerrar el menú cuando se hace clic en un elemento del menú
    menu.addEventListener('click', function() {
        menu.classList.remove('open');
    });
});
