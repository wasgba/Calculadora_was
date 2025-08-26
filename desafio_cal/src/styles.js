import styled from "styled-components";

export const Container = styled.div`
  background: #111;
  width: 280px;      /* largura fixa da calculadora */
  padding: 20px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Row = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin: 5px 0;
`;

export const Input = styled.input`
  width: 100%;
  height: 60px;
  margin-bottom: 15px;
  font-size: 24px;
  text-align: right;
  padding: 10px;
  border-radius: 8px;
  border: none;
  outline: none;
  background: #222;
  color: #fff;
  overflow-x: auto;      
  box-sizing: border-box;
`;
