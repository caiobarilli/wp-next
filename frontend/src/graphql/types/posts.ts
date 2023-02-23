interface Post {
  node: {
    title: string
  }
}

interface AllPosts {
  edges: Post[]
}

export interface HomeProps {
  allPosts: AllPosts
}
