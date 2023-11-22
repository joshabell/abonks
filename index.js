// History


// Initialize and add the map
let map;

async function initMap() {
    const years = [
        {
            year: 2004,
            country: "China",
            lat: 33.511,
            lng: 104.352,
            description: "2004 - The first year!"
        },
        {
            year: 2005,
            country: "Spain",
            lat: 39.850,
            lng: -4.299,
            description: "2005 - Spain!"
        },
        {
            year: 2006,
            country: "New Orleans",
            lat: 29.861,
            lng: -90.091,
            description: "2006 - New Orleans!"
        },
        {
            year: 2007,
            country: "Thailand",
            lat: 16.153,
            lng: 101.008,
            description: "2007: Thailand!"
        },
        {
            year: 2008,
            country: "Greece",
            lat: 39.299,
            lng: 22.344,
            description: "2008: Greece!"
        },
        {
            year: 2009,
            country: "Brazil",
            lat: -8.268,
            lng: -50.631,
            description: "2009: Brasil!"
        },
        {
            year: 2010,
            country: "Hawaii",
            lat: 20.773,
            lng: -156.374,
            description: "2010 : Hawaii!"
        },
        {
            year: 2011,
            country: "Mexico",
            lat: 20.428,
            lng: -99.363,
            description: "2011 : Mexico!"
        },
        {
            year: 2012,
            country: "France",
            lat: 48.851,
            lng: 2.340,
            description: "2012 : France!"
        },
        {
            year: 2013,
            country: "Italy",
            lat: 42.593,
            lng: 12.637,
            description: "2013 : Italy!"
        },
        {
            year: 2014,
            country: "Japan",
            lat: 36.016,
            lng: 138.506,
            description: "2014 : Japan!"
        },
        {
            year: 2015,
            country: "Vietnam",
            lat: 13.219,
            lng: 108.565,
            description: "2015 : Vietnam!"
        },
        {
            year: 2016,
            country: "Philippines",
            lat: 14.538,
            lng: 121.392,
            description: "2016 : Philippines!"
        },
        {
            year: 2017,
            country: "Portugal",
            lat: 39.423,
            lng: -7.829,
            description: "2017 : Portugal!"
        },
        {
            year: 2018,
            country: "India",
            lat: 21.679,
            lng: 78.003,
            description: "2018 : India!"
        },
        {
            year: 2019,
            country: "Jamaica",
            lat: 18.243,
            lng: -77.314,
            description: "2019: Jamaica!"
        },
        {
            year: 2020,
            country: "Covid?",
            missed: true,
            description: "Covid, Zoom, Comfort Food"
        },
        {
            year: 2021,
            country: "Covid?",
            missed: true,
            description: "Covid?"
        },
        {
            year: 2022,
            country: "Columbia",
            lat: 5.431,
            lng: -73.7234,
            description: "2022 - Columbia!"
        },

    ];

  // The location of Uluru
  const position = { lat: -25.344, lng: 131.031 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at Uluru
  map = new Map(document.getElementById("map"), {
    zoom: 2,
    center: {lat: 43.995799, lng: -72.8851709},
    mapId: "DEMO_MAP_ID",
  });

  let year;
  // The marker, positioned at Uluru
  for (year of years){
    console.log("YEAR: " + year.description);

    if (!year.missed){    
    const marker = new AdvancedMarkerElement(
        {
            map: map,
            position: {lat: year.lat, lng: year.lng},
            title: year.description
        }
    )
    }   
  }

  // Create the table
  let tablearea = document.getElementById('thelist');
  for (year of years){
    let newrow = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let tdd1 = document.createTextNode(year.year.toString());
    let tdd2 = document.createTextNode(year.country);
    td1.appendChild(tdd1);
    td2.appendChild(tdd2);
    newrow.appendChild(td1);
    newrow.appendChild(td2);
    tablearea.appendChild(newrow);
  }


}

initMap();