async function loginFormHandler(event) {
    event.preventDefault();
  
    const email = document.querySelector("#email-login").value.trim();
    const password = document.querySelector("#password-login").value.trim();
  
    if (email && password) {
      const response = await fetch("/api/users/login", {
        method: "post",
        body: JSON.stringify({
          email,
          password,
        }),
        headers: { "Content-Type": "application/json" },
      });
  
      if (response.ok) {
        document.location.replace("/dashboard/");
      } else {
        alert(response.statusText);
      }
    }
  }
  
  async function signupFormHandler(event) {
    console.log("signup initiated");
    event.preventDefault();
  
    const username = document.querySelector("#username-signup").value.trim();
    const email = document.querySelector("#email-signup").value.trim();
    const password = document.querySelector("#password-signup").value.trim();
    // const icon = 1;
    // const hero = "https://www.tammybaldwin.com/wp-content/uploads/2011/09/placeholder.png";
  
    if (username && email && password) {
      console.log(username);
      const response = await fetch("/api/users", {
        method: "post",
        body: JSON.stringify({
          username,
          email,
          password,
        }),
        headers: { "Content-Type": "application/json" },
      });
  
      if (response.ok) {
        console.log('got a response');
        req.session.save(() => {
          req.session.user_id = dbUserData.id;
          req.session.username = dbUserData.username;
          req.session.loggedIn = true;});
        document.location.replace("/");
        console.log("this happened");
      } else {
        console.log('response was not ok');
        alert(response.statusText);
      }
    }
  }
  
  document
    .querySelector(".login-form")
    .addEventListener("submit", loginFormHandler);
  
document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
  