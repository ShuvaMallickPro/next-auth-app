import { signInAction } from "@/app/action";

export default async function SignInForm() {
  return (
    <div>
      <form action={signInAction}>
        <button type="submit"> Sign In With Google</button>
      </form>
    </div>
  );
}
