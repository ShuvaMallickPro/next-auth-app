import { auth } from "@/auth";

import Image from "next/image";
import SignOut from "../auth/SignOut";
import Link from "next/link";

const Header = async () => {
  const session = await auth();
  console.log(session);

  return (
    <div className="bg-gray-200 py-2 px-2 rounded-lg my-5 flex items-center gap-10">
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
        <Link href={"/sign-in"} className="font-semibold hover:text-teal-500">
          Sign In
        </Link>
      )}
    </div>
  );
};

export default Header;
