function login(username, password) {
    var storedUser = { username: "admin", password: "admin" };
    if (username === storedUser.username && password === storedUser.password) {
        console.log("Login successful");
        return true;
    }
    else {
        console.log("Login failed");
        return false;
    }
}
console.log(login("admin", "admin"));
login("user", "pass");
