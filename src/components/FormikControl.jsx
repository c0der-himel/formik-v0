import CheckBox from './CheckBox';
import Input from './Input';
import MyDatePicker from './MyDatePicker';
import Radio from './Radio';
import Select from './Select';
import TextArea from './TextArea';

const FormikControl = ({ control, ...rest }) => {
  switch (control) {
    case 'input':
      return <Input {...rest} />;
    case 'textarea':
      return <TextArea {...rest} />;
    case 'select':
      return <Select {...rest} />;
    case 'radio':
      return <Radio {...rest} />;
    case 'checkbox':
      return <CheckBox {...rest} />;
    case 'date':
      return <MyDatePicker {...rest} />;
    default:
      return null;
  }
};

export default FormikControl;
