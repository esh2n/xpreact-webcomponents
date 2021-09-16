import { h, JSX, render, FunctionalComponent, createRef } from "preact";
import register from "preact-custom-element";

type Props = JSX.HTMLAttributes<HTMLDivElement>;

const App: FunctionalComponent = (props: Props) => {
  const ref = createRef();
  return (<div ref={ref} {...props}></div>);
}

// render(<App/>, document.getElementById('app') as Element);

register(
  App,
  "video-hls",
  [
    "src",
    "autoplay",
    "controls",
    "width",
    "height",
    "loop",
    "muted",
    "poster",
    "preload",
    "style",
    "class",
  ],
  { shadow: true }
);