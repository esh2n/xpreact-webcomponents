import register from "preact-custom-element";
import AwesomeDiv from "./components/AwesomeDiv";
import AwesomeH1 from "./components/AwesomeH1";
import AwesomeP from "./components/AwesomeP";

const elements = [
  AwesomeDiv,
  AwesomeP,
  AwesomeH1
]

elements.forEach(element => {
  register(
    element,
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
})

// render(<AwesomeDiv/>, document.getElementById('app') as Element);
