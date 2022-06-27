import { formatDate } from "@/helpers/utils";

const PostMetadata = (props) => {

    const {date, readingTime, category } = props;

    return ( 
        <p className="text-sm text-gray-400 " {...props}>
            {formatDate(date)} | <span className="uppercase">{category}</span>
            {
                readingTime && (
                    <>
                    {' '}| <span>{Math.round(readingTime.minutes)} min reading</span>
                    </>
                )
            }
        </p>
     );
}
 
export default PostMetadata;
