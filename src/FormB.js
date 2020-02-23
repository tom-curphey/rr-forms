import { withFormik } from "formik";
import React from "react";

const FormB = ({ values, handleChange, onChange }) => {
  const handleFormBChange = e => {
    const { name, value } = e.target;
    handleChange(e);
    console.log("e.target");
    onChange(name, value);
  };

  return (
    <div className={"form"}>
      <h3>Form B</h3>
      <label>lastName </label>
      <input
        name="lastName"
        value={values.lastName}
        onChange={e => handleFormBChange(e)}
        placeholder="lastName"
      />
      <br />
      <label>Artur </label>
      <input
        name="artur"
        value={values.artur}
        onChange={e => handleFormBChange(e)}
        placeholder="artur"
      />
      <pre>{JSON.stringify(values, null, 2)}</pre>
    </div>
  );
};

export default withFormik({
  enableReinitialize: true,
  mapPropsToValues: props => ({
    lastName: props.values.lastName,
    artur: props.values.artur
  }),
  displayName: "Form B",
  validateOnChange: true
})(FormB);
