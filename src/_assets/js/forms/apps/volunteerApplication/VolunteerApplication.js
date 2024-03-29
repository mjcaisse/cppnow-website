const _some = require('lodash/some');
const Person = require('apps/volunteerApplication/components/Person');
const React = require('react');
const ReactDOM = require('react-dom');
const VolunteerApplicationStore = require('apps/volunteerApplication/data/VolunteerApplicationStore');

class App extends React.PureComponent {
    constructor(props) {
        super(props);

        this.onTrigger = () => {
            this.forceUpdate();
        };

        this.onSave = () => {
            // TODO
            console.log('onSave')
        };
    }

    componentWillMount() {
        VolunteerApplicationStore.onChange(this.onTrigger);
    }
    componentWillUnmount() {
        VolunteerApplicationStore.offChange(this.onTrigger);
    }

    render() {
        const mainErrors = VolunteerApplicationStore.getAt('top.errors');

        return (
            <div>
                <Person
                    state={VolunteerApplicationStore.getAt('top.person')}
                    path="top.person"
                    setAt={VolunteerApplicationStore.setAt} />

                <button onClick={this.onSave} disabled={_some(mainErrors)} className="buttonPrimaryLarge" tabIndex="0" type="button">
                    Submit
                </button>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('ReactHook'));