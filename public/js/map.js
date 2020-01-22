mapboxgl.accessToken = 'pk.eyJ1IjoiZHVuY2FuYWtlbmRvIiwiYSI6ImNrNXBoNzU3cjBzam0zdW1vdnY1NjJiZzUifQ.ZjBfVpLiShWjZYv-q0K2wQ';
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    zoom:9,
    center: [-71.157895, 42.707741]

});
// Fetch atms from API
async function getAtms(){
   const res = await fetch('/api/v1/atm');
   const data = await res.json();

  const atms = data.data.map( atm => {
      return {
            
                           type: 'Feature',
                           geometry: {
                                type: 'Point',
                                coordinates: [atm.location.coordinates[0], atm.location.coordinates[1]]
                           },
                            properties:{
                               atmId: atm.atmId,
                                icon:'shop'
                            }
                        }
      });
      loadMAP(atms);
    }


// Load map with atms

function loadMAP(atms) {
    map.on('load', function () {
        map.addLayer({
            'id': 'points',
            'type': 'symbol',
            'source': {
                'type': 'geojson',
                'data': {
                    'type': 'FeatureCollection',
                    features: atms,
                   
                }
            },
            layout: {
                'icon-image': '{icon}-15',
                'icon-size': 1.5,
                'text-field':'{atmId}',
                'text-font': ['Open Sans Semibold','Arial Unicode MS Bold'],
                'text-offset': [0, 0.9],
                'text-anchor': 'top'          
              }
        });
    });
}

getAtms();