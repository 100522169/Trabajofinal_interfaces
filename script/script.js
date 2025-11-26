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

// Definir los viajes disponibles
const viajes = [
  { destino: 'España', duracion: 7, precio: 600, tipo: 'Turístico', mascotas: 'si', valoracion: 4, imagen: 'images/madrid.jpg', titulo: 'Ruta por las 3 grandes de España' },
  { destino: 'España', duracion: 4, precio: 800, tipo: 'Aventura', mascotas: 'no', valoracion: 5, imagen: 'images/pirineos.jpg', titulo: 'Pirineos, Picos de Europa' },
  { destino: 'España', duracion: 10, precio: 500, tipo: 'Cultural', mascotas: 'no', valoracion: 4, imagen: 'images/camino_santiago.jpeg', titulo: 'Camino de Santiago' },
  { destino: 'Perú', duracion: 4, precio: 400, tipo: 'Organizado', mascotas: 'si', valoracion: 3, imagen: 'images/peru_lima.jpg', titulo: 'Horizontes Andinos' },
  { destino: 'Perú', duracion: 6, precio: 600, tipo: 'Aventura', mascotas: 'no', valoracion: 4, imagen: 'images/machu_pichu.jpg', titulo: 'Secretos de la Ciudad Perdida' },
  { destino: 'Japón', duracion: 5, precio: 900, tipo: 'Cultural', mascotas: 'si', valoracion: 5, imagen: 'images/kioto.jpg', titulo: 'Kimonos y templos' },
  { destino: 'Japón', duracion: 15, precio: 400, tipo: 'Turístico', mascotas: 'no', valoracion: 4, imagen: 'images/japon.jpg', titulo: 'Japan 360º' }
];


/*Página home.html*/
if (window.location.pathname.includes("home.html")) {
  // Lógica para habilitar/deshabilitar el botón de buscar viajes
  const botonsearch = document.getElementById('buscar-viajes');
  // IDs de los select a verificar
  const seleccionado = ['destino-home', 'duracion-home', 'rango-precio-home', 'mascotas-home', 'tipo-viaje-home'];

  // Función para verificar si todos los select tienen una opción seleccionada
  function checkFiltros() {
    const allSeleccionado = seleccionado.every(id => document.getElementById(id).selectedIndex > 0);  // Verifica que todos los select tengan una opción seleccionada que no sea la predeterminada
    botonsearch.disabled = !allSeleccionado;
    document.getElementById('mensaje-filtros').style.display = allSeleccionado ? 'none' : 'block';   // Mostrar u ocultar el mensaje de error
  }

  // Inicializar
  checkFiltros();

  // Agregar listeners
  seleccionado.forEach(id => {
    document.getElementById(id).addEventListener('change', checkFiltros);  // Verificar al cambiar cualquier select
  });

  botonsearch.addEventListener('click', () => {
    const destino = document.getElementById('destino-home').value;
    const duracion = document.getElementById('duracion-home').value;
    const precio = document.getElementById('rango-precio-home').value;
    const mascotas = document.getElementById('mascotas-home').value;
    const tipo = document.getElementById('tipo-viaje-home').value;

    // Filtrar viajes
    let filtrados = viajes;
    if (destino) filtrados = filtrados.filter(v => v.destino === destino);
    // Filtrar por duración
    if (duracion) {
      if (duracion === '1-3') filtrados = filtrados.filter(v => v.duracion >= 1 && v.duracion <= 3);        //Si la duración es de 1 a 3 días
      else if (duracion === '4-7') filtrados = filtrados.filter(v => v.duracion >= 4 && v.duracion <= 7);
      else if (duracion === '8-14') filtrados = filtrados.filter(v => v.duracion >= 8 && v.duracion <= 14);
      else if (duracion === '+15') filtrados = filtrados.filter(v => v.duracion >= 15);
    }
    if (precio) {
      if (precio === '100-200') filtrados = filtrados.filter(v => v.precio >= 100 && v.precio <= 200);
      else if (precio === '201-400') filtrados = filtrados.filter(v => v.precio >= 201 && v.precio <= 400);
      else if (precio === '401-600') filtrados = filtrados.filter(v => v.precio >= 401 && v.precio <= 600);
      else if (precio === '+600') filtrados = filtrados.filter(v => v.precio >= 601);
    }
    if (mascotas) filtrados = filtrados.filter(v => v.mascotas === mascotas);
    if (tipo) filtrados = filtrados.filter(v => v.tipo === tipo);

    // Guardar en localStorage
    localStorage.setItem('viajesFiltrados', JSON.stringify(filtrados));
    window.location.href = 'listado_viajes.html';
  });

  // Botones de iniciar sesión y registrarse en el header
  const botoniniciosesion = document.querySelector('header .botones_header button:first-child');
  botoniniciosesion.addEventListener('click', () => {
    window.location.href = 'inicio_sesion.html';
  });

  const botonregistrarse = document.querySelector('header .botones_header button:last-child');
  botonregistrarse.addEventListener('click', () => {
    window.location.href = 'registrarse.html';
  });
}


