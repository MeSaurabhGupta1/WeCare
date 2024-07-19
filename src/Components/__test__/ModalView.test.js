import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import Modalview from "../revision/Modalview";

describe("Modalview Component", () => {
  const handleCloseMock = jest.fn();
  const handleSelectMock = jest.fn();
  it('Advance search', () => {
    render(
      <Modalview open={true} handleClose={handleCloseMock} value="item" handleSelect={handleSelectMock} />
    );
    let advanceSearch = screen.getByText('Advance Search')
    expect(advanceSearch).toBeInTheDocument();
  })

  it('close button', () => {
    render(
      <Modalview open={true} handleClose={handleCloseMock} value="item" handleSelect={handleSelectMock} />
    );
    let closeButton = screen.getByTestId('close-button')
    expect(closeButton).toBeInTheDocument();
    fireEvent.click(closeButton);

    expect(handleCloseMock).toHaveBeenCalled();
  })

  it('search type heading', () => {
    render(
      <Modalview open={true} handleClose={handleCloseMock} value="item" handleSelect={handleSelectMock} />
    );
    let searchTypeHeading = screen.getByText('Search type')
    expect(searchTypeHeading).toBeInTheDocument();
  })

  it('handles search type change', () => {
    render(
      <Modalview open={true} handleClose={handleCloseMock} value="item" handleSelect={handleSelectMock} />
    );

    const select = screen.getByLabelText('Search Type');
    expect(select).toBeInTheDocument();
    fireEvent.click(select);
    //const listItem = screen.queryAllByRole('option');
    // expect(listItem).toHaveLength(2);
    // fireEvent.click(listItem[1]);
    //expect(handleSelectMock).toHaveBeenCalledWith(expect.objectContaining({ target: expect.any(Object) }));
  });

  it('main heading', () => {
    render(
      <Modalview open={true} handleClose={handleCloseMock} value="item" handleSelect={handleSelectMock} />
    );
    let mainHeading = screen.getByText('Fill out any of the below details to get items')
    expect(mainHeading).toBeInTheDocument();
  })

  it('itemNumber', () => {
    render(
      <Modalview open={true} handleClose={handleCloseMock} value="item" handleSelect={handleSelectMock} />
    );
    let itemNumber = screen.getByText('Item number')
    expect(itemNumber).toBeInTheDocument();
  })

  it('item number input field renders correctly', () => {
    render(
      <Modalview open={true} handleClose={handleCloseMock} value="item" handleSelect={handleSelectMock} />
    );
     const textFieldElement = screen.getByLabelText('Item Number');
    userEvent.type(textFieldElement, '123');
    fireEvent.change(textFieldElement);
    expect(textFieldElement).toHaveValue('123');
    // expect(textFieldElement.value).toBe('123');

    
  })

  it('itemDescription', () => {
    render(
      <Modalview open={true} handleClose={handleCloseMock} value="item" handleSelect={handleSelectMock} />
    );
    let itemDescription = screen.getByText('Item description')
    expect(itemDescription).toBeInTheDocument();
  })

  it('winNumber', () => {
    render(
      <Modalview open={true} handleClose={handleCloseMock} value="item" handleSelect={handleSelectMock} />
    );
    let winNumber = screen.getByText('WIN number')
    expect(winNumber).toBeInTheDocument();
  })

  it('upc', () => {
    render(
      <Modalview open={true} handleClose={handleCloseMock} value="item" handleSelect={handleSelectMock} />
    );
    let upc = screen.getByText('UPC')
    expect(upc).toBeInTheDocument();
  })

  it('handles the click event of the Clear All button', () => {
    render(
      <Modalview open={true} handleClose={handleCloseMock} value="item" handleSelect={handleSelectMock} />
    );

    const clearButton = screen.getByText('Clear All');
    expect(clearButton).toBeInTheDocument();
    fireEvent.click(clearButton);

    //expect(jest.fn()).toHaveBeenCalled();
  });

  it('handles the click event of the Get Items button', () => {
    render(
      <Modalview open={true} handleClose={handleCloseMock} value="item" handleSelect={handleSelectMock} />
    );

    const getItemsButton = screen.getByText('Get Items');
    expect(getItemsButton).toBeInTheDocument();
    fireEvent.click(getItemsButton);

    //expect(jest.fn()).toHaveBeenCalled();
  });

});


