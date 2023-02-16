import { useRouter } from 'next/router';

const UserID = () => {
  const router = useRouter();

  console.log(router.query); // {id: '123'}
  console.log(router.pathname); // /users/[id]

  return <h1>Single user with this id : {router?.query?.id}</h1>;
};

export default UserID;
