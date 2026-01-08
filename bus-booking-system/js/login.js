function login() {
    const username = document.getElementById("username").value;
    const role = document.getElementById("role").value;

    if (username === "") {
        alert("Please enter username");
        return;
    }

    localStorage.setItem("user", username);
    localStorage.setItem("role", role);

    if (role === "admin") {
        window.location.href = "admin.html";
    } else {
        window.location.href = "search.html";
    }
}
