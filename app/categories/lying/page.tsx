import Link from "next/link";

export default function LyingPage() {
  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <div className="w-full max-w-sm rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-bold text-center text-slate-900">
          MS Active
        </h1>

        <h2 className="mt-4 text-lg font-semibold text-center text-slate-900">
          Lying Exercises
        </h2>

        <p className="mt-4 text-sm leading-6 text-center text-slate-600">
          Gentle exercises designed for users who feel most comfortable in a
          lying position.
        </p>

        <div className="mt-6 space-y-4">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <h3 className="font-semibold text-slate-900">Ankle rotations</h3>
            <p className="mt-2 text-sm text-slate-600">
              Slowly rotate each ankle in circles to improve mobility and blood
              flow.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <h3 className="font-semibold text-slate-900">Knee bends</h3>
            <p className="mt-2 text-sm text-slate-600">
              Gently bend one knee at a time, keeping movements slow and
              controlled.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <h3 className="font-semibold text-slate-900">Arm stretches</h3>
            <p className="mt-2 text-sm text-slate-600">
              Raise and lower your arms gently to encourage flexibility and
              movement.
            </p>
          </div>
        </div>

        <Link
          href="/categories"
          className="mt-6 block w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-center font-medium text-slate-700 transition hover:bg-slate-50"
        >
          Back to Categories
        </Link>
      </div>
    </main>
  );
}