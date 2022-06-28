import PostList from "../blog/PostList";
import Link from "next/link";

const RecentPosts = () => {

    return ( 
        <section className="my-5">
            <div>
                <h2 className="mb-5 text-3xl font-bold text-left dark:text-cyan-500">Recent Posts</h2>

                <PostList posts={[]}/>

                <div className="text-center">
                    <Link href="/blog">
                        <a className="btn is-default">View all posts</a>
                    </Link>
                </div>

            </div>
        </section>
     );
}
 
export default RecentPosts;