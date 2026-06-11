export default function StatCard({ value, label, sub }: { value: string; label: string; sub: string }) {
  return (
    <div className="space-y-1 text-center">
      <div className="text-4xl md:text-5xl font-bold text-amber-400">{value}</div>
      <div className="text-sm md:text-base font-semibold text-white">{label}</div>
      <div className="text-xs text-gray-400">{sub}</div>
    </div>
  );
}
