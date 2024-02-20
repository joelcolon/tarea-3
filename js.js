const events = {
    work: ["Reunión de equipo", "Presentación de proyecto"],
    personal: ["Cita con el médico", "Cumpleaños de amigo"],
    meetings: ["Reunión de planificación", "Entrevista de trabajo"]
};

// Mostrar eventos de la capa seleccionada
function showEvents(layer) {
    const eventList = document.getElementById("event-list");
    eventList.innerHTML = "";
    events[layer].forEach(event => {
        const eventItem = document.createElement("div");
        eventItem.classList.add("event");
        eventItem.textContent = event;
        eventList.appendChild(eventItem);
    });
}

// Agregar un evento a la capa seleccionada
function addEvent() {
    const layerSelect = document.getElementById("layer-select");
    const selectedLayer = layerSelect.value;
    const eventName = prompt("Ingrese el nombre del evento:");
    if (eventName) {
        events[selectedLayer].push(eventName);
        showEvents(selectedLayer);
    }
}

// Mostrar eventos de la capa seleccionada al cargar la página
document.addEventListener("DOMContentLoaded", function() {
    const layerSelect = document.getElementById("layer-select");
    layerSelect.addEventListener("change", function() {
        showEvents(this.value);
    });
    showEvents(layerSelect.value);
});