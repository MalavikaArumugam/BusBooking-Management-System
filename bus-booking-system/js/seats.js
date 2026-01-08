let selectedSeats = [];

function selectSeat(seat) {
    const seatNo = seat.innerText;

    seat.classList.toggle("selected");

    if (selectedSeats.includes(seatNo)) {
        selectedSeats = selectedSeats.filter(s => s !== seatNo);
    } else {
        selectedSeats.push(seatNo);
    }
}

function goToPayment() {
    if (selectedSeats.length === 0) {
        alert("Please select at least one seat");
        return;
    }

    localStorage.setItem("seats", selectedSeats.join(", "));
    window.location.href = "payment.html";
}
