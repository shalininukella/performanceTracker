interface GridStatsProps {
  filled: number;
  total: number;
  label: string;
}

export function GridStats({ filled, total, label }: GridStatsProps) {
  const percentage = Math.round((filled / total) * 100);

  return (
    <div className="flex items-center gap-4 text-sm text-muted-foreground">
      <span className="font-medium text-foreground">{filled}</span>
      <span>{label}</span>
      <span className="text-xs">({percentage}%)</span>
    </div>
  );
}
