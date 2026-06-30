"use client";

import { useState, type FormEvent } from "react";
import { SUPPORT_EMAIL } from "@/lib/constants";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`No Bounds Support — ${name || "Inquiry"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );
    window.location.href = `mailto:${SUPPORT_EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <p className="text-sm text-text-muted">
        This form opens your email app with a pre-filled message to{" "}
        <a href={`mailto:${SUPPORT_EMAIL}`} className="text-rose hover:text-rose-dark">
          {SUPPORT_EMAIL}
        </a>
        .
      </p>

      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
          Name
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-xl border border-warm-300 bg-white px-4 py-3 text-sm text-text-primary placeholder:text-text-subtle focus:border-rose-light focus:outline-none focus:ring-2 focus:ring-rose/20"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-xl border border-warm-300 bg-white px-4 py-3 text-sm text-text-primary placeholder:text-text-subtle focus:border-rose-light focus:outline-none focus:ring-2 focus:ring-rose/20"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full resize-y rounded-xl border border-warm-300 bg-white px-4 py-3 text-sm text-text-primary placeholder:text-text-subtle focus:border-rose-light focus:outline-none focus:ring-2 focus:ring-rose/20"
          placeholder="How can we help?"
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-full bg-rose px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-rose-dark"
      >
        Send email to support
      </button>
    </form>
  );
}
