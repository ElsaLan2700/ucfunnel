export const validate = (values) => {
  const errors = {};
  if (!values.account) {
    errors.account = "Required";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.account)
  ) {
    errors.account = "請確認是否合法的email";
  }

  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 8) {
    errors.password = "需要8位數以上";
  } else if (!/[a-zA-Z0-9]*[a-zA-Z][a-zA-Z0-9]*/.test(values.password)) {
    errors.password = "不能純為數字";
  }

  if (!values.phone) {
    errors.phone = "Required";
  } else if (!/^[0-9\s]*$/i.test(values.phone)) {
    errors.phone = "需為純數字";
  } else if (values.phone.length !== 10) {
    errors.phone = "需為十位數";
  } else if (!/^0/.test(values.phone)) {
    errors.phone = "開頭需為0";
  }

  if (!values.address) {
    errors.address = "Required";
  } else if (values.address.length > 100) {
    errors.address = "不得超過100字";
  }
  return errors;
};
