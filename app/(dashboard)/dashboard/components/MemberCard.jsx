"use client";
import {useEffect, useState} from "react";
import {motion} from "framer-motion";

export default function MemberCard({member, spaceGrotesk, index, isLoaded}) {
    const [hovered, setHovered] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, []);

    return (
        <motion.div
            initial={{opacity: 0, x: -20}}
            animate={{
                opacity: isLoaded ? 1 : 0,
                x: isLoaded ? 0 : -20,
                transition: {
                    duration: 0.5,
                    delay: 0.1 * (index + 2),
                    ease: [0.25, 0.1, 0.25, 1.0]
                }
            }}
            whileHover={{
                scale: 1.01,
                transition: {duration: 0.2}
            }}
            className={`relative bg-white border border-gray-200 overflow-hidden ${spaceGrotesk.className}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {/* Leader background logo */}
            {member.isLeader && (
                <motion.div
                    className="absolute -right-16 sm:-right-12 md:-right-16 lg:-right-30 top-1/2 -translate-y-1/2 pointer-events-none z-0 flex justify-end items-center overflow-hidden"
                    style={{width: '60%', height: '60%'}}
                    initial={{opacity: 0.4}}
                    animate={{
                        opacity: hovered ? 1 : 0.4,
                        scale: hovered ? 0.75 : 0.7
                    }}
                    transition={{duration: 0.3}}
                >
                    <motion.img
                        src="/leader_logo.svg"
                        alt=""
                        className="w-full h-full object-contain"
                        style={{
                            filter: hovered ? 'brightness(0) saturate(100%)' : 'none'
                        }}
                        transition={{
                            duration: 0.1,
                            ease: "easeOut"
                        }}
                    />
                </motion.div>
            )}

            <div className="p-5 relative">
                {/* Background subtle highlight on hover */}
                <motion.div
                    className="absolute inset-0 bg-gray-50 pointer-events-none"
                    initial={{opacity: 0}}
                    animate={{opacity: hovered ? 0.5 : 0}}
                    transition={{duration: 0.3}}
                />

                <div className="flex items-start gap-4 relative z-10">
                    {/* Animated avatar */}
                    <motion.div
                        className="relative flex items-center justify-center w-14 h-14
                                                                  bg-gray-50 border border-gray-300 overflow-hidden"
                        animate={{
                            borderColor: hovered ? "#000" : "#e5e7eb",
                            rotate: hovered ? [0, 2, 0, -1, 0] : 0,
                        }}
                        transition={{
                            duration: 0.4,
                            rotate: {
                                duration: 0.4,
                                ease: "easeInOut",
                                times: [0, 0.2, 0.5, 0.8, 1]
                            }
                        }}
                    >
                        <motion.span
                            className={`text-xl font-bold ${spaceGrotesk.className}`}
                            animate={{
                                scale: hovered ? [1, 1.1, 1] : 1,
                            }}
                            transition={{
                                duration: 0.4,
                                times: [0, 0.5, 1],
                                delay: 0.1
                            }}
                        >
                            {member.name.charAt(0).toUpperCase()}
                        </motion.span>
                    </motion.div>

                    <div className="flex-1 space-y-2">
                        {/* Name */}
                        <div>
                            <motion.h3
                                className={`text-base font-bold tracking-tight ${spaceGrotesk.className}`}
                                animate={{y: hovered ? [-1, 0] : 0}}
                                transition={{duration: 0.3, ease: "easeOut"}}
                            >
                                {member.name}
                            </motion.h3>
                        </div>

                        {/* Bottom row with ID */}
                        <motion.div
                            className="flex justify-between items-center"
                        >
                            <motion.div
                                className="font-mono text-xs text-gray-500"
                                animate={{opacity: hovered ? 0.9 : 0.7}}
                                transition={{duration: 0.3}}
                            >
                                {member.rollNo || "ID-00000"}
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Angular corner accents on hover */}
            <motion.div
                className="absolute top-0 right-0 w-0 h-0 border-t-[12px] border-r-[12px] border-black"
                initial={{opacity: 0}}
                animate={{opacity: hovered ? 1 : 0}}
                transition={{duration: 0.2}}
            />

            {/* Side indicator */}
            <motion.div
                className="absolute top-0 bottom-0 left-0 w-[2px] bg-black"
                initial={{height: "30%"}}
                animate={{
                    height: hovered ? "100%" : "30%",
                    opacity: hovered ? 1 : 0
                }}
                transition={{duration: 0.3}}
            />

            {/* Shadow effect on hover */}
            <motion.div
                className="absolute inset-0 pointer-events-none"
                initial={{boxShadow: "0 0 0 rgba(0,0,0,0)"}}
                animate={{
                    boxShadow: hovered ? "0 4px 0 rgba(0,0,0,0.08)" : "0 0 0 rgba(0,0,0,0)"
                }}
                transition={{duration: 0.3}}
            />
        </motion.div>
    );
}