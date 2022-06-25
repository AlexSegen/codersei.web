import PostList from "../blog/PostList";
import { posts } from "../../__mockups__/posts";
import Link from "next/link";

const RecentPosts = () => {

    const recentPosts = [...posts.slice(0, 2)];
    return ( 
        <section className="my-5">
            <div>
                <h2 className="mb-5 text-3xl font-bold text-left">Recent Posts</h2>

                <PostList posts={recentPosts}/>

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