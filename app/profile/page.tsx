"use client";

import { auth } from "@/lib/firebase";
import { signOut, onAuthStateChanged, User } from "firebase/auth";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        router.push("/login");
      } else {
        setUser(currentUser);
      }
    });

    return () => unsubscribe();
  }, [router]);

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/login");
  };

  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <section className="bg-white rounded-3xl shadow-lg p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-slate-800 mb-4">
          My Profile
        </h1>

        <p className="text-slate-600 mb-2">Logged in as:</p>

        <p className="font-semibold text-slate-800 mb-6">
          {user?.email}
        </p>

        <button
          onClick={handleLogout}
          className="w-full bg-red-500 text-white py-3 rounded-xl font-semibold hover:bg-red-600"
        >
          Logout
        </button>
      </section>
    </main>
  );
}