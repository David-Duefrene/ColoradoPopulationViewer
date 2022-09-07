// Test the App component with vitest Snapshot Testing:
import { expect, it, describe } from 'vitest'
import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders without crashing', () => {
	const container = render(<App />);
	expect(container).toMatchSnapshot();
  });
});
