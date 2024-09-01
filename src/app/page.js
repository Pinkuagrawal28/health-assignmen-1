import ArticleList from "@/components/Articlelst";
import Header from "@/components/Header";
import SectionHeadLines from "@/components/sectionheadline";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <Header/>
        <SectionHeadLines />
        <ArticleList />
      </div>
    </main>
  );
}
