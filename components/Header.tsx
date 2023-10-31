import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky top-0 border-b z-10 bg-white">
      <div className="max-w-4xl mx-auto flex justify-between items-center h-12">
        <Link href="/">kosuke-mr4.github.io</Link>
        <div>
          <Link href="/">About</Link>
          <div className="inline-block mx-2">|</div>
          <Link href="/blog">Blog</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
