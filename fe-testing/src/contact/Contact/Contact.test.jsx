import renderer from 'react-test-renderer';
import { render, fireEvent, waitFor,mount, getByPlaceholderText, queryByRole, queryByTestId, getByTestId, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Contact from './Contact';


//snapshot
test('match snapshot', () => {
  const tree = renderer.create(<Contact/>).toJSON();
  expect(tree).toMatchSnapshot();
});

//simulate
test('display err text when user did not type in input field', async () => {
    const { getByPlaceholderText, getByText } = render(<Contact />);
    const input = getByPlaceholderText('Enter your issue')
    fireEvent.blur(input);
    let error;
    await waitFor(() => {
      error = getByText('Required field');
    });
    expect(error).toBeTruthy();
  });


test('display err text when user did not type in message field', async () => {
    const { getByPlaceholderText, getByText } = render(<Contact />);
    const message = getByPlaceholderText('Enter your message')
    fireEvent.blur(message);
    let error;
    await waitFor(() => {
      error = getByText('Required field');
    });
    expect(error).toBeTruthy();
  });


// expected output 
test('input field recieve correct value from user', async () => {
    const { getByPlaceholderText } = render(<Contact />);
    const input = getByPlaceholderText('Enter your issue')
    await userEvent.type(input, 'Tai Pham', { delay: 1 });
    expect(input.value).toBe('Tai Pham');
  });


it("Form can be submited", () => {
    const mockSubmit = jest.fn();
    const {getByTestId } = render(<Contact onSubmit={mockSubmit}/>);
    act(() => {
        fireEvent.change(getByTestId("input-test"), { target: { value: 'Tai Pham' } });
        fireEvent.submit(getByTestId("my-form"));
        expect(mockSubmit).toHaveBeenCalled(); 
        expect(mockSubmit.mock.calls).toEqual([[{name: 'Tai Pham'}]]); 
    });
});