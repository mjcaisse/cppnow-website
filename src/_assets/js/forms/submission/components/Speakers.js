const _map = require('lodash/map');
const ImmutableTools = require('utils/ImmutableTools');
const React = require('react');
const Speaker = require('submission/components/Speaker');

class Speakers extends React.PureComponent {
    constructor(props) {
        super(props);

        this.onAdd = this.onAdd.bind(this);
        this.onRemove = this.onRemove.bind(this);
    }

    onAdd() {
        this.props.setAt(`${this.props.path}.list`, ImmutableTools.push(this.props.state.list, this.props.createNewSpeaker()));
    }
    onRemove(index) {
        if (this.props.state.list.length <= 1) {
            return;
        }

        this.props.setAt(`${this.props.path}.list`, ImmutableTools.removeAt(this.props.state.list, index));
    }

    render() {
        const allowDeletions = this.props.state.list.length > 1;

        return (
            <div>
                <h3>Speakers</h3>
                <p>Please only include speakers that will attend. Co-authors not attending can be recognized in your abstract and/or presentation.</p>

                {_map(this.props.state.list, (speaker, index) => (
                    <Speaker
                        key={speaker.id}
                        state={speaker}
                        path={`${this.props.path}.list[${index}]`}
                        setAt={this.props.setAt}
                        allowDeletions={allowDeletions}
                        index={index}
                        onRemove={this.onRemove} />
                ))}

                <button onClick={this.onAdd} className="buttonPrimaryNormal mb16" tabIndex="0" type="button">
                    Add Speaker
                </button>
            </div>
        );
    }
}

module.exports = Speakers;
