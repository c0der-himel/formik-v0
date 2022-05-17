import { Field, ErrorMessage } from 'formik';

const Select = ({
  label,
  name,
  errors,
  touched,
  required,
  options,
  ...rest
}) => {
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
          as="select"
          className={
            errors && touched ? 'form-select is-invalid' : 'form-control'
          }
          id={name}
          name={name}
          {...rest}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.key}
            </option>
          ))}
        </Field>
        <ErrorMessage name={name} component="div" className="text-danger" />
      </div>
    </div>
  );
};

export default Select;
