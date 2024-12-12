import React from 'react';
import { render, cleanup, } from '@testing-library/react';
import '@testing-library/jest-dom';
import CreditCard from '../components/CreditCard';

afterEach(cleanup);

const Testprops = {
    bank: 'Sparkasse',
    number: '1234567887654321',
    security: '123',
    expirationDate: '09/25',
    cardHolder: 'Puff Daddy',
}

describe("CreditCard Component", () => {
    it("`CreditCard` Component is defined as default export in `src/Components/CreditCard.jsx`", () => {
        expect(CreditCard).toBeDefined();
    })
    it("Renders without errors when passed props", () => {
        render(<CreditCard {...Testprops} />);
    })
})

describe("CreditCard details", () => {
    it("Renders credit card number correctly", () => {
        const { baseElement } = render(<CreditCard {...Testprops} />);
        expect(baseElement.textContent).toMatch(Testprops.number)
    })
    it("Renders expiration date correctly", () => {
        const { getByText } = render(<CreditCard {...Testprops} />);
        expect(getByText(Testprops.expirationDate)).toBeInTheDocument();
    })
    it("Renders passed holder name and bank name", () => {
        const { getByText } = render(<CreditCard {...Testprops}/>);
        expect(getByText(Testprops.cardHolder)).toBeInTheDocument();
        expect(getByText(Testprops.bank)).toBeInTheDocument();
    })
})