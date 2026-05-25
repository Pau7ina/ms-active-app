"use client";

import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault();

    try {
      setError("");

      await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      router.push("/categories");
    } catch (err: any) {
  setError(err.message);
}
  }

  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <div className="w-full max-w-sm rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-3xl font-bold text-center text-slate-900">
          MS Active
        </h1>

        <p className="mt-3 text-center text-sm text-slate-600">
          Create your account
        </p>

        <form
          onSubmit={handleRegister}
          className="mt-8 space-y-4"
        >
          <div>
            <label className="text-sm font-medium text-slate-700">
              Email
            </label>

            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-sky-400"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-slate-700">
              Password
            </label>

            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-2 w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-sky-400"
            />
          </div>

          {error && (
            <p className="text-sm text-red-500">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full rounded-2xl bg-sky-500 px-4 py-3 font-medium text-white transition hover:bg-sky-600"
          >
            Create Account
          </button>
        </form>

        <Link
          href="/login"
          className="mt-6 block text-center text-sm text-sky-600 hover:underline"
        >
          Already have an account?
        </Link>
      </div>
    </main>
  );
}