import { h, JSX, render, FunctionalComponent, createRef } from "preact";

type Props = JSX.HTMLAttributes<HTMLHeadingElement>;

const AwesomeH1: FunctionalComponent = (props: Props) => {
  const ref = createRef();
  return (<h1 ref={ref} {...props}>{props.children}</h1>);
}

export default AwesomeH1