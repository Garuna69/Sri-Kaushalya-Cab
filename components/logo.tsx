interface LogoProps {
  variant?: "full" | "icon"
  className?: string
  iconSize?: number
}

export function Logo({ variant = "full", className = "", iconSize = 36 }: LogoProps) {
  const iconEl = (
    <svg
      width={iconSize}
      height={iconSize}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect width="40" height="40" rx="8" className="fill-primary" />
      <text
        x="20"
        y="26.5"
        textAnchor="middle"
        fontFamily="Georgia, serif"
        fontWeight="700"
        fontSize="17"
        letterSpacing="0.5"
        className="fill-accent"
      >
        SKC
      </text>
    </svg>
  )

  if (variant === "icon") {
    return <div className={className}>{iconEl}</div>
  }

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {iconEl}
      <div className="flex flex-col leading-none">
        <span className="text-base font-bold tracking-wide text-primary font-serif">
          Sri Kaushalya
        </span>
        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Cab Service
        </span>
      </div>
    </div>
  )
}
