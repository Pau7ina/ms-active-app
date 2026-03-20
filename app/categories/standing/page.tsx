import Link from "next/link";

export default function StandingPage() {
  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <div className="w-full max-w-sm rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-bold text-center text-slate-900">
          MS Active
        </h1>

        <h2 className="mt-4 text-lg font-semibold text-center text-slate-900">
          Standing Exercises
        </h2>

        <p className="mt-4 text-sm text-center text-slate-600">
          Exercises for users able to stand safely.
        </p>

        <div className="mt-6 space-y-4">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <h3 className="font-semibold text-slate-900">Heel raises</h3>
            <p className="mt-2 text-sm text-slate-600">
              Lift your heels slowly and lower them back down.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <h3 className="font-semibold text-slate-900">Side steps</h3>
            <p className="mt-2 text-sm text-slate-600">
              Take small steps side to side while maintaining balance.
            </p>
          </div>
        </div>

        <Link
          href="/categories"
          className="mt-6 block w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-center font-medium text-slate-700"
        >
          Back to Categories
        </Link>
      </div>
    </main>
  );
}