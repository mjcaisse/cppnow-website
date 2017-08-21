const _some = require('lodash/some');
const React = require('react');
const ReactDOM = require('react-dom');
const Speakers = require('submission/components/Speakers');
const SubmissionInfo = require('submission/components/SubmissionInfo');
const SubmissionStore = require('submission/data/SubmissionStore');
const ToTheProgramCommittee = require('submission/components/ToTheProgramCommittee');

class App extends React.PureComponent {
    constructor(props) {
        super(props);

        this.onTrigger = () => {
            this.forceUpdate();
        }

        this.onSave = () => {
            // TODO
            console.log('onSave')
            console.log(SubmissionStore.exportData());
        };
    }

    componentWillMount() {
        SubmissionStore.onChange(this.onTrigger);
    }
    componentWillUnmount() {
        SubmissionStore.offChange(this.onTrigger);
    }

    render() {
        const mainErrors = SubmissionStore.getAt('top.errors');

        return (
            <div>
                <SubmissionInfo
                    state={SubmissionStore.getAt('top.submission')}
                    path="top.submission"
                    setAt={SubmissionStore.setAt} />



                <Speakers
                    state={SubmissionStore.getAt('top.speakers')}
                    path="top.speakers"
                    setAt={SubmissionStore.setAt}
                    createNewSpeaker={SubmissionStore.createNewSpeaker} />



                <ToTheProgramCommittee
                    state={SubmissionStore.getAt('top.toTheProgramCommittee')}
                    path="top.toTheProgramCommittee"
                    setAt={SubmissionStore.setAt} />


                
                <button onClick={this.onSave} disabled={_some(mainErrors)} className="buttonPrimaryLarge" tabIndex="0" type="button">
                    Submit
                </button>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('ReactHook'));
