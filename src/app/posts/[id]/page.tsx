import PocketBase from 'pocketbase';
import { PostDetail } from './PostDetail';
import { PostProps } from './type'


export async function generateStaticParams() {
  const url = 'http://127.0.0.1:8090'
  const pb = new PocketBase(url);
  const posts = await pb.collection('posts').getFullList();

  return posts.map((post) => ({id: post.id}));
}
 

async function getPost(postId: any) {
  const url = `http://127.0.0.1:8090/api/collections/posts/records/${postId}`
  const res = await fetch(url, {cache: 'force-cache'})
  const data = await res.json()
  
  return data;
}

type Props = {
  params: { id:string }
}

async function PostPage({ params }: Props) {
  const post = await getPost(params.id) as PostProps

  return (
    <div>
      <PostDetail post={post} />
    </div>
  )
}

export default PostPage