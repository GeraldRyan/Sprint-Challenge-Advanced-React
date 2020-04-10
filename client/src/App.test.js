import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render, fireEvent } from '@testing-library/react';



it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
//

test('Players are dislaying on the page', () => {
  //a
  const {getByText} = render(<App />)
  const playerText = getByText(/Player/i)

  //a
  //a
})

