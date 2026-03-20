import Link from "next/link";

export default function CategoriesPage() {
  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <div className="w-full max-w-sm rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-bold text-center text-slate-900">
          MS Active
        </h1>

        <h2 className="mt-4 text-lg font-semibold text-center text-slate-900">
          Choose your position
        </h2>

        <div className="mt-6 space-y-4">
          <Link
            href="/categories/lying"
            className="block w-full rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-sm transition hover:bg-sky-50"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100 text-lg text-sky-600">
                🛏️
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">
                  Lying exercises
                </h3>
                <p className="mt-1 text-sm text-slate-600">
                  For users with limited mobility
                </p>
              </div>
            </div>
          </Link>

          <Link
            href="/categories/sitting"
            className="block w-full rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-sm transition hover:bg-sky-50"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100 text-lg text-sky-600">
                🪑
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">
                  Sitting exercises
                </h3>
                <p className="mt-1 text-sm text-slate-600">
                  For moderate mobility
                </p>
              </div>
            </div>
          </Link>

          <Link
            href="/categories/standing"
            className="block w-full rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-sm transition hover:bg-sky-50"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100 text-lg text-sky-600">
                🧍
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">
                  Standing exercises
                </h3>
                <p className="mt-1 text-sm text-slate-600">
                  For users able to stand safely
                </p>
              </div>
            </div>
          </Link>
        </div>

        <Link
          href="/"
          className="mt-6 block w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-center font-medium text-slate-700 transition hover:bg-slate-50"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}