import { useState, useEffect } from "react"
import { info } from "../config/info"
import { LuMenu, LuX } from "react-icons/lu"
import logo from "../assets/logo.png"

export default function Header() {
    const [direction, setDirection] = useState("")
    const [isSidebarShown, setIsSidebarShown] = useState(false)
    const [currentBg, setCurrentBg] = useState("bg-[#F9F7F2]")

    const navItems = [
        { href: "#hero", text: "Pradžia" },
        { href: "#about", text: "Apie mus" },
        { href: "#products", text: "Produktai" },
        { href: "#contact", text: "Kontaktai" },
    ]

    const navElements = navItems.map((item, index) => (
        <a key={index} onClick={() => setIsSidebarShown(false)} href={item.href} className="group w-fit uppercase tracking-[0.3em] font-medium hover:text-bakery-gold transition-colors text-[11px] sm:text-xs">
            {item.text}
        </a>
    ))

    const mobileNavElements = navItems.map((item, index) => (
        <a key={index} onClick={() => setIsSidebarShown(false)} href={item.href} className="group w-fit uppercase tracking-[0.4em] font-bold hover:text-bakery-gold transition-colors text-xl sm:text-base py-2">
            {item.text}
        </a>
    ))

    useEffect(() => {
        let lastY = window.scrollY

        const onScroll = () => {
            const y = window.scrollY

            if (y > lastY && y > 100 && direction !== "down") {
                setDirection("down")
            }
            if ((y < lastY || y <= 100) && direction !== "up") {
                setDirection("up")
            }
            lastY = y

            const heroSec = document.getElementById("hero")
            const aboutSec = document.getElementById("about")
            const productsSec = document.getElementById("products")
            const contactSec = document.getElementById("contact")

            const scrollPos = y + 60

            if (contactSec && scrollPos >= contactSec.offsetTop) {
                setCurrentBg("bg-bakery-beige/90 backdrop-blur-md")
            } else if (productsSec && scrollPos >= productsSec.offsetTop) {
                setCurrentBg("bg-white/90 backdrop-blur-md")
            } else if (aboutSec && scrollPos >= aboutSec.offsetTop) {
                setCurrentBg("bg-white/90 backdrop-blur-md")
            } else if (heroSec && scrollPos >= heroSec.offsetTop) {
                setCurrentBg("bg-[#F9F7F2]/90 backdrop-blur-md")
            } else {
                setCurrentBg("bg-transparent")
            }
        }

        window.addEventListener("scroll", onScroll)
        onScroll()
        return () => window.removeEventListener("scroll", onScroll)
    }, [direction])

    return (
        <>
            <header className={`${direction === "down" ? "-translate-y-full" : "translate-y-0"} ${currentBg} flex justify-center fixed w-full z-50 py-1 md:py-2 transition-all duration-300`}>
                <div className="flex justify-between items-center w-full max-w-7xl px-4 sm:px-6">
                    <a href="#hero" className="transition-transform hover:scale-105">
                        <img src={logo} className="w-30 md:w-40 h-25 object-contain" alt={info.brand_name} />
                    </a>
                    <nav className="hidden md:flex gap-8 items-center text-bakery-dark">{navElements}</nav>
                    <button onClick={() => setIsSidebarShown(true)} className="block md:hidden cursor-pointer p-1 text-bakery-dark hover:text-bakery-gold transition-colors" aria-label="Atidaryti meniu">
                        <LuMenu size={28} />
                    </button>
                </div>
            </header>

            <div onClick={() => setIsSidebarShown(false)} className={`${isSidebarShown ? "opacity-100 md:hidden" : "opacity-0 pointer-events-none"} transition-opacity duration-300 fixed inset-0 z-50 bg-black/40`}></div>

            <div className={`${isSidebarShown ? "translate-x-0 md:hidden" : "translate-x-full"} flex flex-col justify-center items-center p-8 fixed right-0 top-0 w-full sm:w-80 h-full transition-transform duration-300 z-50 bg-bakery-beige`}>
                <button onClick={() => setIsSidebarShown(false)} className="absolute top-6 right-4 sm:right-6 p-2 cursor-pointer transition-colors duration-200 text-bakery-dark hover:text-bakery-gold" aria-label="Uždaryti meniu">
                    <LuX size={32} className="sm:size-6" />
                </button>
                <nav className="flex flex-col items-center gap-10 sm:gap-8 text-bakery-dark text-center w-full mt-16 sm:mt-0">
                    {mobileNavElements}
                </nav>
            </div>
        </>
    )
}