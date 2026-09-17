import { signOutAction } from "@/app/action";

export default async function SignOut() {
  return (
    <div>
      <form action={signOutAction}>
        <button type="submit">SignOut</button>
      </form>
    </div>
  );
}
