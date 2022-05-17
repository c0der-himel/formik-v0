import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikControl from './FormikControl';

const FormikContainer = () => {
  const selectOptions = [
    { key: 'Select an option', value: '' },
    { key: 'Option 1', value: 'option1' },
    { key: 'Option 2', value: 'option2' },
    { key: 'Option 3', value: 'option3' },
  ];

  const radioOptions = [
    { key: 'Option 1', value: 'option1' },
    { key: 'Option 2', value: 'option2' },
    { key: 'Option 3', value: 'option3' },
  ];

  const checkBoxOptions = [
    { key: 'Option 1', value: 'option1' },
    { key: 'Option 2', value: 'option2' },
    { key: 'Option 3', value: 'option3' },
  ];

  const initialValues = {
    email: '',
    description: '',
    selectOption: '',
    radioOption: '',
    checkBoxOption: [],
    birthDate: null,
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email').required('Required'),
    description: Yup.string().required('Required'),
    selectOption: Yup.string().required('Required'),
    radioOption: Yup.string().required('Required'),
    checkBoxOption: Yup.array().min(1, 'Required'),
    birthDate: Yup.date().required('Required').nullable(),
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
                    <h1>Formik</h1>
                    <hr />
                  </div>
                </div>
              </div>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
              >
                {({ errors, touched, isSubmitting }) => (
                  <Form>
                    <div className="row mt-4">
                      <div className="col-12">
                        <FormikControl
                          control="input"
                          type="email"
                          label="Email"
                          name="email"
                          errors={errors.email}
                          touched={touched.email}
                          required={true}
                        />
                      </div>
                      <div className="col-12">
                        <FormikControl
                          control="textarea"
                          label="Description"
                          name="description"
                          errors={errors.description}
                          touched={touched.description}
                          required={true}
                        />
                      </div>
                      <div className="col-12">
                        <FormikControl
                          control="select"
                          label="Select a topic"
                          name="selectOption"
                          options={selectOptions}
                          errors={errors.selectOption}
                          touched={touched.selectOption}
                          required={true}
                        />
                      </div>
                      <div className="col-12">
                        <FormikControl
                          control="radio"
                          label="Select a topic"
                          name="radioOption"
                          options={radioOptions}
                          required={true}
                        />
                      </div>
                      <div className="col-12">
                        <FormikControl
                          control="checkbox"
                          label="Select a topic"
                          name="checkBoxOption"
                          options={checkBoxOptions}
                          required={true}
                        />
                      </div>
                      <div className="col-12">
                        <FormikControl
                          control="date"
                          label="Select a date"
                          name="birthDate"
                          required={true}
                          errors={errors.selectOption}
                          touched={touched.selectOption}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <button
                          type="submit"
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

export default FormikContainer;
