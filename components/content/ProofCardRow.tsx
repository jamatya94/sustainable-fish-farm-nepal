import { ProofCard } from "./ProofCard";

type ProofCardRowProps = {
  cards: Array<{
    stat: string;
    title: string;
    body: string;
  }>;
};

export function ProofCardRow({ cards }: ProofCardRowProps) {
  return (
    <div className="border-y border-line">
      <div className="grid md:grid-cols-2 xl:grid-cols-4">
        {cards.map((card, index) => (
          <ProofCard key={card.title} index={index + 1} {...card} />
        ))}
      </div>
    </div>
  );
}
