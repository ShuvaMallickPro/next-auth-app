"use server";

import { signIn, signOut } from "@/auth";

export async function signInAction() {
  await signIn("google", { redirectTo: "http://localhost:3000" });
}

export async function signOutAction() {
  await signOut();
}
