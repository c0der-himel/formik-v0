import { Field, ErrorMessage } from 'formik';

const CheckBox = ({ label, name, required, options, ...rest }) => {
  return (
    <div className="mb-4 d-flex align-items-baseline">
      <div className="d-flex d-flex me-3">
        <label htmlFor={name} className="form-label">
          {label}
        </label>
        <span className="text-danger fw-bold ms-1">{required && '*'}</span>
      </div>
      <div className="flex-fill">
        <Field id={name} name={name} {...rest}>
          {({ field }) => {
            console.log('field: ', field);
            return options.map((option) => {
              return (
                <div key={option.key} className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id={option.value}
                    {...field}
                    value={option.value}
                    checked={field.value.includes(option.value)}
                  />
                  <label htmlFor={option.value} className="form-check-label">
                    {option.key}
                  </label>
                </div>
              );
            });
          }}
        </Field>
        <ErrorMessage name={name} component="div" className="text-danger" />
      </div>
    </div>
  );
};

export default CheckBox;
