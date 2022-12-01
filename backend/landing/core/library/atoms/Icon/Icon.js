import { useId } from "react";
import { config } from "./config";
import { SlSocialTwitter, SlSocialFacebook, SlSocialLinkedin, SlEnvolope } from "react-icons/sl";
import { BsPercent, BsShieldCheck, BsRecycle, BsCheck } from "react-icons/bs";
import { RiCustomerService2Line } from "react-icons/ri";
import { TbArrowsShuffle } from "react-icons/tb";
import { GiReceiveMoney } from "react-icons/gi";
import LogoIcon from "@/svgs/logo-lynxit-icon.svg";
import RowLogoText from "@/svgs/logo-lynxit-icon-text.svg";


export default function Icon({iconName, className}) {
  const ID = useId();

  const icon = {
    twitter: <SlSocialTwitter />,
    facebook: <SlSocialFacebook />,
    linkedin: <SlSocialLinkedin />,
    envelope: <SlEnvolope />,
    rowLogoText: <RowLogoText />,
    logoIcon: <LogoIcon />,
    percent: <BsPercent />,
    customerService: <RiCustomerService2Line />,
    warranty: <BsShieldCheck />,
    flexible: <TbArrowsShuffle />,
    money: <GiReceiveMoney />,
    recycle: <BsRecycle />,
    checkMark: <BsCheck />,
  }

  return <span className={className} data-next-cmp={`${config.name}-${ID}`}>{icon[iconName]}</span>;
}
