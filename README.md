# Dashboard Kelas – Tugas UKL

Proyek ini dibuat sebagai tugas UKL untuk menampilkan **Dashboard Kelas** menggunakan **Next.js 13 (App Router)** dan **Tailwind CSS**.  
Dashboard ini memiliki halaman:
- 🏠 Dashboard Utama  
- 📰 Daftar Berita  
- 📄 Detail Berita  
- 👤 Profil Pengguna  

---

## 🧠 Fungsi dan Cara Kerja Program

1. **Dashboard (`/`)**  
   Menampilkan ringkasan informasi seperti jumlah siswa, mata pelajaran, dan tugas aktif.  

2. **Berita (`/berita`)**  
   Menampilkan daftar berita sekolah dengan gambar, tanggal, dan link menuju detail berita.  

3. **Detail Berita (`/berita/[slug]`)**  
   Halaman yang menampilkan isi berita berdasarkan slug dari data pada `lib/news.ts`.  

4. **Profil (`/profil`)**  
   Menampilkan biodata pengguna (guru/siswa) dengan foto profil dari folder `public/`.

Semua halaman menggunakan layout konsisten berupa **header + sidebar** dari komponen `kelasTemplate`.

---

## 🧰 Teknologi yang Digunakan

- [Next.js 13](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide React](https://lucide.dev/icons)
- TypeScript

---

## 🚀 Cara Menjalankan

1. Clone repository:
   ```bash
   git clone https://github.com/username/dashboard-kelas-ukl.git

ScreenShot

<img width="1918" height="1063" alt="Screenshot 2025-11-04 172429" src="https://github.com/user-attachments/assets/78feb071-fefc-405a-a3e6-772e66659d6c" />
<img width="1919" height="1066" alt="Screenshot 2025-11-04 172414" src="https://github.com/user-attachments/assets/03be840e-c296-405f-862a-ebb35ec458c2" />
<img width="1917" height="1063" alt="Screenshot 2025-11-04 172840" src="https://github.com/user-attachments/assets/65e4f23f-41c3-4d70-b489-a564b7b3f1d7" />
