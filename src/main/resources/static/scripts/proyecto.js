document.addEventListener('DOMContentLoaded', function() {
    // Datos de requisitos
    const requirements = {
        functional: [
            {
                title: "Gestión de Propiedades",
                desc: "Para Arrendatarios: Sistema completo para crear, editar y administrar propiedades en alquiler"
            },
            {
                title: "Búsqueda Inteligente",
                desc: "Para Arrendadores: Búsqueda avanzada de propiedades con filtros por ubicación y características"
            },
            {
                title: "Solicitudes de Arriendo",
                desc: "Para Ambos: Sistema de envío y gestión de solicitudes de arrendamiento con notificaciones"
            },
            {
                title: "Pagos Seguros",
                desc: "Para Arrendadores: Plataforma integrada para realizar pagos de arriendo con verificación automática"
            },
            {
                title: "Sistema de Calificaciones",
                desc: "Para Ambos: Herramienta para evaluar y comentar sobre la experiencia de arrendamiento"
            }
        ],
        nonfunctional: [
            {
                title: "Seguridad",
                desc: "Implementación de autenticación, encriptación de datos y protección contra accesos no autorizados."
            },
            {
                title: "Escalabilidad",
                desc: "Capacidad para manejar un crecimiento progresivo de usuarios y transacciones."
            },
            {
                title: "Disponibilidad",
                desc: "Sistema con alta disponibilidad y tiempos de respuesta óptimos."
            },
            {
                title: "Usabilidad",
                desc: "Diseño intuitivo y accesible para diferentes tipos de usuarios."
            },
            {
                title: "Eficiencia",
                desc: "Procesos optimizados para reducir tiempos de carga y mejorar la experiencia del usuario."
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