import type { NextPage } from "next";
import Link from "next/link";
import topics from "~/utils/topic";
import { LanguageHeader } from "~/components/LanguageHeader";
import _bgSnow from "../../public/bg-snow.svg";
import type { StaticImageData } from "next/image";
import Image from "next/image";

const bgSnow = _bgSnow as StaticImageData;

const Register: NextPage = () => {
  return (
    <main
      className="flex min-h-screen flex-col items-center bg-[#235390] text-white animate-bgMove"
      style={{ backgroundImage: `url(${bgSnow.src})` }}
    >
      <LanguageHeader />
      <div className="container flex grow flex-col items-center justify-center gap-20 px-4 py-16">
        <h1 className="mt-20 text-center text-5xl font-extrabold tracking-tight text-white">
          What do you want to learn today?
        </h1>

        <section className="mx-auto grid w-full max-w-5xl grow grid-cols-1 flex-col gap-x-2 gap-y-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic) => (
            <Link
              key={topic.name}
              href="/learn"
              className="flex cursor-pointer flex-col items-center gap-4 rounded-2xl border-2 border-b-4 border-blue-300 px-5 py-8 text-xl font-bold hover:bg-blue-400 hover:bg-opacity-20"
              onClick={() => {
                // store topic in Zustand or sessionStorage if needed
                sessionStorage.setItem("selectedTopic", topic.code);
              }}
            >
              <Image
                src={topic.icon}
                alt={topic.name}
                width={64}
                height={64}
                className="rounded-xl"
              />
              <span>{topic.name}</span>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
};

export default Register;
