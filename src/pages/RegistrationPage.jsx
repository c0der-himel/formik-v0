import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikControl from '../components/FormikControl';

const RegistrationPage = () => {
  const options = [
    { key: 'Email', value: 'emailMoc' },
    { key: 'Phone', value: 'phoneMoc' },
  ];

  const initialValues = {
    email: '',
    password: '',
    confirmPassword: '',
    modeOfContact: '',
    phone: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Required'),
    password: Yup.string().required('Required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), ''], 'Password must match')
      .required('Required'),
    modeOfContact: Yup.string().required('Required'),
    phone: Yup.string().when('modeOfContact', {
      is: 'phoneMoc',
      then: Yup.string().required('Required'),
    }),
  });

  const onSubmit = (values) => {
    console.log('Form Data: ', values);
  };

  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-6 offset-3">
            <div className="form-content shadow-lg p-5 m-5 rounded-4">
              <div className="row">
                <div className="col">
                  <div className="title text-center">
                    <h1>Registration Form</h1>
                    <hr />
                  </div>
                </div>
              </div>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
              >
                {({ errors, touched, isValid, isSubmitting }) => (
                  <Form>
                    <div className="row mt-4">
                      <div className="col-12">
                        <FormikControl
                          control="input"
                          type="email"
                          label="Email"
                          name="email"
                          required={true}
                          errors={errors.email}
                          touched={touched.email}
                        />
                      </div>
                      <div className="col-12">
                        <FormikControl
                          control="input"
                          type="password"
                          label="Password"
                          name="password"
                          required={true}
                          errors={errors.password}
                          touched={touched.password}
                        />
                      </div>
                      <div className="col-12">
                        <FormikControl
                          control="input"
                          type="password"
                          label="Confirm Password"
                          name="confirmPassword"
                          required={true}
                          errors={errors.confirmPassword}
                          touched={touched.confirmPassword}
                        />
                      </div>
                      <div className="col-12">
                        <FormikControl
                          control="radio"
                          label="Mode of contact"
                          name="modeOfContact"
                          required={true}
                          options={options}
                          errors={errors.modeOfContact}
                          touched={touched.modeOfContact}
                        />
                      </div>
                      <div className="col-12">
                        <FormikControl
                          control="input"
                          type="text"
                          label="Phone"
                          name="phone"
                          required={true}
                          errors={errors.phone}
                          touched={touched.phone}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="btn btn-dark px-4 rounded-3"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationPage;
