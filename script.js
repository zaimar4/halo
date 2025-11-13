
function pilih(jenis) {
const ruang = document.getElementById('menu-ruang');
const datar = document.getElementById('menu-datar');

ruang.style.display = "none";
datar.style.display = "none";

if (jenis === 'ruang') {
ruang.style.display = "flex"; 
} else {
datar.style.display = "flex"; 
}

  document.getElementById('menu').scrollIntoView({behavior: 'smooth'});
}


function sembunyikanSemuaTabel() {
const semuaTabel = document.querySelectorAll('#table-hitung > div');
semuaTabel.forEach(tabel => tabel.style.display = "none");
}


function tampilkanForm(idTabel) {
    sembunyikanSemuaTabel();
    document.getElementById(idTabel).style.display = "block";
    document.getElementById('table-hitung').scrollIntoView({behavior: 'smooth'});
}

// === KUBUS ===
function kubus(jenis) {
if (jenis === 'volume') tampilkanForm('table-volume-kubus');
else if (jenis === 'luas_permukaan') tampilkanForm('table-luas-kubus');
}

function hitungKubus(jenis) {
let s, hasilElement, satuan;

if (jenis === 'volume') {
s = parseFloat(document.getElementById('sisi-volume-kubus').value); // ID diperbaiki
hasilElement = document.getElementById('hasil-volume-kubus'); // ID diperbaiki
satuan = document.getElementById('satuan-volume-kubus').value;
} else {
s = parseFloat(document.getElementById('sisi-luas-kubus').value); // ID diperbaiki
hasilElement = document.getElementById('hasil-luas-kubus'); // ID diperbaiki
satuan = document.getElementById('satuan-luas-kubus').value;
}

  if (isNaN(s) || s <= 0) {
    alert("Masukkan panjang sisi yang valid!");
    hasilElement.style.display = "none";
    return;
  }

let hasil = (jenis === 'volume') ? Math.pow(s, 3) : 6 * Math.pow(s, 2);
  
hasilElement.innerText = `Hasil ${jenis === 'volume' ? 'Volume' : 'Luas Permukaan'}: ${hasil.toFixed(2)} ${satuan}`;
hasilElement.style.display = "block";
}

// === BALOK ===
function balok(jenis) {
if (jenis === 'volume') tampilkanForm('table-volume-balok');
else tampilkanForm('table-luas-balok');
}

function hitungBalok(jenis) {
let p, l, t, hasilElement, satuan;

if (jenis === 'volume') {
    // ID diperbaiki
p = parseFloat(document.getElementById('p-volume-balok').value);
l = parseFloat(document.getElementById('l-volume-balok').value);
t = parseFloat(document.getElementById('t-volume-balok').value);
hasilElement = document.getElementById('hasil-volume-balok'); // ID diperbaiki
satuan = document.getElementById('satuan-volume-balok').value;
} else {
    // ID diperbaiki
p = parseFloat(document.getElementById('p-luas-balok').value);
l = parseFloat(document.getElementById('l-luas-balok').value);
t = parseFloat(document.getElementById('t-luas-balok').value);
hasilElement = document.getElementById('hasil-luas-balok'); // ID diperbaiki
satuan = document.getElementById('satuan-luas-balok').value;
}

  if (isNaN(p) || isNaN(l) || isNaN(t) || p <= 0 || l <= 0 || t <= 0) {
    alert("Masukkan panjang, lebar, dan tinggi yang valid!");
    hasilElement.style.display = "none";
    return;
  }

let hasil = (jenis === 'volume') ? p * l * t : 2 * (p*l + p*t + l*t);

hasilElement.innerText = `Hasil ${jenis === 'volume' ? 'Volume' : 'Luas Permukaan'}: ${hasil.toFixed(2)} ${satuan}`;
hasilElement.style.display = "block";
}

// === PRISMA SEGITIGA ===
function prisma(jenis) {
if (jenis === 'volume') tampilkanForm('table-volume-prisma');
else tampilkanForm('table-luas-prisma');
}

