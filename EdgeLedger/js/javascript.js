function initMap() {
    const loc = { lat: 31.572795, lng: 74.195098 };
    map = new google.maps.Map(document.getElementById("fifth-section-map"), {
      center: loc,
      zoom: 8
    });
    const marker = new google.maps.Marker({position:loc,map})
  }