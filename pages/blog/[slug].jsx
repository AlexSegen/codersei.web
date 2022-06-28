import Head from 'next/head'
import Link from 'next/link';
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/atom-one-dark.css";

import { MDXComponents } from "../../components/blog/MDXComponents";
import { getPostFromSlug, getSlugs } from "@/src/api";
import PostMetadata from '../../components/blog/PostMetadata';

export default function Post({post}) {

  return (
    <div>
      <Head>
        <title>{post.meta.title} | Codersei.me</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='container max-w-5xl mx-auto'>
          <div className='flex items-center justify-between'>
                <div>
                    <h1 className='mt-8 mb-3 text-3xl font-bold dark:text-cyan-500'>{post.meta.title}</h1>
                </div>
                <div>
                    <Link href="/blog">
                        <a className='inline-flex items-center btn dark:text-gray-300'>
                        <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" /></svg>
                            Go back
                        </a>
                    </Link>
                </div>
          </div>
        <PostMetadata {...post.meta} />
        
        <div className='mt-8 dark:text-gray-300'>
            <MDXRemote {...post.source} components={MDXComponents} />
        </div>
      </div>
      
    </div>
  )
}

export const getStaticProps = async ({ params }) => {
    const { slug } = params;
    const { content, meta } = getPostFromSlug(slug);
    const mdxSource = await serialize(content, {
      mdxOptions: {
        rehypePlugins: [
          rehypeSlug,
          [rehypeAutolinkHeadings, { behavior: "wrap" }],
          rehypeHighlight,
        ],
      },
    });
  
    return { props: { post: { source: mdxSource, meta } } };
  };
  
  export const getStaticPaths = async () => {
    const paths = getSlugs().map((slug) => ({ params: { slug } }));
  
    return {
      paths,
      fallback: false,
    };
  };