function hitungPrisma(jenis) {
let hasilElement, satuan, La, t, kelilingAlas;

if (jenis === 'volume') {
    La = parseFloat(document.getElementById('luas-alas-prisma').value);
    t = parseFloat(document.getElementById('tinggi-prisma').value);
hasilElement = document.getElementById('hasil-volume-prisma');
satuan = document.getElementById('satuan-volume-prisma').value;
    if (isNaN(La) || isNaN(t) || La <= 0 || t <= 0) {
        alert("Masukkan Luas Alas dan Tinggi yang valid!");
        hasilElement.style.display = "none";
        return;
    }
    hasil = La * t;
} else { // luas
    La = parseFloat(document.getElementById('luas-alas-prisma-luas').value);
    kelilingAlas = parseFloat(document.getElementById('keliling-alas-prisma-luas').value);
    t = parseFloat(document.getElementById('tinggi-prisma-luas').value);
hasilElement = document.getElementById('hasil-luas-prisma');
satuan = document.getElementById('satuan-luas-prisma').value;
    if (isNaN(La) || isNaN(kelilingAlas) || isNaN(t) || La <= 0 || kelilingAlas <= 0 || t <= 0) {
        alert("Masukkan Luas Alas, Keliling Alas, dan Tinggi yang valid!");
        hasilElement.style.display = "none";
        return;
    }
    hasil = (2 * La) + (kelilingAlas * t);
}

hasilElement.innerText = `Hasil ${jenis === 'volume' ? 'Volume' : 'Luas Permukaan'}: ${hasil.toFixed(2)} ${satuan}`;
hasilElement.style.display = "block";
}

// === LIMAS SEGEMPAT ===
function limas(jenis) {
if (jenis === 'volume') tampilkanForm('table-volume-limas');
else tampilkanForm('table-luas-limas');
}

function hitungLimas(jenis) {
let hasilElement, satuan, La, t, luasSisiTegak;

if (jenis === 'volume') {
    La = parseFloat(document.getElementById('luas-alas-limas').value);
    t = parseFloat(document.getElementById('tinggi-limas').value);
hasilElement = document.getElementById('hasil-volume-limas');
satuan = document.getElementById('satuan-volume-limas').value;
    if (isNaN(La) || isNaN(t) || La <= 0 || t <= 0) {
        alert("Masukkan Luas Alas dan Tinggi yang valid!");
        hasilElement.style.display = "none";
        return;
    }
    hasil = (1/3) * La * t;
} else { // luas
    La = parseFloat(document.getElementById('luas-alas-limas-luas').value);
    luasSisiTegak = parseFloat(document.getElementById('luas-sisi-tegak-limas').value);
hasilElement = document.getElementById('hasil-luas-limas');
satuan = document.getElementById('satuan-luas-limas').value;
    if (isNaN(La) || isNaN(luasSisiTegak) || La <= 0 || luasSisiTegak <= 0) {
        alert("Masukkan Luas Alas dan Jumlah Luas Sisi Tegak yang valid!");
        hasilElement.style.display = "none";
        return;
    }
    hasil = La + luasSisiTegak;
}

hasilElement.innerText = `Hasil ${jenis === 'volume' ? 'Volume' : 'Luas Permukaan'}: ${hasil.toFixed(2)} ${satuan}`;
hasilElement.style.display = "block";
}

// === TABUNG ===
function tabung(jenis) {
if (jenis === 'volume') tampilkanForm('table-volume-tabung');
else tampilkanForm('table-luas-tabung');
}

function hitungTabung(jenis) {
const phi = 3.14159;
let hasilElement, satuan, r, t;

if (jenis === 'volume') {
    r = parseFloat(document.getElementById('r-volume-tabung').value);
    t = parseFloat(document.getElementById('t-volume-tabung').value);
hasilElement = document.getElementById('hasil-volume-tabung');
satuan = document.getElementById('satuan-volume-tabung').value;
    if (isNaN(r) || isNaN(t) || r <= 0 || t <= 0) {
        alert("Masukkan Jari-jari dan Tinggi yang valid!");
        hasilElement.style.display = "none";
        return;
    }
    hasil = phi * r * r * t;
} else { // luas
    r = parseFloat(document.getElementById('r-luas-tabung').value);
    t = parseFloat(document.getElementById('t-luas-tabung').value);
hasilElement = document.getElementById('hasil-luas-tabung');
satuan = document.getElementById('satuan-luas-tabung').value;
    if (isNaN(r) || isNaN(t) || r <= 0 || t <= 0) {
        alert("Masukkan Jari-jari dan Tinggi yang valid!");
        hasilElement.style.display = "none";
        return;
    }
    hasil = 2 * phi * r * (r + t);
}

hasilElement.innerText = `Hasil ${jenis === 'volume' ? 'Volume' : 'Luas Permukaan'}: ${hasil.toFixed(2)} ${satuan}`;
hasilElement.style.display = "block";
}

