# Undangan Pernikahan Digital Islami (Walimatul 'Urs)

Website undangan pernikahan digital Islami (*Islamic Digital Wedding Invitation*) yang elegan, tenang, dan bersahaja (*intimate & bespoke*). Dirancang khusus dengan estetika seni lukis cat air (*soft watercolor digital painting*), tipografi klasik berkarakter, ornamen mihrab Islam, kaligrafi Basmalah emas, dan tata letak yang lapang (*editorial whitespace*).

Proyek ini dibangun murni menggunakan **HTML5**, **CSS3**, dan **Vanilla JavaScript** tanpa dependensi framework (tanpa React/Vue), tanpa backend/database, dan tanpa build tools (npm/webpack/vite).

---

## Daftar Isi
1. [Prinsip Desain & Visual](#1-prinsip-desain--visual)
2. [Palet Warna](#2-palet-warna)
3. [Struktur Berkas Proyek](#3-struktur-berkas-proyek)
4. [Cara Menjalankan Secara Lokal](#4-cara-menjalankan-secara-lokal)
5. [Panduan Kustomisasi Konten](#5-panduan-kustomisasi-konten)
   - [A. Mengubah Nama Pengantin & Orang Tua](#a-mengubah-nama-pengantin--orang-tua)
   - [B. Mengubah Tanggal Pernikahan & Hitung Mundur](#b-mengubah-tanggal-pernikahan--hitung-mundur)
   - [C. Mengubah Lokasi & Tautan Google Maps](#c-mengubah-lokasi--tautan-google-maps)
   - [D. Mengganti Ilustrasi & Foto Galeri](#d-mengganti-ilustrasi--foto-galeri)
   - [E. Mengonfigurasi Musik Latar (Nasheed)](#e-mengonfigurasi-musik-latar-nasheed)
   - [F. Mengaktifkan Kembali Navigasi Bawah (Opsional)](#f-mengaktifkan-kembali-navigasi-bawah-opsional)
6. [Dokumentasi Lengkap Fungsi JavaScript](#6-dokumentasi-lengkap-fungsi-javascript)
7. [Panduan Deploy ke Vercel / GitHub Pages](#7-panduan-deploy-ke-vercel--github-pages)

---

## 1. Prinsip Desain & Visual

Undangan ini dirancang menyerupai wujud surat undangan fisik yang dibaca secara alami melalui guliran (*scrolling*), bukan seperti aplikasi mobile atau dashboard:
- **Fokus pada Seni Ilustrasi:** Potret lukisan cat air kedua mempelai muslim-muslimah tanpa wajah (*faceless*) menjadi pusat visual utama.
- **Ruang Bernapas (Whitespace):** Setiap bagian diberikan jarak yang lapang dan tidak semua teks dikurung dalam kotak kartu (*cards*).
- **Minim Gangguan Visual:** Menghindari dekorasi yang berulang-ulang, animasi yang berlebihan, serta efek gradasi atau glassmorphism yang artifisial.
- **Navigasi Alami:** Navigasi bawah dok aplikasi dinonaktifkan (disimpan dalam bentuk komentar kode) agar halaman dapat dinikmati layaknya membaca surat undangan yang tulus dan khidmat.

---

## 2. Palet Warna

- **Warm Ivory (`#F8F5EF`):** Latar belakang utama yang teduh, hangat, dan ramah mata.
- **Soft Cream (`#F1EBDD`):** Aksen warna kertas lembut pada kotak kutipan Al-Qur'an dan detail tanggal.
- **Muted Sage (`#A6AA91`):** Nuansa botani lembut untuk dedaunan dan dekorasi.
- **Forest Green (`#354B3D`):** Warna teks judul utama yang kokoh, berwibawa, dan bernuansa islami.
- **Antique Gold (`#B89A65`):** Aksen emas klasik pada kaligrafi, bingkai mihrab, dan garis pemisah halus.
- **Dark Text (`#37372F`):** Warna teks isi yang kontras tinggi dan nyaman dibaca.

---

## 3. Struktur Berkas Proyek

```
wedding-invitation/
│
├── index.html                  # Struktur dokumen semantik HTML5
├── README.md                   # Dokumentasi lengkap proyek (Bahasa Indonesia)
│
└── assets/
    ├── css/
    │   └── style.css           # Seluruh styling, CSS variables, & animasi scroll
    ├── js/
    │   └── script.js           # Logika interaktif Vanilla JavaScript
    ├── images/
    │   ├── couple.jpg          # Ilustrasi kedua mempelai di bawah lengkungan bunga
    │   ├── couple-warm.jpg     # Ilustrasi kedua mempelai latar hangat
    │   ├── bride.jpg           # Ilustrasi terpisah mempelai wanita (hijab, gaun renda, buket)
    │   ├── groom.jpg           # Ilustrasi terpisah mempelai pria (peci hitam & busana putih)
    │   ├── floral-decoration.jpg # Ornamen bunga cat air
    │   ├── floral-bouquet.jpg  # Buket mawar & eucalyptus
    │   ├── islamic-ornament.svg# Ornamen bintang 8 sudut (Rub el Hizb) emas
    │   ├── bismillah.svg       # Kaligrafi vektor Basmalah Thuluth warna emas
    │   ├── divider-ornament.svg# Pembatas hiasan emas halus
    │   ├── floral-corner.svg   # Hiasan sudut
    │   ├── pattern-bg.svg      # Pola geometris latar belakang halus
    │   └── gallery/
    │       ├── gallery-1.jpg   # Buket mawar & eucalyptus
    │       ├── gallery-2.jpg   # Buku nikah & ikrar janji suci
    │       ├── gallery-3.jpg   # Lengkungan bunga & lentera gantung
    │       ├── gallery-4.jpg   # Detail gaun brokat & hijab mempelai wanita
    │       ├── gallery-5.jpg   # Detail peci hitam & busana mempelai pria
    │       └── gallery-6.jpg   # Potret bersama kedua mempelai
    └── audio/
        └── nasheed.mp3         # Berkas audio nasheed pernikahan islami
```

---

## 4. Cara Menjalankan Secara Lokal

Situs ini adalah situs web statis murni sehingga tidak memerlukan Node.js atau server khusus:

1. **Buka Berkas Secara Langsung:**
   Klik ganda pada berkas `index.html` untuk langsung membukanya di browser favorit Anda (Chrome, Edge, Firefox, Safari).
2. **Menggunakan VS Code Live Server:**
   Buka folder proyek di VS Code, klik kanan pada `index.html`, lalu pilih **"Open with Live Server"**.
3. **Menguji Nama Tamu Dinamis:**
   Tambahkan parameter `?to=Nama+Tamu` pada URL, misalnya:
   `index.html?to=Bapak+Ahmad+Subarjo`

---

## 5. Panduan Kustomisasi Konten

### A. Mengubah Nama Pengantin & Orang Tua
Buka `index.html`:
1. **Nama Mempelai Pria:** Cari tag `<h3 class="couple-name">Ahmad Fadhil, S.T.</h3>`.
2. **Orang Tua Mempelai Pria:** Cari `<p class="couple-parents">Bapak Ahmad &amp; Ibu Fatimah</p>`.
3. **Nama Mempelai Wanita:** Cari `<h3 class="couple-name">Aisyah Rahma, S.Farm.</h3>`.
4. **Orang Tua Mempelai Wanita:** Cari `<p class="couple-parents">Bapak Hasan &amp; Ibu Khadijah</p>`.
5. Buka juga `assets/js/script.js` pada baris objek `WEDDING_CONFIG`:
   ```javascript
   groomName: 'Ahmad Fadhil',
   brideName: 'Aisyah Rahma',
   ```

### B. Mengubah Tanggal Pernikahan & Hitung Mundur
Buka `assets/js/script.js` pada konfigurasi teratas:
```javascript
const WEDDING_CONFIG = {
  // Format: YYYY-MM-DDTHH:mm:ss+ZonaWaktu (+07:00 untuk WIB)
  targetDate: new Date('2026-12-20T08:00:00+07:00').getTime(),
  ...
};
```
Perbarui pula teks tanggal pada `index.html` (pada bagian `#date` dan `#event`).

### C. Mengubah Lokasi & Tautan Google Maps
Buka `index.html` pada bagian `<section id="event">`:
- Ganti nama gedung/masjid pada tag `<div class="event-venue-name">...</div>`.
- Ganti alamat lengkap pada `<p class="event-venue-address">...</div>`.
- Ganti tautan Google Maps pada atribut `href`:
  ```html
  <a href="https://maps.google.com/?q=Nama+Tempat+Pernikahan" target="_blank" class="btn-secondary">
  ```

### D. Mengganti Ilustrasi & Foto Galeri
Semua berkas gambar berada di folder `assets/images/`:
- Pasangan utama: ganti `assets/images/couple.jpg`.
- Mempelai pria: ganti `assets/images/groom.jpg`.
- Mempelai wanita: ganti `assets/images/bride.jpg`.
- Foto galeri: ganti berkas di dalam `assets/images/gallery/` (`gallery-1.jpg` s/d `gallery-6.jpg`).

### E. Mengonfigurasi Musik Latar (Nasheed)
1. Siapkan berkas audio nasheed islami (misalnya lantunan nasyid vokal/duff halal yang memiliki izin penggunaan).
2. Simpan berkas tersebut ke dalam folder `assets/audio/` dengan nama `nasheed.mp3`.
3. Audio hanya akan mulai berputar setelah pengunjung menekan tombol **"Buka Undangan"**.
4. Pengunjung dapat menjeda atau melanjutkan audio kapan saja melalui tombol kecil minimalis di pojok kanan bawah.

### F. Mengaktifkan Kembali Navigasi Bawah (Opsional)
Jika Anda ingin menampilkan kembali bilah navigasi bawah (*bottom dock*):
1. Buka `index.html`, cari komentar `<!-- NAVIGASI BAWAH DINONAKTIFKAN ... -->`, lalu hilangkan tanda komentar `<!--` dan `-->`.
2. Buka `assets/css/style.css`, cari baris `.bottom-dock { display: none !important; }` dan hapus baris penonaktifan tersebut.
3. Buka `assets/js/script.js` jika ingin menambahkan pelacakan aktif posisi scroll secara otomatis.

---

## 6. Dokumentasi Lengkap Fungsi JavaScript

Setiap fungsi di dalam `assets/js/script.js` dirancang modular, bersih, dan mudah dipahami:

### 1. `parseGuestRecipient()`
- **Apa fungsinya:** Mengambil parameter penerima undangan dari URL peramban (misalnya `?to=Nama+Tamu`).
- **Mengapa diperlukan:** Memberikan sentuhan personal kepada tamu undangan yang membuka tautan personalisasi mereka.
- **Cara kerjanya:**
  1. Membaca query string URL menggunakan `URLSearchParams(window.location.search)`.
  2. Melakukan sanitasi teks untuk membuang karakter berbahaya `<>` (mencegah XSS).
  3. Memasukkan nama tamu ke elemen pembuka `#guest-recipient-name` (dengan fallback `"Tamu Undangan"` jika parameter kosong).
- **Elemen HTML terkait:** `#guest-recipient-name`.

### 2. `initOpeningInteraction()`
- **Apa fungsinya:** Membuka undangan ketika tombol *"Buka Undangan"* diklik oleh pengunjung.
- **Mengapa diperlukan:** Memenuhi kebijakan peramban modern (*browser autoplay policy*) yang mewajibkan interaksi pengguna sebelum memutar audio, sekaligus memberikan pengalaman membuka undangan yang khidmat.
- **Cara kerjanya:**
  1. Menangkap event klik pada tombol `#btn-open-invitation`.
  2. Menghapus kelas `invitation-locked` dari elemen `<body>` agar halaman dapat digulir bebas.
  3. Menambahkan kelas `opened` pada overlay `#opening-cover` untuk menggeser layar penutup ke atas (*slide up*).
  4. Memanggil fungsi `playAudio()` untuk memulai lantunan nasheed.
  5. Memicu event scroll agar elemen pertama langsung terlihat mulus.
- **Elemen HTML terkait:** `#btn-open-invitation`, `#opening-cover`, `<body>`.

### 3. `initAudioPlayer()`, `playAudio()`, `pauseAudio()`
- **Apa fungsinya:** Mengendalikan pemutaran audio nasheed dan status ikon tombol kontrol audio.
- **Mengapa diperlukan:** Memberikan kebebasan penuh kepada tamu undangan untuk mematikan atau menyalakan kembali lantunan nasheed sesuai kenyamanan mereka.
- **Cara kerjanya:**
  1. Mengatur volume awal audio pada level 50% (`volume = 0.5`).
  2. Menangani klik pada tombol `#audio-controller-btn` untuk berganti antara putar dan jeda.
  3. Memantau event `play`, `pause`, dan `ended` bawaan dari elemen `<audio>` untuk menyinkronkan atribut aksesibilitas dan animasi tombol.
  4. Menangani kondisi jika berkas audio belum tersedia secara senyap (*graceful error handling*) tanpa menimbulkan crash pada halaman.
- **Elemen HTML terkait:** `#bg-audio`, `#audio-controller-btn`.

### 4. `initCountdownTimer()`
- **Apa fungsinya:** Menghitung sisa waktu menuju hari pernikahan secara *real-time*.
- **Mengapa diperlukan:** Memberi tahu tamu berapa hari, jam, menit, dan detik yang tersisa hingga akad nikah dilangsungkan.
- **Cara kerjanya:**
  1. Mengambil timestamp target pernikahan dari `WEDDING_CONFIG.targetDate`.
  2. Menghitung selisih waktu terhadap waktu saat ini (`distance = targetDate - now`).
  3. Jika waktu telah tiba atau terlewati (`distance <= 0`), sembunyikan kotak hitung mundur dan tampilkan pesan *"Alhamdulillah, Akad & Resepsi Telah Berlangsung"*.
  4. Jika belum, lakukan kalkulasi pembagian hari, jam, menit, detik dan tampilkan dengan format 2 digit (`padStart(2, '0')`).
  5. Menjalankan pembaruan berkala setiap 1.000 milidetik (1 detik).
- **Elemen HTML terkait:** `#cd-days`, `#cd-hours`, `#cd-minutes`, `#cd-seconds`, `#cd-expired-msg`.

### 5. `initCalendarButton()`
- **Apa fungsinya:** Membuka agenda Google Calendar dengan rincian acara yang terisi lengkap secara otomatis.
- **Mengapa diperlukan:** Memudahkan tamu mencatat jadwal pernikahan ke kalender ponsel tanpa perlu mengetik ulang tanggal dan lokasi.
- **Cara kerjanya:**
  1. Menangkap klik pada `#btn-add-calendar`.
  2. Merangkai URL `https://calendar.google.com/calendar/render` dengan parameter judul, tanggal mulai-selesai, lokasi, dan deskripsi acara.
  3. Membuka URL tersebut di tab peramban baru.
- **Elemen HTML terkait:** `#btn-add-calendar`.

### 6. `initGalleryLightbox()`
- **Apa fungsinya:** Menampilkan foto galeri dalam ukuran besar (*modal lightbox*) saat salah satu foto diklik.
- **Mengapa diperlukan:** Memungkinkan tamu melihat detail foto dan ilustrasi pernikahan dengan jelas dan fokus.
- **Cara kerjanya:**
  1. Menyimpan daftar URL foto dan teks alternatif dari elemen `.gallery-item`.
  2. Saat foto diklik, pasang foto dan deskripsi ke dalam `#lightbox-modal` dan tampilkan ke layar dengan `object-fit: contain` untuk menjaga proporsi asli foto (landscape, portrait, maupun square).
  3. Menyediakan tombol navigasi Foto Selanjutnya (`#lightbox-next`) dan Foto Sebelumnya (`#lightbox-prev`).
  4. Mendukung penutupan modal via tombol silang (`#lightbox-close`), klik pada area gelap di luar foto, maupun penekanan tombol keyboard `Escape`.
- **Elemen HTML terkait:** `#lightbox-modal`, `#lightbox-image`, `#lightbox-caption`, `#lightbox-close`, `#lightbox-prev`, `#lightbox-next`, seluruh elemen `.gallery-item`.

### 7. `initCopyButtons()` dan `fallbackCopyText()`
- **Apa fungsinya:** Menyalin nomor rekening bank atau alamat pengiriman kado ke clipboard perangkat.
- **Mengapa diperlukan:** Menghindarkan tamu dari kesalahan penulisan nomor rekening saat hendak memberikan tanda kasih/amplop digital.
- **Cara kerjanya:**
  1. Menangkap klik pada semua tombol berkelas `.btn-copy`.
  2. Mengambil data yang hendak disalin dari atribut `data-copy`.
  3. Menggunakan API modern `navigator.clipboard.writeText()` dengan fallback `document.execCommand('copy')` untuk peramban lawas.
  4. Menampilkan notifikasi pop-up melayang (*toast*) bahwa teks berhasil disalin.
- **Elemen HTML terkait:** Seluruh tombol berkelas `.btn-copy`.

### 8. `showToast()`
- **Apa fungsinya:** Menampilkan notifikasi pop-up kecil di bagian atas layar selama 3,2 detik.
- **Mengapa diperlukan:** Memberikan konfirmasi visual yang sopan dan tidak mengganggu alur pengunjung saat melakukan tindakan (seperti menyalin rekening atau mengirim ucapan).
- **Cara kerjanya:**
  1. Membuat elemen `.toast` di dalam kontainer `#toast-container`.
  2. Memunculkan dengan animasi transisi CSS halus.
  3. Menghapus elemen secara otomatis setelah 3,2 detik.
- **Elemen HTML terkait:** `#toast-container`.

### 9. `initScrollReveal()`
- **Apa fungsinya:** Memberikan efek kemunculan halus (*fade-in slide-up*) pada bagian-bagian halaman saat digulir.
- **Mengapa diperlukan:** Menghadirkan ritme membaca yang elegan layaknya membalik lembaran undangan fisik.
- **Cara kerjanya:**
  1. Menggunakan API performa tinggi `IntersectionObserver`.
  2. Mengamati setiap elemen berkelas `.reveal-on-scroll`.
  3. Begitu elemen memasuki layar sebesar 15%, tambahkan kelas `.revealed` lalu lepaskan pengamatan (*unobserve*) untuk menghemat memori perangkat.
  4. Menghormati pengaturan aksesibilitas sistem `prefers-reduced-motion`.
- **Elemen HTML terkait:** Seluruh elemen dengan kelas `.reveal-on-scroll`.

---

## 7. Panduan Deploy ke Vercel / GitHub Pages

### A. Deploy ke Vercel (Gratis & Mendukung HTTPS)
1. Unggah seluruh berkas proyek ke repositori GitHub pribadi Anda.
2. Buka [vercel.com](https://vercel.com) dan hubungkan akun GitHub Anda.
3. Klik tombol **"Add New..."** > **"Project"**, lalu pilih repositori undangan Anda.
4. Pada kolom *Framework Preset*, pilih **Other** (karena situs ini adalah HTML statis murni tanpa build tool).
5. Klik **"Deploy"**. Dalam beberapa detik situs undangan Anda telah aktif dengan tautan publik berkecepatan tinggi.

### B. Deploy ke GitHub Pages
1. Pada repositori GitHub Anda, klik menu **Settings** > **Pages**.
2. Di bagian *Build and deployment*, pilih *Source*: **Deploy from a branch**.
3. Pilih branch `main` dan folder `/ (root)`.
4. Klik **Save**. Situs akan aktif di alamat `https://username.github.io/wedding-invitation/`.

---

## 8. Lisensi & Hak Cipta
Seluruh kode sumber bebas disesuaikan dan digunakan untuk perayaan pernikahan Anda maupun keluarga dengan penuh keberkahan dan kebaikan.
