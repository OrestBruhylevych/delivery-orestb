import { Formik, useField } from 'formik';
import { nanoid } from 'nanoid';
import { AiOutlineSend } from 'react-icons/ai';
import { FormStyled, TextareaStyled } from './SendMessageForm.styled';

const MyTextArea = ({ ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <TextareaStyled className="text-area" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

export default function SendMessageForm({ addMessage }) {
  return (
    <Formik
      initialValues={{ text: '' }}
      onSubmit={(values, { resetForm }) => {
        values.fromUser = true;
        values.id = nanoid();
        values.date = {
          dateChat: new Date().toDateString(),
          dateMessage: new Date().toLocaleString(),
        };
        addMessage(values);

        resetForm();
      }}
    >
      <FormStyled autoComplete="off">
        <MyTextArea
          required
          name="text"
          rows="2"
          placeholder="Input message...."
        />
        <button type="submit">
          <AiOutlineSend />
        </button>
      </FormStyled>
    </Formik>
  );
}
