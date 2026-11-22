
// ==============================
// 1. NAVBAR INTERAKTIF
// ==============================

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", function() {

    navMenu.classList.toggle("show");

});

// Menutup menu setelah link diklik
const navLinks = document.querySelectorAll("#nav-menu a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {
        navMenu.classList.remove("show");
    });

});


// ==============================
// 2. JAM DIGITAL
// ==============================

function tampilkanJam() {

    const sekarang = new Date();

    const jam = sekarang.toLocaleTimeString("id-ID");

    document.getElementById("clock").innerHTML =
        "Waktu sekarang: " + jam;

}

// Memperbarui jam setiap satu detik
setInterval(tampilkanJam, 1000);

tampilkanJam();


// ==============================
// 3. SAPAAN PENGUNJUNG
// ==============================

const waktu = new Date();
const jamSekarang = waktu.getHours();

let sapaan;

if (jamSekarang >= 5 && jamSekarang < 12) {

    sapaan = "Selamat pagi!";

} else if (jamSekarang >= 12 && jamSekarang < 15) {

    sapaan = "Selamat siang!";

} else if (jamSekarang >= 15 && jamSekarang < 18) {

    sapaan = "Selamat sore!";

} else {

    sapaan = "Selamat malam!";

}

document.getElementById("greeting").innerHTML =
    sapaan + " Selamat datang di Italic Barbershop.";

    
// ==============================
// 4. BOOKING WHATSAPP
// ==============================

const form = document.getElementById("booking-form");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const nama = document.getElementById("nama").value;

    const layanan = document.getElementById("layanan").value;

    const nomorWA = "6288223512940";

    const pesan =
        "Halo Italic Barbershop!" +
        "\nSaya ingin melakukan booking." +
        "\nNama: " + nama +
        "\nLayanan: " + layanan;

    const linkWA =
        "https://wa.me/" + nomorWA +
        "?text=" + encodeURIComponent(pesan);

    document.getElementById("pesan").innerHTML =
        "Menghubungkan ke WhatsApp...";

    window.open(linkWA, "_blank");

});


// ==============================
// 5. TOMBOL KEMBALI KE ATAS
// ==============================

const tombolAtas = document.getElementById("back-to-top");

window.addEventListener("scroll", function() {

    if (window.scrollY > 300) {

        tombolAtas.style.display = "block";

    } else {

        tombolAtas.style.display = "none";

    }

});

tombolAtas.addEventListener("click", function() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
