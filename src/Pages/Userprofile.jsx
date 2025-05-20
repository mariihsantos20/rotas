const Userprofile = () => {
    const { id } = useParams();

  const users = {
    1: { name: 'Mariana', email: 'mariana@email.com' },
    2: { name: 'Maria', email: 'maria@email.com' },
  };

  const user = users[id];

  return user ? (
    <>
      <h1>Perfil do Usuário</h1>
      <p>Nome: {user.name}</p>
      <p>Email: {user.email}</p>
    </>
  ) : (
    <p>Usuário não encontrado</p>
  );
}
 
export default Userprofile;