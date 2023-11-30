import Link from "next/link";

const PostCard = ({ post }: any) => {
  return (
    <Link href={`/blog/${post.slug}`}>
      <div className="border rounded-lg md:block flex">
        <img
          className="md:w-full w-1/2 rounded-lg aspect-video" // あ〜デフォで小さいやつ書いてオプションででかい方を指定するのね〜
          src={`/${post.frontMatter.image}`}
          alt={post.frontMatter.title}
        />
        <div className="md:h-28 px-2 py-4">
          <h1 className="font-bold text-lg">{post.frontMatter.title}</h1>
          <span>{post.frontMatter.date}</span>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
