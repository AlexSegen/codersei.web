import Image from "next/image";

import YouTube from './Youtube';
import { CustomLink } from "./CustomLink";

export const MDXComponents = {
    p: (props) => <p className="mb-6" {...props} />,
    ul: (props) => <ul className="pl-4 mb-6 list-disc list-inside" {...props} />,
    a: (props) => <CustomLink {...props}/>,
    h2: (props) => <h2 className="mb-6 text-2xl font-bold dark:text-cyan-500" {...props} />,
    pre: (props) => <pre className="mb-8" {...props} />,
    /* h1: (props) => <Heading as="h1" m={8} size="3xl" {...props} />,
    hr: Divider,
  h3: (props) => <Heading as="h3" m={4} size="xl" {...props} />,
  h4: (props) => <Heading as="h4" m={2} size="lg" {...props} />,
  h5: (props) => <Heading as="h5" m={2} size="md" {...props} />,
  h6: (props) => <Heading as="h6" m={2} size="sm" {...props} />,
  table: (props) => <Table variant="striped" colorScheme="orange" {...props} />,
  thead: (props) => <Thead {...props} />,
  tbody: (props) => <Tbody {...props} />,
  th: (props) => <Th {...props} />,
  tr: (props) => <Tr {...props} />,
  td: (props) => <Td {...props} />,
  img: (props) => <CustomImage {...props} />,
  ol: (props) => <OrderedList styleType="none" {...props} />,
  li: (props) => (
    <ListItem>
      <ListIcon as={IconLabel} color="brand.900" />
      {props.children}
    </ListItem>
  ), */
  Image,
  YouTube
};