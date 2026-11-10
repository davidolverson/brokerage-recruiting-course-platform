export function StatCard({ label, value, sub }: { label: string; value: string | number; sub?: string }) {
  return (
    <div className="rounded-xl border border-[#222] bg-[#111] p-5 sm:p-6">
      <p className="text-xs font-semibold uppercase tracking-widest text-[#6B7280]">{label}</p>
      <p className="mt-2 text-2xl font-extrabold text-white sm:text-3xl" style={{ fontFamily: 'Manrope, sans-serif' }}>
        {value}
      </p>
      {sub && <p className="mt-1 text-xs text-[#4B5563]">{sub}</p>}
    </div>
  )
}
