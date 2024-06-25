import {
  Dispatch,
  FunctionComponent,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import useDebounce from "../../hooks/Debounce/Debouce";
import {
  MaskedInputWrapper,
  Input as InputStyled,
  InputWrapper,
  InputIcon,
  InputIconWrapper,
} from "./Input.styled";

export interface IProps {
  initialValue?: string;
  placeholder?: string;
  width?: `${string}px` | `${string}%`;
  icon?: string;
  onlyNumbers?: boolean;
  setValue: Dispatch<SetStateAction<string>>;
  mask?: (value: string | undefined) => string;
  unmask?: (value: string) => string;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onClick?: React.MouseEventHandler<HTMLInputElement>;
  onKeyUp?: React.KeyboardEventHandler<HTMLInputElement>;
}

export const Input: FunctionComponent<IProps> = ({
  initialValue,
  placeholder,
  width,
  icon,
  onlyNumbers,
  setValue,
  mask,
  unmask,
  onFocus,
  onClick,
  onKeyUp,
}) => {
  const [valueMasked, setValueMasked] = useState(mask && mask(initialValue));
  const [valueDefault, setValueDefault] = useState(initialValue);

  useEffect(() => {
    if (mask && unmask && valueMasked) {
      const unmaskedValue = unmask(valueMasked);
      if (initialValue === unmaskedValue) return;

      setValueMasked(mask(initialValue));
      return;
    }

    if (initialValue === valueDefault) return;

    setValueDefault(initialValue);
  }, [initialValue]);

  const debounce = useDebounce((value: string) => {
    setValue(value);
  }, 300);

  return (
    <>
      {mask && unmask ? (
        <MaskedInputWrapper width={width}>
          <InputStyled
            value={valueMasked}
            onFocus={onFocus}
            onClick={onClick}
            onKeyUp={onKeyUp}
            onChange={(event) => {
              const unmaskedValue = unmask(event.target.value);

              if (onlyNumbers && isNaN(Number(unmaskedValue))) {
                return;
              }

              setValueMasked(mask(unmaskedValue));
              debounce(unmaskedValue);
            }}
            placeholder={placeholder}
            icon={icon}
          />
        </MaskedInputWrapper>
      ) : (
        <InputWrapper width={width}>
          <InputStyled
            value={valueDefault}
            onChange={(event) => {
              setValueDefault(event?.target.value);
              debounce(event?.target.value);
            }}
            placeholder={placeholder}
            width={width}
            icon={icon}
          />
          <InputIconWrapper>
            <InputIcon src={icon} />
          </InputIconWrapper>
        </InputWrapper>
      )}
    </>
  );
};
