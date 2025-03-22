'use client'

export default function LoadingSpinner() {
    return (
        <div className="flex items-center justify-center gap-4" role="status" aria-live="polite">
            <span className="sr-only">Loading, please wait...</span>

            {/* Simple circle spinner */}
            <div className="h-4 w-4 rounded-full border-2 border-gray-100 border-t-black animate-spin"></div>

            {/* Text with animated dots */}
            <div className="flex items-center">
                <span className="text-sm font-medium text-gray-800 font-mono" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                    LOADING
                </span>
                <div className="flex">
                    {[...Array(3)].map((_, i) => (
                        <span
                            key={i}
                            className="text-sm font-medium text-gray-800 animate-pulse"
                            style={{
                                animationDelay: `${i * 150}ms`,
                                fontFamily: "'JetBrains Mono', monospace"
                            }}
                        >
                            .
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}