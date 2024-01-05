import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 28px;
  margin-top: 36px;
  padding: 36px 12px;

  background: #eaedf1;

  @media (min-width: 768px) {
    margin-top: 0;
    padding: 36px 24px;
  }

  @media (min-width: 1440px) {
    padding: 48px;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-bottom: 8px;
  width: 294px;
  /* width: 100%; */

  border-bottom: 1px solid #97d28b;

  @media (min-width: 1440px) {
    width: 500px;
  }
`;

export const InputName = styled.span`
  color: #173d33;
  text-align: justify;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;
`;

export const Input = styled.input`
  color: #173d33;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.72px;
  border: none;
  background: transparent;

  @media (min-width: 1440px) {
    font-size: 20px;
    letter-spacing: -0.8px;
  }

  &::placeholder {
    color: #bdbdbd;
  }
`;

export const LabelTextArea = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-bottom: 8px;
  width: 294px;

  @media (min-width: 1440px) {
    width: 500px;
  }
`;

export const Textarea = styled.textarea`
  height: 147px;
  padding: 0;

  color: #173d33;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.72px;
  border: none;
  background: transparent;
  border: none;
  resize: none;
  background: transparent;
  border-bottom: 1px solid #97d28b;

  &::placeholder {
    color: #bdbdbd;
  }
`;

export const SubmitButtonWrap = styled.div`
  margin-top: -8px;
  margin-left: auto;
`;
