export function StageLabel({ number, label }: { number: string; label: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-xs font-semibold tracking-wide text-primary/40">{number}</span>
      <span className="h-px w-7 bg-primary/35" />
      <span className="text-xs font-semibold tracking-widest text-primary uppercase">{label}</span>
    </div>
  );
}
