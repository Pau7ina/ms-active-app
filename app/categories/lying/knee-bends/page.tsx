import Link from "next/link";

export default function KneeBendsPage() {
  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <div className="w-full max-w-sm rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-xl font-bold text-center text-slate-900">
          Exercise Details
        </h1>

        <div className="mt-6 flex h-40 items-center justify-center rounded-2xl border border-sky-100 bg-sky-50 text-sky-600">
          Exercise Image
        </div>

        <h2 className="mt-8 text-2xl font-bold text-slate-900">Knee Bends</h2>

        <div className="mt-4 space-y-2 text-sm text-slate-700">
          <p><strong>Difficulty:</strong> Easy</p>
          <p><strong>Position:</strong> Lying</p>
          <p><strong>Duration:</strong> 30 seconds</p>
        </div>

        <section className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <h3 className="font-semibold text-slate-900">Instructions</h3>
          <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-6 text-slate-700">
            <li>Lie down in a comfortable position.</li>
            <li>Keep both legs relaxed and straight.</li>
            <li>Slowly bend one knee towards your body.</li>
            <li>Hold briefly, then gently straighten the leg again.</li>
            <li>Repeat with the other leg.</li>
          </ol>
        </section>

        <Link
          href="/categories/lying"
          className="mt-8 block w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-center font-medium text-slate-700 transition hover:bg-slate-50"
        >
          Back to exercises
        </Link>
      </div>
    </main>
  );
}