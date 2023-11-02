import Link from 'next/link';

const ALL_POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';

export async function getStaticProps() {
  const res = await fetch(ALL_POSTS_URL);
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}

const Posts = ({ posts }) => {
  return (
    <div>
      <h1>Posts</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <Link href={`/posts/${post.id}`}>
            <a>
              <h2>{post.title}</h2>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Posts;
