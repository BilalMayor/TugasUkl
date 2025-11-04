import { news } from "@/lib/news";
import KelasTemplate from "@/components/kelasTemplate";
import { Home, Newspaper, User } from "lucide-react";
import Image from "next/image";

type Props = {
  params: {
    slug: string;
  };
};

export default function DetailBeritaPage({ params }: Props) {
  const item = news.find((n) => n.slug === params.slug);

  const menuList = [
    { icon: <Home />, path: "/", label: "Dashboard" },
    { icon: <Newspaper />, path: "/berita", label: "Berita" },
    { icon: <User />, path: "/profil", label: "Profil" },
  ];

  if (!item) {
    return (
      <KelasTemplate title="Berita Tidak Ditemukan" menuList={menuList}>
        <div className="bg-white p-8 rounded-lg shadow text-center text-gray-600">
          <h1 className="text-2xl font-semibold mb-2">Berita tidak ditemukan 😢</h1>
          <p>Silakan kembali ke halaman <a href="/berita" className="text-blue-600 hover:underline">Daftar Berita</a>.</p>
        </div>
      </KelasTemplate>
    );
  }

  return (
    <KelasTemplate title={item.title} menuList={menuList}>
      <article className="bg-white p-6 rounded-lg shadow">
        <h1 className="text-3xl font-bold mb-3 text-blue-700">{item.title}</h1>
        <div className="text-sm text-gray-500 mb-4">{item.date}</div>
        <Image
          src={item.image}
          alt={item.title}
          width={1000}
          height={600}
          className="rounded-lg mb-5 object-cover w-full max-h-96"
        />
        <p className="text-gray-700 leading-relaxed whitespace-pre-line">
          {item.content}
        </p>
      </article>
    </KelasTemplate>
  );
}
