import React, { useReducer } from "react";

const initialInputState = {
  value: "",
};

const inputReducer = (state, action) => {
  if (action.type === "INPUT") {
    return { value: action.value };
  }
  return initialInputState;
};

const useInput = () => {
  const [inputState, dispatch] = useReducer(inputReducer, initialInputState);

  const valueChangeHandler = (text) => {
    console.log(text);
    dispatch({ type: "INPUT", value: text });
  };

  return {
    value: inputState.value,
    valueChange: valueChangeHandler,
  };
};

export default useInput;
