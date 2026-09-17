import { auth } from "@/auth";

import Image from "next/image";
import SignIn from "../auth/SignIn";
import SignOut from "../auth/SignOut";

const Header = async () => {
  const session = await auth();
  console.log(session);

  return (
    <div className="bg-gray-200 py-2 px-2 rounded-lg my-5">
      {session?.user ? (
        <div className="flex">
          <p>{session?.user?.name}</p> |
          <Image
            src={session?.user?.image}
            alt={session?.user?.name}
            width={32}
            height={32}
            className="rounded-full"
          />
          <SignOut />
        </div>
      ) : (
        <SignIn />
      )}
    </div>
  );
};

export default Header;
