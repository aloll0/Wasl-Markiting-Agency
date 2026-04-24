export default function NebulaBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Primary blob - purple */}
      <div
        className="absolute animate-nebula-rotate"
        style={{
          width: '120%',
          height: '120%',
          top: '-10%',
          left: '-10%',
          background: 'radial-gradient(circle at 50% 50%, rgba(76, 29, 149, 0.15), rgba(0, 0, 0, 0) 70%)',
        }}
      />
      {/* Secondary blob - violet */}
      <div
        className="absolute animate-nebula-rotate-reverse"
        style={{
          width: '120%',
          height: '120%',
          top: '-10%',
          left: '-10%',
          background: 'radial-gradient(circle at 50% 50%, rgba(124, 58, 237, 0.1), rgba(0, 0, 0, 0) 60%)',
        }}
      />
    </div>
  )
}
