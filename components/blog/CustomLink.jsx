import Link from "next/link";

export const CustomLink = (props) => {
  const { href, children } = props;
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));
  return <Link href={href}><a target={isInternalLink ? '_self':'_blank'} className="underline text-cyan-500">{children}</a></Link>
};