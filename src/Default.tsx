import { memo } from 'preact/compat';
import { css, type CSSObject } from '@emotion/css';
import { h, ComponentChildren } from 'preact';
import { Properties as CSSProps, Pseudos } from 'csstype';
import { JSXInternal } from 'preact/src/jsx';
import { globalAttributes, globalEventHandlers } from './properties';

type Pseudo = {
  [key in Pseudos]: CSSProps;
}

export type DefaultProps = CSSProps & JSXInternal.HTMLAttributes & {
  children?: ComponentChildren;
  pseudo?: Partial<Pseudo>;
  keyframes?: any;
  /** Alternative type of component */
  as?: string;
}

type HAttributes = h.JSX.HTMLAttributes<EventTarget> & h.JSX.SVGAttributes<SVGElement>;

function splitPropsInCSSAndAttributes(props: DefaultProps): [CSSProps, HAttributes] {
  const cssProps: CSSProps = {};
  const attributeProps: HAttributes = {};
  for (const propKey of Object.keys(props)) {
    if (globalAttributes.has(propKey) || globalEventHandlers.has(propKey) || propKey.startsWith('data') || propKey.startsWith('aria')) {
      // @ts-ignore
      attributeProps[propKey] = props[propKey];
    } else {
      // @ts-ignore
      cssProps[propKey] = props[propKey];
    }
  }
  return [cssProps, attributeProps];
}

const DefaultComponent = (type: string, defaultProps: DefaultProps) => (props: DefaultProps) => {
  const {
    className,
    children,
    as,
    pseudo = {},
    ...remainingProps
  } = props;
  const {
    pseudo: defaultPseudo = {},
    ...remainingDefaultProps
  } = defaultProps;

  const remainingPropsWithDefaultProps = {...remainingDefaultProps, ...remainingProps};
  const mixedPseudoProps = {...pseudo, ...defaultPseudo}

  const [cssProps, attributeProps] = splitPropsInCSSAndAttributes(remainingPropsWithDefaultProps);

  const cssClass = css({...cssProps, ...mixedPseudoProps} as CSSObject);
  const _className = [className, cssClass].filter(possibleClassName => possibleClassName).join(' ');
  attributeProps.className = _className;

  const typeName = as ?? type;
  return h(typeName, attributeProps, children);
}

export const Default = (type: string, defaultProps: Partial<DefaultProps> = {}) => memo(DefaultComponent(type, defaultProps));
