document.addEventListener('DOMContentLoaded', function() {
    // Datos de requisitos
    const requirements = {
        functional: [
            {
                title: "Gestión de Documentación",
                desc: "Sistema completo para manejar documentación técnica y guías"
            },
            {
                title: "Sistema de Navegación",
                desc: "Navegación intuitiva entre las diferentes secciones"
            },
            {
                title: "Formulario de Contacto",
                desc: "Sistema de contacto con validaciones específicas"
            }
        ],
        nonfunctional: [
            {
                title: "Interfaz Responsiva",
                desc: "Diseño adaptable a múltiples dispositivos"
            },
            {
                title: "Rendimiento",
                desc: "Tiempo de carga inferior a 3 segundos"
            },
            {
                title: "Disponibilidad",
                desc: "Sistema disponible 24/7"
            }
        ]
    };

    // Función para renderizar requisitos
    function renderRequirements(type) {
        const container = document.getElementById('requirementsContent');
        container.innerHTML = '';
        
        requirements[type].forEach((req, index) => {
            const reqElement = document.createElement('div');
            reqElement.className = 'requirement-item';
            reqElement.innerHTML = `
                <span class="requirement-number">${index + 1}</span>
                <div class="requirement-content">
                    <h3>${req.title}</h3>
                    <p>${req.desc}</p>
                </div>
            `;
            container.appendChild(reqElement);
        });
    }

    // Manejar clicks en las pestañas
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Actualizar estados activos
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Renderizar requisitos correspondientes
            renderRequirements(button.dataset.type);
        });
    });

    // Renderizar requisitos funcionales inicialmente
    renderRequirements('functional');
});