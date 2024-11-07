let caja = document.getElementById("displayInfo");

caja.innerHTML = navigator.userAgent + "<br>" + navigator.language + "<br>" + navigator.geolocation + "<br>" + navigator.getBattery();