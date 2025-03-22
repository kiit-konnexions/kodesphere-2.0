// app/components/client/ClientAnimatedTitle.jsx
"use client";

import AnimatedTitle from "@/components/AnimatedTitle";

export default function ClientAnimatedTitle({ text }) {
    return <AnimatedTitle text={text} triggerOnLoad={true} />;
}