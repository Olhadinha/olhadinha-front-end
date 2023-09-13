import Header from "../../components/Header";
import { BrowserRouter } from "react-router-dom";

export default function WhatIsCashbackPage() {
    document.title = "O que é cashback?";

    return (
        <BrowserRouter>
            <Header />
            <h2>What is cashback page</h2>
        </BrowserRouter>
    );
}