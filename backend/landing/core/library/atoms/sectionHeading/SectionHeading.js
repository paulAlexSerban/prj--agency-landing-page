import { useId } from "react";
import { config } from "./config";

export default function SectionHeading({ level = 2, children }) {
  const ID = useId();

  if (level === 1) {
    return (
      <h1 className="base level" data-next={`${config.name}-${ID}`}>
        <span className="main">{main}</span>
        {children}
      </h1>
    );
  } else if (level === 2) {
    <h2 data-next={`${config.name}-${ID}`}>heading level 2</h2>;
    {
      children;
    }
  } else if (level === 3) {
    <h3 data-next={`${config.name}-${ID}`}> heading level 3</h3>;
    {
      children;
    }
  } else if (level === 4) {
    <h4 data-next={`${config.name}-${ID}`}>heading level 4</h4>;
    {
      children;
    }
  }
}
