//Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector(".to-top");

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    toTop.classList.remove("flex");
    toTop.classList.add("hidden");
  }
};

//hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

//contact
let contactSection = document.querySelector("#contact");
contactSection.style.display = "none";
function showHideContact() {
  contactSection.style.display = "block";
}

// Script Link Spreadsheet
const scriptURL = "https://script.google.com/macros/s/AKfycbwiZjnITAdtdov964dB-HOvKd9Gf71F9WOFkwYksf0PFbM2tojj1-PHjn6KpZW9bcg/exec";
const form = document.forms["submit-to-google-sheet"];
const btnKirim = document.querySelector(".btn-kirim");
const btnLoading = document.querySelector(".btn-loading");
const myAlert = document.querySelector(".alert");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  //ketika tombol submit diklik
  //tampilkan tombol loading hilangkan tombol kirim
  btnLoading.classList.toggle("hidden");
  btnKirim.classList.toggle("hidden");
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      //tampilkan tombol kirim, hilangkan tombol loading
      btnLoading.classList.toggle("hidden");
      btnKirim.classList.toggle("hidden");
      //tampilkan alert
      alert("Terimakasih! pesan berhasil terkirim");
      //reset form
      form.reset();
      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});

//klik di luar hamburger
window.addEventListener("click", function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
});

//Darkmode toggle
const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

darkToggle.addEventListener("click", function () {
  if (darkToggle.checked) {
    html.classList.add("dark");
  } else {
    html.classList.remove("dark");
  }
});
