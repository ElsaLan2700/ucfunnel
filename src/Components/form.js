import { withFormik } from "formik";
import { getSignupTime } from "../API/SignupTime";
import { connect } from "react-redux";
import { updateVal } from "../slice";
import { validate } from "./validate";
import { MyForm } from "./formpresent";

const MyEnhancedForm = withFormik({
  mapPropsToValues: () => ({
    account: "",
    password: "",
    phone: "",
    address: "",
  }),
  validate,
  handleSubmit: async (values, { props, setSubmitting, setStatus }) => {
    props.dispatch(updateVal(values));
    setStatus({ hide: true });
    const time = await getSignupTime();
    setStatus({ hide: true, time: time });
    setSubmitting(false);
  },
})(MyForm);

const AddForm = connect()(MyEnhancedForm);

export default AddForm;
