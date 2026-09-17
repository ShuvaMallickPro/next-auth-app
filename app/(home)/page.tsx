import { auth } from "@/auth";
import SignIn from "@/components/auth/SignIn";
import SignOut from "@/components/auth/SignOut";

export default async function Home() {
  const userInfo = await auth();

  return (
    <div>
      <div>
        {userInfo?.user?.name ? (
          <div>
            <p>Good Morning {userInfo?.user?.name}</p>
            <SignOut />
          </div>
        ) : (
          <SignIn />
        )}
      </div>
    </div>
  );
}
