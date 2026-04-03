import { ProofCard } from "./ProofCard";

type ProofCardRowProps = {
  cards: Array<{
    illustration: {
      src: string;
      alt: string;
    };
    title: string;
    body: string;
  }>;
};

export function ProofCardRow({ cards }: ProofCardRowProps) {
  return (
    <div className="border-y border-line/80">
      <div className="grid gap-y-2 md:grid-cols-2 xl:grid-cols-4">
        {cards.map((card, index) => (
          <div
            key={card.title}
            className="border-b border-line/70 last:border-b-0 md:border-b-0 xl:border-r xl:border-line/70 xl:last:border-r-0"
          >
            <ProofCard index={index + 1} {...card} />
          </div>
        ))}
      </div>
    </div>
  );
}
