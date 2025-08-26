import {EditorState} from "prosemirror-state"
import {EditorView} from "prosemirror-view"
import {Schema, DOMParser} from "prosemirror-model"
import {schema} from "prosemirror-schema-basic"
import {addListNodes} from "prosemirror-schema-list"
import {exampleSetup} from "prosemirror-example-setup"

export {initProsemirror};
function initProsemirror(textArea){

  const mySchema = new Schema({
    nodes: addListNodes(schema.spec.nodes, "paragraph block*", "block"),
    marks: schema.spec.marks
  })
  const content = textArea.querySelector("#content");
  if (!content){
    console.error("content not found");
    return;
  }
  const new_html = `<div id="content">
  <h3>hello world</h3>
  </div>`;
  window.view = new EditorView(new_html, {
    state: EditorState.create({
      doc: DOMParser.fromSchema(mySchema).parse(new_html),
      plugins: exampleSetup({schema: mySchema})
    })
  });
  return window.view;

}