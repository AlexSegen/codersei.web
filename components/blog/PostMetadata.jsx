import { formatDate } from "@/helpers/utils";

const PostMetadata = (props) => {

    const {date, readingTime, category } = props;

    return ( 
        <p className="text-sm text-gray-400 " {...props}>

            <span className="inline-flex items-center justify-start mr-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="inline-block w-4 h-4 mx-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="mr-2 capitalize"> {formatDate(date)}</span> |
            </span>

            <span className="inline-flex items-center justify-start mr-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="inline-block w-4 h-4 mx-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="mr-2 capitalize">{category}</span> |
            </span>

            {
                readingTime && (
                    <span className="inline-flex items-center justify-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="inline-block w-4 h-4 mx-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg> 
                        <span>{Math.round(readingTime.minutes)} min reading</span>
                    </span>
                )
            }
        </p>
     );
}
 
export default PostMetadata;
