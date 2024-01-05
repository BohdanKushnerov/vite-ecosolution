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
  ContactWrap,
  AddressFormWrap,
} from "./ContactUs.styled";
import ContactUsForm from "../ContactUsForm/ContactUsForm";
import sprite from "assets/sprite.svg";

const ContactUs: FC = () => {
  return (
    <Section>
      <ContactUsTitle>Contact Us</ContactUsTitle>
      <AddressFormWrap>
        <Address>
          <ContactWrap>
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
          </ContactWrap>

          <ContactWrap>
            <ContactSubtitle>E-mail:</ContactSubtitle>
            <Connection>
              <svg width={24} height={24} stroke="#173d33" fill="#FFFFFF">
                <use href={sprite + "#icon-sms"} />
              </svg>
              <ConnectionLink href="mailto:office@ecosolution.com">
                office@ecosolution.com
              </ConnectionLink>
            </Connection>
          </ContactWrap>

          <ContactWrap>
            <ContactSubtitle>Address:</ContactSubtitle>
            <Connection>
              <svg width={24} height={24} stroke="#173d33" fill="#FFFFFF">
                <use href={sprite + "#icon-map"} />
              </svg>
              <p>79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</p>
            </Connection>
          </ContactWrap>

          <ContactWrap>
            <ContactSubtitle>Social Networks:</ContactSubtitle>
            <SocialIconsContact />
          </ContactWrap>
        </Address>

        <ContactUsForm />
      </AddressFormWrap>
    </Section>
  );
};

export default ContactUs;
