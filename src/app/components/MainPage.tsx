"use client";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
const MainPage = () => {
  return (
    <div>
      <button
        className="p-4 rounded-xl bg-fuchsia-500 px-8"
        onClick={() => signIn()}
      >
        Sign in
      </button>
    </div>
  );
};

export default MainPage;
