import Link from "next/link";

export const CustomLink = (props) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...props} className="text-cyan-500" />
      </Link>
    );
  }

  return (
    <Link href={href}>
        <a
            className="text-cyan-500"
            target="_blank"
            rel="noopener noreferrer"
            {...props}
        >
            {props.children} {typeof props.children !== "object"}
        </a>
    </Link>
  );
};