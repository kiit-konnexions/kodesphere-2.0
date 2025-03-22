"use client";

export default function MemberCard({member, spaceGrotesk, index, isLoaded}) {
    return (
        <div
            className={`p-4 rounded-none bg-white border-gray-200 border
            transform transition-all duration-500 ${index === 0 ? 'delay-[400ms]' : 'delay-[500ms]'}
            ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`}
        >
            <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-none flex items-center justify-center
                bg-gray-100 flex-shrink-0">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                            stroke="currentColor" strokeWidth="2"/>
                        <path
                            d="M16 15H8C5.79086 15 4 16.7909 4 19V21H20V19C20 16.7909 18.2091 15 16 15Z"
                            stroke="currentColor" strokeWidth="2"/>
                    </svg>
                </div>

                <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                        <div
                            className={`font-semibold break-words ${spaceGrotesk.className}`}>{member.name}</div>
                        <div className="text-gray-500 text-sm font-mono mt-1 sm:mt-0">
                            {member.id}
                        </div>
                    </div>

                    {member.isLeader && (
                        <div className="mt-2">
                            <span className="inline-block px-2 py-0.5 text-xs rounded-none
                                bg-gray-100 text-yellow-700 border border-gray-200">
                                Leader
                            </span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
