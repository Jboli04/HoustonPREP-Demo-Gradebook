document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
  
    //the database
    const users = {
      "admin@houstonprep.com": { password: "ilovehprep", role: "Admin" },
      "teacher@houstonprep.com": { password: "ilovehprep", role: "Teacher" },
      "pa@houstonprep.com": { password: "ilovehprep", role: "PA" }
    };
  
    if (users[email] && users[email].password === password) {
      const role = users[email].role;
      alert(`Logged in as ${role}`);
      // Simulate redirect
      window.location.href = `${role}/dashboard.html`; // e.g. Teacher/dashbaord.html
    } else {
      alert("Invalid email or password.");
    }
  });