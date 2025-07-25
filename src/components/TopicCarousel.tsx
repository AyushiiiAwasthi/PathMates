import Link from "next/link";
import { ChevronLeftSvg, ChevronRightSvg } from "./Svgs";
import React, { useRef } from "react";
import topics from "~/utils/topic";
import { Flag } from "./Flag";

declare global {
  interface Element {
    offsetLeft: number;
  }
}

const scrollCarousel = ({
  container,
  startIndexRef,
  endIndex,
}: {
  container: Element;
  startIndexRef: React.MutableRefObject<number>;
  endIndex: number;
}) => {
  const startIndex = startIndexRef.current;
  const startChild = container.children[startIndex];
  const endChild = container.children[endIndex];
  if (!startChild || !endChild) return;
  const startX = startChild.offsetLeft - container.offsetLeft;
  const endX = endChild.offsetLeft - container.offsetLeft;
  const startTime = Date.now();
  const intervalTime = 500;
  const endTime = startTime + intervalTime;
  const tick = () => {
    const nowTime = Date.now();
    if (nowTime >= endTime) {
      container.scrollTo(endX, 0);
      return;
    }
    const dx = ((nowTime - startTime) / intervalTime) * (endX - startX);
    container.scrollTo(startX + dx, 0);
    requestAnimationFrame(tick);
  };
  tick();
  startIndexRef.current = endIndex;
};

const scrollCarouselLeft = ({
  containerRef,
  startIndexRef,
  lastIndex,
}: {
  containerRef: React.MutableRefObject<HTMLDivElement | null>;
  startIndexRef: React.MutableRefObject<number>;
  lastIndex: number;
}) => {
  const container = containerRef.current;
  if (!container) return;
  const startIndex = startIndexRef.current;
  const endIndex =
    startIndex === 0 ? lastIndex : Math.max(0, startIndex - 2);
  scrollCarousel({ container, startIndexRef, endIndex });
};

const scrollCarouselRight = ({
  containerRef,
  startIndexRef,
  lastIndex,
}: {
  containerRef: React.MutableRefObject<HTMLDivElement | null>;
  startIndexRef: React.MutableRefObject<number>;
  lastIndex: number;
}) => {
  const container = containerRef.current;
  if (!container) return;
  const startIndex = startIndexRef.current;
  const endIndex =
    startIndex >= lastIndex
      ? 0
      : (startIndex + 2) % container.children.length;
  scrollCarousel({ container, startIndexRef, endIndex });
};

export const TopicCarousel = () => {
  const startIndexRef = useRef(0);
  const containerRef = useRef<null | HTMLDivElement>(null);
  const lastTopicIndex = topics.length - 1;

  return (
    <article className="absolute bottom-0 left-0 right-0 hidden h-20 items-center justify-center bg-[#0a4a82] text-white md:flex">
      <div className="flex w-full max-w-5xl justify-between">
        <button
          className="opacity-50"
          onClick={() =>
            scrollCarouselLeft({
              containerRef,
              startIndexRef,
              lastIndex: lastTopicIndex,
            })
          }
        >
          <ChevronLeftSvg />
          <span className="sr-only">Scroll left</span>
        </button>
        <div
          className="flex items-center gap-6 overflow-x-hidden"
          ref={containerRef}
        >
          {topics.map((topic) => (
            <Link
              key={topic.code}
              className="flex items-center gap-2"
              href={"/learn"}
            >
              <Flag topic={topic} width={40} />
              <span className="text-sm font-bold uppercase">
                {topic.name}
              </span>
            </Link>
          ))}
        </div>
        <button
          className="opacity-50"
          onClick={() =>
            scrollCarouselRight({
              containerRef,
              startIndexRef,
              lastIndex: lastTopicIndex,
            })
          }
        >
          <ChevronRightSvg />
          <span className="sr-only">Scroll right</span>
        </button>
      </div>
    </article>
  );
};
