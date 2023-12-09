import { $getRoot, $getSelection } from "lexical";

export default function onChange(editorState) {
  editorState.read(() => {
    const root = $getRoot();
    const selection = $getSelection();

    console.log(root, selection);
    console.log(root.__cachedText);

    const date = new Date();

    localStorage.setItem(
      "saveTextInfo",
      JSON.stringify({
        text: root.__cachedText,
        timestamp: date.toISOString(),
      })
    );
  });
}
