const UserPage = props => {
  return (
    <>
      <h1>user id : {props.id}</h1>
    </>
  );
};

export async function getServerSideProps(context) {
  const { params } = context;
  const userId = params.uid;

  return {
    props: {
      id: userId
    }
  };
}

export default UserPage;
