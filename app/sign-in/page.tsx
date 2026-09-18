import LoginForm from "@/components/auth/LoginForm";
import SignInForm from "@/components/auth/SignIn";

export default function Login() {
  return (
    <div className="space-y-5">
      <h1>Sign In Page</h1>

      <div className="space-y-5">
        <LoginForm />
        <SignInForm />
      </div>
    </div>
  );
}
