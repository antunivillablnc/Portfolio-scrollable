
"use client";

import { useState, type FormEvent } from "react";
import Section from "./Section";
import { profile } from "@/lib/data";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [isError, setIsError] = useState(false);
  const [isSending, setIsSending] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("");
    setIsSending(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, message }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Unable to send your message.");
      }

      setIsError(false);
      setStatus("Message sent successfully! I'll get back to you soon.");
      setEmail("");
      setMessage("");
    } catch (error) {
      setIsError(true);
      setStatus(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setIsSending(false);
    }
  }

  return (
    <Section id="contact" eyebrow="Contact" title="Let's build something">
      <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-8 md:p-10">
        <p className="max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
          Have a project in mind, a role to fill, or just want to say hi? My
          inbox is always open and I'll do my best to reply within a day
          or two.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 max-w-2xl space-y-5">
          <div>
            <label
              htmlFor="contact-email"
              className="mb-2 block text-sm font-medium text-slate-200"
            >
              Your email
            </label>
            <input
              id="contact-email"
              type="email"
              name="email"
              autoComplete="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              maxLength={254}
              className="w-full rounded-lg border border-slate-700 bg-slate-950/70 px-4 py-3 text-sm text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/20"
            />
          </div>

          <div>
            <label
              htmlFor="contact-message"
              className="mb-2 block text-sm font-medium text-slate-200"
            >
              Your message
            </label>
            <textarea
              id="contact-message"
              name="message"
              placeholder="Tell me about your project or just say hello..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              maxLength={5000}
              rows={5}
              className="w-full resize-y rounded-lg border border-slate-700 bg-slate-950/70 px-4 py-3 text-sm leading-relaxed text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/20"
            />
            <p className="mt-1 text-right text-xs text-slate-500">
              {message.length}/5000
            </p>
          </div>

          <button
            type="submit"
            disabled={isSending}
            className="inline-flex items-center justify-center gap-2 rounded-md bg-indigo-500 px-5 py-3 text-sm font-semibold text-white shadow-sm shadow-indigo-500/20 transition hover:bg-indigo-400 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSending ? (
              <>
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                Sending...
              </>
            ) : (
              <>
                Send Message
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M22 2 15 22l-4-9-9-4 20-7ZM22 2 11 13"
                  />
                </svg>
              </>
            )}
          </button>

          {status && (
            <p
              role="status"
              aria-live="polite"
              className={`text-sm ${
                isError ? "text-red-400" : "text-emerald-400"
              }`}
            >
              {status}
            </p>
          )}
        </form>

        <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-slate-800 pt-6">
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-md border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-indigo-400 hover:text-indigo-300"
          >
            GitHub
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-md border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-indigo-400 hover:text-indigo-300"
          >
            LinkedIn
          </a>
        </div>

        <p className="mt-6 text-sm text-slate-500">
          Or reach me directly at{" "}
          <a
            href={`mailto:${profile.email}`}
            className="text-indigo-300 underline decoration-indigo-400/30 underline-offset-4 hover:decoration-indigo-300"
          >
            {profile.email}
          </a>
        </p>
      </div>
    </Section>
  );
}
