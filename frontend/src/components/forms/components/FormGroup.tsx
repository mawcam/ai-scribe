import type { PropsWithChildren } from "react";

type Props = {
  label: string;
  name: string;
};

const FormGroup = ({ label, name, children }: PropsWithChildren<Props>) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      {children}
    </div>
  );
};

export default FormGroup;
