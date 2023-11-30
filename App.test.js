/*
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
*/

import React from 'react';
import RegistrationForm from './components/RegistrationForm';

function App() {
  return (
    <div className="App">
      <RegistrationForm />
    </div>
  );
}

export default App;