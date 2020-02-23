import React, { useEffect } from "react";
import FormA from "./FormA";
import FormB from "./FormB";

import "./App.css";
import FormPanel from "./FormPanel";

function SignupForm() {
  const [formValues, setFormValues] = React.useState({
    formA: {
      firstName: "fn",
      location: "lo"
    },
    formB: {
      lastName: "ln",
      artur: "ar"
    }
  });

  useEffect(() => {
    console.log("formValues effect", formValues);
  }, [formValues]);

  function handleFormAChange(name, value) {
    console.log("values B", value);
    setFormValues({
      ...formValues,
      formA: {
        ...formValues.formA,
        [name]: value
      }
    });
  }

  function handleFormBChange(name, value) {
    console.log("values B", value);
    setFormValues({
      ...formValues,
      formB: {
        ...formValues.formB,
        [name]: value
      }
    });
  }

  function handleSubmit() {
    console.log("formValues", formValues);
    // alert(JSON.stringify(formValues, null, 2));
  }

  return (
    <div className="App">
      <h1>Multiple Form in one submition</h1>
      <FormPanel formValues={formValues} />
      <hr />
      <FormA values={formValues.formA} onChange={handleFormAChange} />
      <FormB values={formValues.formB} onChange={handleFormBChange} />

      <pre>{JSON.stringify(formValues, null, 2)}</pre>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default SignupForm;
