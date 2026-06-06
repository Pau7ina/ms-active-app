import Link from "next/link";

export default function SittingPage() {
  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <div className="w-full max-w-sm rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-bold text-center text-slate-900">MS Active</h1>

        <h2 className="mt-4 text-lg font-semibold text-center text-slate-900">
          Sitting Exercises
        </h2>

        <p className="mt-4 text-sm leading-6 text-center text-slate-600">
          Gentle seated exercises designed for users who prefer supported movement.
        </p>

        <div className="mt-6 space-y-4">
          <ExerciseCard
            href="/categories/sitting/shoulder-rolls"
            title="Shoulder rolls"
            text="Roll your shoulders slowly to reduce stiffness and support upper-body mobility."
          />

          <ExerciseCard
            href="/categories/sitting/seated-leg-raises"
            title="Seated leg raises"
            text="Raise one leg at a time while seated to support gentle strength and movement."
          />

          <ExerciseCard
            href="/categories/sitting/neck-stretches"
            title="Neck stretches"
            text="Move your neck slowly from side to side to ease tension and improve comfort."
          />
        </div>

        <BottomLinks />
      </div>
    </main>
  );
}

function ExerciseCard({ href, title, text }: { href: string; title: string; text: string }) {
  return (
    <Link
      href={href}
      className="block rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:bg-sky-50"
    >
      <h3 className="font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm text-slate-600">{text}</p>
    </Link>
  );
}

function BottomLinks() {
  return (
    <div className="mt-6 space-y-3">
      <Link
        href="/categories"
        className="block w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-center font-medium text-slate-700 transition hover:bg-slate-50"
      >
        Back to Categories
      </Link>

      <Link
        href="/feedback"
        className="block w-full rounded-2xl bg-sky-500 px-4 py-3 text-center font-medium text-white transition hover:bg-sky-600"
      >
        Give Feedback
      </Link>
    </div>
  );
}