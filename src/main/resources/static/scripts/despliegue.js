document.addEventListener('DOMContentLoaded', function() {
    const versions = [
        {
            version: "v1.0.0",
            date: "2025-02-15",
            status: "Producción",
            changes: [
                "Lanzamiento inicial",
                "Implementación de autenticación",
                "Sistema de documentación base"
            ]
        },
        {
            version: "v0.2.0",
            date: "2025-02-01",
            status: "Testing",
            changes: [
                "Mejoras en la interfaz de usuario",
                "Corrección de bugs en formularios",
                "Optimización de rendimiento"
            ]
        },
        {
            version: "v0.1.0",
            date: "2025-01-15",
            status: "Desarrollo",
            changes: [
                "Estructura inicial del proyecto",
                "Configuración de entorno",
                "Implementación básica de endpoints"
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