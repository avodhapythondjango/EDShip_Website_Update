// JavaScript to handle the pop-up close functionality
document.addEventListener("DOMContentLoaded", function () {
    const popupOverlay = document.getElementById("popup-overlay");
    const popupClose = document.getElementById("popup-close");
  
    // Event listener to close the pop-up
    popupClose.addEventListener("click", function () {
      popupOverlay.style.display = "none";
    });
  
    // Optional: Close the pop-up when the overlay background is clicked
    popupOverlay.addEventListener("click", function (e) {
      if (e.target === popupOverlay) {
        popupOverlay.style.display = "none";
      }
    });
  });
  