import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Formik } from 'formik';
import validate from './validate';
import { passion, light, gray74, red } from '../../config';

const Overlay = styled.div`
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Modal = styled.div`
  max-width: 600px;
  width: 90%;
  background: #ffffff;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  padding: 20px;
`;

const Head = styled.div`
  margin-bottom: 20px;
  line-height: 22px;
`;

const Label = styled.div`
  font-size: 16px;
  margin-bottom: 5px;
`;

const Field = `
  border-radius: 2px;
  border: 1px solid ${gray74};
  box-sizing: border-box;
  width: 100%;
  font-size: 16px;
  padding: 10px;
`;

const Input = styled.input`
  ${Field}
  ${({ error }) => (error ? `border-color: ${red};` : '')}
`;

const TextArea = styled.textarea`
  ${Field}
  ${({ error }) => (error ? `border-color: ${red};` : '')}
  resize: none;
`;

const Controls = styled.div`
  text-align: right;
`;

const Button = `
  border-radius: 2px;
  border: none;
  transition: all 0.2s ease;
  font-size: 14px;
  padding: 10px 25px;
  text-transform: uppercase;
  cursor: pointer;
`;

const SubmitBtn = styled.button`
  ${Button}
  background: ${passion};
  color: ${light};
  &:hover {
    opacity: 0.9;
  }
  ${({ disabled }) => (disabled ? `
    cursor: default;
    opacity: 0.6;
    &:hover {
      opacity: 0.6;
    }
  ` : '')}
`;

const CancelBtn = styled.button`
  ${Button}
  margin-right: 15px;
  &:hover {
    background: #dedede;
  }
`;

const FormGroup = styled.div`
  position: relative;
  padding-bottom: 14px;
  margin-bottom: 6px;
`;

const Error = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  font-size: 12px;
  color: ${red};
`;

const ConfirmMessage = styled.div`
  font-size: 16px;
  line-height: 22px;
  margin-bottom: 20px;
`;

const ErrorMessage = styled.div`
  font-size: 16px;
  line-height: 22px;
  margin-bottom: 20px;
  color: ${red};
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  ${FormGroup} {
    width: 48%;
  }
`;

const OrderModal = ({ close, details, price }) => {
  const [sent, setSent] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const ref = useRef(null);

  const showErrorMessage = (msg) => {
    setErrorMsg(msg);
    ref.current = setTimeout(() => setErrorMsg(''), 1000);
  };

  const initialValues = {
    name: '',
    email: '',
    phone: '',
    address: '',
    notes: '',
  };

  const onSubmit = (values, { setSubmitting }) => {
    const url = '/api/mailer/send.php';
    const requestData = {
      order: `${new Date().getMonth() + 1}-${Math.random().toString().substr(2, 4)}`,
      price,
      details,
      ...values,
    };

    const myHeaders = new Headers();
    myHeaders.append('Accept', 'application/json');
    myHeaders.append('Content-Type', 'application/json');

    const fetchData = {
      method: 'POST',
      body: JSON.stringify(requestData),
      headers: myHeaders,
    };

    fetch(url, fetchData)
      .then(res => res.json())
      .then((response) => {
        if (response.result === 'success') {
          setSent(true);
        } else {
          showErrorMessage('Ошибка сервера');
        }
        setSubmitting(false);
      })
      .catch(err => {
        console.log('SUBMISSION ERROR:', err);
        showErrorMessage('Ошибка сервера');
        setSubmitting(false);
      });
  };

  useEffect(() => () => clearTimeout(ref.current), []);

  return (
    <Overlay>
      <Modal>
        {errorMsg ? (
          <ErrorMessage>
            {errorMsg}
          </ErrorMessage>
        ) : ''}
        {sent ? (
          <>
            <ConfirmMessage>
              Ваш заказ принят! На указанный email адрес отправлено письмо с
              деталями заказа и реквизитами для оплаты, после того как деньги
              поступят на наш счёт, мы сразу начнём выполнять заказ.
            </ConfirmMessage>
            <Controls>
              <CancelBtn onClick={close}>Закрыть</CancelBtn>
            </Controls>
          </>
        ) : (
          <>
            <Head>
              {details}
              <br />
              Стоимость: {price} ₽
            </Head>
            <Formik initialValues={initialValues} validate={validate} onSubmit={onSubmit}>
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
              }) => (
                <form onSubmit={handleSubmit}>
                  <FormGroup>
                    <Label>Имя</Label>
                    <Input
                      type="text"
                      name="name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                      error={errors.name && touched.name}
                    />
                    <Error>{errors.name && touched.name && errors.name}</Error>
                  </FormGroup>
                  <Row>
                    <FormGroup>
                      <Label>Email</Label>
                      <Input
                        type="text"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        error={errors.email && touched.email}
                      />
                      <Error>{errors.email && touched.email && errors.email}</Error>
                    </FormGroup>
                    <FormGroup>
                      <Label>Контактный телефон</Label>
                      <Input
                        type="text"
                        name="phone"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.phone}
                        error={errors.phone && touched.phone}
                      />
                      <Error>{errors.phone && touched.phone && errors.phone}</Error>
                    </FormGroup>
                  </Row>
                  <FormGroup>
                    <Label>Адрес доставки</Label>
                    <Input
                      type="text"
                      name="address"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.address}
                      error={errors.address && touched.address}
                    />
                    <Error>{errors.address && touched.address && errors.address}</Error>
                  </FormGroup>
                  <FormGroup>
                    <Label>Комментарий</Label>
                    <TextArea
                      name="notes"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.notes}
                      error={errors.notes && touched.notes}
                    />
                    <Error>{errors.notes && touched.notes && errors.notes}</Error>
                  </FormGroup>
                  <Controls>
                    <CancelBtn onClick={close}>Отменить</CancelBtn>
                    <SubmitBtn
                      type="submit"
                      disabled={errorMsg || isSubmitting}
                    >
                      Отправить
                    </SubmitBtn>
                  </Controls>
                </form>
              )}
            </Formik>
          </>
        )}
      </Modal>
    </Overlay>
  );
};

export default OrderModal;
