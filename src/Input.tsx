import { Default, DefaultProps } from "./Default"

const defaultInputProps: DefaultProps = {
  pseudo: {
    ':focus': {
      borderColor: 'rgb(49, 130, 206)',
      boxShadow: 'rgb(49 130 206) 0px 0px 0px 1px',
    },
  },
  minWidth: '0px',
  outline: 'transparent solid 2px',
  outlineOffset: '2px',
  position: 'relative',
  appearance: 'none',
  transitionProperty: 'border-color, box-shadow',
  transitionDuration: '200ms',
  paddingLeft: '1rem',
  paddingRight: '1rem',
  height: '2rem',
  borderRadius: '0.375rem',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: '#E2E8F0',
  boxSizing: 'border-box',
};

export const Input = Default('input', defaultInputProps);