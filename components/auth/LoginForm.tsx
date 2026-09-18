"use client";

import { useState, type SubmitEvent } from "react";
import { logInAction } from "@/app/action";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();
  const [error, setError] = useState(null);

  const onSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    // console.log(e.currentTarget);

    try {
      const response = await logInAction(formData);
      console.log(response);
      if (!!response.error) {
        console.error(response.error);
        setError(response.error.message);
      } else {
        router.push("/bookings");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="text-xl text-red-500">{error}</div>
      <form className="login-form space-y-4" onSubmit={onSubmit}>
        <div>
          <label htmlFor="email">Email Address</label>
          <input type="email" name="email" id="email" />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>

        <button type="submit" className="btn-primary w-full mt-4">
          Login
        </button>
      </form>
    </>
  );
}
