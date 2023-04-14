/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  fragment PostContent on Post {\n    id\n    title\n    content\n    date\n    slug\n    excerpt\n    featuredImage {\n      node {\n        sourceUrl\n      }\n    }\n    author {\n      node {\n        avatar {\n          url\n        }\n        name\n        email\n      }\n    }\n  }\n": types.PostContentFragmentDoc,
    "\n  query GetPostBySlug($slug: String!) {\n    postBy(slug: $slug) {\n      ...PostContent\n    }\n  }\n  \n": types.GetPostBySlugDocument,
    "\n  query GetPosts($first: Int!) {\n    posts(first: $first) {\n      nodes {\n        ...PostContent\n      }\n    }\n  }\n  \n": types.GetPostsDocument,
    "\n  query GetAllPostsSlug {\n    posts {\n      nodes {\n        slug\n      }\n    }\n  }\n": types.GetAllPostsSlugDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment PostContent on Post {\n    id\n    title\n    content\n    date\n    slug\n    excerpt\n    featuredImage {\n      node {\n        sourceUrl\n      }\n    }\n    author {\n      node {\n        avatar {\n          url\n        }\n        name\n        email\n      }\n    }\n  }\n"): (typeof documents)["\n  fragment PostContent on Post {\n    id\n    title\n    content\n    date\n    slug\n    excerpt\n    featuredImage {\n      node {\n        sourceUrl\n      }\n    }\n    author {\n      node {\n        avatar {\n          url\n        }\n        name\n        email\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetPostBySlug($slug: String!) {\n    postBy(slug: $slug) {\n      ...PostContent\n    }\n  }\n  \n"): (typeof documents)["\n  query GetPostBySlug($slug: String!) {\n    postBy(slug: $slug) {\n      ...PostContent\n    }\n  }\n  \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetPosts($first: Int!) {\n    posts(first: $first) {\n      nodes {\n        ...PostContent\n      }\n    }\n  }\n  \n"): (typeof documents)["\n  query GetPosts($first: Int!) {\n    posts(first: $first) {\n      nodes {\n        ...PostContent\n      }\n    }\n  }\n  \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetAllPostsSlug {\n    posts {\n      nodes {\n        slug\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetAllPostsSlug {\n    posts {\n      nodes {\n        slug\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;