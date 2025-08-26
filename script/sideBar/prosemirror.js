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
      
      window.view = new EditorView(textArea, {
        state: EditorState.create({
          plugins: exampleSetup({schema: mySchema})
        })
      })
    return mySchema;
}