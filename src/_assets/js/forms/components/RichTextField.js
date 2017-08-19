const _has = require('lodash/has');
const _uniqueId = require('lodash/uniqueId');
const CompositeDecorator = require('draft-js').CompositeDecorator;
const DraftJs = require('draft-js');
const React = require('react');

const Editor = DraftJs.Editor;
const RichUtils = DraftJs.RichUtils;
const EditorState = DraftJs.EditorState;



class Link extends React.Component {
    render() {
        return (
            <a href={this.props.contentState.getEntity(this.props.entityKey).getData().url}>
                {this.props.children}
            </a>
        );
    }
};



const setBlockStyle = (event, context, command) => {
    event.preventDefault();
    context.field.focus();
    setTimeout(() => {
        context.onChange(RichUtils.toggleBlockType(context.getEditorState(), command));
    });
};

const setInlineStyle = (event, context, command) => {
    event.preventDefault();
    context.field.focus();
    setTimeout(() => {
        context.onChange(RichUtils.toggleInlineStyle(context.getEditorState(), command));
    });
};

const addUrlAtSelection = (state, url) => {
    const contentState = state.getCurrentContent();
    const contentStateWithEntity = contentState.createEntity(
        'LINK',
        'MUTABLE',
        { url: url },
    );
    const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
    const newEditorState = EditorState.set(state, { currentContent: contentStateWithEntity });

    return RichUtils.toggleLink(newEditorState, newEditorState.getSelection(), entityKey);
};

const getCurrentUrl = (state) => {
    const selection = state.getSelection();
    if (selection.isCollapsed()) {
        return '';
    }

    const contentState = state.getCurrentContent();
    const startKey = selection.getStartKey();
    const startOffset = selection.getStartOffset();
    const blockWithLinkAtBeginning = contentState.getBlockForKey(startKey);
    const linkKey = blockWithLinkAtBeginning.getEntityAt(startOffset);

    if (linkKey) {
        const linkInstance = contentState.getEntity(linkKey);
        return linkInstance.getData().url;
    }

    return '';
};

const getFirstUrlInSelection = (state) => {
    const selection = state.getSelection();
    const contentState = state.getCurrentContent();
    const entityMap = contentState.getEntityMap();

    let currentUrl = '';

    contentState.getBlockForKey(selection.getAnchorKey())
        .getCharacterList()
        .slice(selection.getStartOffset(), selection.getEndOffset())
        .find((v) => {
            // We use find so it will short circuit at the first found link

            var entity = v.getEntity();

            // Not a link, move on
            if (!entity || contentState.getEntity(entity).getType() !== 'LINK') {
                return false;
            }

            currentUrl = contentState.getEntity(entity).getData().url;

            // Cause short circuit
            return true;
        });

    return currentUrl || '';
}



class RichTextField extends React.PureComponent {
    constructor(props) {
        super(props);

        this.getEditorState = this.getEditorState.bind(this);
        this.onChange = this.onChange.bind(this);
        this.handleKeyCommand = this.handleKeyCommand.bind(this);
        this.onTab = this.onTab.bind(this);

        this.onMouseDownTop = this.onMouseDownTop.bind(this);
        this.onMouseDownLinkWrapper = this.onMouseDownLinkWrapper.bind(this);

        this.onBold = this.onBold.bind(this);
        this.onItalic = this.onItalic.bind(this);
        this.onUnderline = this.onUnderline.bind(this);
        this.onCode = this.onCode.bind(this);

        this.onHeader = this.onHeader.bind(this);
        this.onUl = this.onUl.bind(this);
        this.onOl = this.onOl.bind(this);
        this.onBlockquote = this.onBlockquote.bind(this);
        this.onCodeBlock = this.onCodeBlock.bind(this);

        this.onLink = this.onLink.bind(this);
        this.onChangeCurrentUrl = this.onChangeCurrentUrl.bind(this);
        this.onClickRemoveLink = this.onClickRemoveLink.bind(this);

        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
    }

    getEditorState() {
        return this.props.mutableStore.getAt(this.props.state.mutableKey);
    }
    onChange(editorState) {
        if (editorState !== this.getEditorState()) {
            this.props.mutableStore.setAt(this.props.state.mutableKey, editorState);
            this.props.setAt(`${this.props.path}.updateTrigger`, _uniqueId());
        }
    }
    handleKeyCommand(command) {
        const newState = RichUtils.handleKeyCommand(this.getEditorState(), command);

        if (newState) {
            this.onChange(newState);
            return 'handled';
        }
        return 'not-handled';
    }
    onTab(e) {
        const maxDepth = 4;
        this.onChange(RichUtils.onTab(e, this.getEditorState(), maxDepth));
    }

