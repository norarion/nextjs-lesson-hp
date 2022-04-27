import Link from "next/link"

const Post = ({ post }) => {
  return (
    <li>
      <span>{post.id}</span>
      {" : "}
      <Link href={`/posts/${post.id}`}>
        <span className="cursor-pointer text-blue-500 border-b borer-blue-500 hover:bg-gray-200">
          {post.title}
        </span>
      </Link>
    </li>
  )
}

export default Post