import { ComponentProps } from "react";
import { BUTTON_VARIANT, VarianKey } from "./constant";
import { LoadingV2Icon } from "sbg-icon-beta";

interface SBGButtonProps {
  type?: "primary" | "default" | "filled" | "link" | "text" | "danger";
  children?: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: "start" | "end";
  buttonProps?: ComponentProps<"button">;
  className?: string;
  radius?:
    | "rounded-full"
    | "rounded-xs"
    | "rounded-sm"
    | "rounded-md"
    | "rounded-lg"
    | "rounded-xl";
  loading?: boolean;
  disabled?: boolean;
}

const Button = ({
  type = "default",
  children,
  icon,
  iconPosition = "start",
  buttonProps,
  className,
  radius = "rounded-sm",
  loading = false,
  disabled = false,
}: SBGButtonProps) => {
  const buttonChildren = loading ? "Loading" : children;
  const buttonIcon = loading ? (
    <LoadingV2Icon color="#ffffff" width={22} />
  ) : (
    icon
  );

  return (
    <button
      className={`flex justify-between content-center gap-2 me-2 mb-2 cursor-pointer px-5 py-2.5 text-sm font-medium disabled:cursor-not-allowed disabled:bg-(--color-primary-300) disabled:text-white ${radius} ${
        BUTTON_VARIANT[type as VarianKey]
      }  ${className}`}
      {...buttonProps}
      disabled={loading || disabled}
    >
      {iconPosition === "start" ? (
        <>
          {buttonIcon} {buttonChildren}
        </>
      ) : (
        <>
          {buttonChildren} {buttonIcon}
        </>
      )}
    </button>
  );
};

export default Button;
