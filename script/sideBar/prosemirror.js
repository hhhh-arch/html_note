import {EditorState} from '../../libs/prosemirror-state.js'
import {EditorView} from '../../libs/prosemirror-view.js'
import {Schema, DOMParser} from '../../libs/prosemirror-model.js'
import {schema} from '../../libs/prosemirror-schema-basic.js'
import {exampleSetup} from '../../libs/prosemirror-example-setup.js'
import {addListNodes} from '../../libs/prosemirror-schema-list.js'

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