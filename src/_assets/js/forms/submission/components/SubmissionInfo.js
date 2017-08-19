const _isEmpty = require('lodash/isEmpty');
const KeyMutableStore = require('utils/KeyedMutableStore');
const React = require('react');
const RichTextField = require('components/RichTextField');
const Select = require('components/Select');
const SessionLengthList = require('submission/data/SessionLengthList');
const SessionTypeList = require('submission/data/SessionTypeList');

class SubmissionInfo extends React.PureComponent {
    constructor(props) {
        super(props);

        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeTags = this.onChangeTags.bind(this);
        this.onSelectType = this.onSelectType.bind(this);
        this.onChangeCustomType = this.onChangeCustomType.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onSetFocusDescription = this.onSetFocusDescription.bind(this);

        this.onSelectMinimumLength = this.onSelectMinimumLength.bind(this);
        this.onSelectPreferredLength = this.onSelectPreferredLength.bind(this);
        this.onSelectMaximumLength = this.onSelectMaximumLength.bind(this);

        this.onToggleBeginner = this.onToggleBeginner.bind(this);
        this.onToggleIntermediate = this.onToggleIntermediate.bind(this);
        this.onToggleAdvanced = this.onToggleAdvanced.bind(this);
        this.onToggleExpert = this.onToggleExpert.bind(this);

        this.onChangeAudienceDescription = this.onChangeAudienceDescription.bind(this);
    }

    onChangeTitle(e) {
        this.props.setAt(`${this.props.path}.title`, e.target.value);
    }
    onChangeTags(e) {
        this.props.setAt(`${this.props.path}.tags`, e.target.value);
    }

    onSelectType(selection) {
        this.props.setAt(`${this.props.path}.type`, selection);
    }
    onChangeCustomType(e) {
        this.props.setAt(`${this.props.path}.customType`, e.target.value);
    }

    onChangeDescription(editorState, shouldFocus) {
        const changes = {};

        if (editorState !== KeyMutableStore.getAt(this.props.state.description.key)) {
            this.props.setAt(`${this.props.path}.description.setCount`, KeyMutableStore.setAt(this.props.state.description.key, editorState));
        }

        if (shouldFocus) {
            changes[`${this.props.path}.description.focusCount`] = this.props.state.description.focusCount + 1;
        }

        if (!_isEmpty(changes)) {
            this.props.setAt(changes);
        }
    }
    onSetFocusDescription(isFocused) {
        this.props.setAt(`${this.props.path}.description.focusCount`, isFocused ? this.props.state.description.focusCount + 1 : -1);
    }

    onSelectMinimumLength(selection) {
        this.props.setAt(`${this.props.path}.minimumLength`, selection);
    }
    onSelectPreferredLength(selection) {
        this.props.setAt(`${this.props.path}.preferredLength`, selection);
    }
    onSelectMaximumLength(selection) {
        this.props.setAt(`${this.props.path}.maximumLength`, selection);
    }

    onToggleBeginner() {
        this.props.setAt(`${this.props.path}.sessionLevel.beginner`, !this.props.state.sessionLevel.beginner);
    }
    onToggleIntermediate() {
        this.props.setAt(`${this.props.path}.sessionLevel.intermediate`, !this.props.state.sessionLevel.intermediate);
    }
    onToggleAdvanced() {
        this.props.setAt(`${this.props.path}.sessionLevel.advanced`, !this.props.state.sessionLevel.advanced);
    }
    onToggleExpert() {
        this.props.setAt(`${this.props.path}.sessionLevel.expert`, !this.props.state.sessionLevel.expert);
    }

    onChangeAudienceDescription(e) {
        this.props.setAt(`${this.props.path}.audienceDescription`, e.target.value);
    }

