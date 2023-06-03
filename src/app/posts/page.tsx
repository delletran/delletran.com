import { Post } from './Posts';
import PocketBase from 'pocketbase';

export const dynamic = 'auto',
  dynamicParams = true,
  revalidate = 0,
  fetchCache = 'auto',
  runtime = 'nodejs',
  preferredRegion = 'auto'

async function getPosts() {
  const url = 'http://127.0.0.1:8090'
  const pb = new PocketBase(url);
  const records = await pb.collection('posts').getList();
    
  return records?.items as any[];
}

type Props = {}

async function PostsPage() {
  const  posts = await getPosts()

  return (
    <>
      <div>Posts</div>
      <div>
        {
          posts?.map((post) => {
            return <Post key={post.slug} post={post}/>
          })
        }
      </div>
    </>
  )
}


export default PostsPage