import { ReadingColumn } from "@/components/layout/ReadingColumn";

type SectionIntroProps = {
  label?: string;
  title: string;
  body: string;
  align?: "left" | "center";
};

export function SectionIntro({ label, title, body, align = "left" }: SectionIntroProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "";

  return (
    <ReadingColumn className={alignment}>
      {label ? <p className="article-label mb-4">{label}</p> : null}
      <h2 className="section-title">{title}</h2>
      <p className="section-intro mt-5">{body}</p>
    </ReadingColumn>
  );
}
