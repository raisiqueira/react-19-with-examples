import { useFormStatus } from "react-dom";
import { useMemo, useRef, useState } from "react";

type Post = {
  title: string;
  body: string;
};

type PostItemProps = {
  post: Post;
};

const PostItem = ({ post }: PostItemProps) => {
  return (
    <div className="bg-blue-50 shadow-md p-4 my-6 rounded-lg">
      <h2 className="text-xl font-bold">{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

const SubmitButton = () => {
  const { pending } = useFormStatus();
  console.log(pending);

  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      type="submit"
      disabled={pending}
    >
      {pending ? "Submitting..." : "Submit"}
    </button>
  );
};

type PostFormProps = {
  addPost: (newPost: Post) => void;
};

const PostForm = ({ addPost }: PostFormProps) => {
  const formRef = useRef(null);
  const formAction = async (formData: FormData) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const newPost = {
      title: formData.get("title") as string,
      body: formData.get("body") as string,
    };

    addPost(newPost);
    // @ts-expect-error reset is not a function
    formRef?.current.reset();
  };

  return (
    <form ref={formRef} action={formAction} className="px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
          Title
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="title"
          type="text"
          placeholder="Enter title"
          name="title"
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="body">
          Body
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="body"
          rows={5}
          placeholder="Enter body"
          name="body"
        ></textarea>
      </div>
      <div className="flex items-center justify-between">
        <SubmitButton />
      </div>
    </form>
  );
};

const Posts = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  const addPost = (newPost: Post) => {
    setPosts((posts) => [...posts, newPost]);
  };

  return (
    <>
      <PostForm addPost={addPost} />
      {posts.map((post, index) => (
        <PostItem key={index} post={post} />
      ))}
    </>
  );
};
export { Posts as UseFormStatusExample };
