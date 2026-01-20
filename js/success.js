document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("finalSeats").innerText =
        "Seats Booked: " + localStorage.getItem("seats");
});

function goHome() {
    localStorage.removeItem("seats");
    window.location.href = "index.html";
}
