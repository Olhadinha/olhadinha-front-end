import SvgLogo from "../../assets/icons/SVGLogo";
import SVGInfo from "../../assets/icons/SVGInfo";
import SVGTag from "../../assets/icons/SVGTag";
import SVGMoon from "../../assets/icons/SVGMoon";

import { Link } from "react-router-dom";

export default function HeaderComponent() {
    return (
        <header className="h-20 lg:flex align-center justify-between items-center px-40 bg-stone-200 rounded-br-xl rounded-bl-xl">
            <Link to="/">
                <SvgLogo />
            </Link>
            <nav className="sm:flex align-center gap-10">
                <Link to="/sobre-nos" className="sm:flex items-center gap-1.5">
                    <SVGTag />
                    Sobre Nós
                </Link>
                <Link
                    to="/o-que-e-cashback"
                    className="sm:flex items-center gap-1.5"
                >
                    <SVGInfo />O que é cashback?
                </Link>
                <div className="sm:flex items-center gap-1.5">
                    <SVGMoon />
                    <span>Tema Escuro</span>
                </div>
            </nav>
        </header>
    );
}
