function toggleMobileOptions(){
    var mobileOptions = document.getElementById("navbar-mobile-options-box");
    if (mobileOptions.style.display === "none" || mobileOptions.style.display === "") {
        mobileOptions.style.display = "block";
      } else {
        mobileOptions.style.display = "none";
      }

}