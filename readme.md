# Karir Traspac

Aplikasi sistem rekrutmen **Karir Traspac** adalah platform internal yang dirancang untuk mempermudah proses rekrutmen di PT. Traspac Makmur Sejahtera. Sistem ini membantu HRD dan kandidat dalam mengelola lowongan, melamar pekerjaan, serta memantau proses seleksi secara terstruktur dan efisien.  

## ✨ Fitur Utama
- **Manajemen Lowongan**: Buat, ubah, dan hapus lowongan pekerjaan.  
- **Pelamaran Online**: Kandidat dapat melamar langsung melalui sistem.  
- **Seleksi & Monitoring**: HRD dapat memantau status kandidat dari awal hingga akhir proses.  
- **Notifikasi Otomatis**: Pemberitahuan status rekrutmen secara real-time.  

## 🛠️ Teknologi yang Digunakan
- **Frontend**: [Nuxt 3](https://nuxt.com/) + [Nuxt UI 3](https://ui.nuxt.com/)
- **Backend**: [Express.js](https://expressjs.com/) (Node.js)  
- **Database**: [PostgreSQL](https://www.postgresql.org/)  
- **ORM / Query**: Prisma / Knex.js  
- **CDN / Storage**: Supabase Storage (untuk handing file & dokumen)  
- **Cache & Queue**: Redis + BullMQ  
- **Infrastruktur**: Docker & VPS  

## 🚀 Cara Menjalankan (Development)

1. Clone repository ini:
   ```bash
   git clone https://github.com/username/karir-traspac.git
   cd karir-traspac
   cd app (untuk Frontend)
   cd api (untuk Backend)
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Buat file `.env` berdasarkan `.env.example`:

   ```bash
   cp .env.example .env
   ```

4. Jalankan aplikasi (development):

   ```bash
   npm run dev
   ```

## 📌 Catatan

* Proyek ini dirancang untuk **internal perusahaan** namun dapat dikembangkan agar mendukung publik secara luas.
* Dokumentasi teknis (API, arsitektur, dan infrastruktur) tersedia di folder `/docs`.

---

Made with ❤️ by Fajar Nur Hidayat

```