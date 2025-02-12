import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import PhraseList from "./PhraseList";
import { usePhrases } from "../../hooks/usePhrases";

jest.mock("../../hooks/usePhrases");

describe("PhraseList Component", () => {
  beforeEach(() => {
    (usePhrases as jest.Mock).mockReturnValue({
      phrases: [],
      addPhrase: jest.fn(),
      deletePhrase: jest.fn(),
      filter: "",
      setFilter: jest.fn(),
    });
  });

  it("debe renderizar el componente correctamente", () => {
    render(<PhraseList />);
    expect(screen.getByPlaceholderText("Agrega una frase")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Filtrar frases")).toBeInTheDocument();
    expect(screen.getByText("No hay frases")).toBeInTheDocument();
  });

  it("debe agregar una frase cuando se hace click en el botón", () => {
    const addPhraseMock = jest.fn();
    (usePhrases as jest.Mock).mockReturnValue({
      phrases: [],
      addPhrase: addPhraseMock,
      deletePhrase: jest.fn(),
      filter: "",
      setFilter: jest.fn(),
    });

    render(<PhraseList />);

    const input = screen.getByPlaceholderText("Agrega una frase");
    const button = screen.getByText("Agregar");

    fireEvent.change(input, { target: { value: "Nueva frase" } });
    fireEvent.click(button);

    expect(addPhraseMock).toHaveBeenCalledWith("Nueva frase");
  });

  it("debe mostrar frases en la lista", () => {
    (usePhrases as jest.Mock).mockReturnValue({
      phrases: ["Hola mundo", "Otra frase"],
      addPhrase: jest.fn(),
      deletePhrase: jest.fn(),
      filter: "",
      setFilter: jest.fn(),
    });

    render(<PhraseList />);

    expect(screen.getByText("Hola mundo")).toBeInTheDocument();
    expect(screen.getByText("Otra frase")).toBeInTheDocument();
  });

  it("debe filtrar frases según el input", () => {
    const setFilterMock = jest.fn();
    (usePhrases as jest.Mock).mockReturnValue({
      phrases: ["Hola mundo", "Otra frase"],
      addPhrase: jest.fn(),
      deletePhrase: jest.fn(),
      filter: "",
      setFilter: setFilterMock,
    });

    render(<PhraseList />);

    const filterInput = screen.getByPlaceholderText("Filtrar frases");
    fireEvent.change(filterInput, { target: { value: "Hola" } });

    expect(setFilterMock).toHaveBeenCalledWith("Hola");
  });

  // TODO: test eliminar?
});
