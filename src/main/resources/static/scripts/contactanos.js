document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const inputs = {
        nombres: document.getElementById('nombres'),
        apellidos: document.getElementById('apellidos'),
        correo: document.getElementById('correo'),
        semestre: document.getElementById('semestre'),
        descripcion: document.getElementById('descripcion')
    };

    // Función para crear y mostrar mensajes de error
    function showError(input, message) {
        // Eliminar mensaje de error previo si existe
        const existingError = input.parentElement.querySelector('.error-message');
        if (existingError) {
            existingError.remove();
        }

        // Crear nuevo mensaje de error
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = message;
        input.parentElement.appendChild(errorDiv);
        input.style.borderColor = '#ff4444';
    }

    // Función para remover mensajes de error
    function removeError(input) {
        const errorDiv = input.parentElement.querySelector('.error-message');
        if (errorDiv) {
            errorDiv.remove();
        }
        input.style.borderColor = '#ccc';
    }

    // Contador de caracteres para campos con maxlength
    function createCharCounter(input) {
        const counter = document.createElement('div');
        counter.className = 'char-count';
        input.parentElement.appendChild(counter);

        function updateCounter() {
            counter.textContent = `${input.value.length}/${input.maxLength}`;
        }

        input.addEventListener('input', updateCounter);
        updateCounter(); // Inicializar contador
    }

    // Crear contadores para campos con maxlength
    ['nombres', 'apellidos', 'correo'].forEach(field => {
        createCharCounter(inputs[field]);
    });

    // Convertir correo a mayúsculas
    inputs.correo.addEventListener('input', function() {
        this.value = this.value.toUpperCase();
    });

    // Validaciones en tiempo real
    inputs.nombres.addEventListener('input', function() {
        if (this.value.length > 100) {
            this.value = this.value.slice(0, 100);
        }
        this.value ? removeError(this) : showError(this, 'El nombre es obligatorio');
    });

    inputs.apellidos.addEventListener('input', function() {
        if (this.value.length > 100) {
            this.value = this.value.slice(0, 100);
        }
        this.value ? removeError(this) : showError(this, 'El apellido es obligatorio');
    });

    inputs.correo.addEventListener('input', function() {
        const emailRegex = /^[A-Z0-9]+@[A-Z0-9]+\.[A-Z]+$/;
        const specialCharsRegex = /[áéíóúñÁÉÍÓÚÑ\s]/;

        if (this.value.length > 100) {
            this.value = this.value.slice(0, 100);
        }

        if (!this.value) {
            showError(this, 'El correo es obligatorio');
        } else if (specialCharsRegex.test(this.value)) {
            showError(this, 'No se permiten caracteres especiales ni espacios');
        } else if (!emailRegex.test(this.value)) {
            showError(this, 'Formato de correo inválido');
        } else {
            removeError(this);
        }
    });

    inputs.semestre.addEventListener('input', function() {
        const value = parseInt(this.value);
        if (isNaN(value) || value < 0 || value > 16) {
            showError(this, 'El semestre debe estar entre 0 y 16');
        } else {
            removeError(this);
        }
    });

    inputs.descripcion.addEventListener('input', function() {
        this.value ? removeError(this) : showError(this, 'La descripción es obligatoria');
    });

    // Validación al enviar el formulario
    form.addEventListener('submit', function(e) {
        let hasErrors = false;

        // Validar cada campo
        Object.values(inputs).forEach(input => {
            if (!input.value) {
                showError(input, 'Este campo es obligatorio');
                hasErrors = true;
            }
        });

        // Validaciones específicas
        const emailRegex = /^[A-Z0-9]+@[A-Z0-9]+\.[A-Z]+$/;
        if (!emailRegex.test(inputs.correo.value)) {
            showError(inputs.correo, 'Formato de correo inválido');
            hasErrors = true;
        }

        const semestre = parseInt(inputs.semestre.value);
        if (isNaN(semestre) || semestre < 0 || semestre > 16) {
            showError(inputs.semestre, 'El semestre debe estar entre 0 y 16');
            hasErrors = true;
        }

        if (hasErrors) {
            e.preventDefault();
        }
    });
});