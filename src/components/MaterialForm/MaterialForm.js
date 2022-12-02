import { Field, Form, Formik } from 'formik';

export const MaterialForm = ({ onSubmit }) => {
    const handleSubmit = (values, actions) => {
        onSubmit(values);
        actions.resetForm();
    }
  return (
    <Formik
      initialValues={{ title: '', link: '' }}
      onSubmit={handleSubmit}
    >
      <Form>
        <label>
          Описание
          <Field name="title" type="text" />
        </label>
        <label>
          Ссылка
          <Field name="link" type="url" />
        </label>
        <button type="submit"> Добавить материал</button>
      </Form>
    </Formik>
  );
};
export default MaterialForm;
