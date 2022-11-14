import { useId } from "react";
import { config } from "./config";
import { SlSocialTwitter, SlSocialFacebook, SlSocialLinkedin, SlEnvolope } from "react-icons/sl";
import LogoIcon from "@/svgs/logo-lynxit-icon.svg";
import RowLogoText from "@/svgs/logo-lynxit-icon-text.svg";

export default function Icon({iconName}) {
  const ID = useId();

  const icon = {
    twitter: <SlSocialTwitter />,
    facebook: <SlSocialFacebook />,
    linkedin: <SlSocialLinkedin />,
    envelope: <SlEnvolope />,
    rowLogoText: <RowLogoText />,
    logoIcon: <LogoIcon />
  }

  return <span data-next={`${config.name}-${ID}`}>{icon[iconName]}</span>;
}
