import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <div className="grid w-full max-w-6xl gap-6 lg:grid-cols-3">
        
        {/* Get Started */}
        <section className="h-full rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">
            Get started
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-600">
            Log in or create an account to access exercise categories and
            guidance.
          </p>

          <div className="mt-8 space-y-4">
            <Link
              href="/login"
              className="block w-full rounded-2xl bg-sky-500 px-4 py-3 text-center font-medium text-white transition hover:bg-sky-600"
            >
              Login
            </Link>

            <Link
              href="/register"
              className="block w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-center font-medium text-slate-700 transition hover:bg-slate-50"
            >
              Create Account
            </Link>

            <Link
              href="/categories"
              className="block w-full rounded-2xl border border-sky-200 bg-sky-50 px-4 py-3 text-center font-medium text-sky-700 transition hover:bg-sky-100"
            >
              Continue as Guest
            </Link>
          </div>

          <p className="mt-6 text-center text-xs text-slate-500">
            Accessible options designed for simple navigation.
          </p>
        </section>

        {/* Main App Card */}
        <section className="h-full rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h1 className="text-3xl font-bold text-slate-900">
            MS Active
          </h1>

          <h2 className="mt-4 text-xl font-semibold text-slate-900">
            Exercise Guidance
          </h2>

          <p className="mt-4 text-sm leading-6 text-slate-600">
            Welcome to the exercise support app. Start by choosing the type of
            exercise position that feels safest and most comfortable for you.
          </p>

          <div className="mt-8 flex h-64 items-center justify-center rounded-2xl border border-sky-100 bg-sky-50 text-sky-600">
            Image / Illustration
          </div>
        </section>

        {/* Safety Notes */}
        <section className="h-full rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">
            Safety Notes
          </h2>

          <div className="mt-6 space-y-4 text-sm leading-6 text-slate-600">
            <div className="rounded-2xl border border-sky-100 bg-sky-50 p-4">
              <div className="font-medium text-slate-800">
                Stop if symptoms worsen
              </div>
              <p className="mt-1">
                Stop exercising if you experience pain, dizziness, or unusual
                fatigue.
              </p>
            </div>

            <div className="rounded-2xl border border-sky-100 bg-sky-50 p-4">
              <div className="font-medium text-slate-800">
                Exercise at your own pace
              </div>
              <p className="mt-1">
                Choose exercises based on how you feel today and select the
                safest position for your mobility level.
              </p>
            </div>

            <div className="rounded-2xl border border-sky-100 bg-sky-50 p-4">
              <div className="font-medium text-slate-800">
                Consult a professional
              </div>
              <p className="mt-1">
                Speak with a healthcare professional before starting a new
                exercise programme.
              </p>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}