// === KERUCUT ===
function kerucut(jenis) {
if (jenis === 'volume') tampilkanForm('table-volume-kerucut');
else tampilkanForm('table-luas-kerucut');
}

function hitungKerucut(jenis) {
const phi = 3.14159;
let hasilElement, satuan, r, t, s;

if (jenis === 'volume') {
    r = parseFloat(document.getElementById('r-volume-kerucut').value);
    t = parseFloat(document.getElementById('t-volume-kerucut').value);
hasilElement = document.getElementById('hasil-volume-kerucut');
satuan = document.getElementById('satuan-volume-kerucut').value;
    if (isNaN(r) || isNaN(t) || r <= 0 || t <= 0) {
        alert("Masukkan Jari-jari dan Tinggi yang valid!");
        hasilElement.style.display = "none";
        return;
    }
    hasil = (1/3) * phi * r * r * t;
} else { // luas
    r = parseFloat(document.getElementById('r-luas-kerucut').value);
    s = parseFloat(document.getElementById('s-luas-kerucut').value);
hasilElement = document.getElementById('hasil-luas-kerucut');
satuan = document.getElementById('satuan-luas-kerucut').value;
    if (isNaN(r) || isNaN(s) || r <= 0 || s <= 0) {
        alert("Masukkan Jari-jari dan Garis Pelukis yang valid!");
        hasilElement.style.display = "none";
        return;
    }
    hasil = phi * r * (r + s);
}

hasilElement.innerText = `Hasil ${jenis === 'volume' ? 'Volume' : 'Luas Permukaan'}: ${hasil.toFixed(2)} ${satuan}`;
hasilElement.style.display = "block";
}

// === BOLA ===
function bola(jenis) {
if (jenis === 'volume') tampilkanForm('table-volume-bola');
else tampilkanForm('table-luas-bola');
}

function hitungBola(jenis) {
const phi = 3.14159;
let hasilElement, satuan, r;

if (jenis === 'volume') {
    r = parseFloat(document.getElementById('r-volume-bola').value);
hasilElement = document.getElementById('hasil-volume-bola');
satuan = document.getElementById('satuan-volume-bola').value;
    if (isNaN(r) || r <= 0) {
        alert("Masukkan Jari-jari yang valid!");
        hasilElement.style.display = "none";
        return;
    }
    hasil = (4/3) * phi * Math.pow(r, 3);
} else { // luas
    r = parseFloat(document.getElementById('r-luas-bola').value);
hasilElement = document.getElementById('hasil-luas-bola');
satuan = document.getElementById('satuan-luas-bola').value;
    if (isNaN(r) || r <= 0) {
        alert("Masukkan Jari-jari yang valid!");
        hasilElement.style.display = "none";
        return;
    }
    hasil = 4 * phi * Math.pow(r, 2);
}
  
hasilElement.innerText = `Hasil ${jenis === 'volume' ? 'Volume' : 'Luas Permukaan'}: ${hasil.toFixed(2)} ${satuan}`;
hasilElement.style.display = "block";
}

// === PERSEGI ===
function persegi(jenis) {
if (jenis === 'luas') tampilkanForm('table-luas-persegi');
else tampilkanForm('table-keliling-persegi');
}

