import {EditorState, Plugin} from "prosemirror-state"
import {EditorView, DecorationSet, Decoration} from "prosemirror-view"
import {MenuItem, DropdownSubmenu} from "prosemirror-menu"
import {Schema, DOMParser, DOMSerializer, Node} from "prosemirror-model"
import {schema} from "prosemirror-schema-basic"
import {addListNodes} from "prosemirror-schema-list"
import {exampleSetup} from "prosemirror-example-setup"
import {
    defaultMarkdownSerializer,
    MarkdownParser,
    MarkdownSerializer,
    defaultMarkdownParser
} from "prosemirror-markdown";
import {keymap} from "prosemirror-keymap"
import {history, undo, redo} from "prosemirror-history"
import {baseKeymap, toggleMark} from "prosemirror-commands"
import {
    inputRules,
    textblockTypeInputRule,
    wrappingInputRule,
} from "prosemirror-inputrules";
import {dropCursor} from "prosemirror-dropcursor";
import {gapCursor} from "prosemirror-gapcursor";

import DOMPurify from 'dompurify';
export {getMarkdown};

function getMarkdown() {
    const serializer = defaultMarkdownSerializer;
    const markdown = serializer.serialize(window.view.state.doc);
    console.log('markdown', markdown);
    return markdown;
}

export {get_hmtl};

function get_hmtl() {
    // 获取当前文档
    const fragment = DOMSerializer.fromSchema(view.state.schema).serializeFragment(
        view.state.doc.content
    );

    const wrapper = document.createElement("div");
    wrapper.appendChild(fragment);
    const html = DOMPurify.sanitize(wrapper.innerHTML, {USE_PROFILES: {html: true}});
    //console.log('html', html);
    return html;
}
export {init_notes_html};

function init_notes_html(json_string){
    const state = setup_prosemirror();
    const doc = Node.fromJSON(state.schema, JSON.parse(json_string));
    
    state.doc = doc;
    const fragment = DOMSerializer.fromSchema(state.schema).serializeFragment(state.doc.content);
    const wrapper = document.createElement("div");
    wrapper.appendChild(fragment);
    const html = DOMPurify.sanitize(wrapper.innerHTML, {USE_PROFILES: {html: true}});
    console.log('html', html);
    return html;
}

export {get_doc_json};

function get_doc_json() {
    const doc = window.view.state.doc;
    const json = doc.toJSON();
    //console.log('json', json);
    const jsonString = JSON.stringify(json);
    return jsonString;
}

export {retrive_doc_json};

function retrive_doc_json(json_string, state) {
    const doc = Node.fromJSON(state.schema, JSON.parse(json_string));
    //console.log('doc', doc);
    return doc;
}

export {initProsemirror_without_notes};

function initProsemirror_without_notes() {
    const state = setup_prosemirror();
    window.view = new EditorView(document.querySelector("#editor"), {state})
    return window.view;
}

export {initProsemirror_with_notes};

function initProsemirror_with_notes(note) {
    const state = setup_prosemirror();
    state.doc = retrive_doc_json(note, state);
    window.view = new EditorView(document.querySelector("#editor"), {state})
    return window.view;
}

function setup_prosemirror() {
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
    return state;
}

function setup_prosemirror_with_decorations() {
    const state = setup_prosemirror();
    let purplePlugin = new Plugin({
        props: {
            decorations(state) {
                return DecorationSet.create(state.doc, [
                    Decoration.inline(0, state.doc.content.size, {style: "color: white !important"})
                ])
            }
        }
    })
    state.plugins.push(purplePlugin);
    return state;
}

export {initProsemirror_without_notes_white};

function initProsemirror_without_notes_white() {
    const editor = document.querySelector("#editor");
    const state = setup_prosemirror_with_decorations();
    window.view = new EditorView(editor, {state})
    return window.view;
}

export {initProsemirror_with_notes_white};

function initProsemirror_with_notes_white(note) {
    const editor = document.querySelector("#editor");
    const state = setup_prosemirror_with_decorations();
    state.doc = retrive_doc_json(note, state);
    window.view = new EditorView(editor, {state})
    return window.view;
}


