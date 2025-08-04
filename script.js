function goToApp(url) {
  window.location.href = url;
}


function showUserName() {
      const name = localStorage.getItem("userName");
      if (!name) {
        window.location.href = "index.html";
      } else {
        document.querySelector(".userNameDisplay").innerText = `Welcome, ${name}`;
      }
    }