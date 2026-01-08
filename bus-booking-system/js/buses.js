function selectBus() {
    // Store selected bus (static for demo)
    localStorage.setItem("bus", "Volvo AC Sleeper");
    localStorage.setItem("fare", "1200");
    window.location.href = "seats.html";
}
