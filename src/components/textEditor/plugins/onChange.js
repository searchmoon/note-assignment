// import { $getRoot, $getSelection } from "lexical";

// export default function onChange(editorState) {
//   editorState.read(() => {
//     const root = $getRoot();
//     const selection = $getSelection();

//     console.log(root, selection);
//     console.log(root.__cachedText);

//     const date = new Date();

//     localStorage.setItem(
//       "textInfo",
//       JSON.stringify({
//         text: root.__cachedText,
//         timestamp: date.toISOString().slice(0, 19),
//       })
//     );
//   });
// }

import { $getRoot, $getSelection } from "lexical";

// When the editor changes, you can get notified via the
// LexicalOnChangePlugin!
export default function onChange(editorState) {
  editorState.read(() => {
    // Read the contents of the EditorState here.
    const root = $getRoot();
    const selection = $getSelection();

    console.log(root, selection);
  });
}
