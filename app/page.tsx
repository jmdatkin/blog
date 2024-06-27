import Divider from "./components/divider";
import { Education } from "./components/education";
import Links from "./components/links";
import { Projects } from "./components/projects";

export default function Page() {
  return (
    <section>
      <div className="mb-8">
        <h1 className="text-2xl font-semibold tracking-tighter">
          Julian Atkin
        </h1>
        <p className="text-neutral-500">jatkindev@gmail.com</p>
        <p className="text-neutral-500">(917) 626 7874</p>
      </div>
      <p className="mb-4">
        Passionate, driven, and detail-oriented engineer.<br></br>
        Looking to build the next generation of software products.<br></br>
        <br></br>
        10x Node.js, Next.js, AWS architect.
      </p>
      <p className="text-neutral-700">
        Node.js | Next.js | NestJS | PostgreSQL | MongoDB | SNS | SQS | EC2 | S3
        | Fargate
      </p>
      <Links />
      <div className="">
        <Divider />
        <div className="my-12">
          <Projects />
        </div>
        <Divider />
        <div className="my-12">
          <Education />
          {/* <BlogPosts /> */}
        </div>
      </div>
    </section>
  );
}
