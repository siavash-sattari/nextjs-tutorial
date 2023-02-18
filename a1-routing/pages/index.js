import Link from 'next/link';
import { useRouter } from 'next/router';

const Homepage = () => {
  const router = useRouter();

  const getUID = () => {
    const id = `${Math.random().toString(36).substr(2, 9)}`;
    return id;
  };

  const items = [
    { id: getUID(), title: 'About Us', url: '/about' },
    { id: getUID(), title: 'Posts', url: '/posts' },
    { id: getUID(), title: 'Single Post', url: `/posts/${getUID()}` },
    { id: getUID(), title: 'User Post', url: `/posts/${getUID()}/${getUID()}` },
    { id: getUID(), title: 'Users', url: '/users' },
    { id: getUID(), title: 'Orders', url: '/users/orders' },
    { id: getUID(), title: 'Single User', url: `/users/${getUID()}` }
  ];

  const redirectHandler = () => {
    // router.push(`/users/${getUID}`);

    router.push({
      pathname: '/users/[id]',
      query: { id: getUID() }
    });
  };

  return (
    <>
      <h1>Pages :</h1>

      {items.map(item => (
        <li key={item.id}>
          <Link href={item.url}>{item.title}</Link>
        </li>
      ))}

      <hr />
      <br />

      <li>
        <Link
          href={{
            pathname: '/posts/[postId]/[userId]',
            query: { postId: getUID(), userId: getUID() }
          }}>
          User Post
        </Link>
      </li>

      <br />
      <hr />
      <br />

      <button onClick={redirectHandler}>Redirect me to single user page</button>
    </>
  );
};

export default Homepage;
