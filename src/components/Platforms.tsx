import { Stack } from "@mui/material";
import { AiFillAndroid } from "react-icons/ai";
import {
  BsApple,
  BsGeoAltFill,
  BsGlobe,
  BsNintendoSwitch,
  BsPlaystation,
  BsXbox,
} from "react-icons/bs";
import { MdComputer } from "react-icons/md";
import { RiMacbookFill } from "react-icons/ri";
import {
  SiAtari,
  SiCommodore,
  SiD3Dotjs,
  SiLinuxcontainers,
  SiSega,
} from "react-icons/si";

const PlatformIcon = ({ platform }: { platform: string }) => {
  switch (platform) {
    case "3do":
      return <SiD3Dotjs />;
    case "andriod":
      return <AiFillAndroid />;
    case "atari":
      return <SiAtari />;
    case "commodore-amiga":
      return <SiCommodore />;
    case "ios":
      return <BsApple />;
    case "linux":
      return <SiLinuxcontainers />;
    case "mac":
      return <RiMacbookFill />;
    case "neo-geo":
      return <BsGeoAltFill />;
    case "nintendo":
      return <BsNintendoSwitch />;
    case "pc":
      return <MdComputer />;
    case "playstation":
      return <BsPlaystation />;
    case "sega":
      return <SiSega />;
    case "web":
      return <BsGlobe />;
    case "xbox":
      return <BsXbox />;
  }
};

const Platforms = ({ platforms }: { platforms: string[] }) => {
  return (
    <Stack
      direction="row"
      gap={1}
      alignItems="center"
      justifyContent="flex-start"
    >
      {platforms.map((platform) => {
        return <PlatformIcon key={platform} platform={platform} />;
      })}
    </Stack>
  );
};
export default Platforms;
