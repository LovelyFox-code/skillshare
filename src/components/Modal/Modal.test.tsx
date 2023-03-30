import { render, screen } from "@testing-library/react";
import { FormEvent } from "react";
import Modal from "./Modal";

test("should have input", () => {
  render(
    <Modal
      handleChange={undefined}
      isModal={false}
      handleSubmit={function (e: FormEvent<HTMLFormElement>): void {
        throw new Error("Function not implemented.");
      }}
      value={""}
    />
  );

  expect(screen.getByText("Add more skills")).toBeInTheDocument();
});
