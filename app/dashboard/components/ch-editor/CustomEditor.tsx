"use client";

import { CKEditor } from "@ckeditor/ckeditor5-react";

import {
  ClassicEditor,
  AccessibilityHelp,
  Alignment,
  Autoformat,
  Autosave,
  BalloonToolbar,
  Bold,
  Essentials,
  FindAndReplace,
  FontBackgroundColor,
  FontColor,
  FontFamily,
  FontSize,
  Heading,
  Highlight,
  Italic,
  Paragraph,
  SelectAll,
  SimpleUploadAdapter,
  SpecialCharacters,
  SpecialCharactersArrows,
  SpecialCharactersCurrency,
  SpecialCharactersEssentials,
  SpecialCharactersLatin,
  SpecialCharactersMathematical,
  SpecialCharactersText,
  Undo,
  EditorConfig,
} from "ckeditor5";

import "ckeditor5/ckeditor5.css";
import { Alert } from "antd";
import { UseFormSetValue } from "react-hook-form";

type EditorProps = {
  setValue: UseFormSetValue<{
    title: string;
    tag: string;
    description: string;
    image: string;
  }>;
  defaultValue?: string;
  error: string | undefined;
};

function CustomEditor({ setValue, error, defaultValue }: EditorProps) {
  const editorConfig: EditorConfig = {
    language: {
      ui: "ar",
    },
    toolbar: {
      items: [
        "findAndReplace",
        "undo",
        "redo",
        "|",
        "heading",
        "|",
        "fontSize",
        "fontFamily",
        "fontColor",
        "fontBackgroundColor",
        "highlight",
        "|",
        "|",
        "bold",
        "italic",
      ],
      shouldNotGroupWhenFull: true,
    },
    plugins: [
      AccessibilityHelp,
      Alignment,
      Autoformat,
      Autosave,
      BalloonToolbar,
      Bold,
      Essentials,
      FindAndReplace,
      FontBackgroundColor,
      FontColor,
      FontFamily,
      FontSize,
      Heading,
      Highlight,
      Italic,
      Paragraph,
      SelectAll,
      SimpleUploadAdapter,
      SpecialCharacters,
      SpecialCharactersArrows,
      SpecialCharactersCurrency,
      SpecialCharactersEssentials,
      SpecialCharactersLatin,
      SpecialCharactersMathematical,
      SpecialCharactersText,
      Undo,
    ],
    balloonToolbar: ["bold", "italic"],
    fontFamily: {
      supportAllValues: true,
    },
    fontSize: {
      options: [10, 12, 14, "default", 18, 20, 22],
      supportAllValues: true,
    },
    heading: {
      options: [
        {
          model: "paragraph",
          title: "Paragraph",
          class: "ck-heading_paragraph",
        },
        {
          model: "heading1",
          view: "h1",
          title: "Heading 1",
          class: "ck-heading_heading1",
        },
        {
          model: "heading2",
          view: "h2",
          title: "Heading 2",
          class: "ck-heading_heading2",
        },
        {
          model: "heading3",
          view: "h3",
          title: "Heading 3",
          class: "ck-heading_heading3",
        },
        {
          model: "heading4",
          view: "h4",
          title: "Heading 4",
          class: "ck-heading_heading4",
        },
        {
          model: "heading5",
          view: "h5",
          title: "Heading 5",
          class: "ck-heading_heading5",
        },
        {
          model: "heading6",
          view: "h6",
          title: "Heading 6",
          class: "ck-heading_heading6",
        },
      ],
    },
    placeholder: "Enter the content of the blog ...",
  };

  return (
    <div className="max-w-none prose-table:overflow-auto prose prose-xl">
      <div className="main-container">
        <div className="editor-container editor-container_classic-editor">
          <div className="editor-container__editor">
            <div>
              <CKEditor
                editor={ClassicEditor}
                config={editorConfig}
                data={defaultValue}
                onReady={(editor) => setValue("description", editor.getData())}
                onChange={(_, editor) =>
                  setValue("description", editor.getData())
                }
              />
            </div>
          </div>
        </div>
      </div>
      {error && (
        <Alert
          message={error}
          type="warning"
          showIcon
          className="mt-3 h-[32px] text-[12px]"
        />
      )}
    </div>
  );
}

export default CustomEditor;
