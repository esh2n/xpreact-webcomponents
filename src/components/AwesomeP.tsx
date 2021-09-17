import { h, JSX, render, FunctionalComponent, createRef } from "preact";

type Props = JSX.HTMLAttributes<HTMLParagraphElement>;

const AwesomeP: FunctionalComponent = (props: Props) => {
  const ref = createRef();
  return (<p ref={ref} {...props}>{props.children}</p>);
}

export default AwesomeP