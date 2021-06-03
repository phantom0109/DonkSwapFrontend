import React from "react";
import styled from "styled-components";
import ButtonItem from "../Button/ButtonItem";
import { BaseButtonProps, PolymorphicComponent, variants } from "../Button/types";
import { ButtonMenuItemProps } from "./types";

interface InactiveButtonProps extends BaseButtonProps {
  forwardedAs: BaseButtonProps["as"];
}

const InactiveButton: PolymorphicComponent<InactiveButtonProps, "button"> = styled(ButtonItem)<InactiveButtonProps>`
  background-color: none !important;
  background-image: none !important;
  color:#000 !important;
  &:hover:not(:disabled):not(:active) {
    background-color: transparent;
  }
`;

const ButtonMenuItem: PolymorphicComponent<ButtonMenuItemProps, "button"> = ({
  isActive = false,
  variant = variants.PRIMARY,
  as,
  ...props
}: ButtonMenuItemProps) => {
  if (!isActive) {
    return <InactiveButton forwardedAs={as} variant="text" {...props} />;
  }

  return <ButtonItem as={as} variant={variant} {...props} />;
};

export default ButtonMenuItem;
