import styled, { IStyledComponent } from "styled-components";

import { selectDesktop, selectTablet } from "utils/mediaQueries";
import { ILabelProps } from "interfaces/styled/ILabelProps";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 28px;
  width: 100%;
  margin-top: 36px;
  padding: 36px 12px;

  background: ${({ theme }) => theme.colors.secondBackgroundColor};

  @media ${selectTablet} {
    margin-top: 0;
    padding: 36px 24px;
  }

  @media ${selectDesktop} {
    padding: 48px;
  }
`;

export const Label: IStyledComponent<
  "web",
  ILabelProps
> = styled.label<ILabelProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-bottom: 8px;
  width: 100%;

  border-bottom: 1px solid ${({ theme }) => theme.colors.accentColor};
  border-color: ${({ $isError, theme }) => $isError && theme.colors.errorColor};

  @media ${selectDesktop} {
    width: 500px;
  }
`;

export const InputName = styled.span`
  text-align: justify;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;
`;

export const Input = styled.input`
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.72px;
  border: none;
  background: transparent;

  @media ${selectDesktop} {
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
  width: 100%;

  @media ${selectDesktop} {
    width: 500px;
  }
`;

export const Textarea = styled.textarea`
  height: 147px;
  padding: 0;

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
  border-bottom: 1px solid ${({ theme }) => theme.colors.accentColor};

  &::placeholder {
    color: #bdbdbd;
  }
`;

export const SubmitButtonWrap = styled.div`
  margin-top: -8px;
  margin-left: auto;
`;

export const ErrorText = styled.p`
  position: absolute;
  /* p-8px + down 8px  */
  bottom: -16px;
  right: 0;

  color: ${({ theme }) => theme.colors.errorColor};
  text-align: right;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.48px;
`;
