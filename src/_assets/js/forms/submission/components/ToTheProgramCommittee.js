const _isEmpty = require('lodash/isEmpty');
const React = require('react');

class ToTheProgramCommittee extends React.PureComponent {
    constructor(props) {
        super(props);

        this.onChangeSessionMaterial = this.onChangeSessionMaterial.bind(this);
        this.onToggleRecordingDistributionPermitted = this.onToggleRecordingDistributionPermitted.bind(this);
        this.onChangeOutline = this.onChangeOutline.bind(this);
        this.onChangeHistory = this.onChangeHistory.bind(this);
        this.onChangeVideo = this.onChangeVideo.bind(this);
        this.onChangeComments = this.onChangeComments.bind(this);
    }

    onChangeSessionMaterial(e) {
        this.props.setAt(`${this.props.path}.sessionMaterial`, e.target.value);
    }
    onToggleRecordingDistributionPermitted() {
        this.props.setAt(`${this.props.path}.recordingDistributionPermitted`, !this.props.state.recordingDistributionPermitted);
    }
    onChangeOutline(e) {
        this.props.setAt(`${this.props.path}.outline`, e.target.value);
    }
    onChangeHistory(e) {
        this.props.setAt(`${this.props.path}.history`, e.target.value);
    }
    onChangeVideo(e) {
        this.props.setAt(`${this.props.path}.video`, e.target.value);
    }
    onChangeComments(e) {
        this.props.setAt(`${this.props.path}.comments`, e.target.value);
    }

    render() {
        const state = this.props.state;

        return (
            <div>
                <h3>To the Program Committee</h3>
                <p>The information in this section is not published, but is intended only for the Program Committee.</p>

                <div className="mb16">
                    <label className="label">
                        Session Material
                        <span className={_isEmpty(state.errors.sessionMaterial) ? 'hide' : 'errorText'}>
                            {state.errors.sessionMaterial}
                        </span>
                    </label>
                    <input value={state.sessionMaterial} onChange={this.onChangeSessionMaterial} className={_isEmpty(state.errors.sessionMaterial) ? 'input' : 'inputError'} tabIndex="0" type="text" />
                    {state.sessionMaterial}
                    <div className="greyText mt4">List material that will be available for on-line distribution: (slides, source code, etc.)</div>
                </div>

                <div className="mb16">
                    <label className="label">
                        Recording Distribution Permitted
                    </label>
                    <label className="checkboxLabel">
                        <input checked={state.recordingDistributionPermitted} onChange={this.onToggleRecordingDistributionPermitted} className="checkbox" tabIndex="0" type="checkbox" />
                        <span>I grant permission for my session to be recorded for public distribution.</span>
                    </label>
                    <div className="greyText mt4">Strongly encouraged, but not required.</div>
                </div>

                <div className="mb16">
                    <label className="label">
                        Outline
                        <span className={_isEmpty(state.errors.outline) ? 'hide' : 'errorText'}>
                            {state.errors.outline}
                        </span>
                    </label>
                    <textarea value={state.outline} onChange={this.onChangeOutline} className={_isEmpty(state.errors.outline) ? 'textarea' : 'textareaError'} rows="4" tabIndex="0" type="text" />
                    <div className="greyText mt4">
                        You'll not be held to this - we understand that this is a snapshot in time.
                    </div>
                </div>

                <div className="mb16">
                    <label className="label">
                        History
                        <span className={_isEmpty(state.errors.history) ? 'hide' : 'errorText'}>
                            {state.errors.history}
                        </span>
                    </label>
                    <textarea value={state.history} onChange={this.onChangeHistory} className={_isEmpty(state.errors.history) ? 'textarea' : 'textareaError'} rows="4" tabIndex="0" type="text" />
                    <div className="greyText mt4">
                        If you've presented this talk before, please tell us where and when.
                        <br />
                        We do accept submissions of sessions presented at other conferences.
                        <br />
                        Repeats of sessions from a previous C++Now are accepted, but, because sessions are recorded, the bar for repeats is higher than for new sessions.
                        <br />
                        Repeats of successful workshops are always welcome.
                    </div>
                </div>

                <div className="mb16">
                    <label className="label">
                        Video
                        <span className={_isEmpty(state.errors.video) ? 'hide' : 'errorText'}>
                            {state.errors.video}
                        </span>
                    </label>
                    <textarea value={state.video} onChange={this.onChangeVideo} className={_isEmpty(state.errors.video) ? 'textarea' : 'textareaError'} rows="4" tabIndex="0" type="text" />
                    <div className="greyText mt4">
                        Please include the URL of a video of you giving a technical presentation (as similar as possible to your proposal).
                        <br />
                        We do accept submissions from first time presenters, so this is optional, but if you have a recording of yourself presenting, it helps the PC evaluate your presentation abilities.
                        <br />
                        You may use a video that you've made and posted yourself. If no such video exists, consider a link to a slide deck that you've created.
                        <br />
                        Feel free to add any comments you feel necessary about this material.
                    </div>
                </div>

                <div className="mb16">
                    <label className="label">
                        Comments
                        <span className={_isEmpty(state.errors.comments) ? 'hide' : 'errorText'}>
                            {state.errors.comments}
                        </span>
                    </label>
                    <textarea value={state.comments} onChange={this.onChangeComments} className={_isEmpty(state.errors.comments) ? 'textarea' : 'textareaError'} rows="4" tabIndex="0" type="text" />
                    <div className="greyText mt4">
                        Anything you'd like the Program Committee to know about your talk.
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = ToTheProgramCommittee;

            