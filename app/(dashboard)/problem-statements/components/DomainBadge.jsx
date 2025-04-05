import {spaceGrotesk} from "@/app/(dashboard)/dashboard/page";

export default function DomainBadge({domain}) {
    return (
        <div
            className="
        bg-gray-100
        px-6 py-4
        rounded-none
        border border-gray-200
        flex
        items-center
        justify-between
        transition-all
        duration-300
        w-full
        max-w-md
      "
        >
            <div className={`flex flex-col items-start ${spaceGrotesk.className}`}>
                <span className="text-xs font-medium text-gray-500 tracking-wider">TRACK</span>
                <span className="font-bold">{domain}</span>
            </div>
            <div className="bg-gray-200 p-2 rounded-none">
                <code className="text-lg">&lt;/&gt;</code>
            </div>
        </div>
    );
}