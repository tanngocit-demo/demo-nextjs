import SeoMeta from '../components/SeaoMeta';
import Link from 'next/link';

export default function About() {
    return (
      <div>
          <SeoMeta title="About Page here" description="About Page description here"/>
        <p>This is the about page</p>
        <Link href="/index">
          <a>Home Page</a>
        </Link>
      </div>
    );
  }