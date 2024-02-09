import { render, screen } from "@testing-library/react"
import RestaurantCard, {withPromotedLable} from "../RestaurantCard"
import MOCK_DATA from "./mocks/resCardMock.json"
import "@testing-library/jest-dom"


it("Should render RestaurantCard with props data", () => {
    render(<RestaurantCard resData={MOCK_DATA}/>)

    const resName = screen.getByText(MOCK_DATA.info.name)

    expect(resName).toBeInTheDocument()
})

it("Should render RestaurantCard with props data", () => {
    render(<RestaurantCard resData={MOCK_DATA}/>)

    const resName = screen.getByText(MOCK_DATA.info.name)

    expect(resName).toBeInTheDocument()
})
