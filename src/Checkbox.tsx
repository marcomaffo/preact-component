import { memo } from "preact/compat";
import { Box } from "./Box";
import { Default, DefaultProps } from "./Default"

const defaultCheckboxProps: DefaultProps = {
  pseudo: {
    ':checked': {
      // @ts-ignore
      ' + span': {
        background: `no-repeat center center url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' style='fill: none; background-color: rgb(49, 130, 206); stroke-width: 2; stroke: white; stroke-dasharray: 16; opacity: 1; stroke-dashoffset: 0;'><polyline points='1.5 6 4.5 9 10.5 1'></polyline></svg>")`,
        border: 'none',
      },
    },
    ':not(disabled) + span': {
      cursor: 'pointer',
    },
  },
  display: "none",
  type: 'checkbox',
  ' + span': {
    width: '18px',
    height: '18px',
    borderRadius: '3px',
    border: '1px solid gray',
    display: 'inline-block',
    boxSizing: 'border-box',
  },
};
const CheckboxInputComponent = Default('input', defaultCheckboxProps);

const CheckboxComponent = (props: DefaultProps) => {
  return <Box as="label" width="18px" height="18px" marginRight="5px"><CheckboxInputComponent {...props} /><span /></Box>;
}

export const Checkbox = memo(CheckboxComponent);
