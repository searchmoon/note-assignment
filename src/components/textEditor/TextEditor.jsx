import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { PlainTextPlugin } from "@lexical/react/LexicalPlainTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
// import editorConfig from "./editorConfig";
import { EmojiNode } from "./nodes/EmojiNode";
import ExampleTheme from "./themes/ExampleTheme";
import { $getRoot, $getSelection } from "lexical";

import TreeViewPlugin from "./plugins/TreeViewPlugin";
import EmoticonPlugin from "./plugins/EmoticonPlugin";
import MyCustomAutoFocusPlugin from "./plugins/MyCustomAutoFocusPlugin";
// import onChange from "./plugins/onChange";

const editorConfig = {
  theme: ExampleTheme,
  onError(error) {
    throw error;
  },
  nodes: [EmojiNode],
};

// When the editor changes, you can get notified via the
// LexicalOnChangePlugin!
const onChange = (editorState) => {
  editorState.read(() => {
    // Read the contents of the EditorState here.
    const root = $getRoot();
    const selection = $getSelection();

    console.log(root, selection);
  });
};

function Placeholder() {
  return <div className="editor-placeholder">Enter some plain text...</div>;
}

const TextEditor = () => {
  return (
    <LexicalComposer initialConfig={editorConfig}>
      <div className="editor-container">
        <PlainTextPlugin
          contentEditable={<ContentEditable className="editor-input" />}
          placeholder={<Placeholder />}
          ErrorBoundary={LexicalErrorBoundary}
        />
        <OnChangePlugin onChange={onChange} />
        <HistoryPlugin />
        <TreeViewPlugin />
        <EmoticonPlugin />
        <MyCustomAutoFocusPlugin />
      </div>
    </LexicalComposer>
  );
};

export default TextEditor;
