import { FC } from "react";

import {
  Form,
  Input,
  InputName,
  Label,
  LabelTextArea,
  SubmitButtonWrap,
  Textarea,
} from "./ContactUsForm.styled";
import SecondaryButton from "common/Buttons/SecondaryButton/SecondaryButton";

const ContactUsForm: FC = () => {
  return (
    <Form action="/path">
      <Label htmlFor="fullName">
        <InputName>* Full name:</InputName>
        <Input type="text" id="fullName" placeholder="John Rosie" />
      </Label>
      <Label htmlFor="email">
        <InputName>* E-mail:</InputName>
        <Input type="email" id="email" placeholder="johnrosie@gmail.com" />
      </Label>
      <Label htmlFor="phone">
        <InputName>* Phone:</InputName>
        <Input type="tel" id="phone" placeholder="380961234567" />
      </Label>

      <LabelTextArea htmlFor="message">
        <InputName>Message:</InputName>
        <Textarea
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
  );
};

export default ContactUsForm;
