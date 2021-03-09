const isValidEmail = value => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value);
const checkNameRegexp = /^[a-zа-я][a-zа-я\s]*$/i;
const checkPhoneRegexp = /^(\+)?(\(\d{2,3}\) ?\d|\d)(([ \-]?\d)|( ?\(\d{2,3}\) ?)){5,12}\d$/;

const validate = values => {
  const errors = {};

  if (!values.name) {
    errors.name = 'Это поле обязательно для заполнения!';
  } else if (!values.name.match(checkNameRegexp)) {
    errors.name = 'Имя должно содержать только буквы';
  }

  if (!values.email) {
    errors.email = 'Это поле обязательно для заполнения!';
  } else if (!isValidEmail(values.email)) {
    errors.email = 'Неправильный формат адреса';
  }

  if (!values.phone) {
    errors.phone = 'Это поле обязательно для заполнения!';
  } else if (!values.phone.match(checkPhoneRegexp)) {
    errors.phone = 'Неправильный формат номера';
  }

  return errors;
};

export default validate;
