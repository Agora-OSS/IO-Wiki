import MDEditor from "@uiw/react-md-editor";
import type React from "react";
import { useState } from "react";

type MarkdownEditorType = {
  value: string;
} & React.PropsWithChildren;

const MarkdownEditor: React.FC<MarkdownEditorType> = ({ value }) => {
  const [markdownContent, setMarkdownContent] = useState(value);

  return (
    <div className="mx-10">
      <MDEditor
        value={markdownContent}
        onChange={(value) => setMarkdownContent((_before) => value || "")}
      />
    </div>
  );
};

export default MarkdownEditor;