    render() {
        const state = this.props.state;

        return (
            <div>
                <h3>Submission Info</h3>
                <p>The information in this section is directed to attendees and suitable for the conference web site.</p>

                <div className="mb16">
                    <label className="label">
                        Title
                        <span className={_isEmpty(state.errors.title) ? 'hide' : 'errorText'}>
                            {state.errors.title}
                        </span>
                    </label>
                    <input value={state.title} onChange={this.onChangeTitle} className={_isEmpty(state.errors.title) ? 'input' : 'inputError'} tabIndex="0" type="text" />
                    <div className="greyText mt4">
                        Please use <a href="http://titlecase.com/">AP style title case</a>. Acronyms should be all uppercase. Code elements such as keywords, function names, etc should be as would be written in code. Subtitles should be set off with colons, not dashes, using a space after, but not before the colon. See <a href="http://www.boost.org/development/requirements.html#Naming_consistency">Boost library naming rules</a>.
                        <br />
                        For example, "My Adventures With Boost.Asio: return to Sender".
                    </div>
                </div>

                <div className="mb16">
                    <label className="label">
                        Tags
                        <span className={_isEmpty(state.errors.tags) ? 'hide' : 'errorText'}>
                            {state.errors.tags}
                        </span>
                    </label>
                    <input value={state.tags} onChange={this.onChangeTags} className={_isEmpty(state.errors.tags) ? 'input' : 'inputError'} tabIndex="0" type="text" />
                    <div className="greyText mt4">
                        Please include a comma separated list of at least three tags for the session. Use lower case except for proper nouns and acronyms. Strive for the general, not the specific:"testing," rather than "unit tests." Spell out acronyms unless they are more likely to be understood as acronyms: "artificial intelligence" rather than "AI" and "GUI" rather than "graphical user interface."
                        <br />
                        For example, "games,performance,cross platform,I/O,C compatibility,HTML"
                    </div>
                </div>

                <div className="mb16">
                    <label className="label">
                        Session Type
                        <span className={_isEmpty(state.errors.type) ? 'hide' : 'errorText'}>
                            {state.errors.type}
                        </span>
                    </label>
                    <Select
                        value={state.type}
                        choices={SessionTypeList}
                        onSelect={this.onSelectType}
                        showEmpty={true}
                        className={_isEmpty(String(state.errors.type)) ? 'select' : 'selectError'}
                        tabIndex="0" />

                    {state.type === 'custom' ? (
                        <div>
                            <label className="label">
                                Custom Session Type
                                <span className={_isEmpty(state.errors.customType) ? 'hide' : 'errorText'}>
                                    {state.errors.customType}
                                </span>
                            </label>

                            <input value={state.customType} onChange={this.onChangeCustomType} className={_isEmpty(state.errors.customType) ? 'input' : 'inputError'} tabIndex="0" type="text" />
                        </div>
                    ) : null}
                    <div className="greyText mt4">Select a session type or enter your own.</div>
                </div>

                <div className="mb16">
                    <label className="label">
                        Session Description
                        <span className={_isEmpty(state.errors.description) ? 'hide' : 'errorText'}>
                            {state.errors.description}
                        </span>
                    </label>
                    <RichTextField
                        state={KeyMutableStore.getAt(state.description.key)}
                        currentUrl={state.description.currentUrl}
                        focusCount={state.description.focusCount}
                        onChange={this.onChangeDescription}
                        onSetFocus={this.onSetFocusDescription}
                        error={!_isEmpty(state.errors.description)} />
                    <div className="greyText mt4">
                        As it should appear in the program. About one to three paragraphs.
                        <br />
                        This is your pitch to both the Program Committee and to potential attendees about why they should see your presentation.
                        <br />
                        Try to answer the reader's questions, Why is this important to me? and What will I learn?
                    </div>
                </div>

                <div className="formBox">
                    <h4>Session Length</h4>
                    <p>Standard sessions are 90 minutes. Preferred, min, and max can all be the same value.</p>

                    <div className="mb16">
                        <label className="label">
                            Minimum Session Length
                            <span className={_isEmpty(state.errors.minimumLength) ? 'hide' : 'errorText'}>
                                {state.errors.minimumLength}
                            </span>
                        </label>
                        <Select
                            value={state.minimumLength}
                            choices={SessionLengthList}
                            onSelect={this.onSelectMinimumLength}
                            showEmpty={true}
                            className={_isEmpty(String(state.errors.minimumLength)) ? 'select' : 'selectError'}
                            tabIndex="0" />
                    </div>

                    <div className="mb16">
                        <label className="label">
                            Preferred Session Length
                            <span className={_isEmpty(state.errors.preferredLength) ? 'hide' : 'errorText'}>
                                {state.errors.preferredLength}
                            </span>
                        </label>
                        <Select
                            value={state.preferredLength}
                            choices={SessionLengthList}
                            onSelect={this.onSelectPreferredLength}
                            showEmpty={true}
                            className={_isEmpty(String(state.errors.preferredLength)) ? 'select' : 'selectError'}
                            tabIndex="0" />
                    </div>

                    <div>
                        <label className="label">
                            Maximum Session Length
                            <span className={_isEmpty(state.errors.maximumLength) ? 'hide' : 'errorText'}>
                                {state.errors.maximumLength}
                            </span>
                        </label>
                        <Select
                            value={state.maximumLength}
                            choices={SessionLengthList}
                            onSelect={this.onSelectMaximumLength}
                            showEmpty={true}
                            className={_isEmpty(String(state.errors.maximumLength)) ? 'select' : 'selectError'}
                            tabIndex="0" />
                    </div>
                </div>

                <div className="formBox">
                    <h4>Audience</h4>

                    <div className="mb16">
                        <label className="label">
                            Session Level
                            <span className={_isEmpty(state.errors.sessionLevel) ? 'hide' : 'errorText'}>
                                {state.errors.sessionLevel}
                            </span>
                        </label>

                        <label className="checkboxLabel">
                            <input checked={state.sessionLevel.beginner} onChange={this.onToggleBeginner} className="checkbox" tabIndex="0" type="checkbox" />
                            <span>Beginner</span>
                        </label>
                        <label className="checkboxLabel">
                            <input checked={state.sessionLevel.intermediate} onChange={this.onToggleIntermediate} className="checkbox" tabIndex="0" type="checkbox" />
                            <span>Intermediate</span>
                        </label>
                        <label className="checkboxLabel">
                            <input checked={state.sessionLevel.advanced} onChange={this.onToggleAdvanced} className="checkbox" tabIndex="0" type="checkbox" />
                            <span>Advanced</span>
                        </label>
                        <label className="checkboxLabel">
                            <input checked={state.sessionLevel.expert} onChange={this.onToggleExpert} className="checkbox" tabIndex="0" type="checkbox" />
                            <span>Expert</span>
                        </label>
                        <div className="greyText mt4">If your presentation spans levels, such as intermediate to advanced, check all that apply.</div>
                    </div>

                    <div>
                        <label className="label">
                            Audience Description
                            <span className={_isEmpty(state.errors.audienceDescription) ? 'hide' : 'errorText'}>
                                {state.errors.audienceDescription}
                            </span>
                        </label>
                        <input value={state.audienceDescription} onChange={this.onChangeAudienceDescription} className={_isEmpty(state.errors.audienceDescription) ? 'input' : 'inputError'} tabIndex="0" type="text" />
                        <div className="greyText mt4">
                            A quality description helps your audience find your submission. Please keep it short and sweet. Full sentence not required.
                            <br />
                            Examples: library authors, application developers, game developers, etc.
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = SubmissionInfo;
