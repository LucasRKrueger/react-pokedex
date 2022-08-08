import { render, screen } from '@testing-library/react';
import Main from '../pages/Main';

test('renders Main', () => {
    render(<Main />);
    const linkElement = screen.getAllByText('');
    expect(linkElement).not.toBeNull();
})