import { useState } from "react";

export function useFormFields(initialState) {
  const [fields, setValues] = useState(initialState);
  return [
    fields,
    function (event) {
      if (event.target === "reset") setValues(event.value);
      else
        setValues({
          ...fields,
          [event.target.id]: event.target.value,
        });
    },
  ];
}
