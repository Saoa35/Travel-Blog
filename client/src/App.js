import React, { useEffect } from "react";
import { Layout } from "./components/Layout.jsx";
import { Routes, Route } from "react-router-dom";

import { HomePage } from "./pages/HomePage.jsx";
import { PostsPage } from "./pages/PostsPage.jsx";
import { PostPage } from "./pages/PostPage.jsx";
import { EditPostPage } from "./pages/EditPostPage.jsx";
import { AddPostPage } from "./pages/AddPostPage.jsx";
import { RegisterPage } from "./pages/RegisterPage.jsx";
import { LoginPage } from "./pages/LoginPage.jsx";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { getMe } from "./redux/slices/authSlice.js";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="posts" element={<PostsPage />} />
        <Route path=":id" element={<PostPage />} />
        <Route path=":id/edit" element={<EditPostPage />} />
        <Route path="new" element={<AddPostPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={<LoginPage />} />
      </Routes>

      <ToastContainer position="bottom-right" />
    </Layout>
  );
}

export default App;
