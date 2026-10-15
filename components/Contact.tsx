
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
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, message }),
      });

      const responseText = await response.text();
      let data: { error?: string; success?: boolean };

      try {
        data = JSON.parse(responseText);
      } catch {
        throw new Error(
          `Unexpected server response (HTTP ${response.status}). Please try again later.`
        );
      }

      if (!response.ok) {
        throw new Error(data.error || "Unable to send your message.");
      }

      setIsError(false);
      setStatus("Message sent! I'll get back to you soon.");
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

  function clearStatus() {
    if (status) setStatus("");
  }

  return (
    <Section
      id="contact"
      eyebrow="CONTACT"
      title="Let's build something"
    >
      <div className="grid gap-10 rounded-2xl border border-slate-800 bg-slate-900/50 p-6 sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 lg:p-10">
        {/* Left column */}
        <div className="flex flex-col">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-3 py-1.5">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            <span className="text-xs font-medium text-emerald-300">
              Open to opportunities
            </span>
          </div>

          <h3 className="mt-6 text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Have a project in mind?
          </h3>

          <p className="mt-4 max-w-md text-sm leading-7 text-slate-400 sm:text-base">
            Whether you have a project idea, a job opportunity, or just
            want to connect, I'd love to hear from you. Send me a message
            and let's start a conversation.
          </p>

          <div className="mt-8 space-y-4">
            <a
              href={`mailto:${profile.email}`}
              className="group flex items-center gap-4 rounded-xl border border-slate-800 bg-slate-950/40 p-4 transition hover:border-indigo-400/40 hover:bg-slate-950/70"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-300">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
              </span>

              <span className="min-w-0 flex-1">
                <span className="block text-xs text-slate-500">
                  Email me directly
                </span>
                <span className="mt-1 block break-all text-sm font-medium text-slate-200 transition group-hover:text-indigo-300">
                  {profile.email}
                </span>
              </span>

              <span className="text-slate-500 transition group-hover:translate-x-1 group-hover:text-indigo-300">
                →
              </span>
            </a>
          </div>

          <div className="mt-auto pt-8">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
              Find me online
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-4 py-2.5 text-sm font-medium text-slate-300 transition hover:border-indigo-400/50 hover:bg-indigo-400/5 hover:text-white"
              >
                GitHub <span aria-hidden="true">↗</span>
              </a>

              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-4 py-2.5 text-sm font-medium text-slate-300 transition hover:border-indigo-400/50 hover:bg-indigo-400/5 hover:text-white"
              >
                LinkedIn <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right column: contact form */}
        <div className="rounded-xl border border-slate-800 bg-slate-950/40 p-5 sm:p-6 lg:p-7">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-white">
              Send me a message
            </h3>
            <p className="mt-1 text-sm text-slate-500">
              I'll do my best to reply within a day or two.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="contact-email"
                className="mb-2 block text-sm font-medium text-slate-300"
              >
                Your email
              </label>

              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  clearStatus();
                }}
                required
                maxLength={254}
                className="w-full rounded-lg border border-slate-700 bg-slate-900/70 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/20"
              />
            </div>

            <div>
              <div className="mb-2 flex items-center justify-between gap-3">
                <label
                  htmlFor="contact-message"
                  className="text-sm font-medium text-slate-300"
                >
                  Your message
                </label>
                <span className="text-xs tabular-nums text-slate-500">
                  {message.length}/5000
                </span>
              </div>

              <textarea
                id="contact-message"
                name="message"
                placeholder="Tell me what you have in mind..."
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                  clearStatus();
                }}
                required
                maxLength={5000}
                rows={5}
                className="w-full resize-y rounded-lg border border-slate-700 bg-slate-900/70 px-4 py-3 text-sm leading-6 text-white outline-none transition placeholder:text-slate-600 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/20"
              />
            </div>

            <button
              type="submit"
              disabled={isSending}
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-indigo-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/10 transition hover:bg-indigo-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
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
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="h-4 w-4"
                    aria-hidden="true"
                  >
                    <path
                      d="m22 2-7 20-4-9-9-4 20-7Z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M22 2 11 13"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </>
              )}
            </button>

            {status && (
              <p
                role="status"
                aria-live="polite"
                className={`text-sm leading-relaxed ${
                  isError ? "text-red-400" : "text-emerald-400"
                }`}
              >
                {status}
              </p>
            )}
          </form>

          <div className="mt-6 border-t border-slate-800 pt-4">
            <p className="text-xs leading-5 text-slate-500">
              Your email will only be used to reply to your inquiry.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
