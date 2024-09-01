// pages/index.js

import PostList from './Post';

export const getServerSideProps = async () => {
  const res = await fetch('https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=55e4f3506d4e4b62843f5772ddd3349e');
  const data = await res.json();

  return {
    props: {
      articles: data.articles,
    },
  };
};
export default function ArticleList({ articles }) {
  return (
    <div>
      <div>articles</div>
      <h1 className="text-3xl font-bold text-center mt-12">Hacker News Clone</h1>
      <PostList posts={articles} />
    </div>
  );
}