function hitungPersegi(jenis) {
let s, hasilElement, satuan;

if (jenis === 'luas') {
s = parseFloat(document.getElementById('sisi-luas-persegi').value); // ID diperbaiki
hasilElement = document.getElementById('hasil-luas-persegi');
satuan = document.getElementById('satuan-luas-persegi').value;
} else {
s = parseFloat(document.getElementById('sisi-keliling-persegi').value); // ID diperbaiki
hasilElement = document.getElementById('hasil-keliling-persegi');
satuan = document.getElementById('satuan-keliling-persegi').value;
}

  if (isNaN(s) || s <= 0) {
    alert("Masukkan panjang sisi yang valid!");
    hasilElement.style.display = "none";
    return;
  }

let hasil = (jenis === 'luas') ? s * s : 4 * s;
  let unit = (jenis === 'luas') ? `${satuan}²` : satuan;

hasilElement.innerText = `Hasil ${jenis === 'luas' ? 'Luas' : 'Keliling'}: ${hasil.toFixed(2)} ${unit}`;
hasilElement.style.display = "block";
}

// === PERSEGI PANJANG ===
function ppanjang(jenis) {
if (jenis === 'luas') tampilkanForm('table-luas-ppanjang');
else tampilkanForm('table-keliling-ppanjang');
}

function hitungPpanjang(jenis) {
let p, l, hasilElement, satuan;

if (jenis === 'luas') {
    p = parseFloat(document.getElementById('p-luas-ppanjang').value);
    l = parseFloat(document.getElementById('l-luas-ppanjang').value);
hasilElement = document.getElementById('hasil-luas-ppanjang');
satuan = document.getElementById('satuan-luas-ppanjang').value;
} else {
    p = parseFloat(document.getElementById('p-keliling-ppanjang').value);
    l = parseFloat(document.getElementById('l-keliling-ppanjang').value);
hasilElement = document.getElementById('hasil-keliling-ppanjang');
satuan = document.getElementById('satuan-keliling-ppanjang').value;
}

  if (isNaN(p) || isNaN(l) || p <= 0 || l <= 0) {
    alert("Masukkan panjang dan lebar yang valid!");
    hasilElement.style.display = "none";
    return;
  }

let hasil = (jenis === 'luas') ? p * l : 2 * (p + l);
  let unit = (jenis === 'luas') ? `${satuan}²` : satuan;

hasilElement.innerText = `Hasil ${jenis === 'luas' ? 'Luas' : 'Keliling'}: ${hasil.toFixed(2)} ${unit}`;
hasilElement.style.display = "block";
}

// === SEGITIGA ===
function segitiga(jenis) {
if (jenis === 'luas') tampilkanForm('table-luas-segitiga');
else tampilkanForm('table-keliling-segitiga');
}

function hitungSegitiga(jenis) {
let hasilElement, satuan, a, t, b, c;

if (jenis === 'luas') {
    a = parseFloat(document.getElementById('a-luas-segitiga').value);
    t = parseFloat(document.getElementById('t-luas-segitiga').value);
hasilElement = document.getElementById('hasil-luas-segitiga');
satuan = document.getElementById('satuan-luas-segitiga').value;
    if (isNaN(a) || isNaN(t) || a <= 0 || t <= 0) {
        alert("Masukkan alas dan tinggi yang valid!");
        hasilElement.style.display = "none";
        return;
    }
    hasil = 0.5 * a * t;
    let unit = `${satuan}²`;
hasilElement.innerText = `Hasil Luas: ${hasil.toFixed(2)} ${unit}`;
} else { // keliling
    a = parseFloat(document.getElementById('a-keliling-segitiga').value);
    b = parseFloat(document.getElementById('b-keliling-segitiga').value);
    c = parseFloat(document.getElementById('c-keliling-segitiga').value);
hasilElement = document.getElementById('hasil-keliling-segitiga');
satuan = document.getElementById('satuan-keliling-segitiga').value;
    if (isNaN(a) || isNaN(b) || isNaN(c) || a <= 0 || b <= 0 || c <= 0) {
        alert("Masukkan semua sisi yang valid!");
        hasilElement.style.display = "none";
        return;
    }
    hasil = a + b + c;
hasilElement.innerText = `Hasil Keliling: ${hasil.toFixed(2)} ${satuan}`;
}

hasilElement.style.display = "block";
}

