import Head from 'next/head';
import { signIn, signOut, useSession } from 'next-auth/client';

export default function Home() {
  const [session, loadingSession] = useSession();

  return (
    <div>
      <Head>
        <title>NextAuth Google Authentication</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>NextAuth Google Authentication</h1>

      {!session && (
        <>
          <button onClick={() => signIn()}>Sign In</button>
        </>
      )}

      {/* {loadingSession && <>Loading session</>} */}

      {session && (
        <>
          <h4>You are logged as: {session.user.name}</h4>
          <div>
            <h4>Email: {session.user.email}</h4>
            <br />
            {session.user.image && (
              <span>
                Avatar <br />
                <img src={session.user.image} alt={session.user.name} />
              </span>
            )}
          </div>
          <br />
          <br />
          <button onClick={() => signOut()}>Sign Out</button>
        </>
      )}
    </div>
  );
}
