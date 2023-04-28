import React, { useState } from 'react';
import calculate from '../logic/calculate';

function Calculator() {
  const [result, setResult] = useState({
    total: null,
    next: null,
    operation: null,
  });
  const handleClick = (buttonName) => {
    setResult(calculate(result, buttonName));
  };
  return (
    <section className="calculator-conteiner">
      <div className="calculation-result">{result.next || result.total || '0'}</div>
      <button
        className="operationAC"
        type="button"
        onClick={() => {
          handleClick('AC');
        }}
      >
        AC
      </button>
      <button
        className="operation-change"
        type="button"
        onClick={() => {
          handleClick('+/-');
        }}
      >
        +/-
      </button>
      <button
        className="operation-percent"
        type="button"
        onClick={() => {
          handleClick('%');
        }}
      >
        %
      </button>
      <button
        className="operation-divition"
        type="button"
        onClick={() => {
          handleClick('÷');
        }}
      >
        ÷
      </button>
      <button
        className="operation-multiplication"
        type="button"
        onClick={() => {
          handleClick('x');
        }}
      >
        x
      </button>
      <button
        className="operation-minus"
        type="button"
        onClick={() => {
          handleClick('-');
        }}
      >
        -
      </button>
      <button
        className="operation-add"
        type="button"
        onClick={() => {
          handleClick('+');
        }}
      >
        +
      </button>
      <button
        className="operation-iqual"
        type="button"
        onClick={() => {
          handleClick('=');
        }}
      >
        =
      </button>
      <button
        className="number9"
        type="button"
        onClick={() => {
          handleClick('9');
        }}
      >
        9
      </button>
      <button
        className="number8"
        type="button"
        onClick={() => {
          handleClick('8');
        }}
      >
        8
      </button>
      <button
        className="number7"
        type="button"
        onClick={() => {
          handleClick('7');
        }}
      >
        7
      </button>
      <button
        className="number6"
        type="button"
        onClick={() => {
          handleClick('6');
        }}
      >
        6
      </button>
      <button
        className="number5"
        type="button"
        onClick={() => {
          handleClick('5');
        }}
      >
        5
      </button>
      <button
        className="number4"
        type="button"
        onClick={() => {
          handleClick('4');
        }}
      >
        4
      </button>
      <button
        className="number3"
        type="button"
        onClick={() => {
          handleClick('3');
        }}
      >
        3
      </button>
      <button
        className="number2"
        type="button"
        onClick={() => {
          handleClick('2');
        }}
      >
        2
      </button>
      <button
        className="number1"
        type="button"
        onClick={() => {
          handleClick('1');
        }}
      >
        1
      </button>
      <button
        className="number0"
        type="button"
        onClick={() => {
          handleClick('0');
        }}
      >
        0
      </button>
      <button
        className="number-dot"
        type="button"
        onClick={() => {
          handleClick('.');
        }}
      >
        .
      </button>
    </section>
  );
}

export default Calculator;
