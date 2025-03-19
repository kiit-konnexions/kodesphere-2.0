"use client";

import { useState } from 'react';
import Image from 'next/image';

export default function ImageWithFallback({ src, alt, ...props }) {
    const [error, setError] = useState(false);

    // Handle the image path - ensure local images use the correct format
    const imagePath = src.startsWith('http')
        ? src
        : `/${src}`; // Prepend / for public directory access

    if (error) {
        return (
            <div className="relative w-full h-full aspect-square">
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-0.5 bg-gray-400 transform rotate-45"></div>
                    <div className="w-full h-0.5 bg-gray-400 transform -rotate-45"></div>
                </div>
            </div>
        );
    }

    return (
        <Image
            src={imagePath}
            alt={alt}
            {...props}
            onError={() => setError(true)}
        />
    );
}