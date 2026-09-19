"use server";

import { signIn, signOut } from "@/auth";

export async function signInAction() {
  await signIn("google", { redirectTo: "http://localhost:3000" });
}

export async function signOutAction() {
  await signOut();
}

export async function logInAction(formData: FormData) {
  if (!formData) return null;
  console.log("Form Data =>>", formData);

  try {
    const response = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });

    console.log("Response =>", response);

    return response;
  } catch (error) {
    throw new Error("Invalid email or password", { error: error });
  }
}
