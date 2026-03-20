import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <div className="w-full max-w-sm rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-bold text-center text-slate-900">
          MS Active
        </h1>

        <h2 className="mt-4 text-lg font-semibold text-center text-slate-900">
          Exercise Guidance
        </h2>

        <p className="mt-4 text-sm leading-6 text-center text-slate-600">
          Welcome to the exercise support app. Start by choosing the type of
          exercise position that feels safest and most comfortable for you.
        </p>

        <div className="mt-6 flex h-40 items-center justify-center rounded-2xl bg-sky-50 border border-sky-100">
          <span className="text-sm text-sky-700">Image / Illustration</span>
        </div>

        <Link
  href="/categories"
  className="mt-6 block w-full rounded-2xl bg-sky-600 px-4 py-3 text-center font-medium text-white transition hover:bg-sky-700"
>
  Start Exercises
</Link>

        <p className="mt-4 text-center text-xs text-slate-500">
          Accessible options
        </p>
      </div>
    </main>
  );
}