import KelasTemplate from "@/components/kelasTemplate";
import { news } from "@/lib/news";
import { Home, Newspaper, User } from "lucide-react";
import Link from "next/link";

export default function BeritaPage() {
  const menuList = [
    { icon: <Home />, path: "/", label: "Dashboard" },
    { icon: <Newspaper />, path: "/berita", label: "Berita" },
    { icon: <User />, path: "/profil", label: "Profil" },
  ];

  return (
    <KelasTemplate title="Daftar Berita" menuList={menuList}>
      <h1 className="text-3xl font-bold mb-6 text-gray-500">Berita Sekolah Terbaru</h1>
      <p className="text-gray-600 mb-8">
        Berikut adalah kumpulan berita dan kegiatan terbaru di lingkungan sekolah.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {news.map((item) => (
          <article
            key={item.slug}
            className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h2 className="font-semibold text-lg text-blue-600 mb-2">
                {item.title}
              </h2>
              <p className="text-sm text-gray-600 mb-3">{item.excerpt}</p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>{item.date}</span>
                <Link
                  href={`/berita/${item.slug}`}
                  className="text-blue-600 hover:underline font-medium"
                >
                  Baca Selengkapnya →
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </KelasTemplate>
  );
}
