"use client";

import Link from "next/link";
import { auth } from "@/lib/firebase";
import { signOut, onAuthStateChanged, User } from "firebase/auth";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function CategoriesPage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/");
  };

  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <div className="grid w-full max-w-5xl gap-6 lg:grid-cols-2">

        {/* Profile Card */}
        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-sky-100 text-3xl">
              👤
            </div>

            <div>
              <h2 className="text-3xl font-bold text-slate-900">
                My Profile
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Personalised account area
              </p>
            </div>
          </div>

          {user ? (
            <>
              <div className="mt-6 rounded-2xl bg-sky-50 p-5">
                <p className="text-sm text-slate-500">Account email</p>
                <p className="mt-1 font-semibold text-slate-900">
                  {user.email}
                </p>
              </div>

              <div className="mt-4 rounded-2xl bg-slate-50 p-5">
                <p className="text-sm text-slate-500">Display name</p>
                <p className="mt-1 font-semibold text-slate-900">
                  {user.displayName || "Not added yet"}
                </p>
              </div>

              <div className="mt-4 rounded-2xl bg-slate-50 p-5">
                <p className="text-sm text-slate-500">Account status</p>
                <p className="mt-1 font-semibold text-green-700">
                  Logged in
                </p>
              </div>

              <div className="mt-4 rounded-2xl bg-slate-50 p-5">
                <p className="text-sm text-slate-500">Last login</p>
                <p className="mt-1 font-semibold text-slate-900">
                  Recently active
                </p>
              </div>

              <div className="mt-4 rounded-2xl bg-slate-50 p-5">
                <p className="text-sm text-slate-500">
                  Preferred exercise level
                </p>
                <p className="mt-1 font-semibold text-slate-900">
                  Gentle / beginner friendly
                </p>
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-slate-50 p-5">
                  <p className="text-sm text-slate-500">
                    Exercises completed
                  </p>
                  <p className="mt-1 text-2xl font-bold text-slate-900">
                    0
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-5">
                  <p className="text-sm text-slate-500">
                    Feedback submitted
                  </p>
                  <p className="mt-1 text-2xl font-bold text-slate-900">
                    0
                  </p>
                </div>
              </div>

              <button
                onClick={handleLogout}
                className="mt-6 w-full rounded-2xl bg-red-500 px-4 py-3 font-medium text-white transition hover:bg-red-600"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <p className="mt-6 text-sm leading-6 text-slate-600">
                You are currently using the app as a guest.
              </p>

              <Link
                href="/login"
                className="mt-6 block w-full rounded-2xl bg-sky-500 px-4 py-3 text-center font-medium text-white transition hover:bg-sky-600"
              >
                Login
              </Link>
            </>
          )}
        </section>

        {/* Categories Card */}
        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h1 className="text-3xl font-bold text-center text-slate-900">
            MS Active
          </h1>

          <h2 className="mt-4 text-xl font-semibold text-center text-slate-900">
            Choose your position
          </h2>

          <div className="mt-8 space-y-5">
            <Link
              href="/categories/lying"
              className="block w-full rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-sm transition hover:bg-sky-50"
            >
              🛏️ <span className="font-semibold">Lying exercises</span>
            </Link>

            <Link
              href="/categories/sitting"
              className="block w-full rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-sm transition hover:bg-sky-50"
            >
              🪑 <span className="font-semibold">Sitting exercises</span>
            </Link>

            <Link
              href="/categories/standing"
              className="block w-full rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-sm transition hover:bg-sky-50"
            >
              🧍 <span className="font-semibold">Standing exercises</span>
            </Link>
          </div>

          <Link
            href="/"
            className="mt-8 block w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-center font-medium text-slate-700 transition hover:bg-slate-50"
          >
            Back to Home
          </Link>
        </section>

      </div>
    </main>
  );
}