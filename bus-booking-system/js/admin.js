// Admin role protection
if (localStorage.getItem("role") !== "admin") {
    alert("Access Denied!");
    window.location.href = "login.html";
}

console.log("Admin dashboard loaded");
