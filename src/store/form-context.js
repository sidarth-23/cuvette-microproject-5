import React from "react";

const FormContext = React.createContext({
  accNo: 0,
  name: '',
  cvv: 0,
  validMonth: 0,
  validYear: 0,
  submitted: false,
});

export default FormContext