export default function AboutUsPage() {
    function sum(a: number, b: number): number {
        return a + b;
    }
    return (
        <>
            <h2>Sobre nos, testing</h2>
            <p data-testid="p_sum">{sum(2, 3)}</p>
        </>
    );
}
