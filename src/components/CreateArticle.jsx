import { useState } from "react";
import ArticleForm from "./ArticleForm";
function CreateArticle() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [body, setBody] = useState("");

  return (
    <div className="w-75 mx-auto pt-3">
      <h2 className="text-center mt-3">Create article</h2>
      <ArticleForm
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
        body={body}
        setBody={setBody}
      />
    </div>
  );
}

export default CreateArticle;
