import { render,screen } from '@testing-library/react';
import RestaurantCard from '../../components/RestaurantCard';
import MOCK_DATA from '../mocks/resCardMock.json';
import '@testing-library/jest-dom';



it("Should render RestaurantCard Component with props Data", ()=>{
  render(<RestaurantCard resData={MOCK_DATA}/>);

  const name = screen.getByText("Meghana Foods");

  // Assertion
  expect(name).toBeInTheDocument();
});


it("Should render RestaurantCard component with Promoted Label",()=>{
  // HomeWork - test HOC : withPromotedLevel()
  render();
});