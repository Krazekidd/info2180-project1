/* Add your JavaScript to this file */
window.onload = function() {


 const btn = document.querySelector("button");
 btn.addEventListener("click", function(event){
 event.preventDefault();
 const email = document.getElementById("email").value;
 const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email == ""){
    document.querySelector(".message").textContent = "Please enter a valid email address";
  }else if (!emailPattern.test(email)) {
    document.querySelector(".message").textContent = "Please enter a valid email address";
  } else {
    document.querySelector(".message").textContent = `Thank you! Your email address ${email} has been added to our mailing list!`;
  }

 console.log(email);
}); 



}