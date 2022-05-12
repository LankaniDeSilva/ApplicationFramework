import React, { useState } from "react";

export default function SubmissionForm(props) {
  const { label, type = "text", name, onChange } = props;

  return (
    <div className="FormInput">
      <label>{label}</label>
      <input type={type} name={name} onChange={onChange} />
    </div>
  );
}
