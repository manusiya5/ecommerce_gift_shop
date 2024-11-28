import { Controller, useForm } from "react-hook-form";
import { FormContainer } from "../../styles/SignInStyles";
import { Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
interface FormInputs {
  email: string;
  password: string;
}

interface FormProps {
  toggleForm: () => void;
}
function SignInForm({toggleForm}: FormProps) {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({ mode: "onChange" });

  const onSubmit = (data: FormInputs) => {
    console.log(data);
    navigate("/")
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Typography variant="h3" fontWeight="bold">
        Sign In
      </Typography>
      <FormContainer>
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
          name="password"
          control={control}
          defaultValue=""
          rules={{
            required: "Password is required",
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
        <Button variant="text" size="small" sx={{ color: "#ba4257" }} onClick={toggleForm}>
          don't have account? Create One
        </Button>
        <Button
          type="submit"
          variant="contained"
          size="large"
          fullWidth
          sx={{ backgroundColor: "#ba4257" }}
        >
          Sign In
        </Button>
      </FormContainer>
    </form>
  );
}

export default SignInForm;
