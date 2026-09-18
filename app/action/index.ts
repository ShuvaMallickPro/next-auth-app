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
  console.log(formData.get("email"), formData.get("password"));

  try {
    const response = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });

    return response;
  } catch (error) {
    throw new Error("Invalid email or password");
    throw error;
  }
}
