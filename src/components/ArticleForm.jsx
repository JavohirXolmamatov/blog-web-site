import React, { useState } from "react";
import { Input, TextArea } from "../ui";
import { useSelector } from "react-redux";

function ArticleForm({
  title,
  setTitle,
  description,
  setDescription,
  body,
  setBody,
  formSubmit,
}) {
  const { isLoading } = useSelector((state) => state.article);

  return (
    <div>
      <form>
        <Input label={"Title"} state={title} setState={setTitle} id={"title"} />
        <TextArea
          label={"Description"}
          state={description}
          setState={setDescription}
        />
        <TextArea
          label={"Body"}
          state={body}
          setState={setBody}
          heights="200px"
        />
        <div className="w-100 mt-3 text-center">
          <button
            className="btn btn-success "
            onClick={(e) => {
              e.preventDefault();
              formSubmit();
            }}
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Create Article"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default ArticleForm;
