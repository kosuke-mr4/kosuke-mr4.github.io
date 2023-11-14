import fs from "fs";
import matter from "gray-matter";
import { marked, Renderer } from "marked";
import { NextSeo } from "next-seo";

export async function getStaticProps({ params }: any) {
  const file = fs.readFileSync(`posts/${params.slug}.md`, "utf-8");
  const { data, content } = matter(file);
  return { props: { frontMatter: data, content, slug: params.slug } };
}

export async function getStaticPaths() {
  const files = fs.readdirSync("posts");
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(/\.md$/, ""),
    },
  }));
  console.log("paths:", paths);
  return {
    paths,
    fallback: false,
  };
}

const renderer = new Renderer();
renderer.image = (href: string, title: string, text: string) => {
  return `<img src="${href}" alt="${text}" title="${title}" class="mx-auto"/>`;
};

const Post = ({ frontMatter, content, slug }: any) => {
  return (
    <>
      <NextSeo
        title={frontMatter.title}
        description={frontMatter.description}
        openGraph={{
          type: "website",
          url: `https://kosuke-mr4.github.io/blog/${slug}`,
          title: frontMatter.title,
          description: frontMatter.description,
        }}
      />
      <div className="prose prose-lg max-w-none px-8 sm:px-6 md:px-8">
        <div className="border">
          <img
            className="w-full"
            src={`/${frontMatter.image}`}
            // width={1200}
            // height={600}
            alt={frontMatter.title}
          />
        </div>
        <h1 className="mt-12 text-4xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl">
          {frontMatter.title}
        </h1>
        <span>{frontMatter.date}</span>
        <div
          dangerouslySetInnerHTML={{ __html: marked(content, { renderer }) }}
        ></div>
      </div>
    </>
  );
};

export default Post;
