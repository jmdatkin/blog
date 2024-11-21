import Image from "next/image";
import Link from "./link";

export function Projects() {
  return (
    <div className="flex flex-col gap-4">
      <h2>Projects</h2>
      <div className="mb-8">
        <h3>
          <Link label="Grid Chat" href="https://grid-chat-app.web.app/" />
        </h3>
        <p className="text-neutral-700 mb-4">
          Infinite realtime messaging board
        </p>
        <Image
          alt="Grid chat preview"
          className="border"
          width={480}
          height={320}
          src="/grid-chat/1.png"
        ></Image>
      </div>
      <div className="mb-8">
        <h3>
          <Link label="Croppy" href="https://croppy.vercel.app/" />
        </h3>
        <p className="text-neutral-700 mb-4">
          In-browser image cropping and compression tool
        </p>
        <Image
          alt="Croppy preview"
          className="border"
          width={480}
          height={320}
          src="/croppy/1.png"
        ></Image>
      </div>
      <div>
        <h3>
          <Link
            label="League of Legends Ability Quiz"
            href="https://lol-ability-quiz.vercel.app/"
          />
        </h3>
        <p className="text-neutral-700 mb-4">Interactive browser-based game</p>
        <Image
          alt="League of legends ability quiz preview"
          className="border"
          width={480}
          height={320}
          src="/lol-ability-quiz/1.png"
        ></Image>
      </div>
    </div>
  );
}
