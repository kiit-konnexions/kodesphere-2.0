"use client";

import {useEffect, useState} from "react";

// This component wraps client components and adds animation on load
export default function ClientWrapper({children}) {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <div className={`transform transition-all duration-500 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}>
            {children}
        </div>
    );
}
