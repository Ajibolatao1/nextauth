"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

function Profile() {
  const { data: session } = useSession();

  return (
    <div>
      <div onClick={() => signIn()}>{!session && "Sign in"}</div>
      <div onClick={() => signOut()}>
        {session && (
          <>
            <Image
              src={session.user.image}
              alt="Avater"
              height={30}
              width={30}
              className="rounded-full"
            />
          </>
        )}
      </div>
    </div>
  );
}

export default Profile;
