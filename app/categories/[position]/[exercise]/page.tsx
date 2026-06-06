import Link from "next/link";
import { exercises } from "@/lib/exercises";
import { notFound } from "next/navigation";


type Position = keyof typeof exercises;

type PageProps = {
  params: Promise<{
    position: string;
    exercise: string;
  }>;
};

export default async function ExercisePage({ params }: PageProps) {
  const { position, exercise } = await params;

  if (!(position in exercises)) {
    notFound();
  }

  const positionExercises = exercises[position as Position];
  const exerciseData =
    positionExercises[exercise as keyof typeof positionExercises];

  if (!exerciseData) {
    notFound();
  }

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
            {exerciseData.title}
          </h3>

          <div className="mt-3 space-y-2 text-sm text-slate-600">
            <p>
              <span className="font-medium text-slate-800">Difficulty:</span>{" "}
              {exerciseData.difficulty}
            </p>

            <p>
              <span className="font-medium text-slate-800">Position:</span>{" "}
              {position}
            </p>

            <p>
              <span className="font-medium text-slate-800">Duration:</span>{" "}
              {exerciseData.duration}
            </p>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <h4 className="font-semibold text-slate-900">Instructions</h4>

          <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-6 text-slate-600">
            {exerciseData.instructions.map((step: string, index: number) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>

        <div className="mt-6 space-y-3">
          <Link
            href={`/categories/${position}`}
            className="block w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-center font-medium text-slate-700 hover:bg-slate-50"
          >
            Back to exercises
          </Link>

          <Link
            href="/feedback"
            className="block w-full rounded-2xl bg-sky-500 px-4 py-3 text-center font-medium text-white hover:bg-sky-600"
          >
            Give Feedback
          </Link>
        </div>
      </div>
    </main>
  );
}