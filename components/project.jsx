"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import React, { useEffect, useMemo, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Project({
    title,
    period,
    bullets = [],
    tags = [],
    posterUrl,
    videoUrl,
    url,
}) {
    const ref = useRef(null);
    const videoRef = useRef(null);

    // Animación de entrada
    const { scrollYProgress } = useScroll({ target: ref, offset: ["0 1", "1.33 1"] });
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

    // Media queries
    const isTouch = useMemo(() => {
        if (typeof window === "undefined") return false;
        return window.matchMedia("(hover: none)").matches;
    }, []);
    const prefersReduced = useMemo(() => {
        if (typeof window === "undefined") return false;
        return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    }, []);
    const isLgUp = useMemo(() => {
        if (typeof window === "undefined") return true;
        return window.matchMedia("(min-width: 1024px)").matches;
    }, []);

    // Hover desktop (solo ≥ lg)
    const handleEnter = () => {
        if (!isLgUp || isTouch || prefersReduced) return;
        if (videoRef.current) {
            videoRef.current.currentTime = 0;
            videoRef.current.play().catch(() => { });
        }
    };
    const handleLeave = () => {
        if (!isLgUp || isTouch || prefersReduced) return;
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    };

    // Mobile autoplay (desactivado porque ocultamos video < lg)
    useEffect(() => {
        if (isLgUp || !videoRef.current || prefersReduced) return;
        // No hacemos nada en < lg porque el video no se muestra
    }, [isLgUp, prefersReduced]);

    return (
        <motion.div
            ref={ref}
            style={{ scale: scaleProgress, opacity: opacityProgress }}
            className="group relative mb-3 last:mb-0 lg:mb-8 px-3 lg:px-0" // padding lateral en mobile
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
        >
            <section
                className="relative w-full lg:w-[60rem] lg:max-w-[60rem] mx-auto
                   overflow-hidden rounded-lg border border-black/5
                   bg-gray-100 transition-colors duration-300 hover:bg-gray-200
                   h-auto lg:h-[20rem] lg:pr-8 lg:group-even:pl-8
                   dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
            >
                {/* Columna de texto */}
                <div className="flex h-full flex-col px-5 pt-4 pb-7 lg:max-w-[50%] md:pl-10 md:pr-2 md:pt-8 lg:group-even:ml-[28rem]">
                    <h3 className="text-xl font-semibold">{title}</h3>
                    {period && <p className="mt-1 text-xs text-gray-600 dark:text-white/60">{period}</p>}

                    {bullets?.length > 0 && (
                        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-relaxed text-gray-700 dark:text-white/70">
                            {bullets.map((b, i) => (
                                <li key={i}>{b}</li>
                            ))}
                        </ul>
                    )}

                    {tags?.length > 0 && (
                        <ul className="mt-4 flex flex-wrap gap-2 md:mt-auto">
                            {tags.map((item, index) => (
                                <li
                                    key={index}
                                    className="rounded-full bg-black/70 px-3 py-1 text-[0.7rem] uppercase tracking-wide text-white dark:text-white/70"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    )}

                    {/* Botón MOBILE (si hay URL) */}
                    {url && (
                        <Link
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Ver proyecto: ${title}`}
                            className="mt-4 inline-flex w-max items-center justify-center rounded-md border border-black/10 px-4 py-2 text-sm font-medium md:hidden"
                        >
                            Ver proyecto
                        </Link>
                    )}
                </div>

                {/* Poster en su posición ORIGINAL (solo ≥ lg) */}
                {posterUrl && (
                    <div
                        className="absolute top-9 hidden w-[34.25rem] lg:block
                       -right-48 lg:-right-28
                       group-even:right-[initial] group-even:-left-48 lg:group-even:-left-28 z-10"
                    >
                        <Image
                            src={posterUrl}
                            alt={`${title} poster`}
                            width={548}
                            height={340}
                            className="rounded-xl shadow-2xl"
                            quality={85}
                            priority={false}
                        />
                    </div>
                )}

                {/* OVERLAY con blur (solo en hover y ≥ lg) */}
                <div
                    className="pointer-events-none absolute inset-0 hidden lg:block
                     opacity-0 transition-all duration-300 ease-out
                     bg-black/40 backdrop-blur-0
                     lg:group-hover:pointer-events-auto lg:group-hover:opacity-100 lg:group-hover:backdrop-blur-sm"
                />

                {/* VIDEO centrado (solo en hover y ≥ lg) */}
                {videoUrl && (
                    <div
                        className="pointer-events-none absolute inset-0 hidden items-center justify-center opacity-0
                       transition-opacity duration-300 lg:flex
                       lg:group-hover:pointer-events-auto lg:group-hover:opacity-100 z-30"
                    >
                        <video
                            ref={videoRef}
                            className="h-[70%] w-auto max-w-[90%] rounded-lg shadow-2xl
                         transform-gpu scale-[0.98] opacity-0 transition-all duration-500 ease-out
                         lg:group-hover:scale-100 lg:group-hover:opacity-100"
                            src={videoUrl}
                            muted
                            loop
                            playsInline
                            preload="none"
                        />
                    </div>
                )}

                {/* Botón DESKTOP (solo en hover y ≥ lg) */}
                {url && (
                    <div className="pointer-events-none absolute inset-y-0 right-4 hidden items-center lg:flex z-40">
                        <Link
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Ver proyecto: ${title}`}
                            className="pointer-events-auto translate-x-4 opacity-0 rounded-md bg-black/80 px-4 py-2 text-sm font-medium text-white shadow-md
                         transition-all duration-300 ease-out lg:group-hover:translate-x-0 lg:group-hover:opacity-100"
                        >
                            Ver web
                        </Link>
                    </div>
                )}
            </section>
        </motion.div>
    );
}
