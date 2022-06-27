import Link from "next/link";
import PostMetadata from "./PostMetadata";

export const PostItem = (props) => { 

    const { title, excerpt, slug  } = props;

    return (
        <div className="p-4 mb-8 rounded-md dark:hover:bg-slate-800">
            <Link href={`/blog/${slug}`}>
                <a className="block mb-2 text-2xl font-semibold text-left text-gray-600 hover:underline dark:text-gray-200">{title}</a>
            </Link>
            <PostMetadata {...props}  />
            <p className="my-4 text-gray-500">{excerpt}...</p>
            <Link href={`/blog/${slug}`}>
                <a className="font-semibold hover:underline dark:text-cyan-500">Read more 
                    <svg xmlns="http://www.w3.org/2000/svg" className="inline w-6 h-6 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </a>
            </Link>
        </div>
    )

}

export const PostList = ({ posts }) => {
    return ( 
        <div>
            <div>
                {
                    posts && posts.length && posts.map(post => <PostItem key={post.slug} {...post} />)
                }
            </div>
        </div>
     );
}
 
export default PostList;

