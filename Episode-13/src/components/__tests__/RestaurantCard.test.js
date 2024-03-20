import { render, screen } from "@testing-library/react"
import RestaurantCard from "../RestaurantCard"
import MOCK_DATA from "./mocks/restaurantCardMockData.json";
import "@testing-library/jest-dom"

describe("should render Restaurant Component", () => {
    it("should render with props data", () => {
        render(<RestaurantCard resData={MOCK_DATA} />);

        const name = screen.getByText("Jagdish Vaishno Dhaba");

        expect(name).toBeInTheDocument();


    })
})