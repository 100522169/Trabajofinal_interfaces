// Verificar si el usuario está logueado y configurar "Mi cuenta"
const usuarioActual = JSON.parse(localStorage.getItem("usuarioActual"));
const micuentaLinks = document.querySelectorAll('nav a');
micuentaLinks.forEach(link => {
  if (link.textContent.trim() === 'Mi cuenta') {
    if (!usuarioActual) {
      // Ocultar si no está logueado
      link.parentElement.style.display = 'none';
    } else {
      // Configurar enlace si está logueado
      link.href = 'mi_cuenta.html';
      link.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = 'mi_cuenta.html';
      });
    }
  }
});

// Definir los viajes disponibles
const viajes = [
  { 
    destino: 'España', duracion: 7, precio: 600, tipo: 'Turístico', mascotas: 'si', valoracion: 4, imagen: 'images/madrid.jpg', titulo: 'Madrid, Barcelona y Sevilla',
    dietasDisponibles: ['vegano', 'vegetariano', 'sin-gluten', 'sin-lactosa'],
    galeria: ['images/madrid.jpg', 'images/madrid.jpg', 'images/madrid.jpg', 'images/madrid.jpg', 'images/madrid.jpg', 'images/madrid.jpg'],
    itinerario: ['Madrid: Prado y Retiro', 'Barcelona: Sagrada Familia', 'Barrio Gótico y Rambla', 'Sevilla: Giralda', 'Real Alcázar', 'Plaza de España', 'Día libre'],
    itinerarioDetallado: [
      'Llegada a Madrid. Visita guiada al Museo del Prado con las obras de Velázquez y Goya. Por la tarde, paseo relajante por el Parque del Retiro.',
      'Traslado en AVE a Barcelona. Visita a la impresionante Sagrada Familia y subida al Park Güell para disfrutar de las vistas panorámicas.',
      'Recorrido por el encantador Barrio Gótico y la animada Rambla. Tiempo libre para tapas y compras en el Mercado de la Boquería.',
      'Viaje a Sevilla. Visita a la majestuosa Giralda, antigua torre alminar convertida en campanario. Vistas espectaculares desde lo alto.',
      'Exploración del Real Alcázar, palacio de arquitectura mudéjar. Paseo por sus jardines históricos declarados Patrimonio de la Humanidad.',
      'Visita a la impresionante Plaza de España. Tarde libre para conocer el barrio de Triana y disfrutar de un espectáculo de flamenco.',
      'Día libre para actividades personales. Regreso y fin del tour.'
    ],
    condiciones: 'Incluye transporte, seguro y desayunos. Mascotas permitidas. Nivel físico: bajo-medio.',
    guia: { nombre: 'María González', edad: '32 años', experiencia: '8 años de experiencia', experiencias: 'Especialista en cultura española', idiomas: 'Español, Inglés, Francés', contacto: '+34 612 345 678', redesSociales: ['<img src="images/redes_sociales/instagram.png" alt="Instagram"/>', '<img src="images/redes_sociales/facebook.png" alt="Facebook"/>', '<img src="images/redes_sociales/linkedin.png" alt="LinkedIn"/>'], valoracion: 4, avatar: 'images/pirineos.jpg' },
    reseñas: [
      { nombre: 'Sergio Aladro', comentario: 'La mejor experiencia de mi vida, muy recomendado.' },
      { nombre: 'Marcos Rodríguez', comentario: 'La comida en el viaje daba que desear pero el guía es uno de los mejores que he tenido' }
    ]
  },
  { 
    destino: 'España', duracion: 4, precio: 800, tipo: 'Aventura', mascotas: 'no', valoracion: 5, imagen: 'images/pirineos.jpg', titulo: 'Aventura en los Pirineos',
    dietasDisponibles: ['vegano', 'sin-gluten', 'sin-frutos-secos'],
    galeria: ['images/pirineos.jpg', 'images/pirineos.jpg', 'images/pirineos.jpg', 'images/pirineos.jpg', 'images/pirineos.jpg', 'images/pirineos.jpg'],
    itinerario: ['Trekking inicial', 'Ascenso a picos', 'Barranquismo y ferratas', 'Ruta final'],
    itinerarioDetallado: [
      'Llegada al valle de Ordesa. Trekking de aclimatación de 3 horas por senderos de dificultad media. Briefing de seguridad y revisión de equipo.',
      'Ascenso temprano a picos de 2.500m de altitud. Técnicas de escalada en roca. Almuerzo en cumbre con vistas panorámicas de los Pirineos.',
      'Descenso de barrancos en el río Vero. Rapel de 20 metros. Travesía por vías ferratas con puentes colgantes y escaleras verticales.',
      'Ruta final de trekking hacia el punto de partida. Descenso controlado y ceremonia de despedida del grupo.'
    ],
    condiciones: 'Alta intensidad física. Incluye equipo de montaña y guía profesional. No mascotas.',
    guia: { nombre: 'Carlos Fernández', edad: '38 años', experiencia: '15 años de experiencia', experiencias: 'Guía de alta montaña certificado', idiomas: 'Español, Inglés', contacto: '+34 678 234 567', redesSociales: ['<img src="images/redes_sociales/instagram.png" alt="Instagram"/>', '<img src="images/redes_sociales/facebook.png" alt="Facebook"/>', '<img src="images/redes_sociales/linkedin.png" alt="LinkedIn"/>'], valoracion: 5, avatar: 'images/avatar-carlos.jpg' },
    reseñas: [
      { nombre: 'Ana Martínez', comentario: 'Increíble aventura, paisajes espectaculares y un grupo genial.' }
    ]
  },
  { 
    destino: 'España', duracion: 10, precio: 500, tipo: 'Cultural', mascotas: 'no', valoracion: 4, imagen: 'images/camino_santiago.jpeg', titulo: 'Camino de Santiago',
    dietasDisponibles: ['vegetariano', 'sin-lactosa', 'sin-huevo', 'sin-frutos-secos', 'halal'],
    galeria: ['images/camino_santiago.jpeg', 'images/camino_santiago.jpeg', 'images/camino_santiago.jpeg', 'images/camino_santiago.jpeg', 'images/camino_santiago.jpeg', 'images/camino_santiago.jpeg'],
    itinerario: ['Sarria', 'Portomarín (20km)', 'Paisajes gallegos', 'Pueblos históricos', 'Palas de Rei', 'Arzúa', 'Etapa 7-8', 'Santiago de Compostela', 'Ceremonia'],
    itinerarioDetallado: [
      'Inicio del Camino desde Sarria. Recepción de credencial del peregrino. Primera etapa de 22 km con bosques y aldeas gallegas.',
      'Etapa de 25 km hasta Portomarín cruzando el embalse de Belesar. Almuerzo campestre y llegada al pueblo medieval.',
      'Caminata de 24 km por paisajes típicamente gallegos con prados verdes y pequeñas iglesias románicas en el camino.',
      'Visita a pueblos históricos como Melide. Degustación del famoso pulpo a feira. Etapa de 15 km con suave desnivel.',
      'Llegada a Palas de Rei tras 28 km. Descanso en albergue tradicional. Cena con otros peregrinos compartiendo experiencias.',
      'Etapa hacia Arzúa de 29 km. Paso por eucaliptos y pinares. Visita a queserías artesanales del famoso queso de Arzúa.',
      'Etapas 7 y 8: Continuación hacia Santiago. El Camino se hace más transitado conforme nos acercamos a la meta.',
      'Llegada emocionante a la Catedral de Santiago de Compostela. Abrazo al Apóstol y vista del Botafumeiro.',
      'Misa del Peregrino en la Catedral. Certificado de Compostela. Tarde libre para explorar la ciudad y celebrar.'
    ],
    condiciones: 'Incluye albergues, transporte de mochila y credencial. Buena condición física.',
    guia: { nombre: 'Santiago Rodríguez', edad: '45 años', experiencia: '12 años de experiencia', experiencias: 'Más de 20 Caminos completados', idiomas: 'Español, Inglés, Portugués', contacto: '+34 687 456 789', redesSociales: ['<img src="images/redes_sociales/instagram.png" alt="Instagram"/>', '<img src="images/redes_sociales/facebook.png" alt="Facebook"/>', '<img src="images/redes_sociales/linkedin.png" alt="LinkedIn"/>'], valoracion: 4, avatar: 'images/avatar-santiago.jpg' },
    reseñas: [
      { nombre: 'Carlos López', comentario: 'Muy bien organizado, aunque el precio podría ser un poco más accesible.' }
    ]
  },
  { 
    destino: 'Perú', duracion: 4, precio: 400, tipo: 'Organizado', mascotas: 'si', valoracion: 3, imagen: 'images/peru_lima.jpg', titulo: 'Lima y la Costa',
    dietasDisponibles: ['sin-pescado', 'vegano', 'vegetariano', 'sin-gluten', 'sin-lactosa'],
    galeria: ['images/peru_lima.jpg', 'images/peru_lima.jpg', 'images/peru_lima.jpg', 'images/peru_lima.jpg', 'images/peru_lima.jpg', 'images/peru_lima.jpg'],
    itinerario: ['City tour en Lima', 'Centro histórico y museos', 'Pachacámac', 'Playas de Miraflores'],
    itinerarioDetallado: [
      'Recorrido por Lima moderna: Miraflores y San Isidro. Parque del Amor y Malecón. Introducción a la gastronomía peruana con ceviche.',
      'Visita al centro histórico Patrimonio de la Humanidad. Plaza Mayor, Catedral y Palacio de Gobierno. Museo Larco con arte precolombino.',
      'Excursión arqueológica a Pachacámac, antiguo centro ceremonial pre-inca e inca. Templo del Sol y museo de sitio con textiles antiguos.',
      'Día en las playas de Miraflores. Posibilidad de parapente sobre el Pacífico. Cena de despedida con show de marinera.'
    ],
    condiciones: 'Todo incluido. Mascotas pequeñas permitidas. Nivel físico: bajo.',
    guia: { nombre: 'Miguel Quispe', edad: '40 años', experiencia: '10 años de experiencia', experiencias: 'Experto en gastronomía peruana', idiomas: 'Español, Inglés, Quechua', contacto: '+51 987 654 321', redesSociales: ['<img src="images/redes_sociales/instagram.png" alt="Instagram"/>', '<img src="images/redes_sociales/facebook.png" alt="Facebook"/>', '<img src="images/redes_sociales/linkedin.png" alt="LinkedIn"/>'], valoracion: 3, avatar: 'images/avatar-miguel.jpg' },
    reseñas: [
      { nombre: 'Laura García', comentario: 'Experiencia única, el guía fue muy profesional y atento en todo momento.' }
    ]
  },
  { 
    destino: 'Perú', duracion: 6, precio: 600, tipo: 'Aventura', mascotas: 'no', valoracion: 4, imagen: 'images/machu_pichu.jpg', titulo: 'Machu Picchu Mágico',
    dietasDisponibles: ['vegano', 'vegetariano', 'sin-gluten'],
    galeria: ['images/machu_pichu.jpg', 'images/machu_pichu.jpg', 'images/machu_pichu.jpg', 'images/machu_pichu.jpg', 'images/machu_pichu.jpg', 'images/machu_pichu.jpg'],
    itinerario: ['Cusco: aclimatación', 'Valle Sagrado', 'Camino Inca día 1', 'Camino Inca día 2', 'Machu Picchu al amanecer', 'Retorno a Cusco'],
    itinerarioDetallado: [
      'Llegada a Cusco (3.400m). Día de aclimatación suave. Visita a la Plaza de Armas, Catedral y Qoricancha. Té de coca para la altura.',
      'Excursión al Valle Sagrado. Pisac y su mercado artesanal. Ollantaytambo, fortaleza inca viviente. Aclimatación progresiva.',
      'Inicio del Camino Inca clásico. Km 82. Trekking de 12 km hasta el primer campamento. Vistas de nevados. Cena bajo las estrellas.',
      'Día más exigente: ascenso al paso Warmiwañusca (4.200m). Descenso a campamento. Paisajes de puna y bosque nuboso. 16 km de recorrido.',
      'Salida a las 4am para llegar a la Puerta del Sol. Amanecer mágico sobre Machu Picchu. Tour completo de 3 horas por la ciudadela.',
      'Tren panorámico de regreso a Cusco. Tarde libre en Cusco para compras y descanso. Cena de celebración en restaurante típico.'
    ],
    condiciones: 'Entrada incluida, equipo de camping. Muy buena condición física requerida.',
    guia: { nombre: 'Pedro Mamani', edad: '35 años', experiencia: '11 años de experiencia', experiencias: 'Guía oficial Machu Picchu', idiomas: 'Español, Inglés, Quechua', contacto: '+51 965 432 187', redesSociales: ['<img src="images/redes_sociales/instagram.png" alt="Instagram"/>', '<img src="images/redes_sociales/facebook.png" alt="Facebook"/>', '<img src="images/redes_sociales/linkedin.png" alt="LinkedIn"/>'], valoracion: 4, avatar: 'images/avatar-pedro.jpg' }
  },
  { 
    destino: 'Japón', duracion: 5, precio: 900, tipo: 'Cultural', mascotas: 'si', valoracion: 5, imagen: 'images/kioto.jpg', titulo: 'Kioto Tradicional',
    dietasDisponibles: ['vegano', 'vegetariano', 'sin-gluten', 'sin-lactosa', 'halal'],
    galeria: ['images/kioto.jpg', 'images/kioto.jpg', 'images/kioto.jpg', 'images/kioto.jpg', 'images/kioto.jpg', 'images/kioto.jpg'],
    itinerario: ['Ceremonia del té', 'Templo Dorado y Fushimi Inari', 'Distrito Gion y kimono', 'Excursión a Nara', 'Día libre'],
    itinerarioDetallado: [
      'Llegada a Kioto. Ceremonia tradicional del té en casa de té histórica. Aprende la filosofía del Chado y disfruta matcha auténtico.',
      'Visita al deslumbrante Kinkaku-ji (Templo Dorado). Tarde en Fushimi Inari con sus 10.000 torii rojos. Ascenso opcional a la montaña.',
      'Paseo matutino por Gion, distrito de geishas. Clase de vestir kimono correctamente. Sesión fotográfica profesional por calles tradicionales.',
      'Excursión a Nara en tren. Templo Todai-ji con su Buda gigante. Interacción con los ciervos sagrados del parque. Regreso a Kioto.',
      'Día libre para explorar a tu ritmo. Sugerencias: Arashiyama, Bamboo Grove, templo Ryoan-ji. Shopping en Gion o Nishiki Market.'
    ],
    condiciones: 'Incluye entradas, ceremonia del té y kimono. Mascotas pequeñas permitidas.',
    guia: { nombre: 'Yuki Tanaka', edad: '30 años', experiencia: '7 años de experiencia', experiencias: 'Experta en ceremonias tradicionales', idiomas: 'Japonés, Inglés, Español', contacto: '+81 90 1234 5678', redesSociales: ['<img src="images/redes_sociales/instagram.png" alt="Instagram"/>', '<img src="images/redes_sociales/facebook.png" alt="Facebook"/>', '<img src="images/redes_sociales/linkedin.png" alt="LinkedIn"/>'], valoracion: 5, avatar: 'images/avatar-yuki.jpg' },
    reseñas: []
  },
  { 
    destino: 'Japón', duracion: 15, precio: 400, tipo: 'Turístico', mascotas: 'no', valoracion: 4, imagen: 'images/japon.jpg', titulo: 'Japón Completo',
    dietasDisponibles: ['vegano', 'vegetariano', 'sin-pescado', 'sin-gluten', 'halal'],
    galeria: ['images/japon.jpg', 'images/japon.jpg', 'images/japon.jpg', 'images/japon.jpg', 'images/japon.jpg', 'images/japon.jpg'],
    itinerario: ['Tokio: Shibuya', 'Asakusa y Akihabara', 'Monte Fuji', 'Kioto: templos', 'Arashiyama', 'Osaka: castillo', 'Nara', 'Hiroshima', 'Miyajima', 'Vuelta a Tokio', 'TeamLab', 'Harajuku', 'Compras', 'Tsukiji', 'Despedida'],
    itinerarioDetallado: [
      'Llegada a Tokio. Cruce de Shibuya, el más transitado del mundo. Torre Hachiko. Exploración nocturna de Shinjuku y sus neones.',
      'Templo Senso-ji en Asakusa. Compras en Nakamise-dori. Tarde en Akihabara, paraíso del anime y tecnología. Visita a maid café.',
      'Excursión al Monte Fuji y lago Kawaguchi. Si el clima permite, vistas espectaculares. Paseo en barco y onsen tradicional.',
      'Tren bala a Kioto. Templos clásicos: Kiyomizu-dera y sus vistas. Paseo filosófico y Ginkaku-ji (Pabellón de Plata).',
      'Arashiyama: bosque de bambú mágico. Templo Tenryu-ji. Puente Togetsukyo. Posibilidad de ver monos en Iwatayama.',
      'Tren a Osaka. Castillo de Osaka y museo. Noche en Dōtonbori, zona de comida callejera. Prueba takoyaki y okonomiyaki.',
      'Excursión a Nara. Todai-ji y Buda gigante. Alimentar ciervos. Santuario Kasuga Taisha con linternas. Regreso a Osaka.',
      'Tren a Hiroshima. Memorial de la Paz y Museo Conmovedor. Domo de la Bomba Atómica. Parque de la Paz y cenotafio.',
      'Ferry a Miyajima. Torii flotante de Itsukushima. Templo patrimonio UNESCO. Ascenso en teleférico al Monte Misen. Regreso.',
      'Shinkansen de vuelta a Tokio. Tarde libre. Sugerencia: Odaiba para compras o explorar barrios como Shimokitazawa.',
      'TeamLab Borderless: museo de arte digital inmersivo. Experiencia futurista con proyecciones interactivas. Tarde en Odaiba.',
      'Harajuku y Takeshita Street: moda kawaii. Omotesando para tiendas de diseño. Parque Yoyogi si hay festival.',
      'Día de compras libre. Ginza para lujo, Shibuya para moda joven, Don Quijote para souvenirs locos. Empaque de maletas.',
      'Mercado exterior de Tsukiji. Desayuno de sushi fresco. Paseo final por Ginza. Últimas compras de recuerdos.',
      'Check out y traslado al aeropuerto. Sayonara Japón. Entrega de regalos de despedida del tour.'
    ],
    condiciones: 'JR Pass incluido. Nivel físico medio. Largas caminatas diarias.',
    guia: { nombre: 'Kenji Yamamoto', edad: '42 años', experiencia: '16 años de experiencia', experiencias: 'Especialista en tours completos', idiomas: 'Japonés, Inglés, Mandarín', contacto: '+81 80 9876 5432', redesSociales: ['<img src="images/redes_sociales/instagram.png" alt="Instagram"/>', '<img src="images/redes_sociales/facebook.png" alt="Facebook"/>', '<img src="images/redes_sociales/linkedin.png" alt="LinkedIn"/>'], valoracion: 4, avatar: 'images/pirineos.jpg' },
    reseñas: []
  },

  {
  destino: 'Argentina', duracion: 10, precio: 1200, tipo: 'Aventura', mascotas: 'no', valoracion: 5, imagen: 'images/patagonia.jpg', titulo: 'Patagonia: Glaciares y Montañas',
  dietasDisponibles: ['vegano', 'vegetariano', 'sin-gluten'],
  galeria: ['images/patagonia.jpg','images/patagonia.jpg','images/patagonia.jpg'],
    itinerario: ['El Calafate', 'Glaciar Perito Moreno', 'Ushuaia', 'Trekking en Torres del Paine'],
    itinerarioDetallado: ['Llegada a El Calafate y visita al glaciar.', 'Excursión al Perito Moreno con navegación.', 'Traslado a Ushuaia y actividades en el fin del mundo.', 'Trekking y observación de fauna.'],
    condiciones: 'Incluye traslados y alojamiento. Nivel físico medio-alto.',
    guia: { nombre: 'Laura Pérez', edad: '36 años', experiencia: '10 años', experiencias: 'Guía en Patagonia', idiomas: 'Español, Inglés', contacto: '+54 9 11 2345 6789', redesSociales: ['<img src="images/redes_sociales/instagram.png" alt="Instagram"/>', '<img src="images/redes_sociales/facebook.png" alt="Facebook"/>', '<img src="images/redes_sociales/linkedin.png" alt="LinkedIn"/>'], valoracion: 5, avatar: 'images/avatar-laura.jpg' },
    reseñas: [ { nombre: 'María R.', comentario: 'Paisajes impresionantes y guía excepcional.' } ]
  },
  {
    destino: 'Maldivas', duracion: 7, precio: 1500, tipo: 'Organizado', mascotas: 'no', valoracion: 5, imagen: 'images/maldivas.jpg', titulo: 'Maldivas: Paraíso y Relax',
    dietasDisponibles: ['vegano','vegetariano'],
    galeria: ['images/maldivas.jpg','images/maldivas.jpg','images/maldivas.jpg'],
    itinerario: ['Resort y actividades acuáticas', 'Snorkel y buceo', 'Excursión a islas cercanas'],
    itinerarioDetallado: ['Llegada al resort y acomodación.', 'Día de actividades acuáticas y snorkel.', 'Excursión a islas locales y cultura.', 'Relax y salida.'],
    condiciones: 'Incluye alojamiento en resort y desayunos.',
    guia: { nombre: 'Ahmed Ali', edad: '30 años', experiencia: '8 años', experiencias: 'Guía local en islas', idiomas: 'Inglés', contacto: '+960 777 1234', redesSociales: ['<img src="images/redes_sociales/instagram.png" alt="Instagram"/>', '<img src="images/redes_sociales/facebook.png" alt="Facebook"/>', '<img src="images/redes_sociales/linkedin.png" alt="LinkedIn"/>'], valoracion: 5, avatar: 'images/avatar-ahmed.jpg' },
    reseñas: [ { nombre: 'Laura G.', comentario: 'Un paraíso, servicio excelente.' } ]
  },
  {
    destino: 'Argentina', duracion: 6, precio: 900, tipo: 'Turístico', mascotas: 'no', valoracion: 4, imagen: 'images/cataratas_iguazu.jpg', titulo: 'Cataratas del Iguazú y Selva',
    dietasDisponibles: ['vegetariano','sin-gluten'],
    galeria: ['images/cataratas_iguazu.jpg','images/cataratas_iguazu.jpg'],
    itinerario: ['Visita a las cataratas', 'Recorrido por la selva', 'Excursiones en lancha'],
    itinerarioDetallado: ['Excursión a las pasarelas de las cataratas.', 'Paseo en lancha por la garganta del diablo.', 'Ruta por la selva con guía especializado.'],
    condiciones: 'Incluye entradas y transporte.',
    guia: { nombre: 'Diego Morales', edad: '40 años', experiencia: '12 años', experiencias: 'Guía de naturaleza', idiomas: 'Español, Portugués', contacto: '+54 9 377 123 456', redesSociales: ['<img src="images/redes_sociales/instagram.png" alt="Instagram"/>', '<img src="images/redes_sociales/facebook.png" alt="Facebook"/>', '<img src="images/redes_sociales/linkedin.png" alt="LinkedIn"/>'], valoracion: 4, avatar: 'images/avatar-diego.jpg' },
    reseñas: [ { nombre: 'Carlos V.', comentario: 'Impresionante y bien organizado.' } ]
  }
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

  // Hacer que las tarjetas de "Viajes en grupo" en Home abran la ficha de detalles
  // Asociamos dinámicamente cada tarjeta con un viaje del array `viajes` (añadidos al final)
  const tarjetasHome = document.querySelectorAll('.columna-tarjeta .tarjeta');
  if (tarjetasHome && tarjetasHome.length > 0) {
    // Los tres últimos viajes del array se utilizarán para las tarjetas del home
    tarjetasHome.forEach((tarjeta, i) => {
      tarjeta.style.cursor = 'pointer';
      tarjeta.addEventListener('click', () => {
        // Calcular índice del viaje correspondiente (últimos N del array)
        const offset = viajes.length - tarjetasHome.length;
        const viajeIndex = Math.max(0, offset + i);
        const viaje = viajes[viajeIndex];
        if (viaje) {
          localStorage.setItem('viajeSeleccionado', JSON.stringify(viaje));
          // Marcar que venimos del home (no del listado)
          localStorage.setItem('origenViaje', 'home');
          // Redirigir a la página de detalles
          window.location.href = 'detalles_viaje.html';
        }
      });
    });
  }
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
  // Priorizar los viajes filtrados actuales (después de aplicar filtros en la página), luego los de la búsqueda inicial
  const viajesFiltradosActuales = JSON.parse(localStorage.getItem('viajesFiltradosActuales'));
  const viajesFiltrados = viajesFiltradosActuales || JSON.parse(localStorage.getItem('viajesFiltrados')) || viajes;
  // Limpiar los filtrados actuales si se usaron (para que la próxima búsqueda desde home funcione correctamente)
  if (viajesFiltradosActuales) {
    localStorage.removeItem('viajesFiltradosActuales');
  }
  const columnaListado = document.querySelector('.columna-listado-viajes');
  const ratings = {5: '★★★★★', 4: '★★★★☆', 3: '★★★☆☆'};
  let currentFiltrados = [...viajesFiltrados];     // Copia de los viajes filtrados inicialmente

  // Función para renderizar los viajes
  function renderViajes(filtrados) {
    columnaListado.innerHTML = '';
    filtrados.forEach((viaje, index) => {
      const div = document.createElement('div');   // Crear un nuevo div para cada viaje
      div.className = 'viaje';
      div.setAttribute('data-destino', viaje.destino);
      div.setAttribute('data-duracion', viaje.duracion);
      div.setAttribute('data-precio', viaje.precio);
      div.setAttribute('data-tipo', viaje.tipo);
      div.setAttribute('data-mascotas', viaje.mascotas);
      div.setAttribute('data-valoracion', viaje.valoracion);
      div.setAttribute('data-index', index);  // Guardar el índice del viaje
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
      
      // Agregar evento al botón "Ver detalles"
      const botonVerDetalles = div.querySelector('.ver-detalles');
      botonVerDetalles.addEventListener('click', () => {
        // Guardar el viaje seleccionado y los viajes filtrados actuales en localStorage
        localStorage.setItem('viajeSeleccionado', JSON.stringify(viaje));
        localStorage.setItem('viajesFiltradosActuales', JSON.stringify(currentFiltrados));
        // Guardar el índice del viaje en el array filtrado actual
        localStorage.setItem('indiceViajeSeleccionado', index.toString());    //index.toString() convierte el índice a cadena
        // Marcar que venimos del listado
        localStorage.setItem('origenViaje', 'listado');
        // Redirigir a la página de detalles
        window.location.href = 'detalles_viaje.html';
      });
      
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
  
  // Obtener el viaje seleccionado desde localStorage
  const viajeSeleccionado = JSON.parse(localStorage.getItem('viajeSeleccionado'));
  
  // Si no hay viaje seleccionado, redirigir a la página de listado
  if (!viajeSeleccionado) {
    window.location.href = 'listado_viajes.html';
  }
  
  // Botón de vuelta atrás - detectar si viene del home o del listado
  const botonVueltaAtras = document.querySelector('.columna-boton-atras-detalles button');
  if (botonVueltaAtras) {
    botonVueltaAtras.addEventListener('click', () => {
      const origen = localStorage.getItem('origenViaje');
      
      // Limpiar indicadores
      localStorage.removeItem('viajeReservaOrigen');
      localStorage.removeItem('indiceViajeSeleccionado');
      localStorage.removeItem('origenViaje');
      
      // Redirigir según el origen
      // Si venimos del home, redirigir a home.html; si venimos del listado, redirigir a listado_viajes.html
      if (origen === 'home') {
        window.location.href = 'home.html';
      } else {
        window.location.href = 'listado_viajes.html';
      }
    });
  }
  
  // Actualizar el título con el nombre del viaje
  const tituloDetalles = document.querySelector('.titulo-detalles h1');
  if (tituloDetalles && viajeSeleccionado) {
    tituloDetalles.textContent = viajeSeleccionado.titulo;
  }
  
  // Función para cargar la galería de imágenes
  function cargarGaleria(imagenes = []) {
    const galeria = document.querySelector('.galeria-imagenes');
    if (!galeria) return;
    
    galeria.innerHTML = ''; // Limpiar galería
    
    // Si no hay imágenes, usar la imagen principal 6 veces
    const imagenesGaleria = imagenes.length > 0 ? imagenes : Array(6).fill(viajeSeleccionado.imagen);
    
    // Crear los divs de imagen y asignar background
    imagenesGaleria.forEach((urlImagen, index) => {
      const divImagen = document.createElement('div');
      divImagen.className = 'imagen';
      divImagen.style.backgroundImage = `url('${urlImagen}')`;
      galeria.appendChild(divImagen);
    });
  }
  
  // Cargar la galería del viaje seleccionado
  if (viajeSeleccionado) {
    cargarGaleria(viajeSeleccionado.galeria || []);
  }
  
  // Función para generar el itinerario dinámicamente
  function generarItinerario(numeroDias, actividades = [], detalles = []) {
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

      botonmasdetalles.addEventListener('click', () => {    // Evento al hacer clic en el botón "Más detalles"
        const detalleTexto = detalles[i-1] || 'No hay información detallada disponible para este día.';     // Usar el detalle definido o un mensaje por defecto
        alert(`Día ${i}\n\n${detalleTexto}`);
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
      experiencias = 'Experiencias',
      idiomas = 'Idiomas',
      contacto = '+XX XXX XXX XXX',
      redesSociales = ['<img src="images/redes_sociales/instagram.png" alt="Instagram"/>', '<img src="images/redes_sociales/facebook.png" alt="Facebook"/>', '<img src="images/redes_sociales/linkedin.png" alt="LinkedIn"/>'],
      valoracion = 5,
      avatar = ''
    } = guia;
    
    // Crear sección de info básica
    const infoGuiaDiv = document.createElement('div');
    infoGuiaDiv.className = 'info-guia';
    
    // Crear avatar
    const avatarDiv = document.createElement('div');
    avatarDiv.className = 'avatar';
    
    // Si hay imagen de avatar, añadirla
    if (avatar) {
      const avatarImg = document.createElement('img');
      avatarImg.src = avatar;
      avatarImg.alt = `Avatar de ${nombre}`;
      avatarDiv.appendChild(avatarImg);
    }
    
    // Crear sección de texto info básica
    const infoTexto = document.createElement('div');
    infoTexto.className = 'info-guia-texto';
    infoTexto.innerHTML = `
      <p>${nombre}</p>
      <p>${edad}</p>
      <p>${experiencia}</p>
    `;
    
    // Agregar avatar e info texto al div de info básica
    infoGuiaDiv.appendChild(avatarDiv);
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
      // Añadir el icono de red social al span
      span_redes_sociales.innerHTML = icono;
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

  // Generar el contenido del viaje seleccionado
  if (viajeSeleccionado) {
    // Generar itinerario con los datos del viaje
    generarItinerario(
      viajeSeleccionado.duracion, 
      viajeSeleccionado.itinerario || [], 
      viajeSeleccionado.itinerarioDetallado || []
    );
    
    // Generar condiciones del viaje
    generarCondiciones(viajeSeleccionado.condiciones || '');
    
    // Generar información del guía
    generarInfoGuia(viajeSeleccionado.guia || {});
  }


  // Función para obtener reseñas del viaje seleccionado
  function obtenerReseñas(viaje) {
    const clave = 'reseñas_' + viaje.titulo;
    const reseñasGuardadas = localStorage.getItem(clave);
    return reseñasGuardadas ? JSON.parse(reseñasGuardadas) : (viaje.reseñas || []);
  }

  // Función para guardar reseñas del viaje seleccionado
  function guardarReseñas(viaje, reseñas) {
    const clave = 'reseñas_' + viaje.titulo;
    localStorage.setItem(clave, JSON.stringify(reseñas));
  }

  // Obtener reseñas del viaje seleccionado
  let reseñasViaje = obtenerReseñas(viajeSeleccionado);

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
  generarReseñasIniciales(reseñasViaje);

  // Configurar el modal
  const modal = document.querySelector('.modal-reseñas');
  const botonVerMas = document.querySelector('.boton-ver-mas');
  const botonCerrar = document.querySelector('.modal-cerrar');

  // Abrir modal al hacer clic en "Ver más reseñas"
  botonVerMas.addEventListener('click', () => {
    mostrarTodasReseñas(reseñasViaje);
    modal.style.display = 'block';
    document.body.classList.add('modal-abierto');      // Bloquear scroll del body
  });

  // Cerrar modal al hacer clic en la X
  botonCerrar.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.classList.remove('modal-abierto');   // Restaurar scroll del body
  });

  // Evento para enviar reseña
  const enviarReseñaBoton = document.getElementById('enviar-reseña');
  const nombreReseñaInput = document.getElementById('nombre-reseña');
  const comentarioReseñaInput = document.getElementById('comentario-reseña');

  enviarReseñaBoton.addEventListener('click', () => {
    const nombre = nombreReseñaInput.value.trim();          // Obtener y limpiar el nombre
    const comentario = comentarioReseñaInput.value.trim();  // Obtener y limpiar el comentario

    // Limpiar validaciones previas
    nombreReseñaInput.setCustomValidity('');
    comentarioReseñaInput.setCustomValidity('');

    // Validar campos
    if (!nombre) {
      nombreReseñaInput.setCustomValidity('El nombre es obligatorio.');
      nombreReseñaInput.reportValidity();
      return;
    }
    if (!comentario) {
      comentarioReseñaInput.setCustomValidity('El comentario es obligatorio.');
      comentarioReseñaInput.reportValidity();
      return;
    }

    // Agregar nueva reseña
    const nuevaReseña = { nombre, comentario };
    reseñasViaje.push(nuevaReseña);

    // Guardar en localStorage
    guardarReseñas(viajeSeleccionado, reseñasViaje);

    // Limpiar campos
    nombreReseñaInput.value = '';
    comentarioReseñaInput.value = '';

    // Actualizar reseñas mostradas
    generarReseñasIniciales(reseñasViaje);
  });

  // Botón "Reservar ahora" - guardar índice del viaje y redirigir
  const botonReservar = document.querySelector('.boton-reservar');
  if (botonReservar) {
    botonReservar.addEventListener('click', () => {
      // Guardar el índice del viaje actual para poder volver
      const indiceViaje = localStorage.getItem('indiceViajeSeleccionado');
      if (indiceViaje) {
        localStorage.setItem('viajeReservaOrigen', indiceViaje);
      }
      // Redirigir al formulario de compra
      window.location.href = 'formulario_compra.html';
    });
  }
}


/*Página de formulario en general*/
// Botón de vuelta atrás en formulario_compra
if (window.location.pathname.includes("formulario_compra")) {
  const botonVueltaAtras = document.querySelector('.columna-boton-atras-detalles button');
  if (botonVueltaAtras) {
    botonVueltaAtras.addEventListener('click', () => {
      // Verificar si venimos de detalles de viaje
      const indiceViajeOrigen = localStorage.getItem('viajeReservaOrigen');
      
      if (indiceViajeOrigen && window.location.pathname.includes("formulario_compra.html")) {
        // Si estamos en paso 1, volver a detalles del viaje
        localStorage.setItem('indiceViajeSeleccionado', indiceViajeOrigen);
        window.location.href = 'detalles_viaje.html';
      } else {
        // Para otros pasos o si no hay viaje origen, volver atrás en el historial
        window.history.back();
      }
    });
  }
}



/*Página formulario_compra.html*/
if (window.location.pathname.includes("formulario_compra.html")) {
  // Funcionalidad del formulario de compra - Paso 1
  const formularioPaso1 = document.querySelector('.formulario-pasos form');

  if (formularioPaso1) {
    // Obtener elementos DOM de los campos
    const nombreInput = document.querySelector('.etiqueta input[placeholder="Nombre y apellidos"]');
    const fechaInput = document.querySelector('.etiqueta input[type="date"]');
    const telefonoInput = document.querySelector('.etiqueta input[placeholder="Teléfono"]');
    const nacionalidadInput = document.querySelector('.etiqueta input[placeholder="Nacionalidad"]');
    const correoInput = document.querySelector('.etiqueta input[placeholder="Correo electrónico"]');
    const direccionInput = document.querySelector('.etiqueta input[placeholder="Dirección"]');

    // Validar que el nombre y apellido tenga al menos dos palabras de 3 caracteres o más
    if (nombreInput) {
      nombreInput.addEventListener("input", () => {
        const partesNombreApellido = nombreInput.value.trim().split(" ");
        const Valido = partesNombreApellido.filter(partes => partes.length >= 3).length >= 2;

        if (!Valido) {
          nombreInput.setCustomValidity("El nombre y apellido debe estar compuesto por al menos dos palabras de 3 caracteres o más");
        } else {
          nombreInput.setCustomValidity("");
        }
      });
    }

    // Validar formato de correo electrónico
    if (correoInput) {
      correoInput.addEventListener("input", () => {
        const regexCorreo = /^[\w-_.\+]{1,255}@([\w\d]+\.)+[A-Za-z]{2,3}$/;
        if (!regexCorreo.test(correoInput.value)) {
          correoInput.setCustomValidity("El correo electrónico no tiene un formato válido tipo nombre@dominio.extension");
        } else {
          correoInput.setCustomValidity("");
        }
      });
    }

    // Validar formato de teléfono (mínimo 9 dígitos)
    if (telefonoInput) {
      telefonoInput.addEventListener("input", () => {
        const telefonoRegex = /^\d{9,}$/;
        if (!telefonoRegex.test(telefonoInput.value.replace(/\s/g, ''))) {
          telefonoInput.setCustomValidity("El número de teléfono debe contener al menos 9 dígitos");
        } else {
          telefonoInput.setCustomValidity("");
        }
      });
    }

    // Validar que la fecha de nacimiento sea válida
    if (fechaInput) {
      fechaInput.addEventListener("input", () => {
        const fechaActual = new Date();
        const fechaIngresada = new Date(fechaInput.value);
        if (fechaIngresada >= fechaActual) {
          fechaInput.setCustomValidity("La fecha de nacimiento debe ser una fecha válida en el pasado");
        } else {
          fechaInput.setCustomValidity("");
        }
      });
    }

    // Validar nacionalidad (solo letras, espacios y guiones, mínimo 3 caracteres)
    if (nacionalidadInput) {
      nacionalidadInput.addEventListener("input", () => {
        const regexNacionalidad = /^[A-Za-zñÑ\s-]{3,}$/;
        if (!regexNacionalidad.test(nacionalidadInput.value.trim())) {
          nacionalidadInput.setCustomValidity("Introduce una nacionalidad válida (solo letras y espacios, mínimo 3 caracteres)");
        } else {
          nacionalidadInput.setCustomValidity("");
        }
      });
    }

    // Validar dirección (mínimo 5 caracteres y al menos una letra)
    if (direccionInput) {
      direccionInput.addEventListener("input", () => {
        const regexDireccion = /^(?=.*[0-9])[A-Za-z0-9\s.,#-]{5,}$/;
        if (!regexDireccion.test(direccionInput.value.trim())) {
          direccionInput.setCustomValidity("Introduce una dirección válida (mínimo 5 caracteres y al menos un numero)");
        } else {
          direccionInput.setCustomValidity("");
        }
      });
    }

    // Manejar el envío del formulario
    formularioPaso1.addEventListener('submit', function(e) {
      e.preventDefault();
      // Comprobar validez de todo el formulario antes de procesar
      if (!formularioPaso1.checkValidity()) {
        formularioPaso1.reportValidity();
        return;
      }

      // Obtener valores de los campos
      const nombre = nombreInput.value.trim();
      const fecha = fechaInput.value;
      const telefono = telefonoInput.value.trim();
      const nacionalidad = nacionalidadInput.value.trim();
      const correo = correoInput.value.trim();
      const direccion = direccionInput.value.trim();

      // Crear objeto con los datos del paso 1
      const datosPaso1 = {
        nombre: nombre,
        fechaNacimiento: fecha,
        telefono: telefono,
        nacionalidad: nacionalidad,
        correo: correo,
        direccion: direccion,
      };

      // Guardar en localStorage
      localStorage.setItem('formularioCompraPaso1', JSON.stringify(datosPaso1));

      // Mensaje de éxito y redirección
      alert('Datos guardados correctamente. Ahora serás redirigido al siguiente paso.');
      window.location.href = 'formulario_compra2.html';
    });
  }
}



/*Página formulario_compra2.html*/
if (window.location.pathname.includes("formulario_compra2.html")) {
  
  // Obtener el viaje seleccionado desde localStorage
  const viajeSeleccionado = JSON.parse(localStorage.getItem('viajeSeleccionado'));
  
  if (!viajeSeleccionado) {
    alert('No se ha seleccionado ningún viaje');
    window.location.href = 'listado_viajes.html';
  }

  // Catálogo completo de dietas con iconos
  const catalogoDietas = {
    'vegano': { nombre: 'Vegano', icono: 'images/dietas/vegano.jpg' },
    'vegetariano': { nombre: 'Vegetariano', icono: 'images/dietas/vegetariano.jpg' },
    'sin-gluten': { nombre: 'Sin gluten', icono: 'images/dietas/sin-gluten.jpg' },
    'sin-lactosa': { nombre: 'Sin lactosa', icono: 'images/dietas/sin-lactosa.jpg' },
    'sin-pescado': { nombre: 'Sin pescado', icono: 'images/dietas/sin-pescado.jpg' },
    'sin-frutos-secos': { nombre: 'Sin frutos secos', icono: 'images/dietas/sin-frutos-secos.png' },
    'sin-huevo': { nombre: 'Sin huevo', icono: 'images/dietas/sin-huevo.jpg' },
    'halal': { nombre: 'Halal', icono: 'images/dietas/halal.jpg' },
  };

  // Obtener las dietas disponibles para este viaje
  const dietasDelViaje = viajeSeleccionado.dietasDisponibles || [];
  const contenedorDietas = document.querySelector('.dietas');

  // Renderizar dietas del viaje
  function renderizarDietasDelViaje() {
    contenedorDietas.innerHTML = '';
    
    // Si no hay dietas, mostrar mensaje
    if (dietasDelViaje.length === 0) {
      contenedorDietas.innerHTML = '<p>No hay dietas específicas disponibles para este viaje</p>';
      return;
    }

    // Mostrar las primeras 4 dietas
    const dietasMostrar = dietasDelViaje.slice(0, 4);
    
    // Crear elementos para cada dieta
    dietasMostrar.forEach(dietaId => {
      const dieta = catalogoDietas[dietaId];
      if (dieta) {
        // Crear elemento para la dieta
        const dietaItem = document.createElement('div');
        dietaItem.className = 'dieta-item';
        // Rellenar contenido
        dietaItem.innerHTML = `
          <div class="dieta-icon" style="background-image: url('${dieta.icono}')"></div>
          <span class="dieta-label">${dieta.nombre}</span>
        `;
        contenedorDietas.appendChild(dietaItem);
      }
    });
    
    // Si hay más de 4 dietas, añadir botón de modal
    if (dietasDelViaje.length > 4) {
      const botonModal = document.createElement('button');
      botonModal.className = 'dieta-modal';
      botonModal.type = 'button';
      botonModal.textContent = '...';                             // Texto del botón
      botonModal.addEventListener('click', abrirModalDietas);
      contenedorDietas.appendChild(botonModal);
    }
  }

  renderizarDietasDelViaje();

  // Modal de dietas - mostrar todas las dietas del viaje
  function abrirModalDietas() {
    const modal = document.createElement('div');
    modal.className = 'modal-dietas';
    modal.innerHTML = `
      <div class="modal-contenido">
        <h3>Dietas disponibles para este viaje</h3>
        <div class="modal-dietas-container"></div>
        <button class="cerrar-modal" type="button">Cerrar</button>
      </div>
    `;
    
    document.body.appendChild(modal);
    
    // Rellenar el contenido del modal con todas las dietas
    const container = modal.querySelector('.modal-dietas-container');
    dietasDelViaje.forEach(dietaId => {
      const dieta = catalogoDietas[dietaId];
      if (dieta) {
        const dietaItem = document.createElement('div');
        dietaItem.className = 'dieta-item-modal';
        dietaItem.innerHTML = `
          <div class="dieta-icon" style="background-image: url('${dieta.icono}')"></div>
          <span class="dieta-label">${dieta.nombre}</span>
        `;
        container.appendChild(dietaItem);
      }
    });
    
    // Eventos para cerrar el modal
    modal.querySelector('.cerrar-modal').addEventListener('click', () => {
      modal.remove();
    });
  }

  // Gestión de acompañantes
  const columnaAcompañantes = document.querySelector('.columna-acompañantes');
  const botonAñadirAcompañante = columnaAcompañantes.querySelector('.boton-añadir');

  // Función para aplicar validaciones a inputs de acompañante
  function aplicarValidacionesAcompañante(nombreInput, correoInput) {
    // Validar nombre y apellido (al menos 2 palabras de 3+ caracteres)
    nombreInput.addEventListener("input", () => {
      const partesNombreApellido = nombreInput.value.trim().split(" ");
      const valido = partesNombreApellido.filter(parte => parte.length >= 3).length >= 2;

      if (!valido) {
        nombreInput.setCustomValidity("El nombre y apellido debe estar compuesto por al menos dos palabras de 3 caracteres o más");
      } else {
        nombreInput.setCustomValidity("");
      }
    });

    // Validar formato de correo electrónico
    correoInput.addEventListener("input", () => {
      const regexCorreo = /^[\w-_.\+]{1,255}@([\w\d]+\.)+[A-Za-z]{2,3}$/;
      if (!regexCorreo.test(correoInput.value)) {
        correoInput.setCustomValidity("El correo electrónico no tiene un formato válido tipo nombre@dominio.extension");
      } else {
        correoInput.setCustomValidity("");
      }
    });
  }

  // Validar inputs de acompañante iniciales (se usa mas adelante para llamar a .checkValidity())
  const nombreAcompañante = columnaAcompañantes.querySelector('input[placeholder="Nombre y apellidos"]');
  const correoAcompañante = columnaAcompañantes.querySelector('input[placeholder="Correo electrónico"]');
  
  // Guardar referencias para validaciones en el botón siguiente
  if (nombreAcompañante && correoAcompañante) {
    aplicarValidacionesAcompañante(nombreAcompañante, correoAcompañante);
  }

  // Función para añadir nuevos campos de acompañante
  function añadirCamposAcompañante() {
    const nuevoAcompañante = document.createElement('div');
    nuevoAcompañante.className = 'grupo-acompañante';
    nuevoAcompañante.innerHTML = `
      <div class="input-icon">
        <input type="text" placeholder="Nombre y apellidos" required>
        <span class="icon">👤</span>
      </div>
      <div class="input-icon">
        <input type="email" placeholder="Correo electrónico" required>
        <span class="icon">📧</span>
      </div>
      <button class="boton-eliminar" type="button">Eliminar</button>
    `;
    
    // Insertar antes del botón de añadir
    columnaAcompañantes.insertBefore(nuevoAcompañante, botonAñadirAcompañante);
    
    // Aplicar validaciones al nuevo acompañante
    const nombre_input = nuevoAcompañante.querySelector('input[type="text"]');
    const correo_input = nuevoAcompañante.querySelector('input[type="email"]');
    aplicarValidacionesAcompañante(nombre_input, correo_input);
    
    // Evento para eliminar
    nuevoAcompañante.querySelector('.boton-eliminar').addEventListener('click', () => {
      nuevoAcompañante.remove();
    });
  }

  // Evento para añadir acompañante (botón)
  botonAñadirAcompañante.addEventListener('click', añadirCamposAcompañante);


  // Gestión de mascotas - mostrar/ocultar campos
  const radios = document.querySelectorAll('input[name="viajaMascota"]');     // Obtener los radio buttons
  const camposMascota = document.querySelector('.etiqueta2');                 // Obtener contenedor de campos de mascota
  const campoDocumentacion = document.querySelector('.subir-documentacion');  // Obtener campo de documentación

  // Ocultar campos inicialmente
  camposMascota.style.display = 'none';
  campoDocumentacion.style.display = 'none';

  // Evento para mostrar u ocultar campos según selección
  radios.forEach(radio => {
    radio.addEventListener('change', () => {
      // Si se selecciona "sí", mostrar campos; si "no", ocultar
      if (radio.value === 'si' && radio.checked) {
        camposMascota.style.display = 'flex';               // Usar flex para mantener el diseño
        campoDocumentacion.style.display = 'block';         // Mostrar campo de documentación
      } else if (radio.value === 'no' && radio.checked) {
        camposMascota.style.display = 'none';
        campoDocumentacion.style.display = 'none';
      }
    });
  });

  // Botón de vuelta atrás
  const botonVueltaAtras = document.querySelector('.columna-boton-atras-detalles button');
  if (botonVueltaAtras) {
    botonVueltaAtras.addEventListener('click', () => {
      window.location.href = 'formulario_compra.html';
    });
  }

  // Botón siguiente paso 
  const botonSiguiente = document.querySelector('.boton-next');
  if (botonSiguiente) {
    botonSiguiente.addEventListener('click', () => {
      // Validar el primer acompañante (opcional pero si hay contenido, debe estar completo)
      const nombreInicial = nombreAcompañante.value.trim();
      const emailInicial = correoAcompañante.value.trim();
      
      // Si hay contenido en uno pero no en el otro, es un error
      if ((nombreInicial && !emailInicial) || (!nombreInicial && emailInicial)) {
        alert('Si completas el primer acompañante, debes llenar tanto el nombre como el correo');
        // Si falta nombre, reportar validez del campo correspondiente
        if (!nombreInicial) nombreAcompañante.reportValidity();
        // Si falta correo, reportar validez del campo correspondiente
        else correoAcompañante.reportValidity();
        return;
      }
      
      // Si ambos campos tienen contenido, validar que sean válidos
      if (nombreInicial && !nombreAcompañante.checkValidity()) {
        nombreAcompañante.reportValidity();
        return;
      }
      
      if (emailInicial && !correoAcompañante.checkValidity()) {
        correoAcompañante.reportValidity();
        return;
      }
      
      // Validar los grupos añadidos dinámicamente (si tienen contenido, debe ser completo y válido)
      const gruposAcompañantes = document.querySelectorAll('.grupo-acompañante');
      let hayErroresEnGrupos = false;
      
      gruposAcompañantes.forEach(grupo => {
        const nombreInput = grupo.querySelector('input[type="text"]');
        const emailInput = grupo.querySelector('input[type="email"]');
        const nombre = nombreInput.value.trim();                        // Obtener y limpiar nombre
        const email = emailInput.value.trim();                          // Obtener y limpiar correo   
        
        // Si hay contenido en uno pero no en el otro, es un error
        if ((nombre && !email) || (!nombre && email)) {
          alert('Cada acompañante debe tener tanto nombre como correo, o dejar ambos vacíos');
          hayErroresEnGrupos = true;
          return;
        }
        
        // Si ambos tienen contenido, validar que sean válidos
        if (nombre && !nombreInput.checkValidity()) {
          nombreInput.reportValidity();
          hayErroresEnGrupos = true;
          return;
        }
        
        if (email && !emailInput.checkValidity()) {
          emailInput.reportValidity();
          hayErroresEnGrupos = true;
          return;
        }
      });
      
      // Si hubo errores en los grupos, no continuar
      if (hayErroresEnGrupos) {
        return;
      }

      // Recoger acompañantes válidos (solo los que estén completos)
      const datosAcompañantes = [];
      
      // Acompañante inicial (solo si está completo)
      if (nombreInicial && emailInicial) {
        datosAcompañantes.push({ nombre: nombreInicial, email: emailInicial });
      }
      
      // Grupos añadidos dinámicamente (solo si están completos)
      gruposAcompañantes.forEach(grupo => {
        const nombre_acompañante = grupo.querySelector('input[type="text"]').value.trim();
        const correo_acompañante = grupo.querySelector('input[type="email"]').value.trim();
        if (nombre_acompañante && correo_acompañante) {
          datosAcompañantes.push({ nombre: nombre_acompañante, email: correo_acompañante });
        }
      });

      // Validar selección de mascota (obligatorio seleccionar sí o no)
      const viajaMascota = document.querySelector('input[name="viajaMascota"]:checked')?.value;
      
      // Si no se ha seleccionado ninguna opción
      if (!viajaMascota) {
        alert('Debes seleccionar si viajas con mascota o no');
        return;
      }
      
      // Mascota inicialmente nula
      let datosMascota = null;
      
      if (viajaMascota === 'si') {
        const nombreMascota = camposMascota.querySelector('input[placeholder="Nombre de la mascota"]').value.trim();
        const tipoMascota = camposMascota.querySelector('input[placeholder="Tipo de mascota"]').value.trim();
        const documentacion = campoDocumentacion.querySelector('input[type="file"]').files[0];
        
        // Nombre y tipo son obligatorios si viaja con mascota
        if (!nombreMascota || !tipoMascota) {
          alert('Si viajas con mascota, debes completar el nombre y tipo de mascota');
          return;
        }
        
        // Crear objeto de datos de mascota
        datosMascota = {
          nombre: nombreMascota,
          tipo: tipoMascota,
          documentacion: documentacion ? documentacion.name : null  // Documentación es opcional
        };
      }

      // Recoger alergias
      const alergias = document.querySelector('.columna-alergias input[type="text"]').value.trim();

      // Crear objeto con todos los datos del paso 2
      const datosPaso2 = {
        acompañantes: datosAcompañantes,
        viajaMascota: viajaMascota,
        mascota: datosMascota,
        alergias: alergias
      };

      // Guardar en localStorage
      localStorage.setItem('formularioCompraPaso2', JSON.stringify(datosPaso2));

      // Redirigir al paso 3
      alert('Datos guardados correctamente. Ahora serás redirigido al siguiente paso.');
      window.location.href = 'formulario_compra3.html';
    });
  }
}



/*Página formulario_compra3.html*/
// Botón de vuelta atrás
if (window.location.pathname.includes("formulario_compra3.html")) {   
  const botonVueltaAtras = document.querySelector('.columna-boton-atras-detalles button');
  if (botonVueltaAtras) {
    botonVueltaAtras.addEventListener('click', () => {
      window.location.href = 'formulario_compra2.html';
    });
  }

  // Obtener datos guardados
  const viajeSeleccionado = JSON.parse(localStorage.getItem('viajeSeleccionado'));
  const datosPaso2 = JSON.parse(localStorage.getItem('formularioCompraPaso2'));

  // Verificar que existan los datos
  if (!viajeSeleccionado) {
    alert('No se ha seleccionado ningún viaje');
    window.location.href = 'listado_viajes.html';
  } else {

    // Rellenar resumen del viaje
    function rellenarResumen() {
      // Destino
      document.querySelector('.info-fila .contenido').textContent = 
        viajeSeleccionado.titulo || viajeSeleccionado.destino;
      
      // Duración
      document.querySelectorAll('.info-fila')[1].querySelector('.contenido').textContent = 
        `${viajeSeleccionado.duracion} días`;
      
      // Tipo de viaje
      document.querySelectorAll('.info-fila')[2].querySelector('.contenido').textContent = 
        viajeSeleccionado.tipo;
      
      // Número de acompañantes
      const numAcompañantes = datosPaso2 && datosPaso2.acompañantes ? datosPaso2.acompañantes.length : 0;
      document.querySelectorAll('.info-fila')[3].querySelector('.contenido').textContent = numAcompañantes;
      
      // Mascotas
      let textoMascota = 'No';
      // Si viaja con mascota, si está disponible
      if (datosPaso2 && datosPaso2.viajaMascota === 'si') {
          textoMascota = `Sí`;                     
      }
    
      // Rellenar el campo de mascota
      document.querySelectorAll('.info-fila')[4].querySelector('.contenido').textContent = textoMascota;
      
      // Alergias
      const alergias = datosPaso2 && datosPaso2.alergias ? datosPaso2.alergias : 'Ninguna';
      document.querySelectorAll('.info-fila')[5].querySelector('.contenido').textContent = alergias;
      
      // Precio final
      const precioBase = viajeSeleccionado.precio;
      const precioAcompañantes = numAcompañantes * precioBase;
      const precioTotal = precioBase + precioAcompañantes;
      document.querySelector('.precio-final').textContent = `${precioTotal.toFixed(2)} €`;   // Formatear a 2 decimales
    }

    rellenarResumen();

    // Modal de divisas
    const modal = document.querySelector('.modal-divisas');
    const botonMasDivisas = document.querySelector('.mas-divisas');
    const botonCerrar = document.querySelector('.cerrar-modal');
    const botonesDivisaModal = document.querySelectorAll('.boton-divisa-modal');

    // Abrir modal al hacer clic en "..."
    if (botonMasDivisas) {
      botonMasDivisas.addEventListener('click', () => {
        modal.style.display = 'block';
      });
    }

    // Cerrar modal al hacer clic en X
    if (botonCerrar) {
      botonCerrar.addEventListener('click', () => {
        modal.style.display = 'none';
      });
    }

    // Nombres completos de las divisas
    const nombresDivisas = {
      'USD': 'el dólar americano',
      'EUR': 'el euro',
      'GBP': 'la libra esterlina',
      'JPY': 'el yen japonés',
      'CNY': 'el yuan chino',
      'CHF': 'el franco suizo',
      'CAD': 'el dólar canadiense',
      'AUD': 'el dólar australiano',
      'MXN': 'el peso mexicano',
      'SGD': 'el dólar de Singapur',
      'KRW': 'el won surcoreano',
      'INR': 'la rupia india'
    };

    // Seleccionar divisa del modal
    botonesDivisaModal.forEach(boton => {
      boton.addEventListener('click', () => {
        const codigoDivisa = boton.getAttribute('data-divisa');
        const nombreCompleto = nombresDivisas[codigoDivisa];
        
        console.log('Divisa seleccionada:', codigoDivisa);
        
        // Cerrar el modal
        modal.style.display = 'none';
        
        // Mostrar mensaje personalizado
        alert('Has seleccionado ' + nombreCompleto);
      });
    });

    // Modal de tarjeta bancaria
    const modalTarjeta = document.querySelector('.modal-tarjeta');
    const cerrarModalTarjeta = document.querySelector('.cerrar-modal-tarjeta');
    const formTarjeta = document.getElementById('formTarjeta');
    const radioTarjeta = document.querySelector('input[name="metodoPago"][value="tarjeta"]');

    // Abrir modal al seleccionar tarjeta bancaria
    if (radioTarjeta) {
      radioTarjeta.addEventListener('change', () => {
        if (radioTarjeta.checked) {
          modalTarjeta.style.display = 'block';
        }
      });
    }

    // Cerrar modal de tarjeta
    if (cerrarModalTarjeta) {
      cerrarModalTarjeta.addEventListener('click', () => {
        modalTarjeta.style.display = 'none';
        // Desmarcar el radio button si cierra sin guardar
        radioTarjeta.checked = false;
      });
    }

    // Validar número de tarjeta
    const numeroTarjetaInput = document.getElementById('numeroTarjeta');
    if (numeroTarjetaInput) {
      numeroTarjetaInput.addEventListener('input', () => {
        // Validar con regex 16 dígitos (debe tener espacios cada 4 dígitos)
        const regexTarjeta = /^\d{4}( \d{4}){3}$/;    
        if (!regexTarjeta.test(numeroTarjetaInput.value)) {
          numeroTarjetaInput.setCustomValidity('El número de tarjeta debe tener el formato XXXX XXXX XXXX XXXX');
        } else {
          numeroTarjetaInput.setCustomValidity('');
        }
      });
    }

    // Validar fecha de expiración
    const fechaExpiracionInput = document.getElementById('fechaExpiracion');
    if (fechaExpiracionInput) {
      fechaExpiracionInput.addEventListener('input', () => {
        // Validar con regex: formato MM/AA
        const regexFecha = /^(0[1-9]|1[0-2])\/\d{2}$/;
        if (fechaExpiracionInput.value.length === 5) {
          if (!regexFecha.test(fechaExpiracionInput.value)) {
            fechaExpiracionInput.setCustomValidity('La fecha debe estar entre 01 y 12 (formato MM/AA) y no debe estar expirada');
          } else {
            // Validar que no esté expirada
            const [mes, anio] = fechaExpiracionInput.value.split('/');
            const fechaActual = new Date();
            const mesActual = fechaActual.getMonth() + 1;                                    // Mes actual (0-11, por eso +1)          
            const anioActual = parseInt(fechaActual.getFullYear().toString().substring(2));  // Últimos dos dígitos del año
            const anioTarjeta = parseInt(anio);
            const mesTarjeta = parseInt(mes);
            
            // Si el año es menor o el mismo pero el mes es menor, está expirada
            if (anioTarjeta < anioActual || (anioTarjeta === anioActual && mesTarjeta < mesActual)) {
              fechaExpiracionInput.setCustomValidity('La tarjeta está expirada');
            } else {
              fechaExpiracionInput.setCustomValidity('');
            }
          }
        } else if (fechaExpiracionInput.value.length > 0) {     // Si hay algo escrito pero no tiene 5 caracteres
          fechaExpiracionInput.setCustomValidity('La fecha debe tener el formato MM/AA y no debe estar expirada');
        } else {
          fechaExpiracionInput.setCustomValidity('');
        }
      });
    }

    // Validar CVC
    const cvcInput = document.getElementById('cvc');
    if (cvcInput) {
      cvcInput.addEventListener('input', () => {
        // Validar exactamente 3 dígitos
        const regexCVC = /^\d{3}$/;
        if (!regexCVC.test(cvcInput.value)) {
          cvcInput.setCustomValidity('El CVC debe tener exactamente 3 dígitos');
        } else {
          cvcInput.setCustomValidity('');
        }
      });
    }

    // Guardar datos de tarjeta
    const botonGuardarTarjeta = document.querySelector('.boton-guardar-tarjeta');
    if (botonGuardarTarjeta) {
      botonGuardarTarjeta.addEventListener('click', () => {
        // Validar todos los campos con regex antes de guardar
        const regexTarjeta = /^\d{4}( \d{4}){3}$/;
        const regexFecha = /^(0[1-9]|1[0-2])\/\d{2}$/;
        const regexCVC = /^\d{3}$/;
        
        // Validar número de tarjeta
        if (!regexTarjeta.test(numeroTarjetaInput.value)) {
          numeroTarjetaInput.setCustomValidity('El número de tarjeta debe tener el formato XXXX XXXX XXXX XXXX');
          numeroTarjetaInput.reportValidity();
          return;
        } else {
          numeroTarjetaInput.setCustomValidity('');
        }
        
        // Validar fecha de expiración
        if (!regexFecha.test(fechaExpiracionInput.value)) {
          fechaExpiracionInput.setCustomValidity('La fecha debe tener el formato MM/AA válido');
          fechaExpiracionInput.reportValidity();
          return;
        } else {
          fechaExpiracionInput.setCustomValidity('');
        }
        
        // Validar que no esté expirada
        const [mes, anio] = fechaExpiracionInput.value.split('/');
        const fechaActual = new Date();
        const mesActual = fechaActual.getMonth() + 1;
        const anioActual = parseInt(fechaActual.getFullYear().toString().substring(2));
        const anioTarjeta = parseInt(anio);
        const mesTarjeta = parseInt(mes);
        
        // Si el año es menor o el mismo pero el mes es menor, está expirada
        if (anioTarjeta < anioActual || (anioTarjeta === anioActual && mesTarjeta < mesActual)) {
          fechaExpiracionInput.setCustomValidity('La tarjeta está expirada');
          fechaExpiracionInput.reportValidity();
          return;
        } else {
          fechaExpiracionInput.setCustomValidity('');
        }
        
        // Validar CVC
        if (!regexCVC.test(cvcInput.value)) {
          cvcInput.setCustomValidity('El CVC debe tener exactamente 3 dígitos');
          cvcInput.reportValidity();
          return;
        } else {
          cvcInput.setCustomValidity('');
        }
        
        // Si todo está correcto, guardar
        const datosTarjeta = {
          numero: numeroTarjetaInput.value,
          fechaExpiracion: fechaExpiracionInput.value,
          cvc: cvcInput.value
        };
        
        // Guardar en localStorage
        localStorage.setItem('datosTarjeta', JSON.stringify(datosTarjeta));
        
        // Cerrar modal
        modalTarjeta.style.display = 'none';
        
        // Confirmar guardado
        alert('Datos de tarjeta guardados correctamente');
      });
    }
  }

  // Modal de transferencia bancaria
  const modalTransferencia = document.querySelector('.modal-transferencia');
  const cerrarModalTransferencia = document.querySelector('.cerrar-modal-transferencia');
  const radioTransferencia = document.querySelector('input[name="metodoPago"][value="transferencia"]');
  const botonTransferencia = document.querySelector('.boton-transferencia');

  // Abrir modal al seleccionar transferencia bancaria
  if (radioTransferencia) {
    // Si se selecciona transferencia, abrir modal
    radioTransferencia.addEventListener('change', () => {
      if (radioTransferencia.checked) {
        modalTransferencia.style.display = 'block';    // Mostrar modal de transferencia
      }
    });
  }

  // Cerrar modal de transferencia con la X
  if (cerrarModalTransferencia) {
    cerrarModalTransferencia.addEventListener('click', () => {
      modalTransferencia.style.display = 'none';
      // Desmarcar el radio button si cierra sin confirmar
      radioTransferencia.checked = false;
    });
  }

  // Cerrar modal de transferencia con el botón "Entendido"
  if (botonTransferencia) {
    botonTransferencia.addEventListener('click', () => {
      modalTransferencia.style.display = 'none';
      // Mantener el radio button seleccionado
      alert('Información guardada. Recuerda realizar la transferencia con los datos proporcionados.');    // Mensaje de confirmación
    });
  }


  // Modal de PayPal/Wise
  const modalPagosDigitales = document.querySelector('.modal-pagos-digitales');
  const cerrarModalPagosDigitales = document.querySelector('.cerrar-modal-pagos-digitales');
  const radioPagoDigital = document.querySelector('input[name="metodoPago"][value="digital"]');
  const botonPaypal = document.querySelector('.boton-paypal');
  const botonWise = document.querySelector('.boton-wise');

  // Abrir modal al seleccionar pagos digitales
  if (radioPagoDigital) {
    radioPagoDigital.addEventListener('change', () => {
      if (radioPagoDigital.checked) {
        modalPagosDigitales.style.display = 'block';
      }
    });
  }

  // Cerrar modal de PayPal con la X
  if (cerrarModalPagosDigitales) {
    cerrarModalPagosDigitales.addEventListener('click', () => {
      modalPagosDigitales.style.display = 'none';
      // Desmarcar el radio button si cierra sin confirmar
      radioPagoDigital.checked = false;
    });
  }

  // Pagar con PayPal 
  if (botonPaypal) {
    botonPaypal.addEventListener('click', () => {
      modalPagosDigitales.style.display = 'none';
      // En un proyecto real, aquí redirigirías a PayPal
      alert('Redirigiendo a PayPal...');
    });
  }

  // Pagar con Wise 
  if (botonWise) {
    botonWise.addEventListener('click', () => {
      modalPagosDigitales.style.display = 'none';
      // En un proyecto real, aquí redirigirías a Wise
      alert('Redirigiendo a Wise...');
    });
  }

  // Botón confirmar compra
  const botonConfirmarCompra = document.querySelector('.boton-confirmar');
  if (botonConfirmarCompra) {
    botonConfirmarCompra.addEventListener('click', () => {
      // Validar que se haya seleccionado un método de pago
      const metodoPagoSeleccionado = document.querySelector('input[name="metodoPago"]:checked');
      if (!metodoPagoSeleccionado) {
        alert('Debes seleccionar un método de pago antes de finalizar la compra');
        return;
      }
      
      // Guardar la reserva en localStorage antes de redirigir
      try {
        const viajeSeleccionado = JSON.parse(localStorage.getItem('viajeSeleccionado')) || null;
        const datosPaso1 = JSON.parse(localStorage.getItem('formularioCompraPaso1')) || null;
        const datosPaso2 = JSON.parse(localStorage.getItem('formularioCompraPaso2')) || null;
        const usuarioActual = JSON.parse(localStorage.getItem('usuarioActual')) || null;

        // Si existen los datos necesarios, guardar la reserva
        if (viajeSeleccionado && usuarioActual) {
          const reservas = JSON.parse(localStorage.getItem('reservas')) || [];
          const nuevaReserva = {
            id: 'resv-' + Date.now(),                 // ID único basado en timestamp
            usuario: usuarioActual.acceso || usuarioActual.correo || usuarioActual.nombre,
            usuarioEmail: usuarioActual.correo || '',
            viaje: viajeSeleccionado,
            datosPaso1: datosPaso1 || {},
            datosPaso2: datosPaso2 || {},
            fechaCompra: new Date().toISOString()     // Fecha y hora de la compra
          };
          reservas.push(nuevaReserva);
          localStorage.setItem('reservas', JSON.stringify(reservas));
        }
      } catch (e) {
        console.error('Error guardando la reserva:', e);
      }
      
      // Redirigir a compra realizada
      window.location.href = 'compra_realizada.html';
    });
  }
}




/*Página compra_realizada.html*/
if (window.location.pathname.includes("compra_realizada.html")) {
  const botonVueltaAtras = document.querySelector('.columna-boton-atras-detalles button');
  if (botonVueltaAtras) {
    botonVueltaAtras.addEventListener('click', () => {
      window.location.href = 'formulario_compra3.html';
    });
  }
  
  if (document.querySelector('.contenedor-compra')) {
    // Obtener datos guardados
    const viajeSeleccionado = JSON.parse(localStorage.getItem('viajeSeleccionado'));
    const datosPaso2 = JSON.parse(localStorage.getItem('formularioCompraPaso2'));

    // Verificar que existan los datos
    if (!viajeSeleccionado) {
      alert('No se ha seleccionado ningún viaje');
      window.location.href = 'listado_viajes.html';
    } else {
      // Rellenar resumen del viaje en compra_realizada.html
      function rellenarResumenCompraRealizada() {
        // Destino
        document.querySelector('.info-fila .contenido').textContent = 
          viajeSeleccionado.titulo || viajeSeleccionado.destino;
        
        // Duración
        document.querySelectorAll('.info-fila')[1].querySelector('.contenido').textContent = 
          `${viajeSeleccionado.duracion} días`;
        
        // Tipo de viaje
        document.querySelectorAll('.info-fila')[2].querySelector('.contenido').textContent = 
          viajeSeleccionado.tipo;
        
        // Número de acompañantes
        const numAcompañantes = datosPaso2 && datosPaso2.acompañantes ? datosPaso2.acompañantes.length : 0;
        document.querySelectorAll('.info-fila')[3].querySelector('.contenido').textContent = numAcompañantes;
        
        // Mascotas
        let textoMascota = 'No';
        // Si viaja con mascota, si está disponible
        if (datosPaso2 && datosPaso2.viajaMascota === 'si') {
          textoMascota = `Sí`;                     
        }
      
        // Rellenar el campo de mascota
        document.querySelectorAll('.info-fila')[4].querySelector('.contenido').textContent = textoMascota;
        
        // Alergias
        const alergias = datosPaso2 && datosPaso2.alergias ? datosPaso2.alergias : 'Ninguna';
        document.querySelectorAll('.info-fila')[5].querySelector('.contenido').textContent = alergias;
        
        // Coste total 
        const precioBase = viajeSeleccionado.precio;
        const precioAcompañantes = numAcompañantes * precioBase;
        const precioTotal = precioBase + precioAcompañantes;
        document.querySelectorAll('.info-fila')[6].querySelector('.contenido').textContent = `${precioTotal.toFixed(2)} €`;
      }

      // Rellenar información del guía
      function rellenarInfoGuia() {
        const infoGuiaTexto = document.querySelector('.info-guia-texto');
        const avatarDiv = document.querySelector('.avatar');
        
        if (viajeSeleccionado.guia) {
          // Actualizar avatar si existe
          if (avatarDiv && viajeSeleccionado.guia.avatar) {
            avatarDiv.innerHTML = '';
            // Crear y añadir la imagen del avatar
            const avatarImg = document.createElement('img');
            avatarImg.src = viajeSeleccionado.guia.avatar;
            avatarImg.alt = `Avatar de ${viajeSeleccionado.guia.nombre}`;
            avatarDiv.appendChild(avatarImg);
          }
          
          // Actualizar texto del guía
          if (infoGuiaTexto) {
            const parrafos = infoGuiaTexto.querySelectorAll('p');
            
            // Nombre y apellidos
            if (parrafos[0]) {
              parrafos[0].textContent = viajeSeleccionado.guia.nombre || 'Nombre y apellidos';
            }
            
            // Edad
            if (parrafos[1]) {
              parrafos[1].textContent = viajeSeleccionado.guia.edad || 'Edad';
            }
            
            // Teléfono de contacto
            if (parrafos[2]) {
              parrafos[2].textContent = viajeSeleccionado.guia.contacto || 'Telefono';
            }
          }
        }
      }

      // Ejecutar las funciones
      rellenarResumenCompraRealizada();
      rellenarInfoGuia();
    }
  }

  // Funcionalidad del botón Imprimir PDF
  const botonImprimirPDF = document.querySelector('.boton-imprimir-pdf');
  if (botonImprimirPDF) {
    botonImprimirPDF.addEventListener('click', () => {
      window.print();
    });
  }

  // Funcionalidad del botón Mi Cuenta
  const botonMiCuenta = document.querySelector('.boton-mi-cuenta');
  if (botonMiCuenta) {
    botonMiCuenta.addEventListener('click', () => {
      window.location.href = 'mi_cuenta.html';
    });
  }
}


/*Página mi_cuenta.html*/
if (window.location.pathname.includes("mi_cuenta.html")) {
  // Verificar si hay usuario logueado
  const usuarioActual = JSON.parse(localStorage.getItem("usuarioActual"));
  if (!usuarioActual) {
    alert('Debes iniciar sesión para acceder a tu cuenta');
    window.location.href = 'inicio_sesion.html';
  }

  // Botón de vuelta atrás
  const botonVueltaAtras = document.querySelector('.columna-boton-atras-detalles button');
  if (botonVueltaAtras) {
    botonVueltaAtras.addEventListener('click', () => {
      window.location.href = 'home.html';
    });
  }

  // Navegación entre secciones
  const navItems = document.querySelectorAll('.nav-item:not(.boton-cerrar-sesion)');
  const secciones = document.querySelectorAll('.seccion-contenido');

  // Evento para cada ítem de navegación
  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const seccionId = item.dataset.section;
      
      // Actualizar nav items activos
      navItems.forEach(nav => nav.classList.remove('active'));
      item.classList.add('active');
      
      // Mostrar sección correspondiente
      secciones.forEach(seccion => seccion.classList.remove('active'));
      document.getElementById(seccionId).classList.add('active');
    });
  });

  // Rellenar datos personales
  function cargarDatosPersonales() {
    if (usuarioActual) {
      // Avatar
      const avatarImg = document.getElementById('avatar-img');
      if (avatarImg && usuarioActual.imagen) {
        avatarImg.src = usuarioActual.imagen;       // Asignar imagen del usuario
      }

      // Información del usuario
      document.getElementById('nombre-usuario').textContent = usuarioActual.nombre || '-';
      document.getElementById('apellido-usuario').textContent = usuarioActual.apellido || '-';
      document.getElementById('correo-usuario').textContent = usuarioActual.correo || '-';
      document.getElementById('fecha-nacimiento-usuario').textContent = usuarioActual.fechaNacimiento || '-';
      document.getElementById('usuario-acceso').textContent = usuarioActual.acceso || '-';
      document.getElementById('contraseña-usuario').textContent = usuarioActual.contraseña || '-';
    }
  }

  // Cargar reservas del usuario
  function cargarReservas() {
    const reservasContenedor = document.querySelector('.reservas-contenedor');
    const reservas = JSON.parse(localStorage.getItem('reservas')) || [];
    
    // Filtrar reservas del usuario actual
    const reservasUsuario = reservas.filter(r => 
      r.usuario === usuarioActual.acceso || 
      r.usuario === usuarioActual.correo || 
      r.usuarioEmail === usuarioActual.correo
    );

    // Si no hay reservas, mostrar mensaje
    if (reservasUsuario.length === 0) {
      reservasContenedor.innerHTML = '<p class="mensaje-sin-reservas">No tienes reservas confirmadas</p>';
      return;
    }

    // Mostrar cada reserva
    reservasContenedor.innerHTML = '';
    reservasUsuario.forEach((reserva, index) => {
      const reservaDiv = document.createElement('div');
      reservaDiv.className = 'reserva-item';
      
      // Obtirner y formatear la fecha de compra
      const fechaCompra = new Date(reserva.fechaCompra);
      const fechaFormateada = fechaCompra.toLocaleDateString('es-ES', {   // toLocaleDateString para formato local
        year: 'numeric',        // Formato de fecha en español
        month: 'long',         // Mes en formato largo
        day: 'numeric'         // Día numérico
      });

      // Rellenar contenido de la reserva dinamicamente
      reservaDiv.innerHTML = `
        <div class="reserva-imagen">
          <img src="${reserva.viaje.imagen}" alt="${reserva.viaje.titulo}">
        </div>
        <div class="reserva-info">
          <h3>${reserva.viaje.titulo || reserva.viaje.destino}</h3>
          <p><strong>Fecha de compra:</strong> ${fechaFormateada}</p>
          <p><strong>Duración:</strong> ${reserva.viaje.duracion} días</p>
          <p><strong>Destino:</strong> ${reserva.viaje.destino}</p>
        </div>
        <button class="boton-ver-detalles" data-reserva-index="${index}">Ver detalles</button>
      `;

      reservasContenedor.appendChild(reservaDiv);
    });

    // Agregar eventos a los botones de ver detalles
    document.querySelectorAll('.boton-ver-detalles').forEach(button => {
      button.addEventListener('click', () => {
        const index = parseInt(button.dataset.reservaIndex);      // Obtener índice de la reserva
        mostrarDetalleReserva(reservasUsuario[index]);            // Mostrar detalles de la reserva
      });
    });
  }

  // Mostrar modal con detalles de la reserva
  function mostrarDetalleReserva(reserva) {
    const modal = document.getElementById('modal-detalle-reserva');
    const detalleBody = document.getElementById('detalle-reserva-body');

    // Calcular datos
    const viaje = reserva.viaje;                            // Datos del viaje
    const datosPaso2 = reserva.datosPaso2 || {};            // Datos del paso 2 de la reserva
    const numAcompañantes = datosPaso2.acompañantes ? datosPaso2.acompañantes.length : 0;   // Número de acompañantes
    const precioBase = viaje.precio;                        // Precio base del viaje
    const precioTotal = precioBase + (numAcompañantes * precioBase);                        // Precio total con acompañantes

    // Formatear fecha de compra
    const fechaCompra = new Date(reserva.fechaCompra);
    const fechaFormateada = fechaCompra.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',              // Incluir hora
      minute: '2-digit'             // Incluir minuto
    });

    let textoMascota = 'No';
    if (datosPaso2.viajaMascota === 'si') {
      textoMascota = 'Sí';
    }

    const alergias = datosPaso2.alergias || 'Ninguna';

    // Rellenar contenido del modal
    detalleBody.innerHTML = `
      <div class="info-fila">
        <span class="etiqueta">Destino:</span>
        <span class="contenido">${viaje.titulo || viaje.destino}</span>
      </div>
      <div class="info-fila">
        <span class="etiqueta">Duración:</span>
        <span class="contenido">${viaje.duracion} días</span>
      </div>
      <div class="info-fila">
        <span class="etiqueta">Tipo de viaje:</span>
        <span class="contenido">${viaje.tipo}</span>
      </div>
      <div class="info-fila">
        <span class="etiqueta">Número de acompañantes:</span>
        <span class="contenido">${numAcompañantes}</span>
      </div>
      <div class="info-fila">
        <span class="etiqueta">Mascotas:</span>
        <span class="contenido">${textoMascota}</span>
      </div>
      <div class="info-fila">
        <span class="etiqueta">Alergias:</span>
        <span class="contenido">${alergias}</span>
      </div>
      <div class="info-fila">
        <span class="etiqueta">Coste total:</span>
        <span class="contenido">${precioTotal.toFixed(2)} €</span>
      </div>
      <div class="info-fila">
        <span class="etiqueta">Fecha de compra:</span>
        <span class="contenido">${fechaFormateada}</span>
      </div>
    `;

    // Añadir información del guía 
    if (viaje.guia) {
      detalleBody.innerHTML += `
        <div class="info-guia-modal">
          <h3>Información del guía</h3>
          <div class="guia-contacto-modal">
            <div class="guia-avatar-modal">
              ${viaje.guia.avatar ? `<img src="${viaje.guia.avatar}" alt="${viaje.guia.nombre}">` : ''}
            </div>
            <div class="guia-datos-modal">
              <p><strong>Nombre:</strong> ${viaje.guia.nombre}</p>
              <p><strong>Edad:</strong> ${viaje.guia.edad}</p>
              <p><strong>Teléfono:</strong> ${viaje.guia.contacto}</p>
            </div>
          </div>
        </div>
      `;
    }

    modal.style.display = 'block';

    // Guardar reserva actual para imprimir
    modal.dataset.reservaActual = JSON.stringify(reserva);
  }

  // Cerrar modal
  const cerrarModal = document.querySelector('.cerrar-modal');
  if (cerrarModal) {
    cerrarModal.addEventListener('click', () => {
      document.getElementById('modal-detalle-reserva').style.display = 'none';
    });
  }

  // Botón imprimir reserva
  const botonImprimirReserva = document.querySelector('.btn-imprimir-reserva');
  if (botonImprimirReserva) {
    botonImprimirReserva.addEventListener('click', () => {
      const modal = document.getElementById('modal-detalle-reserva');
      const reserva = JSON.parse(modal.dataset.reservaActual);
      
      // Guardar los datos de la reserva en localStorage
      localStorage.setItem('viajeSeleccionado', JSON.stringify(reserva.viaje));
      localStorage.setItem('formularioCompraPaso1', JSON.stringify(reserva.datosPaso1));
      localStorage.setItem('formularioCompraPaso2', JSON.stringify(reserva.datosPaso2));
      
      // Redirigir a compra_realizada.html
      window.location.href = 'compra_realizada.html';
    });
  }

  // Botón cerrar sesión
  const botonCerrarSesion = document.querySelector('.boton-cerrar-sesion');
  if (botonCerrarSesion) {
    botonCerrarSesion.addEventListener('click', () => {
      if (confirm('¿Estás seguro de que deseas cerrar sesión?')) {
        localStorage.removeItem('usuarioActual');
        window.location.href = 'home.html';
      }
    });
  }

  // Cargar datos al iniciar
  cargarDatosPersonales();
  cargarReservas();
}