/*Pagina inicio_sesion.html*/
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

        usuarios.push(nuevoUsuario);                // Agregar el nuevo usuario al array de usuarios

        localStorage.setItem("usuarios", JSON.stringify(usuarios));          // Guardar el array actualizado en localStorage
        localStorage.setItem("usuarioActual", JSON.stringify(nuevoUsuario)); // Guardar el usuario actual en localStorage

        alert("Datos guardados correctamente");           // Mostrar mensaje de éxito
        window.location.href = "home.html";               // Redirigir a la página home.html
      };

      lector.readAsDataURL(archivo); // Leer el archivo como una URL de datos (base64)
    } else {
      formulario.reportValidity();   // Mostrar mensajes de validación si el formulario no es válido
    }
  });
}


/*Pagina listado_viajes.html*/
// Ajustes específicos para evitar que el padding del contenedor principal empuje la columna de filtros
if (window.location.pathname.includes("listado_viajes.html")) {
  const contenedor = document.querySelector('.contenedor-principal');
  if (contenedor) {
    // quitar padding lateral que pueda empujar la columna de filtros
    contenedor.style.paddingLeft = '0';
  }

  // Botón de vuelta atrás a home.html
  const botonVueltaAtras = document.querySelector('.columna-boton-atras button');
  botonVueltaAtras.addEventListener('click', () => {
    window.location.href = 'home.html';
  });

  // Generar los divs de viajes dinámicamente
  const viajesFiltrados = JSON.parse(localStorage.getItem('viajesFiltrados')) || viajes; // Si no hay filtrados, mostrar todos
  const columnaListado = document.querySelector('.columna-listado-viajes');
  const ratings = {5: '★★★★★', 4: '★★★★☆', 3: '★★★☆☆'};
  let currentFiltrados = [...viajesFiltrados];     // Copia de los viajes filtrados inicialmente

  // Función para renderizar los viajes
  function renderViajes(filtrados) {
    columnaListado.innerHTML = '';
    filtrados.forEach(viaje => {
      const div = document.createElement('div');   // Crear un nuevo div para cada viaje
      div.className = 'viaje';
      div.setAttribute('data-destino', viaje.destino);
      div.setAttribute('data-duracion', viaje.duracion);
      div.setAttribute('data-precio', viaje.precio);
      div.setAttribute('data-tipo', viaje.tipo);
      div.setAttribute('data-mascotas', viaje.mascotas);
      div.setAttribute('data-valoracion', viaje.valoracion);
      // Rellenar el contenido del viaje con innerHTML
      div.innerHTML = `                           
        <img src="${viaje.imagen}" alt="${viaje.titulo}">
        <div class="info-fila">
          <span>${viaje.titulo}</span>
          <span>${viaje.duracion} días</span>
        </div>
        <div class="info-fila">
          <span>${viaje.precio} €</span>
          <span>${viaje.tipo}</span>
        </div>
        <div class="info-fila">
          <span>Mascotas: ${viaje.mascotas === 'si' ? 'Sí' : 'No'}</span>
          <span class="valoracion-estrellas">${ratings[viaje.valoracion]}</span>
        </div>
        <button class="ver-detalles">Ver detalles</button>
      `;
      columnaListado.appendChild(div);   // Agregar el div al contenedor de listado
    });
  }

  // Render inicial
  renderViajes(currentFiltrados);       // Renderizar los viajes filtrados inicialmente

  // Función para aplicar filtros
  function applyFilters() {
    const destino = document.getElementById('destino').value;
    const duracion = document.getElementById('duracion').value;
    const precio = document.getElementById('rango-precio').value;
    const tipo = document.getElementById('tipo-viajes').value;
    const mascotas = document.getElementById('mascotas').value;
    const valoracion = document.getElementById('valoracion').value;

    // Partir siempre de TODOS los viajes disponibles, no solo de los pre-filtrados
    let filtrados = [...viajes];   

    if (destino && destino !== '') filtrados = filtrados.filter(v => v.destino === destino);   //Si se ha seleccionado un destino y es diferente de cadena vacía, entonces filtrar por destino
    if (duracion && duracion !== '') {
      if (duracion === '1-3') filtrados = filtrados.filter(v => v.duracion >= 1 && v.duracion <= 3);
      else if (duracion === '4-7') filtrados = filtrados.filter(v => v.duracion >= 4 && v.duracion <= 7);
      else if (duracion === '8-14') filtrados = filtrados.filter(v => v.duracion >= 8 && v.duracion <= 14);
      else if (duracion === '+15') filtrados = filtrados.filter(v => v.duracion >= 15);
    }
    if (precio && precio !== '') {
      if (precio === '100-200') filtrados = filtrados.filter(v => v.precio >= 100 && v.precio <= 200);
      else if (precio === '201-400') filtrados = filtrados.filter(v => v.precio >= 201 && v.precio <= 400);
      else if (precio === '401-600') filtrados = filtrados.filter(v => v.precio >= 401 && v.precio <= 600);
      else if (precio === '+600') filtrados = filtrados.filter(v => v.precio >= 601);
    }
    if (tipo && tipo !== '') filtrados = filtrados.filter(v => v.tipo === tipo);
    if (mascotas && mascotas !== '') filtrados = filtrados.filter(v => v.mascotas === mascotas);
    if (valoracion && valoracion !== '') filtrados = filtrados.filter(v => v.valoracion == valoracion);

    currentFiltrados = filtrados;   // Actualizar los viajes filtrados actuales
    renderViajes(currentFiltrados); // Renderizar los viajes filtrados
  }

  // Aplicar filtros con el botón
  const aplicarFiltrosBoton = document.getElementById('aplicar-filtros');
  aplicarFiltrosBoton.addEventListener('click', () => {
    const filtroSelector = ['destino', 'duracion', 'rango-precio', 'tipo-viajes', 'mascotas', 'valoracion'];
    // Verificar si hay al menos un filtro seleccionado (incluyendo "Todos")
    const TieneFiltro = filtroSelector.some(id => {  
    const select = document.getElementById(id);       // Obtener el elemento select por su ID
    return select.selectedIndex > 0;                  // Verificar si el índice seleccionado es mayor que 0 (es decir, no es la opción por defecto)
    });
    
    if (TieneFiltro) {
      applyFilters();
      document.getElementById('mensaje-filtros-listado').style.display = 'none';
      
      // Restablecer todos los selectores a su opción por defecto
      filtroSelector.forEach(id => {
        document.getElementById(id).selectedIndex = 0;
      });
    } else {
      document.getElementById('mensaje-filtros-listado').style.display = 'block';
    }
  });
}



