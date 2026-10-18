/**
 * Electric-blue "AI" pill that marks a plus next to a deliverable title
 * (the Custom AI System). Sparkle pulse and shimmer live in `.np-ai-badge`
 * in app/globals.css and stop under prefers-reduced-motion.
 */
export default function ZlAiBadge({ label }: { label: string }) {
  return (
    <span className="np-ai-badge font-sans text-[11px] font-semibold leading-none tracking-[-0.01em]">
      <svg aria-hidden viewBox="0 0 16 16" className="np-ai-badge-spark h-[12px] w-[12px] shrink-0">
        <path d="M7 2Q7.9 7.1 13 8Q7.9 8.9 7 14Q6.1 8.9 1 8Q6.1 7.1 7 2Z" fill="currentColor" />
        <path
          className="np-ai-badge-spark-sm"
          d="M13.5 0.5Q13.8 2.2 15.5 2.5Q13.8 2.8 13.5 4.5Q13.2 2.8 11.5 2.5Q13.2 2.2 13.5 0.5Z"
          fill="currentColor"
        />
      </svg>
      {label}
    </span>
  )
}
