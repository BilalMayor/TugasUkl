import KelasTemplate from "@/components/kelasTemplate";
import { Home, Newspaper, User } from "lucide-react";

export default function Dashboard() {
  const menuList = [
    { icon: <Home />, path: "/", label: "Dashboard" },
    { icon: <Newspaper />, path: "/berita", label: "Berita" },
    { icon: <User />, path: "/profil", label: "Profil" },
  ];

  return (
    <KelasTemplate title="Dashboard Kelas" menuList={menuList}>
      <h1 className="text-3xl font-bold mb-4 text-gray-500">Selamat Datang di Dashboard Kelas</h1>
      <p className="text-gray-700 leading-relaxed">
        Ini adalah tampilan utama Dashboard Kelas. Di sini guru atau siswa dapat memantau data
        seperti jadwal pelajaran, daftar tugas, dan informasi penting lainnya.
      </p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white shadow rounded-lg p-5">
          <h3 className="font-semibold text-lg text-blue-600">Jumlah Siswa</h3>
          <p className="text-3xl font-bold mt-2 text-gray-500">36</p>
        </div>
        <div className="bg-white shadow rounded-lg p-5">
          <h3 className="font-semibold text-lg text-blue-600">Mata Pelajaran</h3>
          <p className="text-3xl font-bold mt-2 text-gray-500">13</p>
        </div>
        <div className="bg-white shadow rounded-lg p-5">
          <h3 className="font-semibold text-lg text-blue-600">Tugas Aktif</h3>
          <p className="text-3xl font-bold mt-2 text-gray-500">5</p>
        </div>
      </div>
    </KelasTemplate>
  );
}
