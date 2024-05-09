document.addEventListener('DOMContentLoaded', function () {
    // Obtener el formulario
    const form = document.getElementById('agregarproducto-form');

    // Validacion del nombre
    const nameInput = document.getElementById('product-name');
    nameInput.addEventListener('input', function () {
        if (nameInput.value.length < 5) {
            nameInput.setCustomValidity('El nombre del producto debe tener al menos 5 caracteres.');
        } else {
            nameInput.setCustomValidity('');
        }
    });

    // Validacion del precio
    const priceInput = document.getElementById('product-price');
    priceInput.addEventListener('input', function () {
        const price = parseFloat(priceInput.value);

        if (isNaN(price) || price < 0) {
            priceInput.setCustomValidity('El precio debe ser un valor numérico no negativo.');
        } else {
            priceInput.setCustomValidity('');
        }
    });

    // Validacion de las especificaciones
    const specificationsInput = document.getElementById('product-specifications');
    specificationsInput.addEventListener('input', function () {
        if (specificationsInput.value.length < 15) {
            specificationsInput.setCustomValidity('Las especificaciones del producto deben tener al menos 15 caracteres.');
        } else {
            specificationsInput.setCustomValidity('');
        }
    });

    // Validacion de la imagen
    const imageInput = document.getElementById('product-image');
    imageInput.addEventListener('change', function () {
        const file = imageInput.files[0];
        const validImageTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/bmp', 'image/webp', 'image/svg+xml'];

        if (!file || !validImageTypes.includes(file.type)) {
            imageInput.setCustomValidity('Por favor, seleccione un archivo de imagen válido (JPEG, PNG, GIF, BMP, WebP o SVG).');
        } else {
            imageInput.setCustomValidity('');
        }
    });

    // Agregar un listener para el evento 'submit'
    form.addEventListener('submit', function (event) {
        // Verificar si el formulario es válido
        if (!form.checkValidity()) {
            event.preventDefault(); // Evitar que se envíe el formulario si no es válido
            event.stopPropagation(); // Detener la propagación del evento
        } else {
            // Marcar los campos como válidos/inválidos
            form.classList.add('was-validated');

            // Mostrar la alerta
            alert('¡El producto se ha agregado con éxito!');
        }
    }, false);
});