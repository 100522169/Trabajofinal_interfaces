// Script para el mapa de imagen con áreas clicables y hover visual
document.addEventListener('DOMContentLoaded', function() {
    console.log('Mapa de continentes cargado correctamente');   // Mostrar en consola que el script se ha cargado
    
    const canvas = document.getElementById('hover-canvas');
    const ctx = canvas ? canvas.getContext('2d') : null;      // Contexto 2D del canvas, sirve para dibujar las áreas resaltadas
    const img = document.getElementById('mapa-imagen');
    const areas = document.querySelectorAll('area');
    
    // Colores para cada continente
    const colores = {
        'norteamerica': 'rgba(255, 215, 0, 0.5)',     // Dorado
        'sudamerica': 'rgba(76, 175, 80, 0.5)',       // Verde
        'europa': 'rgba(233, 30, 99, 0.5)',           // Rosa
        'africa': 'rgba(128, 128, 128, 0.5)',         // Gris
        'asia': 'rgba(255, 153, 51, 0.5)',            // Naranja
        'oceania': 'rgba(0, 191, 255, 0.5)'           // Azul
    };
    
    // Las coordenadas originales de la herramienta
    const coordenadasOriginales = {
        'norteamerica': "148,233,214,149,843,45,921,82,548,384,558,473,427,542,282,402,293,211",
        'sudamerica': "669,909,752,604,563,479,438,544,517,759,556,945",
        'europa': "1075,288,1045,357,950,330,861,359,808,178,935,74,1183,83,1227,253,1179,323",
        'africa': "1177,579,1220,735,1020,819,962,733,930,586,787,502,821,367,948,340,1054,363,1151,512,1211,495",
        'asia': "1592,381,1641,559,1622,646,1314,567,1270,460,1160,506,1054,354,1074,292,1174,331,1231,255,1190,82,1353,86,1492,109,1729,154,1666,362",
        'oceania': "1756,775,1679,867,1518,848,1481,733,1626,646,1652,523,1748,592"
    };

    // Offset para ajustar la posición vertical
    const offsetY = -5;                             // Mover hacia arriba
    
    // Ajustar el tamaño del canvas
    function ajustarCanvas() {
        if (canvas && img) {
            canvas.width = img.offsetWidth;         // Ancho del canvas igual al de la imagen
            canvas.height = img.offsetHeight;       // Alto del canvas igual al de la imagen
        }
    }
    
    // Ajustar coordenadas cuando cambie el tamaño de la imagen
    function ajustarCoordenadasAreas() {
        if (!img.complete) return;
        
        // La imagen es de 2000x1022 píxeles, escalar según el tamaño mostrado
        const escalaX = img.offsetWidth / 2000;
        const escalaY = img.offsetHeight / 1022;
        
        areas.forEach(area => {
            const continente = area.getAttribute('data-continente');
            const coordsOriginales = coordenadasOriginales[continente];
            
            // Si hay coordenadas originales, escalarlas
            if (coordsOriginales) {
                const coordsArray = coordsOriginales.split(',').map(Number);
                const coordsEscaladas = [];
                
                // Para cada par de coordenadas (x, y), escalar y aplicar offset
                for (let i = 0; i < coordsArray.length; i += 2) {
                    coordsEscaladas.push(Math.round(coordsArray[i] * escalaX));
                    coordsEscaladas.push(Math.round((coordsArray[i + 1] * escalaY) + offsetY));
                }
                
                // Actualizar el atributo coords del área
                area.setAttribute('coords', coordsEscaladas.join(','));
            }
        });
    }
    
    // Función para dibujar el área resaltada
    function dibujarArea(coords, color) {
        if (!ctx || !canvas) return;            // Asegurarse de que el contexto y el canvas existen
        
        // Limpiar el canvas antes de dibujar
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // La imagen es de 2000x1022 píxeles, escalar según el tamaño mostrado
        const escalaX = img.offsetWidth / 2000;
        const escalaY = img.offsetHeight / 1022;
        
        // Dibujar el área
        ctx.beginPath();
        const coordsArray = coords.split(',').map(Number);
        
        // Mover al primer punto
        ctx.moveTo(coordsArray[0] * escalaX, (coordsArray[1] * escalaY) + offsetY);
        
        for (let i = 2; i < coordsArray.length; i += 2) {
            ctx.lineTo(coordsArray[i] * escalaX, (coordsArray[i + 1] * escalaY) + offsetY);
        }
        
       
        ctx.closePath();                    
        ctx.fillStyle = color;
        ctx.fill();
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 3;
        ctx.stroke();
    }
    
    // Ajustar cuando se cargue la imagen y al cambiar el tamaño de ventana
    img.addEventListener('load', function() {
        ajustarCanvas();
        ajustarCoordenadasAreas();
    });
    
    // Ajustar al cambiar el tamaño de la ventana
    window.addEventListener('resize', function() {
        ajustarCanvas();
        ajustarCoordenadasAreas();
    });
    
    // Si la imagen ya está cargada, ajustar inmediatamente
    if (img.complete) {
        ajustarCanvas();
        ajustarCoordenadasAreas();
    }
    
    // Agregar eventos a cada área
    areas.forEach(area => {
        area.addEventListener('mouseenter', function() {
            const continente = this.getAttribute('data-continente');
            const coordsOriginales = coordenadasOriginales[continente];
            const color = colores[continente] || 'black';
            
            // Si hay coordenadas originales, dibujar el área resaltada
            if (coordsOriginales) {
                dibujarArea(coordsOriginales, color);
            }
            document.body.style.cursor = 'pointer';
        });
        
        // Limpiar el canvas al salir del área
        area.addEventListener('mouseleave', function() {
            if (ctx && canvas) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
            }
            document.body.style.cursor = 'default';
        });
    });
});
