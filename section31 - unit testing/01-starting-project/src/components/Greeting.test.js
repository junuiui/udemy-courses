import Greeting from "./Greeting";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event"

// To group (group of 'Greeting component')
describe('Greeting Component', () => {
  /**
   * first param = description
   * second = anom function to TEST
   */
  test('renders Helo World as a text', () => {
    // Arrange
    render(<Greeting />)

    // Act
    // ..nothing

    // Assert
    const helloWorldElement = screen.getByText('Hello World!', { exact: true })
    // const helloWorldElement = screen.getByText('Hello World', { exact: false }) // case not matter
    expect(helloWorldElement).toBeInTheDocument();

  });

  test('Button NOT Click Test', () => {
    // Arrange
    render(<Greeting />)

    // Act
    // ..nothing

    // Assert
    const e = screen.getByText('It\'s good to see you!', { exact: true })
    expect(e).toBeInTheDocument();

  });

  test('Button Clicked Test', () => {
    // Arrange
    render(<Greeting />)

    // Act
    // need to click the button
    const buttonElement = screen.getByRole('button')
    userEvent.click(buttonElement);

    // Assert
    const e = screen.getByText('Changed!', { exact: true })
    expect(e).toBeInTheDocument();

  });

  test('Button Clicked Test, good to see you text not visible', () => {
    // Arrange
    render(<Greeting />)

    // Act
    // need to click the button
    const buttonElement = screen.getByRole('button')
    userEvent.click(buttonElement);

    // Assert
    // const e = screen.getByText('It\'s good to see you!', { exact: false }) // would fail
    const e = screen.queryByText('It\'s good to see you!', { exact: false }) 
    expect(e).not.toBeInTheDocument();
  });
});



