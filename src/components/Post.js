// components/PostList.js

import Link from 'next/link';

const PostList = ({ posts }) => {
  return (
    <div className="max-w-2xl mx-auto mt-8">
      {posts.map((post, index) => (
        <div key={post.url} className="flex items-start space-x-4 mb-6">
          <span className="text-gray-500">{index + 1}.</span>
          <div>
            <h2 className="text-lg font-medium text-blue-600">
              <Link href={post.url}>
                <a target="_blank" rel="noopener noreferrer">
                  {post.title}
                </a>
              </Link>
            </h2>
            <div className="text-sm text-gray-500">
              {post.source.name} by{' '}
              <span className="font-semibold">{post.author || 'Unknown'}</span> |{' '}
              {new Date(post.publishedAt).toLocaleDateString()} |{' '}
              {post.description}
            </div>
            {post.urlToImage && (
              <div className="mt-2">
                <img src={post.urlToImage} alt={post.title} className="w-full rounded" />
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostList;