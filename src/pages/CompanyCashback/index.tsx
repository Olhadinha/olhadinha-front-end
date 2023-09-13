import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import { BrowserRouter } from "react-router-dom";

export default function CompanyCashback() {
    const params = useParams();
    return (
        <BrowserRouter>
            <Header />
            <h2>Company cashback page {params.companyCashback}</h2>
        </BrowserRouter>
    );
}
