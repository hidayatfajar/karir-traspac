export interface Lowongan {
  id: number;
  judul: string;
  lokasi: string;
  deskripsi: string;
  tipe: 'Full-time' | 'Remote' | 'Part-time' | 'Contract';
  icon: string; // Nama ikon dari https://icones.js.org/ (digunakan Nuxt UI)
  warnaTipe: 'green' | 'blue' | 'orange' | 'yellow'; // Warna untuk badge
}