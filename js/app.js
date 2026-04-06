// Configuración del Asesor (Cambiar según el cliente)
const AGENT_DATA = {
    phone: "527979779214", // Número de WhatsApp con código de país
    name: "Nombre del Asesor",
    company: "Inmobiliaria",
    email: "correo@ejemplo.com"
};




/**
 * Función para rastrear interacciones y ejecutar la acción (WhatsApp/Llamada)
 * Aquí es donde "Doop" genera valor midiendo.
 */
function trackInteraction(actionType, propertyContext) {
    // 1. Simulación de envío a Analytics o Base de datos
    console.log(`[Doop Analytics] Evento: ${actionType} | Contexto: ${propertyContext}`);

    // 2. Ejecutar la acción
    if (actionType === 'WhatsApp') {
        const message = encodeURIComponent(`Hola, estaba viendo tu tarjeta digital y me interesa recibir más información sobre: ${propertyContext}`);
        window.open(`https://wa.me/${AGENT_DATA.phone}?text=${message}`, '_blank');
    } else if (actionType === 'Llamada') {
        window.open(`tel:+${AGENT_DATA.phone}`, '_self');
    }
}

const btn = document.getElementById('myButton');
btn.addEventListener('click', () => {
  trackInteraction();
});
/**
 * Generador de archivo .VCF para guardar el contacto.
 * Esta función crea un archivo VCard en el navegador y fuerza la descarga.
 */
function downloadVCF() {
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:${AGENT_DATA.name}
ORG:${AGENT_DATA.company}
TEL;TYPE=WORK,VOICE:+${AGENT_DATA.phone}
EMAIL;TYPE=PREF,INTERNET:${AGENT_DATA.email}
END:VCARD`;

    const blob = new Blob([vcard], { type: "text/vcard" });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement("a");
    a.href = url;
    a.download = "contacto_asesor.vcf";
    document.body.appendChild(a);
    a.click();
    
    // Limpieza
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    console.log("[Doop Analytics] Descarga de VCF registrada");
}