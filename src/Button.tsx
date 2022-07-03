import { Default, DefaultProps } from "./Default"
import { memo } from "preact/compat";

const defaultInputProps: DefaultProps = {
  borderWidth: '0',
  display: 'inline-flex',
  appearance: 'none',
  alignItems: 'center',
  justifyContent: 'center',
  userSelect: 'none',
  position: 'relative',
  whiteSpace: 'nowrap',
  verticalAlign: 'middle',
  outline: 'transparent solid 2px',
  outlineOffset: '2px',
  lineHeight: '1.2',
  borderRadius: '0.25rem',
  fontWeight: '600',
  transitionProperty: 'background-color,border-color,color,box-shadow',
  transitionDuration: '200ms',
  height: '2rem',
  minWidth: '2rem',
  fontSize: '1rem',
  paddingInlineStart: '1rem',
  paddingInlineEnd: '1rem',
  color: 'white',
}

const activeButtonProps: DefaultProps = {
  cursor: 'pointer',
  backgroundColor: '#3182ce',
  pseudo: {
    ':focus': {
      boxShadow: '0 0 0 3px rgba(66, 153, 225, 0.6)',
    },
    ':hover': {
      backgroundColor: '#2b6cb0',
    },
    ':active': {
      backgroundColor: '#2c5282',
    },
  },
}

const disabledButtonProps: DefaultProps = {
  disabled: true,
  cursor: 'default',
  backgroundColor: '#a4cbef',
  pseudo: {
    ':hover': {
      backgroundColor: '#a4cbef',
    },
    ':active': {
      backgroundColor: '#a4cbef',
    },
  },
}

type ButtonProps = DefaultProps & {
  variant?: 'active' | 'disabled',
}

const DefaultButton = Default('button', defaultInputProps);

const ButtonComponent = (props: ButtonProps) => {
  const {variant = 'active', ...restProps} = props;
  let extraProps;
  switch (variant) {
    case 'disabled':
      extraProps = disabledButtonProps;
      break;
    case 'active':
      extraProps = activeButtonProps;
      break;
  }
  return <DefaultButton {...restProps} {...extraProps}  />;
}

export const Button = memo(ButtonComponent);