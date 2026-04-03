"use client";

import { ValidationError, useForm } from "@formspree/react";
import { AngularButton } from "./AngularButton";

type NewsletterInputRowProps = {
  placeholder: string;
  buttonLabel: string;
  dark?: boolean;
};

export function NewsletterInputRow({
  placeholder,
  buttonLabel,
  dark = false,
}: NewsletterInputRowProps) {
  const [state, handleSubmit] = useForm("xvzvwpag");
  const fieldClassName = `min-h-12 border px-4 py-3 text-base ${
    dark
      ? "border-white/25 bg-transparent text-white placeholder:text-white/60"
      : "border-line bg-surface text-text placeholder:text-textMuted"
  }`;
  const helperClassName = dark ? "text-sm text-white/72" : "text-sm text-textMuted";
  const errorClassName = dark ? "text-sm text-[#F7D88C]" : "text-sm text-accentOrange";

  if (state.succeeded) {
    return (
      <div className="space-y-2">
        <p className={`${dark ? "text-white" : "text-text"} text-base font-semibold`}>
          Thanks for signing up.
        </p>
        <p className={helperClassName}>
          We look forward to keeping you updated through our newsletters.
        </p>
      </div>
    );
  }

  return (
    <form className="grid gap-4 md:grid-cols-[1fr_auto]" onSubmit={handleSubmit}>
      <input type="hidden" name="_subject" value="SFFI newsletter sign-up" />
      <input type="hidden" name="source" value="Homepage newsletter form" />
      <input
        type="email"
        name="email"
        placeholder={placeholder}
        aria-label={placeholder}
        required
        className={fieldClassName}
      />
      <div className="contents md:block">
        <AngularButton
          type="submit"
          variant={dark ? "light" : "primary"}
          className="md:min-w-[10rem]"
          disabled={state.submitting}
        >
          {state.submitting ? "Sending..." : buttonLabel}
        </AngularButton>
      </div>
      <div className="md:col-span-2 space-y-1">
        <ValidationError prefix="Email" field="email" errors={state.errors} className={errorClassName} />
        <ValidationError errors={state.errors} className={errorClassName} />
      </div>
    </form>
  );
}