function buildMarkdownInputRules(schema) {
    const rules = [];
    const {heading, bullet_list, ordered_list, blockquote, code_block} = schema.nodes;

    // "# " -> heading
    if (heading) {
        rules.push(textblockTypeInputRule(/^(#{1,6})\s$/, heading, m => ({level: m[1].length})));
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
        rules.push(wrappingInputRule(/^(\d+)\.\s$/, ordered_list, (match) => ({order: +match[1]})));
    }

    // "```" -> code block
    if (code_block) {
        rules.push(textblockTypeInputRule(/^```$/, code_block));
    }

    return inputRules({rules});
}

export {setup_markdown_input_rules};

function setup_markdown_input_rules() {
    const markdown_button_list = create_markdown_button_list();
    const markdown_dropdownSubmenu = new DropdownSubmenu(markdown_button_list);

    const note_card_editor = document.querySelector('.note-card-editor');
    if (!note_card_editor) {
        console.error('note_card_editor not found');
        return;
    }
    const markdown_dropdownSubmenu_dom = markdown_dropdownSubmenu.render(window.view).dom;
    markdown_dropdownSubmenu_dom.className = 'markdown-btn';
    markdown_dropdownSubmenu_dom.style.backgroundColor = 'black';
    note_card_editor.appendChild(markdown_dropdownSubmenu_dom);
    return markdown_dropdownSubmenu;
}

function create_markdown_button_list() {
    const schema = window.view.state.schema;
    const strong_button = new MenuItem({
        title: "Toggle bold",
        label: "Bold",
        enable: state => toggleMark(schema.marks.strong)(state),
        run: toggleMark(schema.marks.strong)
    });
    const italic_button = new MenuItem({
        title: "Toggle italic",
        label: "Italic",
        enable: state => toggleMark(schema.marks.em)(state),
        run: toggleMark(schema.marks.em)
    });
    const underline_button = new MenuItem({
        title: "Toggle underline",
        label: "Underline",
        enable: state => toggleMark(schema.marks.underline)(state),
        run: toggleMark(schema.marks.underline)
    });
    const strikethrough_button = new MenuItem({
        title: "Toggle strikethrough",
        label: "Strikethrough",
        enable: state => toggleMark(schema.marks.strikethrough)(state),
        run: toggleMark(schema.marks.strikethrough)
    });
    const code_button = new MenuItem({
        title: "Toggle code",
        label: "Code",
        enable: state => toggleMark(schema.marks.code)(state),
        run: toggleMark(schema.marks.code)
    });
    const link_button = new MenuItem({
        title: "Toggle link",
        label: "Link",
        enable: state => toggleMark(schema.marks.link)(state),
        run: toggleMark(schema.marks.link)
    });
    const image_button = new MenuItem({
        title: "Toggle image",
        label: "Image",
        enable: state => toggleMark(schema.marks.image)(state),
        run: toggleMark(schema.marks.image)
    });
    const bullet_list_button = new MenuItem({
        title: "Toggle bullet list",
        label: "Bullet List",
        enable: state => toggleMark(schema.marks.bullet_list)(state),
        run: toggleMark(schema.marks.bullet_list)
    });
    const ordered_list_button = new MenuItem({
        title: "Toggle ordered list",
        label: "Ordered List",
        enable: state => toggleMark(schema.marks.ordered_list)(state),
        run: toggleMark(schema.marks.ordered_list)
    });
    const code_block_button = new MenuItem({
        title: "Toggle code block",
        label: "Code Block",
        enable: state => toggleMark(schema.marks.code_block)(state),
        run: toggleMark(schema.marks.code_block)
    });
    const heading1_button = new MenuItem({
        title: "Toggle heading 1",
        label: "Heading 1",
        enable: state => toggleMark(schema.marks.heading1)(state),
        run: toggleMark(schema.marks.heading1)
    });
    const heading2_button = new MenuItem({
        title: "Toggle heading 2",
        label: "Heading 2",
        enable: state => toggleMark(schema.marks.heading2)(state),
        run: toggleMark(schema.marks.heading2)
    });
    const heading3_button = new MenuItem({
        title: "Toggle heading 3",
        label: "Heading 3",
        enable: state => toggleMark(schema.marks.heading3)(state),
        run: toggleMark(schema.marks.heading3)
    });
    const heading4_button = new MenuItem({
        title: "Toggle heading 4",
        label: "Heading 4",
        enable: state => toggleMark(schema.marks.heading4)(state),
        run: toggleMark(schema.marks.heading4)
    });
    return [strong_button, italic_button, underline_button, strikethrough_button, code_button, link_button, image_button, bullet_list_button, ordered_list_button, code_block_button, heading1_button, heading2_button, heading3_button, heading4_button];
}