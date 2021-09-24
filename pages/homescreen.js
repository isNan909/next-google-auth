import { getSession } from 'next-auth/client';

export default function Homescreen({ user }) {
  return (
    <div>
      <h1>Dashboard(Protected Route)</h1>
      <p>Welcome to main dashboard {user.name}</p>
      <p>{user.email}</p>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session) {
    context.res.writeHead(302, { Location: '/' });
    context.res.end();
    return {};
  }
  return {
    props: {
      user: session.user,
    },
  };
}
