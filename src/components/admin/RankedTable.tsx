export function RankedTable({ title, data, valueLabel }: { title: string; data: { value: string; count: number }[]; valueLabel?: string }) {
  const max = data.length > 0 ? Math.max(...data.map((d) => d.count)) : 1

  return (
    <div className="rounded-xl border border-[#222] bg-[#111] p-6">
      <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#6B7280]">{title}</h3>
      {data.length === 0 ? (
        <p className="text-xs text-[#4B5563]">No data yet.</p>
      ) : (
        <div className="space-y-2">
          {data.map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="w-4 shrink-0 text-right text-[10px] font-bold text-[#4B5563]">{i + 1}</span>
              <div className="flex-1">
                <div className="mb-0.5 flex items-baseline justify-between">
                  <span className="text-xs text-[#9CA3AF]">{item.value || '(none)'}</span>
                  <span className="text-xs font-semibold text-white">{item.count}</span>
                </div>
                <div className="h-1.5 w-full rounded-full bg-[#1A1A1A]">
                  <div className="h-1.5 rounded-full bg-white/40 transition-all" style={{ width: `${(item.count / max) * 100}%` }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
