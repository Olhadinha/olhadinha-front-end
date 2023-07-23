import { useParams } from "react-router-dom";

export default function CompanyCashback() {
    const params = useParams();
    return (
        <>
            <h2>Company cashback page {params.companyCashback}</h2>
        </>
    );
}
