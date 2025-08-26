import {EditorState} from "prosemirror-state"
import {EditorView} from "prosemirror-view"
import {Schema, DOMParser,DOMSerializer,Node} from "prosemirror-model"
import {schema} from "prosemirror-schema-basic"
import {addListNodes} from "prosemirror-schema-list"
import {exampleSetup} from "prosemirror-example-setup"
import { defaultMarkdownSerializer } from "prosemirror-markdown";
export {initProsemirror};
function initProsemirror(){

  const mySchema = new Schema({
    nodes: addListNodes(schema.spec.nodes, "paragraph block*", "block"),
    marks: schema.spec.marks
  })
  
  window.view = new EditorView(document.querySelector("#editor"), {
    state: EditorState.create({
      doc: DOMParser.fromSchema(mySchema).parse(document.querySelector("#content")),
      plugins: exampleSetup({schema: mySchema})
    })
  });
  return window.view;
}
export {getMarkdown};
function getMarkdown(){
  const serializer = defaultMarkdownSerializer;
  const markdown = serializer.serialize(window.view.state.doc);
  console.log('markdown',markdown);
  return markdown;
}
export {get_hmtl};
function get_hmtl(){
  // 获取当前文档
  const fragment = DOMSerializer.fromSchema(view.state.schema).serializeFragment(
    view.state.doc.content
  );
  
  const wrapper = document.createElement("div");
  wrapper.appendChild(fragment);
  const html = wrapper.innerHTML;
  console.log('html',html);
  return html;
}
export {get_doc_json};
function get_doc_json(){
  const doc = window.view.state.doc;
  const json = doc.toJSON();
  console.log('json',json);
  const jsonString = JSON.stringify(json);
  return jsonString;
}
export {retrive_doc_json};
function retrive_doc_json(json_string){
  const doc = Node.fromJSON(window.view.state.schema, JSON.parse(json_string));
  console.log('doc',doc);
  return doc;
}
export {set_up_note_card_editor};
function set_up_note_card_editor(json_string){
  const restoredDoc = retrive_doc_json(json_string);

  const plugins = exampleSetup({ schema });
  const state = EditorState.create({ doc: restoredDoc, schema, plugins });
  const view = new EditorView(document.querySelector("#editor"), { state });
  return view;
}