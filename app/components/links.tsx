import Link from "./link";

export default function Links() {
  return (
    <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
      <li>
        <Link label="linkedin" href="https://linkedin.com/in/jatkindev" />
      </li>
      <li>
        <Link label="github" href="https://github.com/jmdatkin" />
      </li>
      <li>
        <Link label="x" href="https://x.com/jatkindev" />
      </li>
    </ul>
  );
}
