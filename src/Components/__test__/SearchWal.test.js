import SearchWal from '../SearchWal';
import {render, screen} from '@testing-library/react';
import { MemoryRouter } from "react-router-dom";

describe.skip('searchwal', () => {
  it('heading5testing', () => {
    render(<SearchWal />, {wrapper:MemoryRouter});
    let additemsandstores = screen.getByRole('heading', {
      level:5 
    })
    expect(additemsandstores).toBeInTheDocument();
  });

  it('heading6testing', () => {
    render(<SearchWal />, {wrapper:MemoryRouter});
    let eventname = screen.getByRole('heading', {
      level:6 
    })
    expect(eventname).toBeInTheDocument();
  });

  it("clicks the back button", () => {
    render(<SearchWal />, {wrapper: MemoryRouter});
    const backButton = screen.getByLabelText("Back");
    expect(backButton).toBeInTheDocument();
  });

  it("textfield test", () => {
    render(<SearchWal />, {wrapper: MemoryRouter});
    const textfield = screen.getByPlaceholderText('Filter text');
    expect(textfield).toBeInTheDocument();
  });

  it("renders Advance Search button with correct styles", () => {
    render(<SearchWal />, {wrapper: MemoryRouter});
    const advanceSearchButton = screen.getByText("Advance Search");
    expect(advanceSearchButton).toHaveStyle(`
      margin: 4px;
      border-radius: 30px;
      text-transform: none;
      color: black;
      border-color: black;
    `);
  });

  it("renders filter button", () => {
    render(<SearchWal />, {wrapper: MemoryRouter});
    const filterButton = screen.getByText("Filter");
    expect(filterButton).toBeInTheDocument(); 
  });

  it("renders import items button", () => {
    render(<SearchWal />, {wrapper: MemoryRouter});
    const importItemsButton = screen.getByText("Import items");
    expect(importItemsButton).toBeInTheDocument(); 
  });

  it("renders download button", () => {
    render(<SearchWal />, {wrapper: MemoryRouter});
    const downloadButton = screen.getByText("Download");
    expect(downloadButton).toBeInTheDocument(); 
  });

  it("renders image", () => {
    render(<SearchWal />, {wrapper: MemoryRouter});
    const searchImage = screen.getByAltText("image");
    expect(searchImage).toBeInTheDocument(); 
  });

  it("paragraph 1", () => {
    render(<SearchWal />, {wrapper: MemoryRouter});
    const p1 = screen.getByText("Search with item number...");
    expect(p1).toBeInTheDocument(); 
  });

  it("paragraph 2", () => {
    render(<SearchWal />, {wrapper: MemoryRouter});
    const p2 = screen.getByText("helper text");
    expect(p2).toBeInTheDocument(); 
  });

  it("renders add button", () => {
    render(<SearchWal />, {wrapper: MemoryRouter});
    const addButton = screen.getByText("Add"); 
    expect(addButton).toBeInTheDocument(); 
  });

}) 

