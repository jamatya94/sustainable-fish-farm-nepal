import { StatCounter } from "./StatCounter";

type ImpactStatsSectionProps = {
  label: string;
  stats: Array<{
    value: number;
    label: string;
    suffix?: string;
    duration?: number;
  }>;
};

export function ImpactStatsSection({
  label,
  stats,
}: ImpactStatsSectionProps) {
  return (
    <section className="space-y-5 md:space-y-7">
      <div className="flex justify-center">
        <p className="article-label">{label}</p>
      </div>
      <div className="border-y border-line/80">
        <div className="grid gap-y-2 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="border-b border-line/70 last:border-b-0 md:border-b-0 xl:border-r xl:border-line/70 xl:last:border-r-0"
            >
              <StatCounter
                value={stat.value}
                label={stat.label}
                suffix={stat.suffix}
                duration={stat.duration}
                delay={index * 140}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
