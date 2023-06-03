'use client';
import Link from "next/link";
// import PocketBase from 'pocketbase';


// export async function getPosts() {
//   const url = 'http://127.0.0.1:8090'
//   const pb = new PocketBase(url);
//   const posts = await pb.collection('posts').getFullList();
//   return posts;
// }

type Props = {
  post: {
    id: string
    title: string
    slug: string
    content: string
  }
}

export function Post({ post }: Props) {
  const { id, title, slug, content} = post || {}

  return (
    <Link key={id} href={`/posts/${id}`}>
      <title>{title}</title>
      <p>{slug}</p>
      <div>{content}</div>
    </Link>
  )

}
