import { render, screen } from '@testing-library/react';
import Webimage from '../Webimage';

test('renders image', () => {
  render(<Webimage />);
  const image = screen.getByTestId('webimage1');
  expect(image).toBeInTheDocument();
});