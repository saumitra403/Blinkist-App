import { render, screen } from "@testing-library/react";
import ProgressBar from ".";
import { BrowserRouter} from "react-router-dom";


test("renders learn react link", () => {
  render(
    <BrowserRouter>
      <ProgressBar value="60"></ProgressBar>
    </BrowserRouter>
  );
  const progressBarElement = screen.getByRole('progressbar');
  expect(progressBarElement).toBeInTheDocument();
})


test("should render progress bar with given value", () => {
    render(<ProgressBar value={10} />)
    const progressBarElement = screen.getByRole('progressbar');
    expect((progressBarElement).getAttribute('aria-valuenow')).toBe('10')
})