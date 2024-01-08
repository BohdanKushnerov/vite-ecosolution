import { FC } from "react";

import ContactUsForm from "components/ContactUsForm/ContactUsForm";
import SocialIcons from "components/common/SocialIcons/SocialIcons";
import SECTION_NAMES from "constants/sectionNames";
import {
  ContactSubtitle,
  ContactUsTitle,
  Section,
  Address,
  PhonesWrap,
  ConnectionLink,
  ContactWrap,
  AddressFormWrap,
} from "./ContactUs.styled";
import sprite from "assets/sprite.svg";

const ContactUs: FC = () => {
  return (
    <Section id={SECTION_NAMES.CONTACT}>
      <ContactUsTitle>Contact Us</ContactUsTitle>
      <AddressFormWrap>
        <Address>
          <ContactWrap>
            <ContactSubtitle>Phone:</ContactSubtitle>
            <PhonesWrap>
              <ConnectionLink href="tel:+38(093)1234567" target="blank">
                <svg width={24} height={24}>
                  <use href={sprite + "#icon-call"} />
                </svg>
                38 (098) 12 34 567
              </ConnectionLink>
              <ConnectionLink href="tel:+38(093)1234567" target="blank">
                <svg width={24} height={24}>
                  <use href={sprite + "#icon-call"} />
                </svg>
                38 (093) 12 34 567
              </ConnectionLink>
            </PhonesWrap>
          </ContactWrap>

          <ContactWrap>
            <ContactSubtitle>E-mail:</ContactSubtitle>
            <ConnectionLink href="mailto:office@ecosolution.com" target="blank">
              <svg width={24} height={24}>
                <use href={sprite + "#icon-sms"} />
              </svg>
              office@ecosolution.com
            </ConnectionLink>
          </ContactWrap>

          <ContactWrap>
            <ContactSubtitle>Address:</ContactSubtitle>
            <ConnectionLink
              href="https://www.google.com.ua/maps/search/79005,+Ukraine,+Lvivstreet.+Shota+Rustaveli,+7/@49.8313557,24.0323843,17z/data=!3m1!4b1?entry=ttu"
              target="blank"
            >
              <svg width={24} height={24}>
                <use href={sprite + "#icon-map"} />
              </svg>
              79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
            </ConnectionLink>
          </ContactWrap>

          <ContactWrap>
            <ContactSubtitle>Social Networks:</ContactSubtitle>
            <SocialIcons colorPlan="primary" space={32} />
          </ContactWrap>
        </Address>

        <ContactUsForm />
      </AddressFormWrap>
    </Section>
  );
};

export default ContactUs;
