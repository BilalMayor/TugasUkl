import KelasTemplate from "@/components/kelasTemplate";
import { Home, Newspaper, User } from "lucide-react";
import Image from "next/image";
import Profile from "@/public/profile.png";

export default function ProfilPage() {
  const menuList = [
    { icon: <Home />, path: "/", label: "Dashboard" },
    { icon: <Newspaper />, path: "/berita", label: "Berita" },
    { icon: <User />, path: "/profil", label: "Profil" },
  ];

  return (
    <KelasTemplate title="Profil Pengguna" menuList={menuList}>
      <section className="bg-white rounded-lg shadow p-8 max-w-3xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <Image
            src={Profile}
            alt="Foto Profil"
            width={120}
            height={120}
            className="rounded-full border-4 border-blue-500"
          />
          <div>
            <h1 className="text-2xl font-bold text-blue-700 mb-1">Bilal Mayor Abdillah</h1>
            <p className="text-gray-600 mb-4">Siswa XI RPL • Telkom School Malang</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700">
              <div>
                <strong>Email:</strong>
                <p>bilal_abdillah_33rpl@student.smktelkom-mlg.sch.id</p>
              </div>
              <div>
                <strong>Kelas:</strong>
                <p>XI RPL 5</p>
              </div>
              <div>
                <strong>GitHub:</strong>
                <p>
                  <a
                    href="https://github.com/bolo"
                    className="text-blue-600 hover:underline"
                    target="_blank"
                  >
                    github.com/bolo
                  </a>
                </p>
              </div>
              <div>
                <strong>Status:</strong>
                <p>Aktif</p>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-6" />

        <p className="text-gray-600 leading-relaxed">
          Halaman profil ini menampilkan informasi dasar pengguna.
          Kamu dapat menambahkan detail lain seperti biodata, tugas, atau jadwal belajar.
          Desain dibuat simpel dan profesional agar mudah dibaca.
        </p>
      </section>
    </KelasTemplate>
  );
}
