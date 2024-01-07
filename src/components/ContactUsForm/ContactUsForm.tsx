import { FC, useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

import SecondaryButton from "common/Buttons/SecondaryButton/SecondaryButton";
import formFields from "constants/formFields";
import { IContactForm } from "interfaces/IContactForm";
import {
  ErrorText,
  Form,
  Input,
  InputName,
  Label,
  LabelTextArea,
  SubmitButtonWrap,
  Textarea,
} from "./ContactUsForm.styled";

const ContactUsForm: FC = () => {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    reset,
    formState: { isSubmitSuccessful, errors },
  } = useForm<IContactForm>({
    mode: "onChange",
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  useEffect(() => {
    if (isSubmitSuccessful) {
      localStorage.removeItem("contactFormValues");
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  useEffect(() => {
    const storedValues = JSON.parse(
      localStorage.getItem("contactFormValues") || "{}"
    );
    Object.keys(storedValues).forEach((key) => {
      setValue(key as keyof IContactForm, storedValues[key]);
    });
  }, [setValue]);

  const handleChange = () => {
    localStorage.setItem("contactFormValues", JSON.stringify(getValues()));
  };

  const onSubmit: SubmitHandler<IContactForm> = (data) => {
    console.log("data sended", data);
  };

  return (
    <>
      <Form
        action="/path"
        onSubmit={handleSubmit(onSubmit)}
        onChange={handleChange}
      >
        {formFields.map((field) => (
          <Label
            key={field.name}
            htmlFor={field.name}
            $isError={errors[field.name]}
          >
            <InputName>* {field.label}:</InputName>
            <Input
              {...register(field.name, {
                pattern: field.pattern,
                required: field.requiredMessage,
              })}
              type={field.type}
              id={field.name}
              placeholder={field.placeholder}
            />
            <ErrorMessage
              errors={errors}
              name={field.name}
              render={({ message }) => <ErrorText>{message}</ErrorText>}
            />
          </Label>
        ))}

        <LabelTextArea htmlFor="message">
          <InputName>Message:</InputName>
          <Textarea
            {...register("message")}
            id="message"
            name="message"
            cols={30}
            rows={10}
            placeholder="Your message"
          />
        </LabelTextArea>

        <SubmitButtonWrap>
          <SecondaryButton type="submit" textContent="Send" />
        </SubmitButtonWrap>
      </Form>
    </>
  );
};

export default ContactUsForm;
