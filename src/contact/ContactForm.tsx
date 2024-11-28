import { Button, InputAdornment, TextField, Typography } from "@mui/material";
import { ContactContentFormContainer } from "../styles/ContactStyle";
import { useForm, SubmitHandler } from "react-hook-form";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import MessageIcon from "@mui/icons-material/Message";

interface FormFields {
  name: string;
  email: string;
  phone: string;
  message: string;
}
function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>();

  const onSubmit: SubmitHandler<FormFields> = (data: FormFields) => {
    alert("Message sent!!");
    console.log(data);
  };
  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)}>
      <ContactContentFormContainer>
        <TextField
          label="Name"
          type="text"
          {...register("name", { required: "Name is required" })}
          error={!!errors.name}
          helperText={errors.name ? errors.name.message : ""}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonIcon />
              </InputAdornment>
            ),
          }}
        ></TextField>
        <TextField
          label="Email"
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
              message: "Invalid email address",
            },
          })}
          error={!!errors.email}
          helperText={errors.email ? errors.email.message : ""}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailIcon />
              </InputAdornment>
            ),
          }}
        ></TextField>
        <TextField
          label="Phone"
          type="number"
          {...register("phone", {
            required: "Phone number is required",
            pattern: { value: /^[0-9]{10}$/, message: "Invalid phone number" },
          })}
          error={!!errors.phone}
          helperText={errors.phone ? errors.phone.message : ""}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PhoneAndroidIcon />
              </InputAdornment>
            ),
          }}
        ></TextField>
        <TextField
          label="Message"
          type="text"
          multiline
          fullWidth
          rows={4}
          {...register("message", { required: "Message is required" })}
          error={!!errors.message}
          helperText={errors.message ? errors.message.message : ""}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start" >
                <MessageIcon />
              </InputAdornment>
            ),
          }}
        ></TextField>
        <Button variant="contained" type="submit" sx={{ backgroundColor: "#f16179" }}>
          <Typography>Send</Typography>
        </Button>
      </ContactContentFormContainer>
    </form>
  );
}

export default ContactForm;
