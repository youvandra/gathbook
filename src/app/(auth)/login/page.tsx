import type { Metadata } from "next";

import { LoginForm } from "./_components/forms/login-form";
import { SectionTitle } from "./_components/section-title";

export const metadata: Metadata = {
  title: "Sign In",
  description: "A sign in page before delving deep into the world of literacy.",
};

export default function LoginPage() {
  return (
    <div className="container flex w-full max-w-sm flex-grow flex-col justify-center gap-6 py-12">
      <SectionTitle />
      <LoginForm className="flex flex-col gap-3" />
    </div>
  );
}
