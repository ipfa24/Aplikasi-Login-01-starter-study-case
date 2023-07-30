/*
 * Catatan:
 * Gunakan fungsi goToHome() untuk menampilkan halaman home
 * Gunakan fungsi goToLogin() untuk menampilkan halaman login
 * Gunakan fungsi showPopUp() untuk menampilkan pop up error
 */

/*Memanggil id dari elemen html yaitu email dan password*/

const loginFormElement = document.querySelector("#loginForm");
const inputEmailElement = document.querySelector("#inputEmail");
const inputPasswordElement = document.querySelector("#inputPassword");

/* Membuat variabel dan berisi nilai email dan password yang digunakan untuk login pada halaman website */

const emailnya = "imronmustari@gmail.com";
const passwordnya = "imronmustari";

// Memanggil sebuah variabel yang dibuat dan di panggil ke dalam parameter yang akan di akan dibuat fungsi login

loginFormElement.addEventListener("submit", function (event) {
  event.preventDefault();
  // TODO 1 : Mendapatkan input email dan password pengguna dari form.

  const email = inputEmailElement.value;
  const password = inputPasswordElement.value;

  /* TODO 2 : Buat Logika perbandingan dengan kondisi:
       Jika variabel email identik dengan expectedEmail dan password identik dengan expectedPassword, panggil fungsi goToHome().
       Jika tidak, maka panggil fungsi showPopUp().
     */
  if (email == emailnya && password == passwordnya) {
    goToHome();
  } else {
    showPopUp();
  }
});
