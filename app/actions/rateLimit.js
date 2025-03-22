"use server";

import {headers} from "next/headers";
import {LRUCache} from "lru-cache";

export async function checkRateLimit() {
    const rateLimit = new LRUCache({
        max: 5, // Max requests stored
        ttl: 60 * 1000, // 1 minute
    });

    const header = await headers();

    const ip = header.get("x-forwarded-for")?.split(",")[0] || "Unknown IP";// Replace with real IP fetching logic

    if (rateLimit.has(ip)) {
        return false;
    }

    rateLimit.set(ip, true, 60 * 1000); // Store IP for 1 min

    return true;
}
