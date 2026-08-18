export function Divider() {
  return (
    <div className="flex items-center justify-center gap-3 py-4" aria-hidden="true">
      <span className="block h-px w-[120px] bg-gold-bright/70" />
      <span className="block h-2 w-2 rotate-45 border border-gold-bright" />
      <span className="block h-px w-[120px] bg-gold-bright/70" />
    </div>
  );
}
