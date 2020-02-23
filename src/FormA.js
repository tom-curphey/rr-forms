import { withFormik } from "formik";
import React from "react";

const FormA = ({ values, handleChange, onChange }) => {
  const handleFormAChange = e => {
    const { name, value } = e.target;
    handleChange(e);
    console.log("e.target");
    onChange(name, value);
  };

  return (
    <div className={"form"}>
      <h3>Form A</h3>
      <label>Firstname </label>
      <input
        name="firstName"
        value={values.firstName}
        onChange={e => handleFormAChange(e)}
        placeholder="firstName"
      />
      <br />
      <label>Location </label>
      <input
        name="location"
        value={values.location}
        onChange={e => handleFormAChange(e)}
        placeholder="location"
      />
      <pre>{JSON.stringify(values, null, 2)}</pre>
    </div>
  );
};

export default withFormik({
  enableReinitialize: true,
  mapPropsToValues: props => ({
    firstName: props.values.firstName,
    location: props.values.location
  }),
  displayName: "Form A",
  validateOnChange: true
})(FormA);
