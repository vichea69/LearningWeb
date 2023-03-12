// Google Sign-In API client ID
const clientId = "AIzaSyDWvNzUoAPEkvgF_cpIS_L_sym1xwA_dmc";

// Handle sign-in button click
document.getElementById("sign-in-button").addEventListener("click", function() {
  // Redirect to Google Sign-In
  window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=http://localhost:3000/callback&scope=openid email&response_type=code`;
});
