const toggleFormBtn = document.getElementById("toggle-form-btn");
const signinForm = document.getElementById("signin-form");
const signupForm = document.getElementById("signup-form");

toggleFormBtn.addEventListener("click", function() {
  if (signinForm.style.display === "none") {
    // Switch to sign in form
    signinForm.style.display = "";
    signupForm.style.display = "none";
    toggleFormBtn.textContent = "Sign Up";
  } else {
    // Switch to sign up form
    signinForm.style.display = "none";
    signupForm.style.display = "";
    toggleFormBtn.textContent = "Sign In";
  }
});
