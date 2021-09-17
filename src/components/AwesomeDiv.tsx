import { h, JSX, render, FunctionalComponent, createRef } from "preact";

type Props = JSX.HTMLAttributes<HTMLDivElement>;

const AwesomeDiv: FunctionalComponent = (props: Props) => {
  const ref = createRef();
  return (<div ref={ref} {...props}>{props.children}</div>);
}

export default AwesomeDiv