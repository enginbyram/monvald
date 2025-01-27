
var map = L.map('map').setView([35, 25], 5);
L.tileLayer(
    'tiles/{z}/{x}/{y}.png', {
    minZoom: 5,
    maxZoom: 9,
    attribution: "&copy " + "Monvald by Engin Bayram",
}).addTo(map);
L.control.scale().addTo(map);

/* MAP BOUNDS*/
var bounds = [[66.23146, -42.01172], [15.35368, 61.52344]];
map.setMaxBounds(bounds)

/* ZOOM VIEWER */
const ZoomViewer = L.Control.extend({
    onAdd() {
        const container = L.DomUtil.create('div');
        const gauge = L.DomUtil.create('div');
        container.style.width = '200px';
        container.style.background = 'rgba(255,255,255,0.5)';
        container.style.textAlign = 'left';
        map.on('zoomstart zoom zoomend', (ev) => {
            gauge.innerHTML = `Zoom level: ${map.getZoom()}`;
        });
        container.appendChild(gauge);
        return container;
    }
});

const zoomViewerControl = (new ZoomViewer()).addTo(map);