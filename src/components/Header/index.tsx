import styles from "./header.module.css";
import { NavLink } from "react-router-dom";

import logo from "../../assets/logo.svg";

export default function Header() {
    return (
        <header className={styles.header}>
            <NavLink to="/">
                <img src={logo} alt="" />
            </NavLink>
            <nav>
                <ul className={styles.list_links}>
                    <li>
                        <NavLink to="/sobre-nos">Sobre nós</NavLink>
                    </li>
                    <li>
                        <NavLink to="/o-que-e-cashback">
                            O que é cashback?
                        </NavLink>
                    </li>
                    <li>Modo Escuro</li>
                </ul>
            </nav>
        </header>
    );
}
