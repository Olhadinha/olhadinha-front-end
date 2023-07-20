import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { describe, test } from "vitest";
import AboutUsPage from ".";

describe("App test", () => {
    test("It component to render in page?", () => {
        const { getByText } = render(<AboutUsPage />);
        expect(getByText("Sobre nos, testing")).toBeInTheDocument();
    });

    test("testing text element create dinamic", () => {
        const { getByTestId } = render(<AboutUsPage />);
        expect(getByTestId("p_sum")).toHaveTextContent("5");
    });
});
