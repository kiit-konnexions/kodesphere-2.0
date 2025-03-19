// app/components/client/ClientAnimatedTitle.jsx
"use client";

import AnimatedTitle from "@/app/components/AnimatedTitle";

export default function ClientAnimatedTitle({ text }) {
    return <AnimatedTitle text={text} triggerOnLoad={true} />;
}