    onMouseDownTop(e) {
        e.preventDefault();
        this.field.focus();
    }
    onMouseDownLinkWrapper(e) {
        e.stopPropagation();
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

    onLink(e) {
        e.preventDefault();

        const editorState = this.getEditorState();

        // There isn't already a link here, so add one
        if (!RichUtils.currentBlockContainsLink(editorState)) {
            this.onChange(addUrlAtSelection(editorState, ''));
        }

        // Delay focus because the link helper element might not have been unhidden yet
        setTimeout(() => {
            this.linkInput.focus();
        });
    }
    onChangeCurrentUrl(e) {
        const editorState = this.getEditorState();
        const selection = editorState.getSelection();

        // First, remove all existing links in the selection range
        let newEditorState = RichUtils.toggleLink(editorState, selection, null);

        // Then create a link at selection using the current value of the link input
        this.onChange(addUrlAtSelection(editorState, e.target.value));
    }
    onClickRemoveLink() {
        const editorState = this.getEditorState();
        const selection = editorState.getSelection();
        if (!selection.isCollapsed()) {
            this.onChange(RichUtils.toggleLink(editorState, selection, null));

            setTimeout(() => {
                this.field.focus();
            });
        }
    }

    onFocus() {
        this.props.setAt(`${this.props.path}.focusCount`, Math.max(1, this.props.state.focusCount + 1));
    }

    onBlur() {
        this.props.setAt(`${this.props.path}.focusCount`, -1);
    }

    componentDidMount() {
        // Create the mutable data if not available at mount time
        if (!_has(this.props.state, 'mutableKey')) {
            const decorator = new CompositeDecorator([
                {
                    strategy: (contentBlock, callback, contentState) => {
                        contentBlock.findEntityRanges((character) => {
                            const entityKey = character.getEntity();
                            return (entityKey !== null && contentState.getEntity(entityKey).getType() === 'LINK');
                        }, callback);
                    },
                    component: Link,
                },
            ]);

            this.props.setAt({
                [`${this.props.path}.mutableKey`]: this.props.mutableStore.create(EditorState.createEmpty(decorator)),
                [`${this.props.path}.updateTrigger`]: _uniqueId(),
                focusCount: -1, // -1 = not focused
            });
        }
    }

    componentDidUpdate() {
        // 0 = focused programmatically from the outside
        if (this.props.state.focusCount === 0) {
            this.field.focus();
        }
    }

    render() {
        if (!this.props.state.mutableKey) {
            return null;
        }

        const className = [
            'richTextField',
            this.props.state.focusCount >= 0 ? 'focused' : '',
            this.props.error ? 'error' : '',
        ].join(' ');

        const editorState = this.getEditorState();
        const currentStyle = editorState.getCurrentInlineStyle();

        const selection = editorState.getSelection();
        const currentBlockType = editorState.getCurrentContent().getBlockForKey(selection.getStartKey()).getType();

        const currentUrl = getFirstUrlInSelection(editorState);
        const selectionContainsLink = RichUtils.currentBlockContainsLink(editorState);

        return (
            <div className={className}>
                <div className="richTextTop" onMouseDown={this.onMouseDownTop}>
                    <div className="richTextLinkBoxWrapper" style={{ display: selectionContainsLink ? 'block' : 'none' }} onMouseDown={this.onMouseDownLinkWrapper}>
                        <div className="richTextLinkBox">
                            <div className="greyText">
                                Add or edit link URL with the input field.
                            </div>
                            <input ref={(linkInput) => { this.linkInput = linkInput; }} value={currentUrl} onChange={this.onChangeCurrentUrl} placeholder="Add link URL here..." className="input mt4" tabIndex="-1" type="text" />
                            <div className="richTextLinkButtons">
                                <button className="buttonPrimaryNormal richTextLinkButton" onClick={this.onClickRemoveLink} style={{ marginLeft: 'auto' }} tabIndex="0" type="button">
                                    Remove Link
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="richTextButtons">
                        <button className={`richTextButton ${currentStyle.has('BOLD') ? 'active' : ''}`} onMouseDown={this.onBold} tabIndex="-1"><strong>B</strong></button>
                        <button className={`richTextButton ${currentStyle.has('ITALIC') ? 'active' : ''}`} onMouseDown={this.onItalic} tabIndex="-1"><em>i</em></button>
                        <button className={`richTextButton ${currentStyle.has('UNDERLINE') ? 'active' : ''}`} onMouseDown={this.onUnderline} tabIndex="-1"><span style={{ textDecoration: 'underline' }}>U</span></button>
                        <button className={`richTextButton ${currentStyle.has('CODE') ? 'active' : ''}`} onMouseDown={this.onCode} tabIndex="-1"><span style={{ fontFamily: 'monospace' }}>Monospace</span></button>

                        <button className={`richTextButton ${selectionContainsLink ? 'active' : ''}`} style={{ marginLeft: 'auto', cursor: !selection.isCollapsed() ? 'pointer' : 'not-allowed' }} onMouseDown={this.onLink} title="Select text to create a link." tabIndex="-1">Link</button>
                    </div>
                    <div className="richTextButtons">
                        <button className={`richTextButton ${currentBlockType === 'header-three' ? 'active' : ''}`} onMouseDown={this.onHeader} tabIndex="-1">Header</button>
                        <button className={`richTextButton ${currentBlockType === 'unordered-list-item' ? 'active' : ''}`} onMouseDown={this.onUl} tabIndex="-1">UL</button>
                        <button className={`richTextButton ${currentBlockType === 'ordered-list-item' ? 'active' : ''}`} onMouseDown={this.onOl} tabIndex="-1">OL</button>
                        <button className={`richTextButton ${currentBlockType === 'blockquote' ? 'active' : ''}`} onMouseDown={this.onBlockquote} tabIndex="-1">Quote</button>
                        <button className={`richTextButton ${currentBlockType === 'code-block' ? 'active' : ''}`} onMouseDown={this.onCodeBlock} tabIndex="-1">Code Block</button>
                    </div>
                </div>

                <div className="richTextContentBox">
                    <Editor
                        ref={(field) => { this.field = field; }}
                        editorState={editorState}
                        handleKeyCommand={this.handleKeyCommand}
                        onChange={this.onChange}
                        onTab={this.onTab}
                        onFocus={this.onFocus}
                        onBlur={this.onBlur}
                        tabIndex="0" />
                </div>
            </div>
        );
    }
}

module.exports = RichTextField
