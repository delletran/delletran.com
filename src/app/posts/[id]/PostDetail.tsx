'use client';
import { PostProps } from './type'
import CustomButton from '@/components/buttons';


export function PostDetail({post: { id, title, slug, content }}: {post: PostProps}) {
  return (
    <div key={id}>
      <h2>Post</h2>
      <h3>{title}</h3>
      <p>{slug}</p>
      <div>{content}</div>
      <div>
        <CustomButton />
      </div>
    </div>
  )
}