// === JAJAR GENJANG ===
function jajargenjang(jenis) {
if (jenis === 'luas') tampilkanForm('table-luas-jajargenjang');
else tampilkanForm('table-keliling-jajargenjang');
}

function hitungJajargenjang(jenis) {
let hasilElement, satuan, a, t, b;

if (jenis === 'luas') {
    a = parseFloat(document.getElementById('a-luas-jg').value);
    t = parseFloat(document.getElementById('t-luas-jg').value);
hasilElement = document.getElementById('hasil-luas-jg');
satuan = document.getElementById('satuan-luas-jg').value;
    if (isNaN(a) || isNaN(t) || a <= 0 || t <= 0) {
        alert("Masukkan alas dan tinggi yang valid!");
        hasilElement.style.display = "none";
        return;
    }
    hasil = a * t;
    let unit = `${satuan}²`;
hasilElement.innerText = `Hasil Luas: ${hasil.toFixed(2)} ${unit}`;
} else { // keliling
    a = parseFloat(document.getElementById('a-keliling-jg').value);
    b = parseFloat(document.getElementById('b-keliling-jg').value);
hasilElement = document.getElementById('hasil-keliling-jg');
satuan = document.getElementById('satuan-keliling-jg').value;
    if (isNaN(a) || isNaN(b) || a <= 0 || b <= 0) {
        alert("Masukkan kedua sisi yang valid!");
        hasilElement.style.display = "none";
        return;
    }
    hasil = 2 * (a + b);
hasilElement.innerText = `Hasil Keliling: ${hasil.toFixed(2)} ${satuan}`;
}

hasilElement.style.display = "block";
}

// === TRAPESIUM ===
function trapesium(jenis) {
if (jenis === 'luas') tampilkanForm('table-luas-trapesium');
else tampilkanForm('table-keliling-trapesium');
}

function hitungTrapesium(jenis) {
let hasilElement, satuan, a, b, t, c, d;

if (jenis === 'luas') {
    a = parseFloat(document.getElementById('a-luas-trap').value);
    b = parseFloat(document.getElementById('b-luas-trap').value);
    t = parseFloat(document.getElementById('t-luas-trap').value);
hasilElement = document.getElementById('hasil-luas-trap');
satuan = document.getElementById('satuan-luas-trap').value;
    if (isNaN(a) || isNaN(b) || isNaN(t) || a <= 0 || b <= 0 || t <= 0) {
        alert("Masukkan semua sisi sejajar dan tinggi yang valid!");
        hasilElement.style.display = "none";
        return;
    }
    hasil = 0.5 * (a + b) * t;
    let unit = `${satuan}²`;
hasilElement.innerText = `Hasil Luas: ${hasil.toFixed(2)} ${unit}`;
} else { // keliling
    a = parseFloat(document.getElementById('a-keliling-trap').value);
    b = parseFloat(document.getElementById('b-keliling-trap').value);
    c = parseFloat(document.getElementById('c-keliling-trap').value);
    d = parseFloat(document.getElementById('d-keliling-trap').value);
hasilElement = document.getElementById('hasil-keliling-trap');
satuan = document.getElementById('satuan-keliling-trap').value;
    if (isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d) || a <= 0 || b <= 0 || c <= 0 || d <= 0) {
        alert("Masukkan keempat sisi yang valid!");
        hasilElement.style.display = "none";
        return;
    }
    hasil = a + b + c + d;
hasilElement.innerText = `Hasil Keliling: ${hasil.toFixed(2)} ${satuan}`;
}

hasilElement.style.display = "block";
}

// === BELAH KETUPAT ===
function belahketupat(jenis) {
if (jenis === 'luas') tampilkanForm('table-luas-bk');
else tampilkanForm('table-keliling-bk');
}

