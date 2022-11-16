import { useId } from "react";
import { config } from "./config";

export default function Subheading({ text }) {
  const ID = useId();
  return <span className="base" data-next={`${config.name}-${ID}`}>{text}</span>;
}
