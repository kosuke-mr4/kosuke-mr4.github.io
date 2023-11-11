import fs from "fs";
import matter from "gray-matter";
import PostCard from "../../components/PostCard";

export const getStaticProps = () => {
  const files = fs.readdirSync("posts");
  const posts = files.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");
    const fileContent = fs.readFileSync(`posts/${fileName}`, "utf-8");
    const { data } = matter(fileContent);
    return {
      frontMatter: data,
      slug,
    };
  });

  const sortedPosts = posts.sort((postA, postB) =>
    new Date(postA.frontMatter.date) > new Date(postB.frontMatter.date) ? -1 : 1
  );

  return {
    props: {
      sortedPosts,
    },
  };
};

export default function Blog({ sortedPosts }: { sortedPosts: any[] }) {
  return (
    <div className="my-8 px-4 sm:px-6 md:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {sortedPosts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
