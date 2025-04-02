'use client';

import React, {useEffect, useState} from 'react';

const ChessGridBackground = ({
                                 className = "",
                                 gridSize = 65,
                                 opacity = 0.05,
                                 color = "30, 30, 30",
                                 adjustForSidebar = true,
                                 sidebarWidth = 64,
                                 showKnight = true,
                                 isFixed = true,
                             }) => {
    const [isMobile, setIsMobile] = useState(false);
    const [windowSize, setWindowSize] = useState({
        width: typeof window !== 'undefined' ? window.innerWidth : 0,
        height: typeof window !== 'undefined' ? window.innerHeight : 0
    });

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Calculate knight positioning based on grid size
    const knightSize = 200; // Knight spans exactly 4 grid cells
    const knightBottomMargin = 40;
    const knightRightMargin = 240;

    // Don't render on mobile devices
    if (isMobile) {
        return null;
    }

    return (
        <div
            className={`${isFixed ? 'fixed' : 'absolute'} inset-0 
                            ${adjustForSidebar && !isMobile ? `left-${sidebarWidth}` : 'left-0'} 
                            w-full 
                            h-full 
                            z-0 
                            pointer-events-none 
                            transition-all 
                            duration-300
                            overflow-visible
                            ${className}`
            }
            style={{
                backgroundImage: `
                        linear-gradient(to right, rgba(${color}, ${opacity}) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(${color}, ${opacity}) 1px, transparent 1px),
                        radial-gradient(circle at 20% 30%, rgba(${color.split(',')[0]}, 100, 200, 0.03) 0%, transparent 50%),
                        radial-gradient(circle at 80% 80%, rgba(100, ${color.split(',')[1]}, 200, 0.04) 0%, transparent 40%)
                    `,
                backgroundSize: `${gridSize}px ${gridSize}px, ${gridSize}px ${gridSize}px, 100% 100%, 100% 100%`,
                backgroundPosition: '0 0, 0 0, 0 0, 0 0',
                maskImage: `linear-gradient(135deg, transparent 15%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,1) 85%)`,
                WebkitMaskImage: `linear-gradient(135deg, transparent 15%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,1) 85%)`,
                animation: 'pulseBackground 15s ease-in-out infinite',
                boxShadow: 'inset 0 0 100px rgba(0,0,0,0.03)',
            }}
        >

            {/* Add animated gradient overlay */}
            <div className="absolute inset-0 opacity-10" style={{
                background: `linear-gradient(45deg, transparent 0%, rgba(${color}, 0.1) 50%, transparent 100%)`,
                backgroundSize: '200% 200%',
                animation: 'moveGradient 15s ease infinite',
            }}></div>

            {showKnight && (
                <div
                    className="absolute pointer-events-none"
                    style={{
                        bottom: `${knightBottomMargin}px`,
                        right: `${knightRightMargin}px`,
                        width: `${knightSize}px`,
                        height: `${knightSize}px`,
                        zIndex: 50,
                    }}
                >

                    <svg
                        className="absolute inset-0 z-10 chess-horse"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 160 160"
                        fill="#fff"
                        stroke='black' // Match exact grid opacity
                        strokeWidth="1"
                    >
                        <path className='path-piece'
                            d="M94.37 14.08c-.71-.24-1.5.04-1.92.69l-4.44 6.7-21.91 1.98c-.59.05-1.11.42-1.38.97l-18.4 37.79c-.16.32-.22.68-.18 1.04l3.92 32.86c.05.43.25.82.55 1.11l6.57 6.27-6.43 2.64a1.8 1.8 0 0 0-1.09 1.51c-.06.68.25 1.33.8 1.69l6.35 4.17-6.79 2.46c-.67.25-1.13.9-1.16 1.65l-.39 14.38c-.02.64.29 1.24.8 1.58l8.26 5.45-7.08 4.63a1.84 1.84 0 0 0-.74 2.02c.21.78.88 1.31 1.65 1.31h48.56c.63 0 1.22-.37 1.52-.95.3-.59.26-1.3-.09-1.85l-2.9-4.58 5.09-3.14c.53-.33.85-.91.85-1.55v-13.97c0-.51-.21-1-.57-1.34l-5.88-5.55 5.43-2.56a1.8 1.8 0 0 0 1.01-1.54 1.82 1.82 0 0 0-.82-1.65l-7.2-4.6 4.43-4.95c.31-.34.48-.81.47-1.29l-.39-11.91a1.79 1.79 0 0 0-.55-1.26l-19.5-18.83-5.57-6.93 2.41-7.27h3.77l1.98 6.93a1.71 1.71 0 0 0 1.89 1.26l12.9-1.93 4.49 4.35c.65.63 1.65.64 2.31.02l7.44-6.98c.65-.61.76-1.63.26-2.38L95.59 27.12V15.78a1.8 1.8 0 0 0-1.21-1.72z"
                        />
                    </svg>
                </div>
            )}
        </div>
    );
};

export default ChessGridBackground;