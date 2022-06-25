import Link from "next/link";
import { timeAgo } from "../../helpers/utils";

export const PostItem = ({ title, extract, createdAt, category, url  }) => { 

    return (
        <div className="p-4 mb-8 rounded-md dark:hover:bg-slate-800">
            <Link href={url}>
                <a className="block mb-2 text-2xl font-semibold text-left text-gray-600 hover:underline dark:text-gray-200">{title}</a>
            </Link>
            <p className="mb-4 text-sm text-gray-400">{timeAgo(createdAt)} | <span className="uppercase">{category}</span></p>
            <p className="mb-4 text-gray-500">{extract}...</p>
            <Link href={url}>
                <a className="font-semibold hover:underline dark:text-cyan-500">Read more 
                    <svg xmlns="http://www.w3.org/2000/svg" className="inline w-6 h-6 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </a>
            </Link>
        </div>
    )

}

export const PostList = ({ title, posts }) => {
    return ( 
        <div>
            <div>
                {
                    posts && posts.length && posts.map(post => <PostItem key={post.id} {...post} />)
                }
            </div>
        </div>
     );
}
 
export default PostList;

