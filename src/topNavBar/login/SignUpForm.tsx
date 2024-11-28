import { TextField, Button, Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { FormContainer } from "../../styles/SignInStyles";
import { useNavigate } from "react-router-dom";
interface FormInputs {
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  age: number;
  mobile: number;
  password: string;
  confirmPassword: string;
}
interface FormProps{
  toggleForm: () => void;
}
function SignUpForm({toggleForm}: FormProps) {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<FormInputs>({ mode: "onChange" });

  const onSubmit = (data: FormInputs) => {
    console.log(data);
    navigate("/")
   
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Typography variant="h3" fontWeight="bold">
        Sign Up
      </Typography>
      <FormContainer>
        <Controller
          name="firstName"
          control={control}
          defaultValue=""
          rules={{ required: "First Name is required" }}
          render={({ field }) => (
            <TextField
              {...field}
              label="First Name"
              variant="outlined"
              error={!!errors.firstName}
              helperText={errors.firstName ? errors.firstName.message : ""}
            />
          )}
        />
        <Controller
          name="lastName"
          control={control}
          defaultValue=""
          rules={{ required: "Last Name is required" }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Last Name"
              variant="outlined"
              error={!!errors.lastName}
              helperText={errors.lastName ? errors.lastName.message : ""}
            />
          )}
        />
        <Controller
          name="email"
          control={control}
          defaultValue=""
          rules={{
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
              message: "Enter a valid email address",
            },
          }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Email"
              variant="outlined"
              error={!!errors.email}
              helperText={errors.email ? errors.email.message : ""}
            />
          )}
        />
        <Controller
          name="mobile"
          control={control}
          rules={{
            required: "Mobile number is required",
            pattern: {
              value: /^[0-9]{10}$/,
              message: "Enter a valid 10-digit mobile number",
            },
          }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Mobile"
              variant="outlined"
              type="tel"
              error={!!errors.mobile}
              helperText={errors.mobile ? errors.mobile.message : ""}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          defaultValue=""
          rules={{
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters long",
            },
          }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Password"
              variant="outlined"
              type="password"
              error={!!errors.password}
              helperText={errors.password ? errors.password.message : ""}
            />
          )}
        />
        <Controller
          name="confirmPassword"
          control={control}
          defaultValue=""
          rules={{
            required: "Please confirm your password",
            validate: (value) => {
              const password = getValues("password");
              return value === password || "Passwords do not match";
            },
          }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Confirm Password"
              variant="outlined"
              type="password"
              error={!!errors.confirmPassword}
              helperText={
                errors.confirmPassword ? errors.confirmPassword.message : ""
              }
            />
          )}
        />
        <Button variant="text" sx={{ color: "#ba4257" }} onClick={toggleForm}>
          already have an account?
        </Button>
        <Button
          type="submit"
          variant="contained"
          size="large"
          fullWidth
          sx={{ backgroundColor: "#ba4257" }}
        >
          Sign up
        </Button>
      </FormContainer>
    </form>
  );
}

export default SignUpForm;
