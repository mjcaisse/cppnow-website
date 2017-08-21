const _isEmpty = require('lodash/isEmpty');
const React = require('react');

class Person extends React.PureComponent {
    constructor(props) {
        super(props);

        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
    }

    onChangeFirstName(e) {
        this.props.setAt(`${this.props.path}.firstName`, e.target.value);
    }
    onChangeLastName(e) {
        this.props.setAt(`${this.props.path}.lastName`, e.target.value);
    }
    onChangeEmail(e) {
        this.props.setAt(`${this.props.path}.email`, e.target.value);
    }

    render() {
        const state = this.props.state;

        return (
            <div>
                <div className="mb16">
                    <label className="label">
                        First Name
                        <span className={_isEmpty(state.errors.firstName) ? '' : 'errorText'}>
                            {state.errors.firstName}
                        </span>
                    </label>
                    <input value={state.firstName} onChange={this.onChangeFirstName} className={_isEmpty(state.errors.firstName) ? 'input' : 'inputError'} tabIndex="0" type="text" />
                    <div className="greyText mt4">Write the name as it should appear in the conference program.</div>
                </div>

                <div className="mb16">
                    <label className="label">
                        Last Name
                        <span className={_isEmpty(state.errors.lastName) ? 'hide' : 'errorText'}>
                            {state.errors.lastName}
                        </span>
                    </label>
                    <input value={state.lastName} onChange={this.onChangeLastName} className={_isEmpty(state.errors.lastName) ? 'input' : 'inputError'} tabIndex="0" type="text" />
                    <div className="greyText mt4">Write the name as it should appear in the conference program.</div>
                </div>

                <div className="mb16">
                    <label className="label">
                        Email
                        <span className={_isEmpty(state.errors.email) ? 'hide' : 'errorText'}>
                            {state.errors.email}
                        </span>
                    </label>
                    <input value={state.email} onChange={this.onChangeEmail} className={_isEmpty(state.errors.email) ? 'input' : 'inputError'} tabIndex="0" type="text" />
                    <div className="greyText mt4">For conference use only, we will not share this with third parties.</div>
                </div>
            </div>
        );
    }
}

module.exports = Person;
