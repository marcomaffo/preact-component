import { Default, DefaultProps } from "./Default"

const defaultInputProps: DefaultProps = {
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
  borderRadius: '0.375rem',
  fontWeight: '600',
  transitionProperty: 'background-color,border-color,color,box-shadow',
  transitionDuration: '200ms',
  height: '2rem',
  minWidth: '2rem',
  fontSize: '1rem',
  paddingInlineStart: '1rem',
  paddingInlineEnd: '1rem',
  backgroundColor: '#3182ce',
  color: 'white',
};

export const Button = Default('button', defaultInputProps);