
import ReactPlayer from "react-player";

import { ParentSize } from "@comp/utils/types";

export default function YoutubeComp({ parentWidth, parentHeight }: ParentSize) {

  return (
    <ReactPlayer url="https://youtu.be/7JKu3J3ym_s?si=u8m9DS7HkkNmELGf" loop={true} width={parentWidth} height={parentHeight}
      playing={true}
    />
  )
}
