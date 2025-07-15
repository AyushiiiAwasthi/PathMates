import Image from "next/image";
import type { StaticImageData } from "next/image";
import _flagsSvg from "../../public/flags.svg";
import type { Language } from "~/utils/languages";
import type { Topic } from "~/utils/topic";

const flagsSvg = _flagsSvg as StaticImageData;

type Props =
  | { language: Language; topic?: never; width?: number }
  | { topic: Topic; language?: never; width?: number };

export const Flag = ({ language, topic, width = 84 }: Props) => {
  const height = width * (19.3171 / 24);

  // Render language flag
  if (language) {
    return (
      <svg viewBox={language.viewBox} style={{ height, width }}>
        <image
          height={flagsSvg.height}
          href={flagsSvg.src}
          width={flagsSvg.width}
        />
      </svg>
    );
  }

  // Render topic icon
  if (topic) {
    return (
      <Image
        src={topic.icon}
        alt={topic.name}
        width={width}
        height={height}
        style={{ objectFit: "contain" }}
      />
    );
  }

  return null;
};
