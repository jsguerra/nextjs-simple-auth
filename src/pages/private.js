import React from "react";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";

export default function Page() {
  const { data: session } = useSession();

  return (
    <>
      <div>
        {session ? (
          <p>Super secret page!</p>
        ) : (
          <>
            <p>You are not permitted to see this page.</p>
            <button onClick={() => signIn()}>Sign in</button>
          </>
        )}
        <Link href="/">
          <a>Return Home</a>
        </Link>
      </div>
    </>
  );
}
