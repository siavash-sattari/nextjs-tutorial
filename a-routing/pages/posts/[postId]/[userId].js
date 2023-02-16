import { useRouter } from 'next/router';

const UserID = () => {
  const router = useRouter();

  console.log(router.query); // {postId: '123', userId: 'john123'}
  console.log(router.pathname); // /posts/[postId]/[userId]

  return (
    <>
      <h1>User Post</h1>
      <ul>
        <li>Post ID : {router?.query?.postId}</li>
        <li>User ID : {router?.query?.userId}</li>
      </ul>
    </>
  );
};

export default UserID;
