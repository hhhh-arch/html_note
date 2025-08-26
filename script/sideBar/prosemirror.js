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
  const doc = window.view.state.doc;
  
  // 使用 schema 创建 DOMSerializer
  const serializer = DOMSerializer.fromSchema(window.view.state.schema);
  
  // 将文档序列化为 DOM 片段
  const domFragment = serializer.serializeFragment(doc.content);
  
  // 将 DOM 片段转换为 HTML 字符串
  const html = domFragment.innerHTML;
  
  console.log('HTML:', html);
  return html;
}
function get_doc_json(){
  const doc = window.view.state.doc;
  const json = doc.toJSON();
  console.log('json',json);
  const jsonString = JSON.stringify(json);
  return jsonString;
}

