"use client";

import { useEffect, useState, useRef } from "react";
import { useTheme } from "next-themes";

export default function KaleidoscopeBackground() {
    const { theme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouseRef = useRef({ x: 0, y: 0 });

    useEffect(() => {
        setMounted(true);
        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    const isDark = mounted && (resolvedTheme === "dark" || theme === "dark");

    useEffect(() => {
        if (!mounted || !canvasRef.current) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        let w: number, h: number;

        // Dark Mode Objects
        let stars: Star[] = [];
        let nebulae: Nebula[] = [];
        let shootingStars: ShootingStar[] = [];

        // Light Mode Objects
        let hearts: Heart[] = [];

        // --- Dark Mode Classes ---
        class Nebula {
            x: number; y: number; radius: number; color: string; speedX: number; speedY: number;
            constructor() {
                this.x = Math.random() * w;
                this.y = Math.random() * h;
                this.radius = Math.random() * (w * 0.4) + (w * 0.2);
                const colors = ["rgba(124, 58, 237, 0.08)", "rgba(219, 39, 119, 0.08)", "rgba(79, 70, 229, 0.08)"];
                this.color = colors[Math.floor(Math.random() * colors.length)];
                this.speedX = (Math.random() - 0.5) * 0.2;
                this.speedY = (Math.random() - 0.5) * 0.2;
            }
            update() {
                this.x += this.speedX; this.y += this.speedY;
                if (this.x < -this.radius) this.x = w + this.radius;
                if (this.x > w + this.radius) this.x = -this.radius;
                if (this.y < -this.radius) this.y = h + this.radius;
                if (this.y > h + this.radius) this.y = -this.radius;
            }
            draw() {
                if (!ctx) return;
                const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius);
                gradient.addColorStop(0, this.color);
                gradient.addColorStop(1, "transparent");
                ctx.fillStyle = gradient;
                ctx.globalCompositeOperation = "screen";
                ctx.fillRect(0, 0, w, h);
                ctx.globalCompositeOperation = "source-over";
            }
        }

        class Star {
            x: number; y: number; size: number; opacity: number; speed: number; color: string;
            layer: number; originX: number; originY: number; pulse: number;
            constructor() {
                this.x = this.originX = Math.random() * w;
                this.y = this.originY = Math.random() * h;
                this.layer = Math.floor(Math.random() * 3);
                this.size = (this.layer + 1) * 0.6 + Math.random() * 1.5;
                this.opacity = Math.random() * 0.9 + 0.1;
                this.speed = (Math.random() * 0.02 + 0.01) * (this.layer + 1);
                this.pulse = Math.random() * Math.PI * 2;
                const colors = ["#A855F7", "#EC4899", "#FFFFFF", "#C084FC"];
                this.color = colors[Math.floor(Math.random() * colors.length)];
            }
            update() {
                this.pulse += this.speed;
                this.opacity = 0.3 + Math.sin(this.pulse) * 0.7;
                const dx = (mouseRef.current.x - w / 2) * (this.layer + 1) * 0.015;
                const dy = (mouseRef.current.y - h / 2) * (this.layer + 1) * 0.015;
                this.x = this.originX - dx;
                this.y = this.originY - dy;
            }
            draw() {
                if (!ctx) return;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.globalAlpha = Math.max(0, this.opacity * 0.9);
                if (this.size > 2) {
                    ctx.shadowBlur = 10;
                    ctx.shadowColor = this.color;
                }
                ctx.fill();
                ctx.shadowBlur = 0;
            }
        }

        class ShootingStar {
            x: number; y: number; length: number; speed: number; opacity: number; color: string; active: boolean;
            constructor() { this.active = false; this.x = 0; this.y = 0; this.length = 0; this.speed = 0; this.opacity = 0; this.color = ""; }
            reset() {
                this.x = Math.random() * w + (w * 0.3); this.y = Math.random() * (h / 3);
                this.length = Math.random() * 150 + 100; this.speed = Math.random() * 15 + 12;
                this.opacity = 1; this.color = Math.random() > 0.5 ? "#C084FC" : "#F472B6";
                this.active = true;
            }
            update() {
                if (!this.active) return;
                this.x -= this.speed; this.y += this.speed * 0.3; this.opacity -= 0.015;
                if (this.opacity <= 0) this.active = false;
            }
            draw() {
                if (!this.active || !ctx) return;
                ctx.save();
                const gradient = ctx.createLinearGradient(this.x, this.y, this.x + this.length, this.y - this.length * 0.3);
                gradient.addColorStop(0, this.color); gradient.addColorStop(1, "transparent");
                ctx.beginPath(); ctx.strokeStyle = gradient; ctx.lineWidth = 3; ctx.moveTo(this.x, this.y);
                ctx.lineTo(this.x + this.length, this.y - this.length * 0.3);
                ctx.shadowBlur = 15; ctx.shadowColor = this.color; ctx.globalAlpha = this.opacity;
                ctx.stroke(); ctx.restore();
            }
        }

        // --- Light Mode Class ---
        class Heart {
            x: number; y: number; size: number; speedY: number; opacity: number; color: string;
            sway: number; swaySpeed: number;
            constructor() {
                this.x = Math.random() * w;
                this.y = Math.random() * h;
                this.size = Math.random() * 15 + 8; // Visible size
                this.speedY = Math.random() * 0.5 + 0.2; // Gentle float up
                this.opacity = Math.random() * 0.6 + 0.2;
                const colors = ["#EC4899", "#F472B6", "#F9A8D4", "#FDA4AF"]; // Pink shades
                this.color = colors[Math.floor(Math.random() * colors.length)];
                this.sway = Math.random() * Math.PI * 2;
                this.swaySpeed = Math.random() * 0.02 + 0.01;
            }
            update() {
                this.y -= this.speedY;
                this.sway += this.swaySpeed;
                this.x += Math.sin(this.sway) * 0.5; // Gentle left-right sway

                if (this.y < -50) {
                    this.y = h + 50;
                    this.x = Math.random() * w;
                }
            }
            draw() {
                if (!ctx) return;
                ctx.save();
                ctx.translate(this.x, this.y);
                ctx.fillStyle = this.color;
                ctx.globalAlpha = this.opacity;

                // Draw Heart
                ctx.beginPath();
                const topCurveHeight = this.size * 0.3;
                ctx.moveTo(0, topCurveHeight);
                // Top left curve
                ctx.bezierCurveTo(
                    0, 0,
                    -this.size / 2, 0,
                    -this.size / 2, topCurveHeight
                );
                // Bottom left curve
                ctx.bezierCurveTo(
                    -this.size / 2, (this.size + topCurveHeight) / 2,
                    0, (this.size + topCurveHeight) / 2,
                    0, this.size
                );
                // Bottom right curve
                ctx.bezierCurveTo(
                    0, (this.size + topCurveHeight) / 2,
                    this.size / 2, (this.size + topCurveHeight) / 2,
                    this.size / 2, topCurveHeight
                );
                // Top right curve
                ctx.bezierCurveTo(
                    this.size / 2, 0,
                    0, 0,
                    0, topCurveHeight
                );
                ctx.closePath();
                ctx.fill();
                ctx.restore();
            }
        }

        const resize = () => {
            w = canvas.width = window.innerWidth;
            h = canvas.height = window.innerHeight;
            if (isDark) {
                stars = Array.from({ length: 300 }, () => new Star());
                nebulae = Array.from({ length: 3 }, () => new Nebula());
                shootingStars = Array.from({ length: 2 }, () => new ShootingStar());
            } else {
                hearts = Array.from({ length: 40 }, () => new Heart()); // 40 hearts for light mode
            }
        };

        const render = () => {
            ctx.clearRect(0, 0, w, h);

            if (isDark) {
                // Dark Mode Render
                nebulae.forEach(n => { n.update(); n.draw(); });

                ctx.save(); ctx.beginPath(); ctx.strokeStyle = "rgba(168, 85, 247, 0.08)"; ctx.lineWidth = 0.5;
                const gridSize = 120;
                for (let x = (mouseRef.current.x * 0.01) % gridSize; x <= w; x += gridSize) { ctx.moveTo(x, 0); ctx.lineTo(x, h); }
                for (let y = (mouseRef.current.y * 0.01) % gridSize; y <= h; y += gridSize) { ctx.moveTo(0, y); ctx.lineTo(w, y); }
                ctx.stroke(); ctx.restore();

                stars.forEach(star => { star.update(); star.draw(); });

                if (Math.random() < 0.015) {
                    const inactive = shootingStars.find(s => !s.active);
                    if (inactive) inactive.reset();
                }
                shootingStars.forEach(s => { s.update(); s.draw(); });
            } else {
                // Light Mode Render (Hearts)
                hearts.forEach(h => { h.update(); h.draw(); });
            }

            animationFrameId = requestAnimationFrame(render);
        };

        window.addEventListener("resize", resize);
        resize();
        render();

        return () => {
            window.removeEventListener("resize", resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, [mounted, isDark]);

    if (!mounted) return null;

    return (
        <div
            className={`fixed inset-0 z-[-1] pointer-events-none transition-colors duration-700 ${isDark ? "bg-[#000000]" : "bg-[#FDFEFE]"
                }`}
        >
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full"
            />
            {isDark && (
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
            )}
        </div>
    );
}
