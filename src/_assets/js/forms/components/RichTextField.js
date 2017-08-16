const React = require('react');
const DraftJs = require('draft-js');


const Editor = DraftJs.Editor;
const RichUtils = DraftJs.RichUtils;
const EditorState = DraftJs.EditorState;

const setBlockStyle = (event, context, command) => {
    event.preventDefault();
    context.field.focus();
    setTimeout(() => {
        context.props.onChange(RichUtils.toggleBlockType(context.props.state, command));
    });
};

const setInlineStyle = (event, context, command) => {
    event.preventDefault();
    context.field.focus();
    setTimeout(() => {
        context.props.onChange(RichUtils.toggleInlineStyle(context.props.state, command));
    });
};

class RichTextField extends React.PureComponent {
    constructor(props) {
        super(props);

        this.onMouseDownTop = this.onMouseDownTop.bind(this);
        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.onTab = this.onTab.bind(this);

        this.handleKeyCommand = this.handleKeyCommand.bind(this);

        this.onHeader = this.onHeader.bind(this);
        this.onUl = this.onUl.bind(this);
        this.onOl = this.onOl.bind(this);
        this.onBlockquote = this.onBlockquote.bind(this);
        this.onCodeBlock = this.onCodeBlock.bind(this);

        this.onBold = this.onBold.bind(this);
        this.onItalic = this.onItalic.bind(this);
        this.onUnderline = this.onUnderline.bind(this);
        this.onCode = this.onCode.bind(this);
    }

    onMouseDownTop(e) {
        e.preventDefault();
        this.props.onSetFocus(true);
    }

    onFocus() {
        this.props.onSetFocus(true);
    }

    onBlur() {
        this.props.onSetFocus(false);
    }

    onTab(e) {
        const maxDepth = 4;
        this.props.onChange(RichUtils.onTab(e, this.props.state, maxDepth));
    }

    handleKeyCommand(command) {
        const newState = RichUtils.handleKeyCommand(this.props.state, command);

        if (newState) {
            this.props.onChange(newState);
            return 'handled';
        }
        return 'not-handled';
    }

    onHeader(e) {
        setBlockStyle(e, this, 'header-three');
    }
    onUl(e) {
        setBlockStyle(e, this, 'unordered-list-item');
    }
    onOl(e) {
        setBlockStyle(e, this, 'ordered-list-item');
    }
    onBlockquote(e) {
        setBlockStyle(e, this, 'blockquote');
    }
    onCodeBlock(e) {
        setBlockStyle(e, this, 'code-block');
    }

    onBold(e) {
        setInlineStyle(e, this, 'BOLD');
    }
    onItalic(e) {
        setInlineStyle(e, this, 'ITALIC');
    }
    onUnderline(e) {
        setInlineStyle(e, this, 'UNDERLINE');
    }
    onCode(e) {
        setInlineStyle(e, this, 'CODE');
    }

    componentDidUpdate(prevProps) {
        if (this.props.focusCount !== prevProps.focusCount) {
            // We blurred, do nothing
            if (this.props.focusCount === -1) {
                return;
            }

            // Something caused us to desire focus, manually trigger focus
            // The onFocus callback might cause the already focused to refocus, but this is safe
            this.field.focus();
        }
    }
    // <div onFocus={this.onTabbedFocus} tabIndex="0" />

    render() {
        const className = [
            'richTextField',
            this.props.focusCount >= 0 ? 'focused' : '',
            this.props.error ? 'error' : '',
        ].join(' ');

        const currentStyle = this.props.state.getCurrentInlineStyle();

        const selection = this.props.state.getSelection();
        const currentBlockType = this.props.state.getCurrentContent().getBlockForKey(selection.getStartKey()).getType();

        return (
            <div className={className}>
                <div className="richTextTop" onMouseDown={this.onMouseDownTop}>
                    <div className="richTextButtons">
                        <button className={`richTextButton ${currentBlockType === 'header-three' ? 'active' : ''}`} onMouseDown={this.onHeader} tabIndex="-1">Header</button>
                        <button className={`richTextButton ${currentBlockType === 'unordered-list-item' ? 'active' : ''}`} onMouseDown={this.onUl} tabIndex="-1">Unordered List</button>
                        <button className={`richTextButton ${currentBlockType === 'ordered-list-item' ? 'active' : ''}`} onMouseDown={this.onOl} tabIndex="-1">Ordered List</button>
                        <button className={`richTextButton ${currentBlockType === 'blockquote' ? 'active' : ''}`} onMouseDown={this.onBlockquote} tabIndex="-1">Quote</button>
                        <button className={`richTextButton ${currentBlockType === 'code-block' ? 'active' : ''}`} onMouseDown={this.onCodeBlock} tabIndex="-1">Code Block</button>
                    </div>
                    <div className="richTextButtons">
                        <button className={`richTextButton ${currentStyle.has('BOLD') ? 'active' : ''}`} onMouseDown={this.onBold} tabIndex="-1">Bold</button>
                        <button className={`richTextButton ${currentStyle.has('ITALIC') ? 'active' : ''}`} onMouseDown={this.onItalic} tabIndex="-1">Italic</button>
                        <button className={`richTextButton ${currentStyle.has('UNDERLINE') ? 'active' : ''}`} onMouseDown={this.onUnderline} tabIndex="-1">Underline</button>
                        <button className={`richTextButton ${currentStyle.has('CODE') ? 'active' : ''}`} onMouseDown={this.onCode} tabIndex="-1">Monospace</button>
                    </div>
                </div>

                <div className="richTextContentBox">
                    <Editor
                        ref={(field) => { this.field = field; }}
                        editorState={this.props.state}
                        handleKeyCommand={this.handleKeyCommand}
                        onChange={this.props.onChange}
                        onFocus={this.onFocus}
                        onBlur={this.onBlur}
                        onTab={this.onTab}
                        tabIndex="0" />
                </div>
            </div>
        );
    }
}

module.exports = RichTextField
