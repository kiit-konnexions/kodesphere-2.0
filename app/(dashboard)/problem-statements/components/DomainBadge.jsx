// Server Component - Domain Badge

export default function DomainBadge({ domain, spaceGrotesk }) {
    return (
        <div className={`
          bg-gray-100 
          px-8 py-5 
          rounded-none
          border border-gray-200
          flex 
          items-center 
          justify-between
          transition-all 
          duration-300
          w-full
          max-w-md
        `}>
            <div className="flex items-center gap-4">
                <span className={`font-bold ${spaceGrotesk.className}`}>{domain}</span>
            </div>
            <div>
                <code className="text-lg">&lt;/&gt;</code>
            </div>
        </div>
    );
}
