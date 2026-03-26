type ProofCardProps = {
  index: number;
  stat: string;
  title: string;
  body: string;
};

export function ProofCard({ index, stat, title, body }: ProofCardProps) {
  return (
    <article className="flex h-full flex-col border-b border-line bg-transparent px-0 py-8 md:px-6 xl:border-b-0 xl:border-r xl:py-10 xl:first:pl-0 xl:last:border-r-0 xl:last:pr-0">
      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-textMuted">
        {String(index).padStart(2, "0")}
      </p>
      <p className="mt-5 text-5xl font-semibold tracking-[-0.05em] text-brandGreen900 md:text-6xl">{stat}</p>
      <h3 className="card-title mt-5 max-w-[13rem]">{title}</h3>
      <p className="card-body mt-4 max-w-[15rem]">{body}</p>
    </article>
  );
}
