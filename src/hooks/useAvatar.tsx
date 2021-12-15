import * as style from "@dicebear/micah";
import { createAvatar } from "@dicebear/avatars";
import SVG from "react-inlinesvg";

interface avatarProps {
  inputSeed: string;
}
const useAvatar = (props: avatarProps) => {
  const svgRaw = createAvatar(style, {
    seed: props.inputSeed,
    size: 90,
  });

  const Avatar = <SVG src={svgRaw} />;

  return Avatar;
};

export default useAvatar;
