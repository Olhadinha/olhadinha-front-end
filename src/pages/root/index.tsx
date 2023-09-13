import { BrowserRouter } from "react-router-dom";

import Header from "../../components/Header";
import olhadinhaName from "../../assets/OlhadinhaName.svg"
import styles from "./index.module.css"
import lupaIcon from "../../assets/LupaIcon.png"
import logoIcon from "../../assets/LogoIcon.svg"

export default function RootPage() {
    document.title = "Olhadinha Cashback";
    return (
        <BrowserRouter>
            <Header />
            <main>
                <div className={styles.content}>

                    <div className={styles.text}>
                        <span className="">Dê uma <img src={olhadinhaName} alt="Olhadinha" /> no melhor cashback</span>
                        <span>para sua plataforma favorita de compras.</span>
                    </div>

                    <div className={styles.searchBar}>
                        <div className={styles.wrapperInput}>
                            <img src={lupaIcon} alt="" />
                            <input type="text" id="inputName" placeholder="Procurar loja..." />
                        </div>
                        <button className={styles.searchButton}>
                            <img src={logoIcon} />
                        </button>
                    </div>
                </div>
            </main >
        </BrowserRouter>
    );
}