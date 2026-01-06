

function helpTrigger() {
    window.location.href = "Wanthelp page.html";


} 
function volunteerTrigger() {
  window.location.href = "volunteer.html";
}
function choice(type) {
    if (type === "shelter") {
        window.location.href = "shelter.html";
    } else if (type === "food") {
        window.location.href = "FOOD.html";
    } else if (type === "medical") {
        window.location.href = "medical.html";
    }
}

  function updateShelterMap(place) {
    const map = document.getElementById("shelterMap");
    const query = place.replace(/ /g, "+");
    map.src = "https://www.google.com/maps?q=" + query + "&output=embed";
  }