/*Página detalles_viaje.html*/
if (window.location.pathname.includes("detalles_viaje.html")) {
  
  // Función para generar el itinerario dinámicamente
  function generarItinerario(numeroDias, actividades = []) {
    const contenedor = document.querySelector('.contenedor-itinerario');
    contenedor.innerHTML = ''; // Limpiar contenido previo
    
    // Bucle para crear cada día del itinerario
    for (let i = 1; i <= numeroDias; i++) {
      // Crear el div para cada día
      const diaDiv = document.createElement('div');
      diaDiv.className = 'dia-itinerario';            // Asignar clase CSS
      
      // Crear el span con la descripción del día
      const spanDia = document.createElement('span');
      // Si hay actividades definidas, usarlas; si no, usar texto por defecto
      spanDia.textContent = actividades[i-1]    // Índice i-1 porque el array empieza en 0
        ? `Día ${i}: ${actividades[i-1]}`       // Usar la actividad definida para el día
        : `Día ${i}: [Actividad]`;              // Texto por defecto si no hay actividad definida
      
      // Crear el botón "Más detalles"
      const botonmasdetalles = document.createElement('button');
      botonmasdetalles.className = 'boton-mas-detalles';
      botonmasdetalles.textContent = 'Más detalles';        // Texto del botón
      botonmasdetalles.addEventListener('click', () => {
        alert(`Detalles del día ${i}`); // Aquí puedes personalizar la acción
      });
      
      // Agregar elementos al div del día
      diaDiv.appendChild(spanDia);
      diaDiv.appendChild(botonmasdetalles);
      
      // Agregar el día al contenedor
      contenedor.appendChild(diaDiv);
    }
  }

  // Función para generar las condiciones del viaje dinámicamente
  function generarCondiciones(texto = '') {
    const contenedor = document.querySelector('.contenedor-condiciones');
    contenedor.innerHTML = ''; // Limpiar contenido previo
    
    // Si no hay texto definido, usar uno por defecto
    if (!texto) {
      texto = 'Descripción de eventos que podrían suceder durante la travesía';
    }
    
    // Crear un único párrafo con todo el texto
    const parrafo = document.createElement('p');
    parrafo.textContent = texto;
    contenedor.appendChild(parrafo);
  }

  // Función para generar la información del guía dinámicamente
  function generarInfoGuia(guia = {}) {
    const contenedor = document.querySelector('.contenedor-info-guia');
    contenedor.innerHTML = ''; // Limpiar contenido previo
    
    // Valores por defecto si no se proporcionan
    const {
      nombre = 'Nombre y apellidos',
      edad = 'Edad',
      experiencia = 'Años de experiencia',
      experiencias = 'Tour por montañas y experto en gastronomía local',
      idiomas = 'B2(Inglés) y C2(Español)',
      contacto = '+34 XXX XXX XXX',
      redesSociales = ['📱', '💼', '📷'],
      valoracion = 3
    } = guia;
    
    // Crear sección de info básica
    const infoGuiaDiv = document.createElement('div');
    infoGuiaDiv.className = 'info-guia';
    
    // Crear avatar
    const avatar = document.createElement('div');
    avatar.className = 'avatar';
    
    // Crear sección de texto info básica
    const infoTexto = document.createElement('div');
    infoTexto.className = 'info-guia-texto';
    infoTexto.innerHTML = `
      <p>${nombre}</p>
      <p>${edad}</p>
      <p>${experiencia}</p>
    `;
    
    // Agregar avatar e info texto al div de info básica
    infoGuiaDiv.appendChild(avatar);
    infoGuiaDiv.appendChild(infoTexto);
    
    
    // Crear sección de info adicional
    const infoAdicionalDiv = document.createElement('div');
    infoAdicionalDiv.className = 'info-adicional-guia';
    
    // Crear párrafos de info adicional
    const parrafoExperiencias = document.createElement('p');
    parrafoExperiencias.textContent = `Experiencias: ${experiencias}`;
    
    const parrafoIdiomas = document.createElement('p');
    parrafoIdiomas.textContent = `Idiomas: ${idiomas}`;
    
    const parrafoContacto = document.createElement('p');
    parrafoContacto.textContent = `Contactos: ${contacto}`;
    
    // Crear redes sociales
    const redesDiv = document.createElement('div');
    redesDiv.className = 'redes-sociales';
    redesSociales.forEach(icono => {
      const span_redes_sociales = document.createElement('span');
      span_redes_sociales.textContent = icono;
      redesDiv.appendChild(span_redes_sociales);
    });
    
    // Crear valoración con estrellas
    const valoracionDiv = document.createElement('p');
    const estrellas = '★'.repeat(valoracion) + '☆'.repeat(5 - valoracion);    // Generar estrellas llenas y vacías
    valoracionDiv.innerHTML = `Valoración: <span class="valoracion-estrellas">${estrellas}</span>`;  //Empleamos el span class para aplicar el estilo de las estrellas
    
    // Agregar todos los párrafos e info adicional al div
    infoAdicionalDiv.appendChild(parrafoExperiencias);
    infoAdicionalDiv.appendChild(parrafoIdiomas);
    infoAdicionalDiv.appendChild(parrafoContacto);
    infoAdicionalDiv.appendChild(redesDiv);
    infoAdicionalDiv.appendChild(valoracionDiv);
    
    // Agregar todo al contenedor
    contenedor.appendChild(infoGuiaDiv);
    contenedor.appendChild(infoAdicionalDiv);
  }

  // Generar itinerario para 4 días con actividades definidas
  generarItinerario(4, ['Visita al museo', 'Tour por la ciudad', 'Excursión a la montaña', 'Día de relax en la playa']);
  
  // Generar condiciones del viaje
  generarCondiciones('El viaje incluye seguro médico internacional. Se requiere un nivel físico medio para las actividades. Las condiciones climáticas pueden variar, llevar ropa adecuada. No incluye comidas, solo desayuno.');
  
  // Generar información del guía
  generarInfoGuia({
    nombre: 'Juan Pérez García',
    edad: '35 años',
    experiencia: '10 años de experiencia',
    experiencias: 'Tour por montañas y experto en gastronomía local',
    idiomas: 'B2(Inglés) y C2(Español)',
    contacto: '+34 666 777 888',
    redesSociales: ['📱', '💼', '📷'],
    valoracion: 4
  });


  // Array para las reseñas
  const todasLasReseñas = [
    { nombre: 'Sergio Aladro', comentario: 'La mejor experiencia de mi vida, muy recomendado.' },
    { nombre: 'Marcos Rodríguez', comentario: 'La comida en el viaje daba que desear pero el guía es uno de los mejores que he tenido' },
    { nombre: 'Ana Martínez', comentario: 'Increíble aventura, paisajes espectaculares y un grupo genial.' },
    { nombre: 'Carlos López', comentario: 'Muy bien organizado, aunque el precio podría ser un poco más accesible.' },
    { nombre: 'Laura García', comentario: 'Experiencia única, el guía fue muy profesional y atento en todo momento.' },
    { nombre: 'Pedro Sánchez', comentario: 'Volvería sin dudarlo. Destacar la atención al detalle en cada actividad.' }
  ];

  // Función para crear una reseña
  function crearReseña(nombre, comentario) {
    // Crear el contenedor de la reseña
    const reseñaDiv = document.createElement('div');
    reseñaDiv.className = 'reseña';
    
    // Crear el avatar
    const avatar = document.createElement('div');
    avatar.className = 'reseña-avatar';
    
    // Crear el comentario
    const comentarioDiv = document.createElement('div');
    comentarioDiv.className = 'reseña-comentario';
    comentarioDiv.innerHTML = `
      <p><strong>${nombre}</strong></p>
      <p>${comentario}</p>
    `;
    
    // Añadir imagen, nombre y comentario 
    reseñaDiv.appendChild(avatar);
    reseñaDiv.appendChild(comentarioDiv);
    
    return reseñaDiv;
  }

  // Función para generar las primeras 3 reseñas
  function generarReseñasIniciales(reseñas) {
    const contenedor = document.querySelector('.contenedor-reseñas');
    contenedor.innerHTML = '';
    
    // Mostrar solo las primeras 3 reseñas
    const reseñasIniciales = reseñas.slice(0, 3);  // Obtener las primeras 3 reseñas
    reseñasIniciales.forEach(reseña => {
      contenedor.appendChild(crearReseña(reseña.nombre, reseña.comentario));
    });
  }

  // Función para mostrar todas las reseñas en el modal
  function mostrarTodasReseñas(reseñas) {
    const modalContenedor = document.querySelector('.modal-contenedor-reseñas');
    modalContenedor.innerHTML = '';
    
    reseñas.forEach(reseña => {
      modalContenedor.appendChild(crearReseña(reseña.nombre, reseña.comentario));
    });
  }

  // Generar las primeras 3 reseñas
  generarReseñasIniciales(todasLasReseñas);

  // Configurar el modal
  const modal = document.querySelector('.modal-reseñas');
  const botonVerMas = document.querySelector('.boton-ver-mas');
  const botonCerrar = document.querySelector('.modal-cerrar');

  // Abrir modal al hacer clic en "Ver más reseñas"
  botonVerMas.addEventListener('click', () => {
    mostrarTodasReseñas(todasLasReseñas);
    modal.style.display = 'block';
    document.body.classList.add('modal-abierto');      // Bloquear scroll del body
  });

  // Cerrar modal al hacer clic en la X
  botonCerrar.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.classList.remove('modal-abierto');   // Restaurar scroll del body
  });
}