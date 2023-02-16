import { useRouter } from 'next/router';

const SinglePost = () => {
  const router = useRouter();

  return <h1>Single Post with this id : {router?.query?.postId}</h1>;
};

export default SinglePost;
