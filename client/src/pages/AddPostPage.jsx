import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createPost } from "../redux/slices/postSlice";

export const AddPostPage = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [image, setImage] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = () => {
    try {
      const data = new FormData();
      data.append("title", title);
      data.append("text", text);
      data.append("image", image);
      dispatch(createPost(data));
      navigate("/posts");
    } catch (error) {
      console.log(error);
    }
  };

  const clearFormHandler = () => {
    setText("");
    setTitle("");
    setImage("");
  };

  return (
    <form className="w-1/3 mx-auto py-10" onSubmit={(e) => e.preventDefault()}>
      <label className="text-gray-300 py-2 bg-gray-600 text-xs mt-2 flex items-center justify-center border-2 border-dotted cursor-pointer">
        Upload image:
        <input
          type="file"
          className="hidden"
          onChange={(e) => setImage(e.target.files[0])}
        />
      </label>
      <div className="flex object-cover py-2">
        {image && <img src={URL.createObjectURL(image)} alt="pict" />}
      </div>

      <label className="text-xs text-white opacity-70">
        Article title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter title"
          className="mt-1 text-black w-full rounded-lg bg-gray-400 border py-1 px-2 text-xs outline-none placeholder:text-gray-700"
        />
      </label>

      <label className="text-xs text-white opacity-70">
        Article text:
        <textarea
          onChange={(e) => setText(e.target.value)}
          value={text}
          placeholder="Enter text"
          className="mt-1 text-black w-full rounded-lg bg-gray-400 border py-1 px-2 text-xs resize-none h-40 outline-none placeholder:text-gray-700"
        />
      </label>

      <div className="flex gap-8 items-center justify-center mt-4">
        <button
          onClick={submitHandler}
          className="flex items-center justify-center bg-gray-600 text-xs text-white rounded-md py-2 px-4"
        >
          Publish
        </button>
        <button
          onClick={clearFormHandler}
          className="flex items-center justify-center bg-red-500 text-xs text-white rounded-md py-2 px-4"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};
