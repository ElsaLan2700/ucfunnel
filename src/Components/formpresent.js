import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React from "react";

export const MyForm = (props) => {
  const {
    values,
    touched,
    errors,
    handleChange,
    isSubmitting,
    handleBlur,
    handleSubmit,
    status,
  } = props;

  return (
    <>
      {(status && status.hide) || (
        <form onSubmit={handleSubmit}>
          <Typography variant="h6" htmlFor="account">
            account
          </Typography>
          <TextField
            fullWidth
            margin="normal"
            id="account"
            name="account"
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.account}
          />
          {touched.account && errors.account ? (
            <Typography
              color="red"
              variant="caption"
              display="block"
              gutterBottom
            >
              {errors.account}
            </Typography>
          ) : null}
          <Typography variant="h6" htmlFor="password">
            password
          </Typography>
          <TextField
            fullWidth
            margin="normal"
            id="password"
            name="password"
            type="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          {touched.password && errors.password ? (
            <Typography
              color="red"
              variant="caption"
              display="block"
              gutterBottom
            >
              {errors.password}
            </Typography>
          ) : null}
          <Typography variant="h6" htmlFor="phone">
            phone
          </Typography>
          <TextField
            fullWidth
            margin="normal"
            id="phone"
            name="phone"
            type="tel"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.phone}
          />
          {touched.phone && errors.phone ? (
            <Typography
              color="red"
              variant="caption"
              display="block"
              gutterBottom
            >
              {errors.phone}
            </Typography>
          ) : null}
          <Typography variant="h6" htmlFor="address">
            address
          </Typography>
          <TextField
            fullWidth
            multiline
            margin="normal"
            id="address"
            name="address"
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.address}
          />
          {touched.address && errors.address ? (
            <Typography
              color="red"
              variant="caption"
              display="block"
              gutterBottom
            >
              {errors.address}
            </Typography>
          ) : null}
          <br />

          <Button variant="contained" type="submit" disabled={isSubmitting}>
            Submit
          </Button>
        </form>
      )}
      {status && status.hide && (
        <Typography>
          註冊成功
          <br />
          {status.time}
        </Typography>
      )}
    </>
  );
};
