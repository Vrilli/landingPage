// funtion popup
document.addEventListener('DOMContentLoaded', function () {
    const popup = document.getElementById('popup');
    const closePopupButton = document.getElementById('close-popup');

    function showPopup() {
        popup.style.display = 'block';
    }

    function hidePopup() {
        popup.style.display = 'none';
    }

    showPopup();

    setInterval(showPopup, 300000);

    setInterval(() => {
        hidePopup();
    }, 2000);
    closePopupButton.addEventListener('click', hidePopup);
});






// Funtion de la tabla
document.addEventListener('DOMContentLoaded', function() {
    const tableBody = document.querySelector('#earnings-table tbody');

    async function fetchEarningsData() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json();

            // Limpiar el contenido actual de la tabla
            tableBody.innerHTML = '';

            // Insertar los nuevos datos en la tabla
            data.forEach(user => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td><div class="point-green"></div>${user.name}</td>
                    <td><div class="point-green"></div>₡${(Math.random() * 1000000).toFixed(2)}</td>
                    <td><div class="point-green"></div>${user.address.city}</td>
                `;
                tableBody.appendChild(row);
            });
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    // Llamar a fetchEarningsData inmediatamente al cargar la página
    fetchEarningsData();

    // Actualizar los datos cada 5 minutos
    setInterval(fetchEarningsData, 300000); // 5 minutos en milisegundos
});






// Funtion Input phone
document.addEventListener('DOMContentLoaded', function() {
    const phoneInputField = document.querySelector("#phone");
    const phoneInput = window.intlTelInput(phoneInputField, {
        initialCountry: "auto",
        geoIpLookup: function(success, failure) {
            fetch("https://ipinfo.io/json?token=8bc177046c5728", {
                cache: 'reload'
            }).then(response => {
                if (response.ok) return response.json();
                throw new Error('Failed to fetch IP info');
            }).then(ipinfo => {
                success(ipinfo.country);
            }).catch(() => {
                success("us");
            });
        },
        utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
        separateDialCode: true,
        preferredCountries: ["us", "gb", "ca", "au"]
    });

    function addSearchFunctionality() {
        const searchInput = document.createElement("input");
        searchInput.setAttribute("type", "search");
        searchInput.setAttribute("placeholder", "Search countries...");
        searchInput.setAttribute("class", "iti__search");
    }

    phoneInput.addEventListener("countrychange", addSearchFunctionality);
    addSearchFunctionality();
});


// comentarios

document.addEventListener('DOMContentLoaded', function () {
    const commentsData = [
        {
            "avatar": "avatar",
            "name": "José López",
            "comment": "¿Realmente funciona? He oído algo parecido, pero nunca he visto ninguna reseña.",
            "time": "12 h",
            "likes": 10,
            "responses": []
        },
        {
            "avatar": "avatar",
            "name": "Luis Martínez",
            "comment": "Natalia Díaz Quintana definitivamente sabe como hacer dinero. Saludos 👏🔥",
            "time": "16 m",
            "likes": 23,
            "responses": []
        },
        {
            "avatar": "avatar",
            "name": "Carlos Rodríguez",
            "comment": "Acabo de retirar mis ganancias ... Activa tu cerebro y apúntate. Estás perdiendo una oportunidad de la que te arrepentirás el resto de tu vida.",
            "time": "1 h",
            "likes": 24,
            "responses": []
        },
        {
            "avatar": "avatar",
            "name": "Juan García",
            "comment": "Hace tiempo escuche hablar de esta plataforma pero cada vez olvidaba averiguar sobre ella 🤦‍♂️ gracias Natalia Díaz Quintana por esta información :)",
            "time": "12 m",
            "likes": 23,
            "responses": []
        },
        {
            "avatar": "avatar",
            "name": "David Mejía",
            "comment": "Finalmente pude comprar un auto nuevo. No es vida, sino un sueño... Los sueños se hacen realidad)))",
            "time": "12 m",
            "likes": 5,
            "responses": []
        },
        {
            "avatar": "avatar",
            "name": "María Paz",
            "comment": "Ahora tengo la oportunidad de ir de vacaciones este año :) Y lo mejor es que mientras este de vacaciones, el sistema ganará dinero día y noche. Es un sueño hecho realidad.",
            "time": "14 m",
            "likes": 22,
            "responses": []
        },
        {
            "avatar": "avatar",
            "name": "Daniel Cruz",
            "comment": "Me registré la semana pasada y ya he ganado ₡1 421 053 Lo recomiendo a todo el mundo 😏",
            "time": "3 h",
            "likes": 22,
            "responses": []
        },
        {
            "avatar": "avatar",
            "name": "Mario Flores",
            "comment": "Gracias por la info Trece Noticias",
            "time": "3 h",
            "likes": 1,
            "responses": []
        },
        {
            "avatar": "avatar",
            "name": "Francisco Rivera",
            "comment": "Acabo de inscribirme, amigos, ¡deséenme suerte!",
            "time": "3 h",
            "likes": 5,
            "responses": []
        },
        {
            "avatar": "avatar",
            "name": "Jorge Reyes",
            "comment": "Natalia Díaz Quintana causa polémica pero es inteligente ¡he visto muchas de sus entrevistas! Creo que la plataforma realmente vale la pena.",
            "time": "3 h",
            "likes": 11,
            "responses": []
        },
        {
            "avatar": "",
            "name": "Manuel Pineda",
            "comment": "Me registré hace dos días, mi saldo ya es de ₡738 947, estoy pensando en solicitar un retiro o es demasiado pronto? De hecho, no hice nada, de alguna manera me lo gané automáticamente. 😅😅😅",
            "time": "5 h",
            "likes": 21,
            "responses": []
        },
        {
            "avatar": "avatar",
            "name": "Josefa Zelaya",
            "comment": "Estoy sorprendida y mis amigos también... Al principio pensé que era algún tipo de estafa, no estaba claro como funciona. Pero entonces el gerente se puso en contacto conmigo y me explicó todo con detalle, ¡resultó ser muy sencillo! Siempre he trabajado mucho y no creía que fuera posible ganar dinero de esa manera. Para abreviar la historia, compré un auto. Suerte a todos, recomiendo mucho esta plataforma 👍",
            "time": "5 h",
            "likes": 13,
            "responses": []
        },
        {
            "avatar": "avatar",
            "name": "Miguel Ramos",
            "comment": "Gracias por la información, empecé con esto hace 4 semanas en un programa piloto como Natalia Díaz Quintana. Recibí 12 cheques por un total de ₡9 236 842 es muy bueno.",
            "time": "5 h",
            "likes": 16,
            "responses": []
        }
    ];

    const commentsContainer = document.querySelector('#comments-container');

    commentsData.forEach(comment => {
        const commentElement = document.createElement('div');
        commentElement.classList.add('comentario');
        commentElement.innerHTML = `
            <div class="avatar">${comment.avatar}</div>
            <div class="content">
                <div class="name">${comment.name}</div>
                <div class="text">${comment.comment}</div>  
                <div class="time">${comment.time}</div>
                <div class="likes"> Me gusta  Respuesta ${comment.likes}</div>
            </div>
        `;
        commentsContainer.appendChild(commentElement);
    });
});