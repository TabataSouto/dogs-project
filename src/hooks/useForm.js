import { useState } from "react";

const types = {
  email: {
    regex:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: "Preencha um e-mail válido!",
  },
  password: {
    regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
    message:
      "A senha precisa ter 1 caracter maíusculo, 1 minúsculo e 1 digito. Como no mínimo 8 caracteres.",
  },
};

function useForm(type) {
  // valor e para setar o valor do campo de formulário
  const [value, setValue] = useState("");
  const [error, setError] = useState(null);

  const validationValue = (value) => {
    if (type === false) return true;
    if (!value) {
      setError("Preencha um valor");
      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  };

  // mudança de o
  const onChange = ({ target: { value } }) => {
    if (error) validationValue(value);
    setValue(value);
  };

  return {
    value,
    setValue,
    onChange,
    error,
    validationValue: () => validationValue(value),
    onBlur: () => validationValue(value),
  };
}

export default useForm;
