// Menú hamburguesa - toggle para móvil
const hamburgerBtn = document.querySelector('.hamburger-btn');
const navMenu = document.querySelector('.nav-menu');

if (hamburgerBtn && navMenu) {
  hamburgerBtn.addEventListener('click', () => {
    navMenu.classList.toggle('open');
  });

  // Cerrar menú al hacer clic en un enlace
  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
    });
  });
}

// Verificar si el usuario está logueado y ocultar "Mi cuenta" si no lo está
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
    destino: 'España', continente: 'europa', duracion: 7, precio: 600, tipo: 'Turístico', mascotas: 'si', valoracion: 4, imagen: 'images/madrid.jpg', titulo: 'Madrid, Barcelona y Sevilla', titulo_en: 'Madrid, Barcelona and Seville',
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
    condiciones_en: 'Includes transport, insurance and breakfast. Pets allowed. Physical level: low-medium.',
    guia: { nombre: 'María González', edad: '32 años', edad_en: '32 years old', experiencia: '8 años de experiencia', experiencia_en: '8 years of experience', experiencias: 'Especialista en cultura española', experiencias_en: 'Spanish culture specialist', idiomas: 'Español, Inglés, Francés', idiomas_en: 'Spanish, English, French', contacto: '+34 612 345 678', redesSociales: ['<img src="images/redes_sociales/instagram.png" alt="Instagram"/>', '<img src="images/redes_sociales/facebook.png" alt="Facebook"/>', '<img src="images/redes_sociales/linkedin.png" alt="LinkedIn"/>'], valoracion: 4, avatar: 'images/pirineos.jpg' },
    reseñas: [
      { nombre: 'Sergio Aladro', comentario: 'La mejor experiencia de mi vida, muy recomendado.', comentario_en: 'The best experience of my life, highly recommended.' },
      { nombre: 'Marcos Rodríguez', comentario: 'La comida en el viaje daba que desear pero el guía es uno de los mejores que he tenido', comentario_en: 'The food on the trip left something to be desired but the guide is one of the best I have had' }
    ]
  },
  {
    destino: 'España', continente: 'europa', duracion: 4, precio: 800, tipo: 'Aventura', mascotas: 'no', valoracion: 5, imagen: 'images/pirineos.jpg', titulo: 'Aventura en los Pirineos', titulo_en: 'Adventure in the Pyrenees',
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
    condiciones_en: 'High physical intensity. Includes mountain equipment and professional guide. No pets.',
    guia: { nombre: 'Carlos Fernández', edad: '38 años', edad_en: '38 years old', experiencia: '15 años de experiencia', experiencia_en: '15 years of experience', experiencias: 'Guía de alta montaña certificado', experiencias_en: 'Certified high mountain guide', idiomas: 'Español, Inglés', idiomas_en: 'Spanish, English', contacto: '+34 678 234 567', redesSociales: ['<img src="images/redes_sociales/instagram.png" alt="Instagram"/>', '<img src="images/redes_sociales/facebook.png" alt="Facebook"/>', '<img src="images/redes_sociales/linkedin.png" alt="LinkedIn"/>'], valoracion: 5, avatar: 'images/avatar-carlos.jpg' },
    reseñas: [
      { nombre: 'Ana Martínez', comentario: 'Increíble aventura, paisajes espectaculares y un grupo genial.', comentario_en: 'Incredible adventure, spectacular landscapes and a great group.' }
    ]
  },
  {
    destino: 'España', continente: 'europa', duracion: 10, precio: 500, tipo: 'Cultural', mascotas: 'no', valoracion: 4, imagen: 'images/camino_santiago.jpeg', titulo: 'Camino de Santiago', titulo_en: 'Way of Saint James',
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
    condiciones_en: 'Includes hostels, backpack transport and credential. Good physical condition.',
    guia: { nombre: 'Santiago Rodríguez', edad: '45 años', edad_en: '45 years old', experiencia: '12 años de experiencia', experiencia_en: '12 years of experience', experiencias: 'Más de 20 Caminos completados', experiencias_en: 'Over 20 Caminos completed', idiomas: 'Español, Inglés, Portugués', idiomas_en: 'Spanish, English, Portuguese', contacto: '+34 687 456 789', redesSociales: ['<img src="images/redes_sociales/instagram.png" alt="Instagram"/>', '<img src="images/redes_sociales/facebook.png" alt="Facebook"/>', '<img src="images/redes_sociales/linkedin.png" alt="LinkedIn"/>'], valoracion: 4, avatar: 'images/avatar-santiago.jpg' },
    reseñas: [
      { nombre: 'Carlos López', comentario: 'Muy bien organizado, aunque el precio podría ser un poco más accesible.', comentario_en: 'Very well organized, although the price could be a bit more affordable.' }
    ]
  },
  {
    destino: 'Perú', continente: 'sudamerica', duracion: 4, precio: 400, tipo: 'Organizado', mascotas: 'si', valoracion: 3, imagen: 'images/peru_lima.jpg', titulo: 'Lima y la Costa', titulo_en: 'Lima and the Coast',
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
    condiciones_en: 'All inclusive. Small pets allowed. Physical level: low.',
    guia: { nombre: 'Miguel Quispe', edad: '40 años', edad_en: '40 years old', experiencia: '10 años de experiencia', experiencia_en: '10 years of experience', experiencias: 'Experto en gastronomía peruana', experiencias_en: 'Peruvian gastronomy expert', idiomas: 'Español, Inglés, Quechua', idiomas_en: 'Spanish, English, Quechua', contacto: '+51 987 654 321', redesSociales: ['<img src="images/redes_sociales/instagram.png" alt="Instagram"/>', '<img src="images/redes_sociales/facebook.png" alt="Facebook"/>', '<img src="images/redes_sociales/linkedin.png" alt="LinkedIn"/>'], valoracion: 3, avatar: 'images/avatar-miguel.jpg' },
    reseñas: [
      { nombre: 'Laura García', comentario: 'Experiencia única, el guía fue muy profesional y atento en todo momento.', comentario_en: 'Unique experience, the guide was very professional and attentive at all times.' }
    ]
  },
  {
    destino: 'Perú', continente: 'sudamerica', duracion: 6, precio: 600, tipo: 'Aventura', mascotas: 'no', valoracion: 4, imagen: 'images/machu_pichu.jpg', titulo: 'Machu Picchu Mágico', titulo_en: 'Magical Machu Picchu',
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
    condiciones_en: 'Entrance included, camping equipment. Very good physical condition required.',
    guia: { nombre: 'Pedro Mamani', edad: '35 años', edad_en: '35 years old', experiencia: '11 años de experiencia', experiencia_en: '11 years of experience', experiencias: 'Guía oficial Machu Picchu', experiencias_en: 'Official Machu Picchu guide', idiomas: 'Español, Inglés, Quechua', idiomas_en: 'Spanish, English, Quechua', contacto: '+51 965 432 187', redesSociales: ['<img src="images/redes_sociales/instagram.png" alt="Instagram"/>', '<img src="images/redes_sociales/facebook.png" alt="Facebook"/>', '<img src="images/redes_sociales/linkedin.png" alt="LinkedIn"/>'], valoracion: 4, avatar: 'images/avatar-pedro.jpg' },
    reseñas: []
  },
  {
    destino: 'Japón', continente: 'asia', duracion: 5, precio: 900, tipo: 'Cultural', mascotas: 'si', valoracion: 5, imagen: 'images/kioto.jpg', titulo: 'Kioto Tradicional', titulo_en: 'Traditional Kyoto',
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
    condiciones_en: 'Includes entrance fees, tea ceremony and kimono. Small pets allowed.',
    guia: { nombre: 'Yuki Tanaka', edad: '30 años', edad_en: '30 years old', experiencia: '7 años de experiencia', experiencia_en: '7 years of experience', experiencias: 'Experta en ceremonias tradicionales', experiencias_en: 'Expert in traditional ceremonies', idiomas: 'Japonés, Inglés, Español', idiomas_en: 'Japanese, English, Spanish', contacto: '+81 90 1234 5678', redesSociales: ['<img src="images/redes_sociales/instagram.png" alt="Instagram"/>', '<img src="images/redes_sociales/facebook.png" alt="Facebook"/>', '<img src="images/redes_sociales/linkedin.png" alt="LinkedIn"/>'], valoracion: 5, avatar: 'images/avatar-yuki.jpg' },
    reseñas: []
  },
  {
    destino: 'Japón', continente: 'asia', duracion: 15, precio: 400, tipo: 'Turístico', mascotas: 'no', valoracion: 4, imagen: 'images/japon.jpg', titulo: 'Japón Completo', titulo_en: 'Complete Japan',
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
    condiciones_en: 'JR Pass included. Medium physical level. Long daily walks.',
    guia: { nombre: 'Kenji Yamamoto', edad: '42 años', edad_en: '42 years old', experiencia: '16 años de experiencia', experiencia_en: '16 years of experience', experiencias: 'Especialista en tours completos', experiencias_en: 'Specialist in complete tours', idiomas: 'Japonés, Inglés, Mandarín', idiomas_en: 'Japanese, English, Mandarin', contacto: '+81 80 9876 5432', redesSociales: ['<img src="images/redes_sociales/instagram.png" alt="Instagram"/>', '<img src="images/redes_sociales/facebook.png" alt="Facebook"/>', '<img src="images/redes_sociales/linkedin.png" alt="LinkedIn"/>'], valoracion: 4, avatar: 'images/pirineos.jpg' },
    reseñas: []
  },

  {
    destino: 'Argentina', continente: 'sudamerica', duracion: 10, precio: 1200, tipo: 'Aventura', mascotas: 'no', valoracion: 5, imagen: 'images/patagonia.jpg', titulo: 'Patagonia: Glaciares y Montañas', titulo_en: 'Patagonia: Glaciers and Mountains',
    dietasDisponibles: ['vegano', 'vegetariano', 'sin-gluten'],
    galeria: ['images/patagonia.jpg', 'images/patagonia.jpg', 'images/patagonia.jpg'],
    itinerario: ['El Calafate', 'Glaciar Perito Moreno', 'Ushuaia', 'Trekking en Torres del Paine'],
    itinerarioDetallado: ['Llegada a El Calafate y visita al glaciar.', 'Excursión al Perito Moreno con navegación.', 'Traslado a Ushuaia y actividades en el fin del mundo.', 'Trekking y observación de fauna.'],
    condiciones: 'Incluye traslados y alojamiento. Nivel físico medio-alto.',
    condiciones_en: 'Includes transfers and accommodation. Medium-high physical level.',
    guia: { nombre: 'Laura Pérez', edad: '36 años', edad_en: '36 years old', experiencia: '10 años', experiencia_en: '10 years of experience', experiencias: 'Guía en Patagonia', experiencias_en: 'Patagonia guide', idiomas: 'Español, Inglés', idiomas_en: 'Spanish, English', contacto: '+54 9 11 2345 6789', redesSociales: ['<img src="images/redes_sociales/instagram.png" alt="Instagram"/>', '<img src="images/redes_sociales/facebook.png" alt="Facebook"/>', '<img src="images/redes_sociales/linkedin.png" alt="LinkedIn"/>'], valoracion: 5, avatar: 'images/avatar-laura.jpg' },
    reseñas: [{ nombre: 'María R.', comentario: 'Paisajes impresionantes y guía excepcional.', comentario_en: 'Impressive landscapes and exceptional guide.' }]
  },
  {
    destino: 'Maldivas', continente: 'asia', duracion: 7, precio: 1500, tipo: 'Organizado', mascotas: 'no', valoracion: 5, imagen: 'images/maldivas.jpg', titulo: 'Maldivas: Paraíso y Relax', titulo_en: 'Maldives: Paradise and Relaxation',
    dietasDisponibles: ['vegano', 'vegetariano'],
    galeria: ['images/maldivas.jpg', 'images/maldivas.jpg', 'images/maldivas.jpg'],
    itinerario: ['Resort y actividades acuáticas', 'Snorkel y buceo', 'Excursión a islas cercanas'],
    itinerarioDetallado: ['Llegada al resort y acomodación.', 'Día de actividades acuáticas y snorkel.', 'Excursión a islas locales y cultura.', 'Relax y salida.'],
    condiciones: 'Incluye alojamiento en resort y desayunos.',
    condiciones_en: 'Includes resort accommodation and breakfast.',
    guia: { nombre: 'Ahmed Ali', edad: '30 años', edad_en: '30 years old', experiencia: '8 años', experiencia_en: '8 years of experience', experiencias: 'Guía local en islas', experiencias_en: 'Local island guide', idiomas: 'Inglés', idiomas_en: 'English', contacto: '+960 777 1234', redesSociales: ['<img src="images/redes_sociales/instagram.png" alt="Instagram"/>', '<img src="images/redes_sociales/facebook.png" alt="Facebook"/>', '<img src="images/redes_sociales/linkedin.png" alt="LinkedIn"/>'], valoracion: 5, avatar: 'images/avatar-ahmed.jpg' },
    reseñas: [{ nombre: 'Laura G.', comentario: 'Un paraíso, servicio excelente.', comentario_en: 'A paradise, excellent service.' }]
  },
  {
    destino: 'Argentina', continente: 'sudamerica', duracion: 6, precio: 900, tipo: 'Turístico', mascotas: 'no', valoracion: 4, imagen: 'images/cataratas_iguazu.jpg', titulo: 'Cataratas del Iguazú y Selva', titulo_en: 'Iguazu Falls and Jungle',
    dietasDisponibles: ['vegetariano', 'sin-gluten'],
    galeria: ['images/cataratas_iguazu.jpg', 'images/cataratas_iguazu.jpg'],
    itinerario: ['Visita a las cataratas', 'Recorrido por la selva', 'Excursiones en lancha'],
    itinerarioDetallado: ['Excursión a las pasarelas de las cataratas.', 'Paseo en lancha por la garganta del diablo.', 'Ruta por la selva con guía especializado.'],
    condiciones: 'Incluye entradas y transporte.',
    condiciones_en: 'Includes entrance fees and transport.',
    guia: { nombre: 'Diego Morales', edad: '40 años', edad_en: '40 years old', experiencia: '12 años', experiencia_en: '12 years of experience', experiencias: 'Guía de naturaleza', experiencias_en: 'Nature guide', idiomas: 'Español, Portugués', idiomas_en: 'Spanish, Portuguese', contacto: '+54 9 377 123 456', redesSociales: ['<img src="images/redes_sociales/instagram.png" alt="Instagram"/>', '<img src="images/redes_sociales/facebook.png" alt="Facebook"/>', '<img src="images/redes_sociales/linkedin.png" alt="LinkedIn"/>'], valoracion: 4, avatar: 'images/avatar-diego.jpg' },
    reseñas: [{ nombre: 'Carlos V.', comentario: 'Impresionante y bien organizado.', comentario_en: 'Impressive and well organized.' }]
  },
  // ============ NORTEAMERICA ============
  {
    destino: 'Estados Unidos', continente: 'norteamerica', duracion: 7, precio: 1100, tipo: 'Turístico', mascotas: 'no', valoracion: 5, imagen: 'images/viajes/Norte America/new_yorl.jpeg', titulo: 'New York y la Costa Este', titulo_en: 'New York and the East Coast',
    dietasDisponibles: ['vegano', 'vegetariano', 'sin-gluten', 'halal'],
    galeria: ['images/viajes/Norte America/new_yorl.jpeg', 'images/viajes/Norte America/new_york_2.jpeg', 'images/viajes/Norte America/new_york_3.jpg', 'images/viajes/Norte America/costa_este.jpg'],
    itinerario: ['Manhattan y Times Square', 'Estatua de la Libertad', 'Central Park', 'Museos', 'Washington DC', 'Filadelfia', 'Día libre'],
    itinerarioDetallado: ['Llegada a NYC. Paseo por Times Square y Broadway.', 'Ferry a la Estatua de la Libertad y Ellis Island.', 'Recorrido por Central Park y 5th Avenue.', 'Visita al MET y al MoMA.', 'Excursión a Washington DC y monumentos.', 'Tour por Filadelfia histórica.', 'Día libre para compras.'],
    condiciones: 'Incluye traslados y entradas principales.',
    condiciones_en: 'Includes transfers and main entrances.',
    guia: { nombre: 'Michael Johnson', edad: '35 años', edad_en: '35 years old', experiencia: '10 años', experiencia_en: '10 years of experience', experiencias: 'Guía turístico Nueva York', experiencias_en: 'New York tour guide', idiomas: 'Inglés, Español', idiomas_en: 'English, Spanish', contacto: '+1 212 555 1234', redesSociales: ['<img src="images/redes_sociales/instagram.png" alt="Instagram"/>', '<img src="images/redes_sociales/facebook.png" alt="Facebook"/>', '<img src="images/redes_sociales/linkedin.png" alt="LinkedIn"/>'], valoracion: 5, avatar: 'images/pirineos.jpg' },
    reseñas: [{ nombre: 'Ana M.', comentario: 'Nueva York es increíble, muy bien organizado.', comentario_en: 'New York is amazing, very well organized.' }]
  },
  {
    destino: 'Estados Unidos', continente: 'norteamerica', duracion: 9, precio: 1400, tipo: 'Aventura', mascotas: 'no', valoracion: 5, imagen: 'images/viajes/Norte America/cañon del colorado_2.jpg', titulo: 'Gran Cañón y Parques Nacionales', titulo_en: 'Grand Canyon and National Parks',
    dietasDisponibles: ['vegano', 'vegetariano'],
    galeria: ['images/viajes/Norte America/cañon del colorado_2.jpg', 'images/viajes/Norte America/cañon_del colorado_3.jpg'],
    itinerario: ['Las Vegas', 'Gran Cañón', 'Monument Valley', 'Antelope Canyon', 'Zion', 'Bryce Canyon', 'Death Valley', 'Yosemite', 'San Francisco'],
    itinerarioDetallado: ['Llegada a Las Vegas y noche libre.', 'Ruta al Gran Cañón, atardecer épico.', 'Monument Valley en Jeep con Navajos.', 'Antelope Canyon y Horseshoe Bend.', 'Trekking en Zion National Park.', 'Amanecer en Bryce Canyon.', 'Travesía por Death Valley.', 'Yosemite: El Capitán y cascadas.', 'Llegada a San Francisco, Golden Gate.'],
    condiciones: 'Nivel físico medio-alto. Incluye camping y alojamiento.',
    condiciones_en: 'Medium-high physical level. Includes camping and accommodation.',
    guia: { nombre: 'David Williams', edad: '42 años', edad_en: '42 years old', experiencia: '15 años', experiencia_en: '15 years of experience', experiencias: 'Experto en parques nacionales', experiencias_en: 'National parks expert', idiomas: 'Inglés', idiomas_en: 'English', contacto: '+1 702 555 5678', redesSociales: ['<img src="images/redes_sociales/instagram.png" alt="Instagram"/>', '<img src="images/redes_sociales/facebook.png" alt="Facebook"/>', '<img src="images/redes_sociales/linkedin.png" alt="LinkedIn"/>'], valoracion: 5, avatar: 'images/pirineos.jpg' },
    reseñas: [{ nombre: 'Roberto S.', comentario: 'Paisajes de otro planeta, una experiencia única.', comentario_en: 'Landscapes from another planet, a unique experience.' }]
  },
  // ============ AFRICA ============
  {
    destino: 'Kenia', continente: 'africa', duracion: 8, precio: 2000, tipo: 'Aventura', mascotas: 'no', valoracion: 5, imagen: 'images/viajes/Africa/safari kenia.jpg', titulo: 'Safari en Kenia: La Gran Migración', titulo_en: 'Kenya Safari: The Great Migration',
    dietasDisponibles: ['vegano', 'vegetariano', 'halal'],
    galeria: ['images/viajes/Africa/safari kenia.jpg', 'images/viajes/Africa/Safari kenia 2.jpeg', 'images/viajes/Africa/Safari Kenia 3.webp', 'images/viajes/Africa/safari kenia 4.jpeg', 'images/viajes/Africa/Safari kenia 5.jpg'],
    itinerario: ['Nairobi', 'Masai Mara Día 1', 'Gran Migración', 'Lago Nakuru', 'Amboseli', 'Safari Tsavo', 'Aldea Masai', 'Regreso a Nairobi'],
    itinerarioDetallado: ['Llegada a Nairobi, visita al centro de elefantes.', 'Safari en Masai Mara, leones y leopardos.', 'La Gran Migración de ñus.', 'Flamencos en Lago Nakuru.', 'Elefantes con Kilimanjaro de fondo en Amboseli.', 'Safari en Tsavo, rinocerontes.', 'Visita a aldea Masai.', 'Regreso a Nairobi.'],
    condiciones: 'Todo incluido. Alojamiento en lodges y campamentos.',
    condiciones_en: 'All inclusive. Lodges and camp accommodation.',
    guia: { nombre: 'Joseph Kimani', edad: '38 años', edad_en: '38 years old', experiencia: '12 años', experiencia_en: '12 years of experience', experiencias: 'Guía de safari certificado', experiencias_en: 'Certified safari guide', idiomas: 'Inglés, Suajili', idiomas_en: 'English, Swahili', contacto: '+254 700 123 456', redesSociales: ['<img src="images/redes_sociales/instagram.png" alt="Instagram"/>', '<img src="images/redes_sociales/facebook.png" alt="Facebook"/>', '<img src="images/redes_sociales/linkedin.png" alt="LinkedIn"/>'], valoracion: 5, avatar: 'images/pirineos.jpg' },
    reseñas: [{ nombre: 'Elena P.', comentario: 'Ver los Big Five fue un sueño cumplido.', comentario_en: 'Seeing the Big Five was a dream come true.' }]
  },
  {
    destino: 'Marruecos', continente: 'africa', duracion: 6, precio: 800, tipo: 'Cultural', mascotas: 'no', valoracion: 4, imagen: 'images/viajes/Africa/marruecos 1.jpg', titulo: 'Marruecos: De Marrakech al Desierto', titulo_en: 'Morocco: From Marrakech to the Desert',
    dietasDisponibles: ['vegano', 'vegetariano', 'halal'],
    galeria: ['images/viajes/Africa/marruecos 1.jpg', 'images/viajes/Africa/Marruecos 2.jpg', 'images/viajes/Africa/Marruecos 3.webp', 'images/viajes/Africa/Marruecos 4.jpg', 'images/viajes/Africa/Marruecos 5.jpg', 'images/viajes/Africa/Marruecos 6.webp'],
    itinerario: ['Marrakech', 'Montañas Atlas', 'Ait Ben Haddou', 'Desierto del Sahara', 'Fez', 'Chefchaouen'],
    itinerarioDetallado: ['Llegada a Marrakech, Djemaa el Fna.', 'Cruce de las montañas del Atlas, Kasbah Ait Ben Haddou.', 'Noche en el desierto, paseo en camello al atardecer.', 'Amanecer en las dunas de Erg Chebbi, ruta a Fez.', 'Fez y su medina laberíntica.', 'Chefchaouen, la perla azul. Regreso.'],
    condiciones: 'Incluye riads tradicionales y campamento en desierto.',
    condiciones_en: 'Includes traditional riads and desert camp.',
    guia: { nombre: 'Hassan Benali', edad: '45 años', edad_en: '45 years old', experiencia: '20 años', experiencia_en: '20 years of experience', experiencias: 'Experto en cultura bereber', experiencias_en: 'Berber culture expert', idiomas: 'Árabe, Francés, Español, Inglés', idiomas_en: 'Arabic, French, Spanish, English', contacto: '+212 600 123 456', redesSociales: ['<img src="images/redes_sociales/instagram.png" alt="Instagram"/>', '<img src="images/redes_sociales/facebook.png" alt="Facebook"/>', '<img src="images/redes_sociales/linkedin.png" alt="LinkedIn"/>'], valoracion: 4, avatar: 'images/pirineos.jpg' },
    reseñas: [{ nombre: 'Lucía R.', comentario: 'Marruecos es mágico, colores y sabores únicos.', comentario_en: 'Morocco is magical, unique colors and flavors.' }]
  },
  // ============ OCEANIA ============
  {
    destino: 'Australia', continente: 'oceania', duracion: 7, precio: 2500, tipo: 'Turístico', mascotas: 'no', valoracion: 5, imagen: 'images/viajes/Oceania/Sidney 2.jpg', titulo: 'Australia: Sydney y la Gran Barrera', titulo_en: 'Australia: Sydney and the Great Barrier Reef',
    dietasDisponibles: ['vegano', 'vegetariano', 'sin-gluten'],
    galeria: ['images/viajes/Oceania/Sidney 2.jpg', 'images/viajes/Oceania/Sidney 3.jpg', 'images/viajes/Oceania/Gran barrera_2.webp'],
    itinerario: ['Llegada a Sydney', 'Ópera y Harbour', 'Blue Mountains', 'Vuelo a Cairns', 'Gran Barrera', 'Uluru', 'Melbourne y regreso'],
    itinerarioDetallado: ['Llegada a Sydney, paseo por Circular Quay.', 'Tour por la Ópera de Sydney y Harbour Bridge.', 'Excursión a Blue Mountains, senderos y cascadas.', 'Vuelo a Cairns, tarde en la selva tropical.', 'Snorkel en la Gran Barrera de Coral, día completo.', 'Vuelo al Outback, atardecer en Uluru.', 'Melbourne, Great Ocean Road y regreso.'],
    condiciones: 'Vuelos internos incluidos. Nivel físico bajo-medio.',
    condiciones_en: 'Domestic flights included. Low-medium physical level.',
    guia: { nombre: 'Emma Thompson', edad: '32 años', edad_en: '32 years old', experiencia: '8 años', experiencia_en: '8 years of experience', experiencias: 'Guía turística certificada', experiencias_en: 'Certified tour guide', idiomas: 'Inglés', idiomas_en: 'English', contacto: '+61 400 123 456', redesSociales: ['<img src="images/redes_sociales/instagram.png" alt="Instagram"/>', '<img src="images/redes_sociales/facebook.png" alt="Facebook"/>', '<img src="images/redes_sociales/linkedin.png" alt="LinkedIn"/>'], valoracion: 5, avatar: 'images/pirineos.jpg' },
    reseñas: [{ nombre: 'Pablo G.', comentario: 'Australia superó todas mis expectativas.', comentario_en: 'Australia exceeded all my expectations.' }]
  },
  {
    destino: 'Nueva Zelanda', continente: 'oceania', duracion: 7, precio: 2200, tipo: 'Aventura', mascotas: 'no', valoracion: 5, imagen: 'images/viajes/Oceania/Nueva_Zelanda_1.jpeg', titulo: 'Nueva Zelanda: Tierra Media', titulo_en: 'New Zealand: Middle Earth',
    dietasDisponibles: ['vegano', 'vegetariano'],
    galeria: ['images/viajes/Oceania/Nueva_Zelanda_1.jpeg', 'images/viajes/Oceania/Nueva_zelanda_3.webp', 'images/viajes/Oceania/Nueva_Zelanda_4.jpg', 'images/viajes/Oceania/Nueva_Zelanzda_4.jpeg', 'images/viajes/Oceania/NUeva_Zelanda_5.webp'],
    itinerario: ['Llegada Auckland', 'Hobbiton', 'Rotorua', 'Wellington', 'Queenstown', 'Milford Sound', 'Glaciares y regreso'],
    itinerarioDetallado: ['Llegada a Auckland, Sky Tower y paseo por el puerto.', 'Visita a Hobbiton, set de El Señor de los Anillos.', 'Géiseres y cultura maorí en Rotorua.', 'Wellington, Weta Workshop y ferry a Isla Sur.', 'Aventura en Queenstown: búngee o jet boat.', 'Crucero espectacular por Milford Sound.', 'Trekking en glaciares Fox y Franz Josef. Regreso.'],
    condiciones: 'Incluye ferry entre islas y actividades de aventura.',
    condiciones_en: 'Includes inter-island ferry and adventure activities.',
    guia: { nombre: 'James Wilson', edad: '40 años', edad_en: '40 years old', experiencia: '15 años', experiencia_en: '15 years of experience', experiencias: 'Experto en Tierra Media', experiencias_en: 'Middle Earth expert', idiomas: 'Inglés', idiomas_en: 'English', contacto: '+64 21 123 456', redesSociales: ['<img src="images/redes_sociales/instagram.png" alt="Instagram"/>', '<img src="images/redes_sociales/facebook.png" alt="Facebook"/>', '<img src="images/redes_sociales/linkedin.png" alt="LinkedIn"/>'], valoracion: 5, avatar: 'images/pirineos.jpg' },
    reseñas: [{ nombre: 'Marta L.', comentario: 'Paisajes de película, literalmente.', comentario_en: 'Movie-like landscapes, literally.' }]
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

  // Actualizar precios de las tarjetas con divisa predeterminada
  const divisaPredeterminada = localStorage.getItem('divisaPredeterminada') || 'eur';
  const simbolosDivisas = {
    'eur': '€',
    'usd': '$',
    'gbp': '£',
    'jpy': '¥',
    'cny': '¥',
    'chf': 'CHF',
    'cad': 'CA$',
    'aud': 'A$',
    'mxn': 'MX$',
    'sgd': 'S$',
    'krw': '₩',
    'inr': '₹'
  };
  const simboloDivisa = simbolosDivisas[divisaPredeterminada] || '€';

  // Actualizar precios en las tarjetas de home
  const preciosTarjetas = document.querySelectorAll('.tarjeta-precio');
  preciosTarjetas.forEach(precioElemento => {
    const precioActual = precioElemento.textContent.match(/[\d.]+/);
    if (precioActual) {
      precioElemento.textContent = `${precioActual[0]} ${simboloDivisa}`;
    }
  });

  // Hacer que las tarjetas de "Viajes en grupo" en Home abran la ficha de detalles
  // Los viajes en grupo son: Patagonia (índice 7), Maldivas (índice 8), Cataratas del Iguazú (índice 9)
  const tarjetasHome = document.querySelectorAll('.columna-tarjeta .tarjeta');
  if (tarjetasHome && tarjetasHome.length > 0) {
    // Índices específicos de los viajes en grupo
    const indicesViajesGrupo = [7, 8, 9]; // Patagonia, Maldivas, Iguazú

    tarjetasHome.forEach((tarjeta, i) => {
      tarjeta.style.cursor = 'pointer';
      tarjeta.addEventListener('click', () => {
        // Usar el índice específico del viaje en grupo
        const viajeIndex = indicesViajesGrupo[i] || 0;
        const viaje = viajes[viajeIndex];
        if (viaje) {
          localStorage.setItem('viajeSeleccionado', JSON.stringify(viaje));
          // Limpiar origen de continente si existe
          localStorage.removeItem('viajeOrigen');
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
    if (registroCorreo.value != registroConfirmarCorreo.value) {
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
    if (registroUsuario.value.length < 5) {
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
    if (!regexContraseña.test(registroContraseña.value)) {
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
    if (!registroPrivacidad.checked) {                        // Verificar si el checkbox no está marcado         
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

      lector.onload = function (e) {                 // Evento que se dispara cuando la lectura del archivo se completa
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
  const ratings = { 5: '★★★★★', 4: '★★★★☆', 3: '★★★☆☆' };
  let currentFiltrados = [...viajesFiltrados];     // Copia de los viajes filtrados inicialmente

  // Obtener divisa predeterminada
  const divisaPredeterminada = localStorage.getItem('divisaPredeterminada') || 'eur';
  const simbolosDivisas = {
    'eur': '€',
    'usd': '$',
    'gbp': '£',
    'jpy': '¥',
    'cny': '¥',
    'chf': 'CHF',
    'cad': 'CA$',
    'aud': 'A$',
    'mxn': 'MX$',
    'sgd': 'S$',
    'krw': '₩',
    'inr': '₹'
  };
  const simboloDivisa = simbolosDivisas[divisaPredeterminada] || '€';

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
      div.innerHTML = `                           
        <img src="${viaje.imagen}" alt="${viaje.titulo}">
        <div class="info-fila">
          <span>${viaje.titulo}</span>
          <span>${viaje.duracion} ${t('dynamic-days')}</span>
        </div>
        <div class="info-fila">
          <span>${viaje.precio} ${simboloDivisa}</span>
          <span>${viaje.tipo}</span>
        </div>
        <div class="info-fila">
          <span>${t('dynamic-pets')} ${viaje.mascotas === 'si' ? t('dynamic-pets-yes') : t('dynamic-pets-no')}</span>
          <span class="valoracion-estrellas">${ratings[viaje.valoracion]}</span>
        </div>
        <button class="ver-detalles">${t('dynamic-view-details')}</button>
      `;

      // Agregar evento al botón "Ver detalles"
      const botonVerDetalles = div.querySelector('.ver-detalles');
      botonVerDetalles.addEventListener('click', () => {
        // Guardar el viaje seleccionado y los viajes filtrados actuales en localStorage
        localStorage.setItem('viajeSeleccionado', JSON.stringify(viaje));
        localStorage.setItem('viajesFiltradosActuales', JSON.stringify(currentFiltrados));
        // Guardar el índice del viaje en el array filtrado actual
        localStorage.setItem('indiceViajeSeleccionado', index.toString());    //index.toString() convierte el índice a cadena
        // Limpiar origen de continente si existe
        localStorage.removeItem('viajeOrigen');
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

  // Botón de vuelta atrás - detectar si viene del home, listado o continente
  const botonVueltaAtras = document.querySelector('.columna-boton-atras-detalles button');
  if (botonVueltaAtras) {
    botonVueltaAtras.addEventListener('click', () => {
      const origen = localStorage.getItem('origenViaje');
      const origenContinente = localStorage.getItem('viajeOrigen');

      // Limpiar indicadores
      localStorage.removeItem('viajeReservaOrigen');
      localStorage.removeItem('indiceViajeSeleccionado');
      localStorage.removeItem('origenViaje');
      localStorage.removeItem('viajeOrigen');

      // Redirigir según el origen
      // Prioridad: continente > home > listado
      if (origenContinente) {
        window.location.href = origenContinente;
      } else if (origen === 'home') {
        window.location.href = 'home.html';
      } else {
        window.location.href = 'listado_viajes.html';
      }
    });
  }

  // Actualizar el título con el nombre del viaje
  const tituloDetalles = document.querySelector('.titulo-detalles h1');
  if (tituloDetalles && viajeSeleccionado) {
    const idioma = getCurrentLanguage();
    const titulo = idioma === 'en' && viajeSeleccionado.titulo_en
      ? viajeSeleccionado.titulo_en
      : viajeSeleccionado.titulo;
    tituloDetalles.textContent = titulo;
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
      spanDia.textContent = actividades[i - 1]    // Índice i-1 porque el array empieza en 0
        ? `${t('dynamic-day')} ${i}: ${actividades[i - 1]}`       // Usar la actividad definida para el día
        : `${t('dynamic-day')} ${i}: ${t('dynamic-activity')}`;              // Texto por defecto si no hay actividad definida

      // Crear el botón "Más detalles"
      const botonmasdetalles = document.createElement('button');
      botonmasdetalles.className = 'boton-mas-detalles';
      botonmasdetalles.textContent = t('dynamic-more-details');        // Texto del botón

      botonmasdetalles.addEventListener('click', () => {    // Evento al hacer clic en el botón "Más detalles"
        const detalleTexto = detalles[i - 1] || t('dynamic-no-info');     // Usar el detalle definido o un mensaje por defecto
        alert(`${t('dynamic-day')} ${i}\n\n${detalleTexto}`);
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

    // Determinar idioma actual
    const currentLang = getCurrentLanguage();
    const isEnglish = currentLang === 'en';

    // Valores por defecto si no se proporcionan - usar versiones traducidas
    const nombre = guia.nombre || 'Nombre y apellidos';
    const edad = isEnglish && guia.edad_en ? guia.edad_en : (guia.edad || 'Edad');
    const experiencia = isEnglish && guia.experiencia_en ? guia.experiencia_en : (guia.experiencia || 'Años de experiencia');
    const experiencias = isEnglish && guia.experiencias_en ? guia.experiencias_en : (guia.experiencias || 'Experiencias');
    const idiomas = isEnglish && guia.idiomas_en ? guia.idiomas_en : (guia.idiomas || 'Idiomas');
    const contacto = guia.contacto || '+XX XXX XXX XXX';
    const redesSociales = guia.redesSociales || ['<img src="images/redes_sociales/instagram.png" alt="Instagram"/>', '<img src="images/redes_sociales/facebook.png" alt="Facebook"/>', '<img src="images/redes_sociales/linkedin.png" alt="LinkedIn"/>'];
    const valoracion = guia.valoracion || 5;
    const avatar = guia.avatar || '';

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
    parrafoExperiencias.textContent = `${t('dynamic-experience')} ${experiencias}`;

    const parrafoIdiomas = document.createElement('p');
    parrafoIdiomas.textContent = `${t('dynamic-languages')} ${idiomas}`;

    const parrafoContacto = document.createElement('p');
    parrafoContacto.textContent = `${t('dynamic-contact')} ${contacto}`;

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
    valoracionDiv.innerHTML = `${t('dynamic-rating')} <span class="valoracion-estrellas">${estrellas}</span>`;  //Empleamos el span class para aplicar el estilo de las estrellas

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

    // Generar condiciones del viaje - usar versión en inglés si está en inglés
    const idioma = getCurrentLanguage();
    const condiciones = idioma === 'en' && viajeSeleccionado.condiciones_en
      ? viajeSeleccionado.condiciones_en
      : viajeSeleccionado.condiciones || '';
    generarCondiciones(condiciones);

    // Generar información del guía - pasar idioma para traducciones
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

    const idioma = getCurrentLanguage();

    // Mostrar solo las primeras 3 reseñas
    const reseñasIniciales = reseñas.slice(0, 3);  // Obtener las primeras 3 reseñas
    reseñasIniciales.forEach(reseña => {
      const comentario = idioma === 'en' && reseña.comentario_en
        ? reseña.comentario_en
        : reseña.comentario;
      contenedor.appendChild(crearReseña(reseña.nombre, comentario));
    });
  }

  // Función para mostrar todas las reseñas en el modal
  function mostrarTodasReseñas(reseñas) {
    const modalContenedor = document.querySelector('.modal-contenedor-reseñas');
    modalContenedor.innerHTML = '';

    const idioma = getCurrentLanguage();

    reseñas.forEach(reseña => {
      const comentario = idioma === 'en' && reseña.comentario_en
        ? reseña.comentario_en
        : reseña.comentario;
      modalContenedor.appendChild(crearReseña(reseña.nombre, comentario));
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
      // Si estamos en formulario_compra.html (paso 1), volver a detalles del viaje
      if (window.location.pathname.includes("formulario_compra.html")) {
        const viajeSeleccionado = localStorage.getItem('viajeSeleccionado');
        if (viajeSeleccionado) {
          window.location.href = 'detalles_viaje.html';
        } else {
          window.history.back();
        }
      } else {
        // Para otros pasos, volver al paso anterior
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
    formularioPaso1.addEventListener('submit', function (e) {
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
        `${viajeSeleccionado.duracion} ${t('dynamic-days')}`;

      // Tipo de viaje - traducir el tipo
      const tipoViaje = viajeSeleccionado.tipo;
      const tiposTraduccion = {
        'Turístico': t('home-tourist'),
        'Cultural': t('home-cultural'),
        'Aventura': t('home-adventure'),
        'Organizado': t('home-organized')
      };
      document.querySelectorAll('.info-fila')[2].querySelector('.contenido').textContent =
        tiposTraduccion[tipoViaje] || tipoViaje;

      // Número de acompañantes
      const numAcompañantes = datosPaso2 && datosPaso2.acompañantes ? datosPaso2.acompañantes.length : 0;
      document.querySelectorAll('.info-fila')[3].querySelector('.contenido').textContent = numAcompañantes;

      // Mascotas
      let textoMascota = t('home-pets-no');
      // Si viaja con mascota, si está disponible
      if (datosPaso2 && datosPaso2.viajaMascota === 'si') {
        textoMascota = t('home-pets-yes');
      }

      // Rellenar el campo de mascota
      document.querySelectorAll('.info-fila')[4].querySelector('.contenido').textContent = textoMascota;

      // Alergias
      const alergias = datosPaso2 && datosPaso2.alergias ? datosPaso2.alergias : t('dynamic-none');
      document.querySelectorAll('.info-fila')[5].querySelector('.contenido').textContent = alergias;

      // Precio final con divisa predeterminada
      const precioBase = viajeSeleccionado.precio;
      const precioAcompañantes = numAcompañantes * precioBase;
      const precioTotal = precioBase + precioAcompañantes;

      // Obtener divisa predeterminada
      const divisaPredeterminada = localStorage.getItem('divisaPredeterminada') || 'eur';
      const simbolosDivisas = {
        'eur': '€',
        'usd': '$',
        'gbp': '£',
        'jpy': '¥',
        'cny': '¥',
        'chf': 'CHF',
        'cad': 'CA$',
        'aud': 'A$',
        'mxn': 'MX$',
        'sgd': 'S$',
        'krw': '₩',
        'inr': '₹'
      };
      const simbolo = simbolosDivisas[divisaPredeterminada] || '€';

      document.querySelector('.precio-final').textContent = `${precioTotal.toFixed(2)} ${simbolo}`;   // Formatear a 2 decimales
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

    // Símbolos de las divisas
    const simbolosDivisas = {
      'USD': '$',
      'EUR': '€',
      'GBP': '£',
      'JPY': '¥',
      'CNY': '¥',
      'CHF': 'CHF',
      'CAD': 'CA$',
      'AUD': 'A$',
      'MXN': 'MX$',
      'SGD': 'S$',
      'KRW': '₩',
      'INR': '₹'
    };

    // Seleccionar divisa del modal
    botonesDivisaModal.forEach(boton => {
      boton.addEventListener('click', () => {
        const codigoDivisa = boton.getAttribute('data-divisa');
        const nombreCompleto = nombresDivisas[codigoDivisa];
        const simbolo = simbolosDivisas[codigoDivisa];

        console.log('Divisa seleccionada:', codigoDivisa);

        // Cerrar el modal
        modal.style.display = 'none';

        // Actualizar el símbolo de la divisa en el coste total
        const precioFinal = document.querySelector('.precio-final');
        if (precioFinal) {
          // Extraer el número del precio actual
          const precioActual = precioFinal.textContent.match(/[\d.]+/);
          if (precioActual) {
            precioFinal.textContent = `${precioActual[0]} ${simbolo}`;
          }
        }

        // Actualizar el texto del botón
        if (botonMasDivisas) {
          botonMasDivisas.textContent = codigoDivisa;
        }

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
          `${viajeSeleccionado.duracion} ${t('dynamic-days')}`;

        // Tipo de viaje - traducir el tipo
        const tipoViaje = viajeSeleccionado.tipo;
        const tiposTraduccion = {
          'Turístico': t('home-tourist'),
          'Cultural': t('home-cultural'),
          'Aventura': t('home-adventure'),
          'Organizado': t('home-organized')
        };
        document.querySelectorAll('.info-fila')[2].querySelector('.contenido').textContent =
          tiposTraduccion[tipoViaje] || tipoViaje;

        // Número de acompañantes
        const numAcompañantes = datosPaso2 && datosPaso2.acompañantes ? datosPaso2.acompañantes.length : 0;
        document.querySelectorAll('.info-fila')[3].querySelector('.contenido').textContent = numAcompañantes;

        // Mascotas
        let textoMascota = t('home-pets-no');
        // Si viaja con mascota, si está disponible
        if (datosPaso2 && datosPaso2.viajaMascota === 'si') {
          textoMascota = t('home-pets-yes');
        }

        // Rellenar el campo de mascota
        document.querySelectorAll('.info-fila')[4].querySelector('.contenido').textContent = textoMascota;

        // Alergias
        const alergias = datosPaso2 && datosPaso2.alergias ? datosPaso2.alergias : t('dynamic-none');
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
      const idioma = getCurrentLanguage() === 'en' ? 'en-US' : 'es-ES';
      const fechaFormateada = fechaCompra.toLocaleDateString(idioma, {   // toLocaleDateString para formato local
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
          <p><strong>${t('account-purchase-date')}</strong> ${fechaFormateada}</p>
          <p><strong>${t('pay-duration')}</strong> ${reserva.viaje.duracion} ${t('dynamic-days')}</p>
          <p><strong>${t('pay-destination')}</strong> ${reserva.viaje.destino}</p>
        </div>
        <button class="boton-ver-detalles" data-reserva-index="${index}">${t('dynamic-view-details')}</button>
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

    let textoMascota = t('home-pets-no');
    if (datosPaso2.viajaMascota === 'si') {
      textoMascota = t('home-pets-yes');
    }

    const alergias = datosPaso2.alergias || t('dynamic-none');

    // Traducir tipo de viaje
    const tipoViaje = viaje.tipo;
    const tiposTraduccion = {
      'Turístico': t('home-tourist'),
      'Cultural': t('home-cultural'),
      'Aventura': t('home-adventure'),
      'Organizado': t('home-organized')
    };

    // Rellenar contenido del modal
    detalleBody.innerHTML = `
      <div class="info-fila">
        <span class="etiqueta">${t('pay-destination')}</span>
        <span class="contenido">${viaje.titulo || viaje.destino}</span>
      </div>
      <div class="info-fila">
        <span class="etiqueta">${t('pay-duration')}</span>
        <span class="contenido">${viaje.duracion} ${t('dynamic-days')}</span>
      </div>
      <div class="info-fila">
        <span class="etiqueta">${t('pay-trip-type')}</span>
        <span class="contenido">${tiposTraduccion[tipoViaje] || tipoViaje}</span>
      </div>
      <div class="info-fila">
        <span class="etiqueta">${t('pay-companions')}</span>
        <span class="contenido">${numAcompañantes}</span>
      </div>
      <div class="info-fila">
        <span class="etiqueta">${t('pay-pets')}</span>
        <span class="contenido">${textoMascota}</span>
      </div>
      <div class="info-fila">
        <span class="etiqueta">${t('pay-allergies')}</span>
        <span class="contenido">${alergias}</span>
      </div>
      <div class="info-fila">
        <span class="etiqueta">${t('complete-total')}</span>
        <span class="contenido coste-total-reserva">${precioTotal.toFixed(2)} €</span>
      </div>
      <div class="info-fila">
        <span class="etiqueta">Fecha de compra:</span>
        <span class="contenido">${fechaFormateada}</span>
      </div>
    `;

    // Aplicar divisa predeterminada al coste total
    const divisaPredeterminada = localStorage.getItem('divisaPredeterminada') || 'eur';
    const simbolosDivisas = {
      'eur': '€',
      'usd': '$',
      'gbp': '£'
    };
    const simbolo = simbolosDivisas[divisaPredeterminada] || '€';

    // Actualizar el símbolo en el modal antes de mostrarlo
    setTimeout(() => {
      const costeTotalElemento = detalleBody.querySelector('.coste-total-reserva');
      if (costeTotalElemento) {
        const precio = costeTotalElemento.textContent.match(/[\d.]+/);
        if (precio) {
          costeTotalElemento.textContent = `${precio[0]} ${simbolo}`;
        }
      }
    }, 0);

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

  // Configuración de divisa predeterminada
  const divisaSelect = document.getElementById('divisa-config');

  // Símbolos de divisas
  const simbolosDivisas = {
    'eur': '€',
    'usd': '$',
    'gbp': '£',
    'jpy': '¥',
    'cny': '¥',
    'chf': 'CHF',
    'cad': 'CA$',
    'aud': 'A$',
    'mxn': 'MX$',
    'sgd': 'S$',
    'krw': '₩',
    'inr': '₹'
  };

  // Cargar divisa guardada
  const divisaGuardada = localStorage.getItem('divisaPredeterminada') || 'eur';
  if (divisaSelect) {
    divisaSelect.value = divisaGuardada;
  }

  // Evento cambio de divisa
  if (divisaSelect) {
    divisaSelect.addEventListener('change', () => {
      const divisaSeleccionada = divisaSelect.value;
      localStorage.setItem('divisaPredeterminada', divisaSeleccionada);

      // Actualizar símbolos en las reservas mostradas
      actualizarSimbolosDivisa(divisaSeleccionada);

      alert('Divisa predeterminada actualizada');
    });
  }

  // Función para actualizar símbolos de divisa en detalles de reserva
  function actualizarSimbolosDivisa(divisa) {
    const simbolo = simbolosDivisas[divisa] || '€';

    // Actualizar en el modal si está abierto
    const modalDetalles = document.querySelectorAll('#detalle-reserva-body .contenido');
    modalDetalles.forEach(elemento => {
      if (elemento.textContent.includes('€') || elemento.textContent.includes('$') || elemento.textContent.includes('£')) {
        const precio = elemento.textContent.match(/[\d.]+/);
        if (precio) {
          elemento.textContent = `${precio[0]} ${simbolo}`;
        }
      }
    });
  }

  // Cargar datos al iniciar
  cargarDatosPersonales();
  cargarReservas();
}


/*Página blog.html*/
if (window.location.pathname.includes("blog.html")) {

  // Datos de blogs
  const blogs = [
    {
      id: 1,
      titulo: "Los 10 destinos más sorprendentes de este año",
      categoria: "itinerarios",
      estado: "en-curso",
      imagen: "images/patagonia.jpg",
      contenido: `
        <h2>Los 10 destinos más sorprendentes de este año</h2>
        <p>Este año ha sido extraordinario para los viajeros intrépidos que buscan experiencias únicas alrededor del mundo. Hemos recopilado los 10 destinos que han dejado una marca imborrable en quienes los han visitado.</p>
        <p><strong>1. La Patagonia, Argentina:</strong> Con sus glaciares majestuosos y paisajes que parecen de otro mundo, la Patagonia continúa siendo un destino soñado para los aventureros.</p>
        <p><strong>2. Islas Lofoten, Noruega:</strong> Estas islas ofrecen paisajes dramáticos con montañas escarpadas que emergen del mar ártico.</p>
        <p><strong>3. Bagan, Myanmar:</strong> Miles de templos antiguos salpican las llanuras, creando uno de los paisajes arquitectónicos más impresionantes del mundo.</p>
        <p><strong>4. Namibia:</strong> Desde las dunas rojas de Sossusvlei hasta el esquelético Skeleton Coast, Namibia es un país de contrastes asombrosos.</p>
        <p><strong>5. Islandia:</strong> Tierra de fuego y hielo, donde puedes explorar glaciares, géiseres, y cascadas en un solo día.</p>
        <p>Cada uno de estos destinos ofrece experiencias únicas que van más allá de las típicas rutas turísticas. Son lugares que desafían las expectativas y recompensan a aquellos dispuestos a salir de su zona de confort.</p>
      `
    },
    {
      id: 2,
      titulo: "Relatos de un viajero sin mapa",
      categoria: "experiencias",
      estado: "finalizado",
      imagen: "images/maldivas.jpg",
      contenido: `
        <h2>Relatos de un viajero sin mapa</h2>
        <p>Viajar sin un plan definido puede parecer aterrador al principio, pero las mejores aventuras a menudo surgen de la espontaneidad. Durante mis últimos tres años viajando por Asia, aprendí que perderse es, en realidad, encontrarse.</p>
        <p><strong>El comienzo:</strong> Todo empezó cuando perdí mi conexión de vuelo en Bangkok. En lugar de frustrarme, decidí explorar la ciudad sin guía ni mapa. Esa decisión cambió mi perspectiva sobre los viajes para siempre.</p>
        <p><strong>Lecciones aprendidas:</strong> Sin un itinerario estricto, te vuelves más receptivo a las oportunidades. Conocí a personas increíbles, descubrí restaurantes escondidos que ninguna guía menciona, y viví momentos que nunca habría experimentado siguiendo un plan.</p>
        <p><strong>Consejos para viajeros espontáneos:</strong> Siempre ten un presupuesto flexible, aprende algunas frases básicas del idioma local, y mantén una mente abierta. Lo inesperado suele ser lo más memorable.</p>
        <p>El verdadero viaje no consiste en llegar a un destino, sino en disfrutar del camino y las sorpresas que trae consigo.</p>
      `
    },
    {
      id: 3,
      titulo: "Guía completa de equipamiento para trekking",
      categoria: "equipamiento",
      estado: "finalizado",
      imagen: "images/cataratas_iguazu.jpg",
      contenido: `
        <h2>Guía completa de equipamiento para trekking</h2>
        <p>Después de años de experiencia en rutas de montaña, he aprendido que el equipamiento adecuado puede marcar la diferencia entre una experiencia memorable y una pesadilla. Aquí comparto mi guía esencial.</p>
        <p><strong>Calzado:</strong> Invierte en buenas botas de trekking. Deben ser impermeables, con buen soporte de tobillo y una suela con agarre firme. Pruébalas con los calcetines que usarás en la ruta.</p>
        <p><strong>Mochila:</strong> Una mochila de 40-50 litros es ideal para trekkings de varios días. Debe tener un buen sistema de ventilación en la espalda y correas ajustables.</p>
        <p><strong>Ropa en capas:</strong> La clave está en las capas: una capa base que absorba la humedad, una capa intermedia aislante, y una capa externa impermeable y cortavientos.</p>
        <p><strong>Accesorios esenciales:</strong> Bastones de trekking, gafas de sol, protector solar, botiquín de primeros auxilios, linterna frontal, y un sistema de purificación de agua.</p>
        <p><strong>Electrónica:</strong> Un cargador solar portátil, GPS o aplicación de mapas offline, y una powerbank de alta capacidad.</p>
        <p>Recuerda: el mejor equipo es el que conoces bien y has probado antes del viaje importante.</p>
      `
    },
    {
      id: 4,
      titulo: "Rutas alternativas por Europa",
      categoria: "itinerarios",
      estado: "finalizado",
      imagen: "images/patagonia.jpg",
      contenido: `
        <h2>Rutas alternativas por Europa</h2>
        <p>Europa está llena de rutas menos conocidas que ofrecen experiencias auténticas lejos de las multitudes turísticas. Estos son algunos de mis itinerarios favoritos fuera de lo común.</p>
        <p><strong>Los Cárpatos Rumanos:</strong> Pueblos medievales, castillos legendarios y naturaleza salvaje. Transilvania es mucho más que la leyenda de Drácula.</p>
        <p><strong>Albania:</strong> La joya escondida de los Balcanes ofrece playas vírgenes, montañas impresionantes y una hospitalidad incomparable a precios muy accesibles.</p>
        <p><strong>Eslovenia:</strong> Este pequeño país tiene de todo: desde los Alpes Julianos hasta las cuevas de Postojna y la hermosa costa adriática.</p>
        <p><strong>Islas Feroe:</strong> Para los amantes de paisajes dramáticos y clima impredecible. Estas islas danesas son perfectas para desconectar.</p>
        <p>Cada una de estas rutas te permitirá conocer la Europa auténtica, interactuar con locales y crear recuerdos únicos sin gastar una fortuna.</p>
      `
    },
    {
      id: 5,
      titulo: "Cómo empacar ligero para viajes largos",
      categoria: "equipamiento",
      estado: "en-curso",
      imagen: "images/maldivas.jpg",
      contenido: `
        <h2>Cómo empacar ligero para viajes largos</h2>
        <p>Después de viajar durante meses con solo una mochila de cabina, he perfeccionado el arte de empacar ligero. Aquí están mis mejores estrategias.</p>
        <p><strong>La regla 3-3-3:</strong> 3 superiores, 3 inferiores, 3 pares de zapatos máximo. Esta regla simple te obliga a ser selectivo y priorizar prendas versátiles.</p>
        <p><strong>Telas inteligentes:</strong> Invierte en ropa de secado rápido y resistente a arrugas. La lana merino es mi favorita: regula temperatura, no retiene olores y se puede usar varios días.</p>
        <p><strong>Compartimentos de compresión:</strong> Los cubos organizadores y bolsas de compresión son esenciales. Te ayudan a mantener todo organizado y maximizan el espacio.</p>
        <p><strong>Electrónica minimalista:</strong> Un solo cargador universal, cables cortos y multifuncionales, y considera si realmente necesitas ese portátil o puedes trabajar desde tu teléfono.</p>
        <p><strong>El método de enrollado:</strong> Enrollar la ropa en lugar de doblarla ahorra espacio y reduce las arrugas.</p>
        <p>Recuerda: si dudas en llevar algo, probablemente no lo necesites. La libertad de viajar ligero vale más que cualquier comodidad extra.</p>
      `
    },
    {
      id: 6,
      titulo: "Aventuras gastronómicas en Asia",
      categoria: "experiencias",
      estado: "finalizado",
      imagen: "images/cataratas_iguazu.jpg",
      contenido: `
        <h2>Aventuras gastronómicas en Asia</h2>
        <p>La comida es uno de los mejores caminos para conocer una cultura. Durante mi año recorriendo Asia, descubrí que algunas de las mejores comidas se encuentran en los lugares más inesperados.</p>
        <p><strong>Street food en Bangkok:</strong> Los mercados nocturnos tailandeses son un paraíso culinario. Desde el Pad Thai hasta los insectos fritos, cada bocado es una aventura.</p>
        <p><strong>Ramen auténtico en Japón:</strong> Olvida los fideos instantáneos. Un buen ramen japonés es arte líquido, con caldos que se cocinan durante horas y toppings perfectos.</p>
        <p><strong>Dim sum en Hong Kong:</strong> Las teteras de porcelana, los carritos con vaporeras, y decenas de pequeños bocados deliciosos hacen del dim sum una experiencia única.</p>
        <p><strong>Pho vietnamita:</strong> Esta sopa de fideos es perfecta para cualquier hora del día. Los vietnamitas la desayunan, y después de probarla, entenderás por qué.</p>
        <p>Mi consejo: come donde coman los locales, no tengas miedo de señalar y sonreír si no hablas el idioma, y siempre lleva efectivo (muchos puestos no aceptan tarjetas).</p>
      `
    }
  ];

  // Botón de vuelta atrás
  const botonVueltaAtras = document.querySelector('.columna-boton-atras button');
  if (botonVueltaAtras) {
    botonVueltaAtras.addEventListener('click', () => {
      window.location.href = 'home.html';
    });
  }

  const columnaListado = document.querySelector('.columna-listado-blogs');
  let currentBlogs = [...blogs];

  // Función para renderizar blogs
  function renderBlogs(blogsARenderizar) {
    columnaListado.innerHTML = '';
    
    if (blogsARenderizar.length === 0) {
      columnaListado.innerHTML = '<p style="text-align: center; width: 100%; padding: 40px; font-size: 18px;">No hay blogs para las categorías seleccionadas</p>';
      return;
    }

    blogsARenderizar.forEach(blog => {
      const div = document.createElement('div');
      div.className = 'blog-card';
      
      // Determinar clase y texto del estado
      const estadoClass = blog.estado === 'en-curso' ? 'en-curso' : 'finalizado';
      const estadoTexto = blog.estado === 'en-curso' ? 'En curso' : 'Finalizado';
      
      // Rellenar contenido del blog
      div.innerHTML = `
        <img src="${blog.imagen}" alt="${blog.titulo}">
        <div class="blog-card-body">
          <h3 class="blog-card-titulo">${blog.titulo}</h3>
          <div class="blog-card-estado ${estadoClass}">Estado: ${estadoTexto}</div>
          <button class="blog-card-button" data-blog-id="${blog.id}">Leer artículo</button>
        </div>
      `;
      
      columnaListado.appendChild(div);
    });

    // Agregar event listeners a los botones
    document.querySelectorAll('.blog-card-button').forEach(button => {
      button.addEventListener('click', () => {
        // Obtener el blog correspondiente
        const blogId = parseInt(button.getAttribute('data-blog-id'));
        // Obtener el blog por ID
        const blog = blogs.find(b => b.id === blogId);
        if (blog) {
          mostrarModal(blog);
        }
      });
    });
  }

  // Función para mostrar modal
  function mostrarModal(blog) {
    const modal = document.getElementById('modal-blog');
    const modalBody = document.getElementById('modal-blog-body');
    
    // Rellenar contenido del modal
    const estadoClass = blog.estado === 'en-curso' ? 'en-curso' : 'finalizado';
    const estadoTexto = blog.estado === 'en-curso' ? 'En curso' : 'Finalizado';
    const categoriaTexto = blog.categoria === 'equipamiento' ? 'Equipamiento' : 
                           blog.categoria === 'itinerarios' ? 'Itinerarios' : 
                           'Experiencias';
    
    modalBody.innerHTML = `
      <img src="${blog.imagen}" alt="${blog.titulo}">
      <span class="blog-categoria">${categoriaTexto}</span>
      <span class="blog-estado-modal ${estadoClass}">${estadoTexto}</span>
      ${blog.contenido}
    `;
    
    modal.style.display = 'block';
  }

  // Cerrar modal
  const cerrarModal = document.querySelector('.cerrar-modal-blog');
  if (cerrarModal) {
    cerrarModal.addEventListener('click', () => {
      document.getElementById('modal-blog').style.display = 'none';
    });
  }

  // Aplicar filtros
  const botonFiltros = document.getElementById('aplicar-filtros-blog');
  const mensajeFiltros = document.querySelector('.mensaje-filtros-blog');
  
  if (botonFiltros) {
    botonFiltros.addEventListener('click', () => {
      const checkboxes = document.querySelectorAll('input[name="categoria"]:checked');
      
      // Si no hay categorías seleccionadas, mostrar mensaje
      if (checkboxes.length === 0) {
        mensajeFiltros.style.display = 'block';
        return;
      }
      
      mensajeFiltros.style.display = 'none';
      
      // Filtrar blogs según categorías seleccionadas
      const categoriasSeleccionadas = [];
      for (const cb of checkboxes) {
        categoriasSeleccionadas.push(cb.value);
      }
      // Filtrar blogs
      const blogsFiltrados = blogs.filter(blog => categoriasSeleccionadas.includes(blog.categoria));
      
      currentBlogs = blogsFiltrados;
      renderBlogs(currentBlogs);
      
      // Desmarcar checkboxes
      checkboxes.forEach(cb => cb.checked = false);
    });
  }

  // Renderizar todos los blogs al inicio
  renderBlogs(currentBlogs);
}


