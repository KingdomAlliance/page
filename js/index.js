document.addEventListener("DOMContentLoaded", async function () {

    setTimeout(function() {
        document.getElementById('startOverlay').style.opacity = '0';
    }, 500);
});




// Background
const blob = document.getElementById("blob");

window.onpointermove = event => { 
  const { clientX, clientY } = event;
  
  blob.animate({
    left: `${clientX}px`,
    top: `${clientY}px`
  }, { duration: 3500, fill: "forwards" });
}