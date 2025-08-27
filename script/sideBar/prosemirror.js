import {EditorState} from "prosemirror-state"
import {EditorView} from "prosemirror-view"
import {Schema, DOMParser,DOMSerializer,Node} from "prosemirror-model"
import {schema} from "prosemirror-schema-basic"
import {addListNodes} from "prosemirror-schema-list"
import {exampleSetup} from "prosemirror-example-setup"
import { defaultMarkdownSerializer, MarkdownParser } from "prosemirror-markdown";
import {keymap} from "prosemirror-keymap"
import {history,undo,redo} from "prosemirror-history"
import { baseKeymap } from "prosemirror-commands"
import {
  inputRules,
  textblockTypeInputRule,
  wrappingInputRule,
} from "prosemirror-inputrules";
import { dropCursor } from "prosemirror-dropcursor";
import { gapCursor } from "prosemirror-gapcursor";
export { initProsemirror_with_notes};
function initProsemirror_with_notes(){

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
export {initProsemirror_without_notes};
function initProsemirror_without_notes(){
  const mySchema = new Schema({
    nodes: addListNodes(schema.spec.nodes, "paragraph block*", "block"),
    marks: schema.spec.marks
  });
  
  let state = EditorState.create({
    schema: mySchema,
    plugins: [
      history(),
      keymap(baseKeymap),
      keymap({"Mod-z": undo, "Mod-y": redo}),
      dropCursor(),
      gapCursor(),
      buildMarkdownInputRules(mySchema)
  ]
})
  window.view = new EditorView(document.querySelector("#editor"), {state})
  return window.view;
}

function buildMarkdownInputRules(schema) {
  const rules = [];
  const { heading, bullet_list, ordered_list, blockquote, code_block } = schema.nodes;

  // "# " -> heading
  if (heading) {
    rules.push(textblockTypeInputRule(/^(#{1,6})\s$/, heading, m => ({ level: m[1].length })));
  }

  // "> " -> blockquote
  if (blockquote) {
    rules.push(wrappingInputRule(/^\s*>\s$/, blockquote));
  }

  // "- " / "* " / "+ " -> bullet list
  if (bullet_list) {
    rules.push(wrappingInputRule(/^\s*([-+*])\s$/, bullet_list));
  }

  // "1. " -> ordered list
  if (ordered_list) {
    rules.push(wrappingInputRule(/^(\d+)\.\s$/, ordered_list, (match) => ({ order: +match[1] })));
  }

  // "```" -> code block
  if (code_block) {
    rules.push(textblockTypeInputRule(/^```$/, code_block));
  }

  return inputRules({ rules });
}