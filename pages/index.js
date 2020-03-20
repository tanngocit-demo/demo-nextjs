import Link from "next/link";
import SeoMeta from "../components/SeaoMeta";

export default function Index() {
  return (
    <div>
      <SeoMeta />
      <Link href="/about">
        <a>About Page</a>
      </Link>
      <p>Hello Next.js</p>
    </div>
  );
}
