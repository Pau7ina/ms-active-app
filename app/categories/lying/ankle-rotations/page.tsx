import Link from "next/link";

export default function AnkleRotationsPage() {
  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <div className="w-full max-w-sm rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-bold text-center text-slate-900">
          MS Active
        </h1>

        <h2 className="mt-4 text-lg font-semibold text-center text-slate-900">
          Exercise Details
        </h2>

        <div className="mt-6 flex h-40 items-center justify-center rounded-2xl border border-sky-100 bg-sky-50">
          <span className="text-sm text-sky-700">Exercise Image</span>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold text-slate-900">
            Ankle Rotations
          </h3>

          <div className="mt-3 space-y-2 text-sm text-slate-600">
            <p>
              <span className="font-medium text-slate-800">Difficulty:</span>{" "}
              Easy
            </p>
            <p>
              <span className="font-medium text-slate-800">Position:</span>{" "}
              Lying
            </p>
            <p>
              <span className="font-medium text-slate-800">Duration:</span> 30
              seconds
            </p>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <h4 className="font-semibold text-slate-900">Instructions</h4>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-6 text-slate-600">
            <li>Lie down in a comfortable position.</li>
            <li>Lift one foot slightly.</li>
            <li>Slowly rotate your ankle in a circle.</li>
            <li>Repeat in the opposite direction.</li>
            <li>Switch to the other foot.</li>
          </ol>
        </div>

        <Link
          href="/categories/lying"
          className="mt-6 block w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-center font-medium text-slate-700 transition hover:bg-slate-50"
        >
          Back to exercises
        </Link>
      </div>
    </main>
  );
}