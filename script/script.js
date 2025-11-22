// Verificar si el usuario está logueado y ocultar "Mi cuenta" si no lo está
const usuarioActual = JSON.parse(localStorage.getItem("usuarioActual"));
if (!usuarioActual) {
  const micuenta = document.querySelectorAll('nav a');
  micuenta.forEach(link => {
    if (link.textContent.trim() === 'Mi cuenta') {  /*link.textContent lo que hace es obtener el texto dentro del enlace*/
      link.parentElement.style.display = 'none';    /*link.parentElement accede al elemento padre del enlace, que en este caso es el elemento <li>*/
    }
  });
}

/*Pagina inicio_sesion.html*/
// Función para manejar el inicio de sesión
if (window.location.pathname.includes("inicio_sesion.html")) {
  const botonIniciarSesion = document.querySelector(".inicio-sesion-form button");

  botonIniciarSesion.addEventListener("click", (event) => {
    event.preventDefault(); // Prevenir el envío del formulario
    const usuarioInput = document.querySelector(".inicio-sesion-form input[type='text']").value;          // Obtener el valor del campo de usuario
    const contrasenaInput = document.querySelector(".inicio-sesion-form input[type='password']").value;   // Obtener el valor del campo de contraseña
    // Recuperar datos registrados previamente
    const usuarioRegistrado = JSON.parse(localStorage.getItem("usuarios")) || [];        // Obtener el usuario registrado
    const usuarioEncontrado = usuarioRegistrado.find(
      usuario => usuario.acceso == usuarioInput && usuario.contraseña == contrasenaInput
    );

    // Verificar si los datos ingresados coinciden con los datos registrados
    if (usuarioEncontrado) {
      // Guardar el usuario actual en localStorage
      localStorage.setItem("usuarioActual", JSON.stringify(usuarioEncontrado));
      // Redirigir a la página home.html si los datos coinciden
      window.location.href = "home.html";
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  });
}


/*Pagina registrarse.html*/
if (window.location.pathname.includes("registrarse.html")) {
  const registroNombre = document.querySelector(".registro-form input[placeholder = 'Nombre']");

  // Validar que el nombre tenga al menos 3 caracteres
  registroNombre.addEventListener("input", () => {
    if (registroNombre.value.length < 3) {
      registroNombre.setCustomValidity("El nombre debe tener al menos 3 caracteres");   // Mensaje de error setCustomValidity permite lo que hace es establecer un mensaje de error personalizado para el campo
    } else {
      registroNombre.setCustomValidity("");
    }
  });

  // Validar que el apellido tenga al menos dos palabras de 3 caracteres o más
  const registroApellido = document.querySelector(".registro-form input[placeholder = 'Apellidos']");

  registroApellido.addEventListener("input", () => {
    const partesApellido = registroApellido.value.trim().split(" ");                // Dividir el valor por espacios, trim() elimina espacios al inicio y al final y split crea un array con las partes
    const Valido = partesApellido.filter(partes => partes.length >= 3).length >= 2; // Verificar si hay al menos dos partes válidas, filter() crea un nuevo array con los elementos que cumplen la condición

    if (!Valido) {
      registroApellido.setCustomValidity("El apellido debe estar compuesto por al menos dos palabras de 3 caracteres o más");
    } else {
      registroApellido.setCustomValidity("");
    }
  });

  // Validar que el correo electrónico tenga valores tipo nombre@dominio.extension
  const registroCorreo = document.querySelector(".registro-form input[placeholder = 'Correo electrónico']");

  registroCorreo.addEventListener("input", () => {
    const regexCorreo = /^[\w-_.\+]{1,255}@([\w\d]+\.)+[A-Za-z]{2,3}$/; // Expresión regular para validar el formato del correo electrónico
    // ^: inicio de la cadena
    // [\w-_.\+]{1,255}: permite letras, números, guiones, guiones bajos, puntos y signos más en la parte local del correo (antes de la @) con una longitud de 1 a 255 caracteres
    // @: símbolo arroba
    // ([\w\d]+\.)+: permite uno o más grupos de letras y números seguidos de un punto en el dominio
    // [A-Za-z]{2,3}: permite una extensión de 2 a 3 letras
    // $: fin de la cadena
    if (!regexCorreo.test(registroCorreo.value)) {   // test() verifica si el valor coincide con la expresión regular
      registroCorreo.setCustomValidity("El correo electrónico no tiene un formato válido tipo nombre@dominio.extension");
    } else {
      registroCorreo.setCustomValidity("");
    }
  });

  // Validar confirmar correo electrónico
  const registroConfirmarCorreo = document.querySelector(".registro-form input[placeholder = 'Confirmar correo']");

  registroConfirmarCorreo.addEventListener("input", () => {
    if (registroCorreo.value != registroConfirmarCorreo.value){
      registroConfirmarCorreo.setCustomValidity("El correo de confirmación no coincide con el correo electrónico anterior");
    } else {
      registroConfirmarCorreo.setCustomValidity("");
    }
  });

  // Validar que la fecha de nacimiento sea una fecha válida
  const registroFecha = document.querySelector(".registro-form input[type = 'date']");
  const fechaActual = new Date();                             // Obtener la fecha actual
  
  registroFecha.addEventListener("input", () => {
    const fechaIngresada = new Date(registroFecha.value);     // Convertir el valor ingresado a un objeto Date

    if (fechaIngresada >= fechaActual) {
      registroFecha.setCustomValidity("La fecha de nacimiento debe ser una fecha válida en el pasado"); 
    } else {
      registroFecha.setCustomValidity("");
    }   
  });

  // Validar campo Login que representa el nombre de inicio de sesión y estará formado por mínimo 5 caracteres de longitud
  const registroUsuario = document.querySelector(".registro-form input[placeholder = 'Usuario']");

  registroUsuario.addEventListener("input", () => {
    if(registroUsuario.value.length < 5){
      registroUsuario.setCustomValidity("El usuario debe tener al menos 5 caracteres");
    } else {
      registroUsuario.setCustomValidity("");
    }
  });

  // Validar que la contraseña tenga al menos 8 caracteres, una mayúscula, una minúscula y dos números
  const registroContraseña = document.querySelector(".registro-form input[placeholder = 'Contraseña']");

  registroContraseña.addEventListener("input", () => {
    const regexContraseña = /^(?=.*[a-z])(?=.*[A-Z])(?=(.*\d){2,}).{8,}$/;
    // ^: inicio de la cadena
    // (?=.*[a-z]): al menos una letra minúscula
    // (?=.*[A-Z]): al menos una letra mayúscula
    // (?=(.*\d){2,}): al menos dos dígitos
    // .{8,}: al menos 8 caracteres en total
    // $: fin de la cadena
    if (!regexContraseña.test(registroContraseña.value)){
      registroContraseña.setCustomValidity("La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula y dos números");
    } else {
      registroContraseña.setCustomValidity("");
    }
  });

  // Validar inserción de archivo imagen
  const registroImagen = document.querySelector(".registro-form input[type = 'file']");

  registroImagen.addEventListener("input", () => {
    const archivo = registroImagen.files[0];                           // Obtener el archivo seleccionado
    const formatosValidos = ["image/webp", "image/jpeg", "image/png"]; // Formatos de imagen permitidos

    if (archivo && !formatosValidos.includes(archivo.type)) {         // Verificar si el formato del archivo es válido
      registroImagen.setCustomValidity("El formato de la imagen no es válido. Solo se permiten: " + formatosValidos.join(", "));
    } else {
      registroImagen.setCustomValidity("");
    }
  });

  // Checkbox de privacidad que habilitara o deshabilitara el botón de guardar datos y acceder
  const registroPrivacidad = document.querySelector(".registro-form input[type = 'checkbox']");
  const botonGuardar = document.querySelector(".registro-form button");

  registroPrivacidad.addEventListener("change", () => {      // Evento que se dispara cuando cambia el estado del checkbox
    if(!registroPrivacidad.checked) {                        // Verificar si el checkbox no está marcado         
      registroPrivacidad.setCustomValidity("Debes aceptar la política de privacidad");
    } else {
      registroPrivacidad.setCustomValidity("");              // Si el checkbox está marcado, se elimina el mensaje de error
    }
  });

  //El boton guardar datos y acceder redirige a la página version_b.html guardando los datos del formulario en localStorage
  //Al guardar los datos, se enseñará un mensaje informando que los datos se han guardado correctamente
  botonGuardar.addEventListener("click", (event) => {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del botón


    const formulario = document.querySelector(".registro-form"); // Referencia al formulario
    const esValido = formulario.checkValidity();                 // Verificar si el formulario es válido

    if (esValido) {
      // Recuperar el array de usuarios registrados o crear uno nuevo si no existe
      const usuarios = JSON.parse(localStorage.getItem("usuarios")) || []; 

      // Verificar si el usuario ya existe
      const usuarioExiste = usuarios.some(usuario => usuario.acceso === registroUsuario.value); 

      if (usuarioExiste) {
        alert("Error: El nombre de acceso ya está registrado. Por favor, elige otro.");
        return;               // Salir de la función si el usuario ya existe
      }

      const archivo = registroImagen.files[0];      // Obtener el archivo seleccionado
      const lector = new FileReader();              // Crear un objeto FileReader para leer el archivo

      lector.onload = function(e) {                 // Evento que se dispara cuando la lectura del archivo se completa
        const nuevoUsuario = {                      // Crear un objeto con los datos del nuevo usuario
          nombre: registroNombre.value,
          apellido: registroApellido.value,
          correo: registroCorreo.value,
          fechaNacimiento: registroFecha.value,
          acceso: registroUsuario.value,
          contraseña: registroContraseña.value,
          imagen: e.target.result                   // Guardar la imagen como una cadena en base64
        };

        usuarios.push(nuevoUsuario);               // Agregar el nuevo usuario al array de usuarios

        localStorage.setItem("usuarios", JSON.stringify(usuarios));          // Guardar el array actualizado en localStorage
        localStorage.setItem("usuarioActual", JSON.stringify(nuevoUsuario)); // Guardar el usuario actual en localStorage

        alert("Datos guardados correctamente");           // Mostrar mensaje de éxito
        window.location.href = "home.html";          // Redirigir a la página version_b.html
      };

      lector.readAsDataURL(archivo); // Leer el archivo como una URL de datos (base64)
    } else {
      formulario.reportValidity();   // Mostrar mensajes de validación si el formulario no es válido
    }
  });
}