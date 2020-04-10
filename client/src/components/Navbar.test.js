import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import { render, fireEvent } from '@testing-library/react';



it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Navbar />, div);
  ReactDOM.unmountComponentAtNode(div);
});
//

test('Players are dislaying on the page', () => {
  //a
  const {getByText} = render(<Navbar />)
  const formText = getByText(/data/i)

  //a
  //a
})


test('can type in input field', ()=>{
  const {getByLabelText, getByTestId} = render(<Navbar />)

  const filterField = getByLabelText(/filter/i)
  fireEvent.change(filterField, {target: {value: "Mary"}})

  //assert
  expect(filterField.value).toBe("Mary")
})