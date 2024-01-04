import { FC } from "react";

import SocialIconsContact from "../SocialIconsContact/SocialIconsContact";
import {
  ContactSubtitle,
  Connection,
  ContactUsTitle,
  Section,
  Address,
  PhonesWrap,
  ConnectionLink,
  Form,
  Label,
  Input,
  InputName,
  LabelTextArea,
  Textarea,
  SubmitButtonWrap,
} from "./ContactUs.styled";
import sprite from "assets/sprite.svg";
import SecondaryButton from "components/common/Buttons/SecondaryButton/SecondaryButton";

const ContactUs: FC = () => {
  return (
    <Section>
      <ContactUsTitle>Contact Us</ContactUsTitle>
      <Address>
        <div>
          <ContactSubtitle>Phone:</ContactSubtitle>
          <PhonesWrap>
            <Connection>
              <svg width={24} height={24} stroke="#173d33" fill="#FFFFFF">
                <use
                  href={sprite + "#icon-call"}
                  stroke="#173d33"
                  fill="#FFFFFF"
                />
              </svg>
              <ConnectionLink href="tel:+38(093)1234567">
                38 (098) 12 34 567
              </ConnectionLink>
            </Connection>
            <Connection>
              <svg width={24} height={24} stroke="#173d33" fill="#FFFFFF">
                <use
                  href={sprite + "#icon-call"}
                  stroke="#173d33"
                  fill="#FFFFFF"
                />
              </svg>
              <ConnectionLink href="tel:+38(093)1234567">
                38 (093) 12 34 567
              </ConnectionLink>
            </Connection>
          </PhonesWrap>
        </div>

        <div>
          <ContactSubtitle>E-mail:</ContactSubtitle>
          <Connection>
            <svg width={24} height={24} stroke="#173d33" fill="#FFFFFF">
              <use href={sprite + "#icon-sms"} />
            </svg>
            <ConnectionLink href="mailto:office@ecosolution.com">
              office@ecosolution.com
            </ConnectionLink>
          </Connection>
        </div>

        <div>
          <ContactSubtitle>Address:</ContactSubtitle>
          <Connection>
            <svg width={24} height={24} stroke="#173d33" fill="#FFFFFF">
              <use href={sprite + "#icon-map"} />
            </svg>
            <p>79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</p>
          </Connection>
        </div>

        <div>
          <ContactSubtitle>Social Networks:</ContactSubtitle>
          <SocialIconsContact />
        </div>
      </Address>

      <Form action="">
        <Label htmlFor="fullName">
          <InputName>* Full name:</InputName>
          <Input type="text" id="fullName" />
        </Label>
        <Label htmlFor="email">
          <InputName>* E-mail:</InputName>
          <Input type="email" id="email" />
        </Label>
        <Label htmlFor="phone">
          <InputName>* Phone:</InputName>
          <Input type="tel" id="phone" />
        </Label>

        <LabelTextArea htmlFor="message">
          <InputName>Message:</InputName>
          <Textarea
            id="message"
            name="message"
            cols={30}
            rows={10}
            placeholder="My message...."
          />
        </LabelTextArea>

        <SubmitButtonWrap>
          <SecondaryButton type="submit" textContent="Send" />
        </SubmitButtonWrap>
      </Form>
    </Section>
  );
};

export default ContactUs;
