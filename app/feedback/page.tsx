"use client";

import { useState } from "react";
import Link from "next/link";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function FeedbackPage() {
  const [rating, setRating] = useState("");
  const [easyToUse, setEasyToUse] = useState("");
  const [comments, setComments] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    if (!rating || !easyToUse) {
      setError("Please answer the required questions.");
      return;
    }

    try {
      await addDoc(collection(db, "feedback"), {
        rating: Number(rating),
        easyToUse,
        comments,
        createdAt: serverTimestamp(),
      });

      setSubmitted(true);
      setRating("");
      setEasyToUse("");
      setComments("");
    } catch {
      setError("Something went wrong. Please try again.");
    }
  }

  if (submitted) {
    return (
      <main className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
        <section className="w-full max-w-xl rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm">
          <h1 className="text-3xl font-bold text-slate-900">Thank you</h1>

          <p className="mt-4 text-slate-600">
            Your feedback has been submitted successfully.
          </p>

          <Link
            href="/categories"
            className="mt-8 inline-block rounded-2xl bg-sky-500 px-6 py-3 font-medium text-white transition hover:bg-sky-600"
          >
            Back to exercises
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <section className="w-full max-w-2xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-bold text-slate-900">Feedback</h1>

        <p className="mt-3 text-sm leading-6 text-slate-600">
          Please share your feedback about the MS Active exercise guidance
          application.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div>
            <label className="block font-medium text-slate-800">
              How useful was the application? *
            </label>

            <select
              value={rating}
              onChange={(event) => setRating(event.target.value)}
              className="mt-2 w-full rounded-2xl border border-slate-300 bg-white p-3 text-slate-700"
            >
              <option value="">Select an option</option>
              <option value="1">1 - Not useful</option>
              <option value="2">2 - Slightly useful</option>
              <option value="3">3 - Neutral</option>
              <option value="4">4 - Useful</option>
              <option value="5">5 - Very useful</option>
            </select>
          </div>

          <div>
            <label className="block font-medium text-slate-800">
              Was the application easy to use? *
            </label>

            <select
              value={easyToUse}
              onChange={(event) => setEasyToUse(event.target.value)}
              className="mt-2 w-full rounded-2xl border border-slate-300 bg-white p-3 text-slate-700"
            >
              <option value="">Select an option</option>
              <option value="very difficult">Very difficult</option>
              <option value="difficult">Difficult</option>
              <option value="neutral">Neutral</option>
              <option value="easy">Easy</option>
              <option value="very easy">Very easy</option>
            </select>
          </div>

          <div>
            <label className="block font-medium text-slate-800">
              Additional comments
            </label>

            <textarea
              value={comments}
              onChange={(event) => setComments(event.target.value)}
              rows={4}
              className="mt-2 w-full rounded-2xl border border-slate-300 bg-white p-3 text-slate-700"
              placeholder="Write any feedback here..."
            />
          </div>

          {error && <p className="text-sm text-red-600">{error}</p>}

          <button
            type="submit"
            className="w-full rounded-2xl bg-sky-500 px-4 py-3 font-medium text-white transition hover:bg-sky-600"
          >
            Submit Feedback
          </button>
        </form>
      </section>
    </main>
  );
}