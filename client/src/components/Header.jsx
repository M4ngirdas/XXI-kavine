
import { useState, useEffect } from "react"
import { info } from "../config/info"
import {Menu} from "lucide-react"

export default function Header() {

    const [direction, setDirection] = useState("")

    useEffect(() => {
        let lastY = window.scrollY

        const onScroll = () => {
            const y = window.scrollY

            if (y > lastY && direction !== "down") {
                setDirection("down")
            }

            if (y < lastY && direction !== "up") {
                setDirection("up")
            }

            lastY = y
        }

        window.addEventListener("scroll", onScroll)
        return () => window.removeEventListener("scroll", onScroll)
    }, [direction])

    return (
        <header className={`${direction === "down" ? "-translate-y-full" : "translate-y-0"} flex items-center fixed py-8 border-b border-bakery-beige bg-red-500`}>
            <div className="flex justify-between w-full max-w-7xl mx-auto">
                <h1>{info.brand_name} Kepyklėlė</h1>
                <nav className="hidden md:flex gap-6">
                    <a href="#hero" className="text-xs uppercase tracking-widest hover:text-bakery-gold transition-colors">Pradžia</a>
                    <a href="#about" className="text-xs uppercase tracking-widest hover:text-bakery-gold transition-colors">Apie mus</a>
                    <a href="#products" className="text-xs uppercase tracking-widest hover:text-bakery-gold">Produktai</a>
                    <a href="#contact" className="text-xs uppercase tracking-widest hover:text-bakery-gold transition-colors">Kontaktai</a>
                </nav>
                <button className="block md:hidden cursor-pointer"><Menu /></button>
            </div>
        </header>
    )
}