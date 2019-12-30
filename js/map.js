const RD = new L.Proj.CRS(
    'EPSG:28992',
    '+proj=sterea +lat_0=52.15616055555555 +lon_0=5.38763888888889 +k=0.9999079 +x_0=155000 +y_0=463000 +ellps=bessel +units=m +towgs84=565.2369,50.0087,465.658,-0.406857330322398,0.350732676542563,-1.8703473836068,4.0812 +no_defs', {
        origin: [-285401.92, 22598.08],
        resolutions: [3440.640, 1720.320, 860.160, 430.080, 215.040, 107.520, 53.760, 26.880, 13.440, 6.720, 3.360, 1.680, 0.840, 0.420, 0.210, 0.105],
        bounds: L.bounds([-285401.92, 22598.08], [595401.920, 903401.920])
    });

const brtLayer = new L.tileLayer('http://geodata.nationaalgeoregister.nl/tms/1.0.0/brtachtergrondkaart/{z}/{x}/{y}.png', {
    minZoom: 0,
    maxZoom: 14,
    tms: true,
});


window.onload = function () {
    let map = new L.Map('mapid', {
        crs: RD,
        layers: [brtLayer]
    });
    const center = L.point(187282, 334824);
    map.setView(RD.projection.unproject(center), 7);
}