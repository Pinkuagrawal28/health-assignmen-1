import CardList from "./card";

export const getServerSideProps = async () => {
  const headlines = await fetch('https://saurav.tech/NewsAPI/top-headlines/category/health/in.json');
  const data = await res.json();

  return {
    props: {
      headlines: data.articles,
    },
  };
};

export default function SectionHeadLines({ headlines }) {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-12">Hacker News Clone</h1>
      <CardList cards={headlines} />
    </div>
  );
}