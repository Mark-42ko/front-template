import { MainBox } from "@comp/main/styles";
import { ParentSize } from "@comp/utils/types";
import YoutubeComp from "@comp/utils/youtube";
import { useEffect, useRef, useState } from "react";

export default function MainComp() {
  const parentRef = useRef<HTMLDivElement>(null);
  const [parentSize, setParentSize] = useState<ParentSize>({ parentWidth: 0, parentHeight: 0 });

  useEffect(() => {
    const measureSize = () => {
      if (parentRef.current !== null) {
        const size: ParentSize = {
          parentWidth: parentRef.current.clientWidth,
          parentHeight: parentRef.current.clientHeight - 92,
        };

        setParentSize(size);
      }
    };

    measureSize();

    window.addEventListener('resize', measureSize);

    return () => {
      window.removeEventListener('resize', measureSize);
    };
  }, []);

  return (
    <MainBox ref={parentRef}>
      {parentSize.parentWidth !== 0 &&
        <YoutubeComp parentWidth={parentSize.parentWidth} parentHeight={parentSize.parentHeight} />
      }
    </MainBox>
  )
}
