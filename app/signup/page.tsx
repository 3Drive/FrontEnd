"use client";

import { LoginPage3D } from "@/ui/LoginPage/login-page-3D";
import SignupForm from "@/ui/LoginPage/signup-form";

export default function Page() {
  return (
    <div className="bg-black-pearl dark:bg-[#030712]  w-screen h-screen  pt-16 flex flex-row justify-between">
      <div className="absolute inset-0 bg-gradient-to-b from-[#12161F] to-[#1A1E29] z-0" />
      <div
        className={`absolute inset-0 bg-cover bg-center opacity-80 z-0`}
        style={{
          backgroundImage: `url(/grid-bg0.png)`,
        }}
      />
      <div className="w-3/5">
        <LoginPage3D />
      </div>
      <div className="w-2/5 mr-48 mb-10 flex justify-center items-center flex-col z-50">
        <SignupForm />
      </div>
    </div>
  );
}
