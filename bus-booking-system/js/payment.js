document.addEventListener("DOMContentLoaded", () => {
    const seatInfo = document.getElementById("seatInfo");
    seatInfo.innerText = "Seats: " + localStorage.getItem("seats");
});

function payNow() {
    alert("Payment Successful!");
    window.location.href = "success.html";
}
