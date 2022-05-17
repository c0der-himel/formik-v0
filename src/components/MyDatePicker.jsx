import { DatePicker } from 'antd';
import { Field, ErrorMessage } from 'formik';

const MyDatePicker = ({ label, name, errors, touched, required, ...rest }) => {
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
          id={name}
          name={name}
          className={
            errors && touched ? 'form-control is-invalid' : 'form-control'
          }
        >
          {({ form, field }) => {
            const { setFieldValue } = form;
            const { value } = field;
            return (
              <DatePicker
                className={
                  errors && touched
                    ? 'form-control is-invalid rounded-2 py-2'
                    : 'form-control rounded-2 py-2'
                }
                id={name}
                {...field}
                {...rest}
                defaultValue={value}
                onChange={(val) => setFieldValue(name, val)}
              />
            );
          }}
        </Field>
        <ErrorMessage name={name} component="div" className="text-danger" />
      </div>
    </div>
  );
};

export default MyDatePicker;
