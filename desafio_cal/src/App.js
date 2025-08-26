import React, { useState } from "react";
import { Container, Row } from "./styles";
import Input from "./components/Input";
import Button from "./components/Button";
import { evaluate } from "mathjs";

function App() {
  const [input, setInput] = useState("");
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const addInput = (val) => setInput(input + val);
  const clearInput = () => setInput("");
  const calculate = () => {
    try { setInput(evaluate(input).toString()); } catch { setInput("Erro"); }
  };
  const squareRoot = () => {
    if (input === "") return;
    try { setInput(Math.sqrt(parseFloat(input)).toString()); } catch { setInput("Erro"); }
  };
  const addPercentage = () => {
    if (input === "") return;
    try { setInput((parseFloat(input) / 100).toString()); } catch { setInput("Erro"); }
  };

  // Drag functions
  const onMouseDown = (e) => {
    if (e.button !== 0) return; // só botão esquerdo
    setDragging(true);
    setOffset({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const onMouseMove = (e) => {
    if (dragging) {
      setPosition({ x: e.clientX - offset.x, y: e.clientY - offset.y });
    }
  };

  const onMouseUp = () => setDragging(false);

  return (
    <div
      style={{
        position: "absolute",
        top: position.y,
        left: position.x,
        zIndex: 1000,
        userSelect: "none" // evita seleção de texto durante o drag
      }}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp} // evita travar drag se mouse sair
    >
      {/* Barra superior para arrastar */}
      <div
        style={{
          background: "#333",
          color: "white",
          padding: "5px",
          cursor: "grab",
          textAlign: "center",
          userSelect: "none"
        }}
        onMouseDown={onMouseDown}
      >
        Calculadora
      </div>

      <Container>
        <Input value={input} />

        <Row>
          <Button onClick={clearInput}>C</Button>
          <Button onClick={squareRoot}>√</Button>
          <Button onClick={addPercentage}>%</Button>
          <Button onClick={() => addInput("/")}>÷</Button>
        </Row>

        <Row>
          <Button onClick={() => addInput("7")}>7</Button>
          <Button onClick={() => addInput("8")}>8</Button>
          <Button onClick={() => addInput("9")}>9</Button>
          <Button onClick={() => addInput("*")}>×</Button>
        </Row>

        <Row>
          <Button onClick={() => addInput("4")}>4</Button>
          <Button onClick={() => addInput("5")}>5</Button>
          <Button onClick={() => addInput("6")}>6</Button>
          <Button onClick={() => addInput("-")}>−</Button>
        </Row>

        <Row>
          <Button onClick={() => addInput("1")}>1</Button>
          <Button onClick={() => addInput("2")}>2</Button>
          <Button onClick={() => addInput("3")}>3</Button>
          <Button onClick={() => addInput("+")}>+</Button>
        </Row>

        <Row>
          <Button onClick={() => addInput("0")}>0</Button>
          <Button onClick={() => addInput(".")}>.</Button>
          <Button onClick={calculate}>=</Button>
        </Row>
      </Container>
    </div>
  );
}

export default App;
