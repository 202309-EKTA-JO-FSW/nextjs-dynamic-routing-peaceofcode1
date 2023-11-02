import { useRouter } from 'next/router';

const ONE_POST_URL = 'https://jsonplaceholder.typicode.com/posts';

export async function getStaticPaths() {
 
  const res = await fetch(ALL_POSTS_URL);
  const posts = await res.json();

  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { id } = params;
  const res = await fetch(`${ONE_POST_URL}/${id}`);
  const post = await res.json();

  return {
    props: {
      post,
    },
  };
}

const Post = ({ post }) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export default Post;
