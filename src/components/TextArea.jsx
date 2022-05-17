import { Field, ErrorMessage } from 'formik';

const TextArea = ({ label, name, errors, touched, required, ...rest }) => {
  return (
    <div className="mb-4 d-flex align-items-baseline">
      <div className="d-flex d-flex me-3">
        <label htmlFor={name} className="form-label">
          {label}
        </label>
        <span className="text-danger fw-bold ms-1">{required && '*'}</span>
      </div>
      <div className="flex-fill">
        <Field
          as="textarea"
          rows="3"
          className={
            errors && touched ? 'form-control is-invalid' : 'form-control'
          }
          id={name}
          name={name}
          {...rest}
        />
        <ErrorMessage name={name} component="div" className="text-danger" />
      </div>
    </div>
  );
};

export default TextArea;
