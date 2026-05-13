"use client";

import { useAtom } from "jotai";
import { isPasswordUnlockedAtom } from "@/store/passwordStore";
import { useState } from "react";

interface PasswordProtectionProps {
  children: React.ReactNode;
}

export default function PasswordProtection({ children }: PasswordProtectionProps) {
  const [isUnlocked, setIsUnlocked] = useAtom(isPasswordUnlockedAtom);
  const [password, setPassword] = useState("");

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
    if (value === process.env.NEXT_PUBLIC_LOCKED_ENDPOINTS) {
      setIsUnlocked(true);
    }
  };

  if (!isUnlocked) {
    return (
      <div className="flex min-h-screen justify-center items-center">
        <div className="flex flex-col w-full max-w-[650px] px-6 items-center">
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder=""
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-200"
          />
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
