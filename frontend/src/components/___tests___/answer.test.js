import { render, screen } from '@testing-library/react';
import Answer from '../Answer';
//https://www.youtube.com/watch?v=ML5egqL3YFE react tests
test('renders answer', () => {
    const answer = {
        id: "q1a1", answer: 'Look forward to hearing what your boss thinks about you and expects from you', weight: 1, checked : false
    }
  render(      <Answer
    answer={answer}
    key = {answer.id}
    {...answer}
  />);
  const input = screen.getByTestId('q1a1');
  expect(input).toBeInTheDocument();
  const label = screen.getByText('Look forward to hearing what your boss thinks about you and expects from you');
  expect(label).toBeInTheDocument();
});