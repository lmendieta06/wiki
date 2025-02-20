document.addEventListener('DOMContentLoaded', function() {
    const versions = [
        {
            version: "v1.1.0",
            date: "2025-02-20",
            status: "Producción",
            changes: [
                "Despliegue final"
            ]
        },
        {
            version: "v1.0.0",
            date: "2025-02-19",
            status: "Producción",
            changes: [
                "Lanzamiento inicial en docker",
            ]
        },
        {
            version: "v0.3.0",
            date: "2025-02-19",
            status: "Desarrollo",
            changes: [
                "Estructura y diseño de paginas terminado"
            ]
        },
        {
            version: "v0.2.0",
            date: "2025-02-17",
            status: "Desarrollo",
            changes: [
                "Conexion a base de datos exitosa"
            ]
        },
        {
            version: "v0.1.0",
            date: "2025-02-13",
            status: "Desarrollo",
            changes: [
                "Estructura inicial del proyecto",
                "Configuración de entorno",
                "Creacion del repositorio"
            ]
        }
    ];

    function getStatusClass(status) {
        switch(status) {
            case 'Producción': return 'status-production';
            case 'Testing': return 'status-testing';
            case 'Desarrollo': return 'status-development';
            default: return '';
        }
    }

    function renderVersions() {
        const container = document.getElementById('versions-container');
        if (!container) {
            console.error('Versions container not found');
            return;
        }
        
        versions.forEach(ver => {
            const versionElement = document.createElement('div');
            versionElement.className = 'version-item';
            
            versionElement.innerHTML = `
                <div class="version-circle"></div>
                <div class="version-content">
                    <div class="version-header">
                        <div class="version-info">
                            <h2>${ver.version}</h2>
                            <p class="version-date">${ver.date}</p>
                        </div>
                        <span class="version-status ${getStatusClass(ver.status)}">
                            ${ver.status}
                        </span>
                    </div>
                    <ul class="changes-list">
                        ${ver.changes.map(change => `
                            <li class="change-item">
                                <span class="change-bullet">•</span>
                                <span>${change}</span>
                            </li>
                        `).join('')}
                    </ul>
                </div>
            `;
            
            container.appendChild(versionElement);
        });
    }

    renderVersions();
});