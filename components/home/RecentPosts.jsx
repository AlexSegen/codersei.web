import Link from "next/link";
import {useState, useEffect} from 'react';
import PostList from "../blog/PostList";

const RecentPosts = ({posts}) => {

    const [recentPosts, setRecentPosts] = useState([]);

    useEffect(() => {
        console.log(posts);
        if (posts && posts.length > 0)
            setRecentPosts([...posts].splice(0, 2));
    }, [posts]);

    return ( 
        <section className="my-5">
            <div>
                <h2 className="mb-5 text-3xl font-bold text-left dark:text-cyan-500">Recent Posts</h2>

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