function hitungBelahKetupat(jenis) {
let hasilElement, satuan, d1, d2, s;

if (jenis === 'luas') {
    d1 = parseFloat(document.getElementById('d1-luas-bk').value);
    d2 = parseFloat(document.getElementById('d2-luas-bk').value);
hasilElement = document.getElementById('hasil-luas-bk');
satuan = document.getElementById('satuan-luas-bk').value;
    if (isNaN(d1) || isNaN(d2) || d1 <= 0 || d2 <= 0) {
        alert("Masukkan kedua diagonal yang valid!");
        hasilElement.style.display = "none";
        return;
    }
    hasil = 0.5 * d1 * d2;
    let unit = `${satuan}²`;
hasilElement.innerText = `Hasil Luas: ${hasil.toFixed(2)} ${unit}`;
} else { // keliling
    s = parseFloat(document.getElementById('s-keliling-bk').value);
hasilElement = document.getElementById('hasil-keliling-bk');
satuan = document.getElementById('satuan-keliling-bk').value;
    if (isNaN(s) || s <= 0) {
        alert("Masukkan panjang sisi yang valid!");
        hasilElement.style.display = "none";
        return;
    }
    hasil = 4 * s;
hasilElement.innerText = `Hasil Keliling: ${hasil.toFixed(2)} ${satuan}`;
}

hasilElement.style.display = "block";
}

// === LAYANG-LAYANG ===
function layang(jenis) {
if (jenis === 'luas') tampilkanForm('table-luas-layang');
else tampilkanForm('table-keliling-layang');
}

function hitungLayang(jenis) {
let hasilElement, satuan, d1, d2, s1, s2;

if (jenis === 'luas') {
    d1 = parseFloat(document.getElementById('d1-luas-layang').value);
    d2 = parseFloat(document.getElementById('d2-luas-layang').value);
hasilElement = document.getElementById('hasil-luas-layang');
satuan = document.getElementById('satuan-luas-layang').value;
    if (isNaN(d1) || isNaN(d2) || d1 <= 0 || d2 <= 0) {
        alert("Masukkan kedua diagonal yang valid!");
        hasilElement.style.display = "none";
        return;
    }
    hasil = 0.5 * d1 * d2;
    let unit = `${satuan}²`;
hasilElement.innerText = `Hasil Luas: ${hasil.toFixed(2)} ${unit}`;
} else { // keliling
    s1 = parseFloat(document.getElementById('s1-keliling-layang').value);
    s2 = parseFloat(document.getElementById('s2-keliling-layang').value);
hasilElement = document.getElementById('hasil-keliling-layang');
satuan = document.getElementById('satuan-keliling-layang').value;
    if (isNaN(s1) || isNaN(s2) || s1 <= 0 || s2 <= 0) {
        alert("Masukkan kedua pasangan sisi yang valid!");
        hasilElement.style.display = "none";
        return;
    }
    hasil = 2 * (s1 + s2);
hasilElement.innerText = `Hasil Keliling: ${hasil.toFixed(2)} ${satuan}`;
}

hasilElement.style.display = "block";
}

// === LINGKARAN ===
function lingkaran(jenis) {
if (jenis === 'luas') tampilkanForm('table-luas-lingkaran');
else tampilkanForm('table-keliling-lingkaran');
}

function hitungLingkaran(jenis) {
const phi = 3.14159;
let hasilElement, satuan, r;

if (jenis === 'luas') {
    r = parseFloat(document.getElementById('r-luas-lingkaran').value);
hasilElement = document.getElementById('hasil-luas-lingkaran');
satuan = document.getElementById('satuan-luas-lingkaran').value;
    if (isNaN(r) || r <= 0) {
        alert("Masukkan Jari-jari yang valid!");
        hasilElement.style.display = "none";
        return;
    }
    hasil = phi * r * r;
    let unit = `${satuan}²`;
hasilElement.innerText = `Hasil Luas: ${hasil.toFixed(2)} ${unit}`;
} else { // keliling
    r = parseFloat(document.getElementById('r-keliling-lingkaran').value);
hasilElement = document.getElementById('hasil-keliling-lingkaran');
satuan = document.getElementById('satuan-keliling-lingkaran').value;
    if (isNaN(r) || r <= 0) {
        alert("Masukkan Jari-jari yang valid!");
        hasilElement.style.display = "none";
        return;
    }
    hasil = 2 * phi * r;
hasilElement.innerText = `Hasil Keliling: ${hasil.toFixed(2)} ${satuan}`;
}

hasilElement.style.display = "block";
}
