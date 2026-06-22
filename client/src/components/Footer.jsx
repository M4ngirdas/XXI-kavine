import { info } from "../config/info"

export default function Footer() {
  return (
    <footer className="text-center pb-12 text-[10px] uppercase tracking-widest text-bakery-gray">
      {info.copyright}
    </footer>
  );
};