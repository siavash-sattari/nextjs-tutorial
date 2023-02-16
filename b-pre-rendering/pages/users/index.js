const UsersPage = props => {
  return (
    <>
      <h1>{props.title}</h1>
    </>
  );
};

export async function getServerSideProps(context) {
  const { params, req, res } = context;
  console.log('req', req);
  console.log('res', res);

  return {
    props: {
      title: 'Users Page'
    }
  };
}

export default UsersPage;
