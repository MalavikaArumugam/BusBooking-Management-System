function search() {
    // Basic validation
    const inputs = document.querySelectorAll("input");
    for (let input of inputs) {
        if (input.value === "") {
            alert("Please fill all fields");
            return;
        }
    }

    // Navigate to buses page
    window.location.href = "buses.html";
}
