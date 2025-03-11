---

---

var map = L.map('map').setView([9.3361060367590589, 39.714780594855114], 5);

L.tileLayer('{{site.baseurl}}/tiles/{z}/{x}/{y}.png', {
    minZoom: 5,
    maxZoom: 9,
    attribution: "&copy " + "Monvald by Engin Bayram"
}).addTo(map);

L.control.scale().addTo(map);

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