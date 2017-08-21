const _isEmpty = require('lodash/isEmpty');
const React = require('react');
const Select = require('components/Select');
const CountryList = require('data/CountryList');

class Speaker extends React.PureComponent {
    constructor(props) {
        super(props);

        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeOrganization = this.onChangeOrganization.bind(this);
        this.onSelectCountry = this.onSelectCountry.bind(this);
        this.onChangeBio = this.onChangeBio.bind(this);

        this.onRemove = this.onRemove.bind(this);
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
    onChangeOrganization(e) {
        this.props.setAt(`${this.props.path}.organization`, e.target.value);
    }
    onSelectCountry(country) {
        this.props.setAt(`${this.props.path}.country`, country);
    }
    onChangeBio(e) {
        this.props.setAt(`${this.props.path}.bio`, e.target.value);
    }

    onRemove() {
        this.props.onRemove(this.props.index);
    }

    render() {
        const state = this.props.state;

        return (
            <div className="formBox">
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

                <div className="mb16">
                    <label className="label">
                        Organization
                        <span className={_isEmpty(state.errors.organization) ? 'hide' : 'errorText'}>
                            {state.errors.organization}
                        </span>
                    </label>
                    <input value={state.organization} onChange={this.onChangeOrganization} className={_isEmpty(state.errors.organization) ? 'input' : 'inputError'} tabIndex="0" type="text" />
                    <div className="greyText mt4">The speaker's school, company, or other affiliation.</div>
                </div>

                <div className="mb16">
                    <label className="label">
                        Country
                        <span className={_isEmpty(state.errors.country) ? 'hide' : 'errorText'}>
                            {state.errors.country}
                        </span>
                    </label>
                    <Select
                        value={state.country}
                        choices={CountryList}
                        onSelect={this.onSelectCountry}
                        showEmpty={true}
                        className={_isEmpty(state.errors.country) ? 'select' : 'selectError'}
                        tabIndex="0" />
                    <div className="greyText mt4">The speaker's home country.</div>
                </div>

                <div>
                    <label className="label">
                        Bio
                    </label>
                    <textarea value={state.bio} onChange={this.onChangeBio} className="textarea" rows="4" tabIndex="0" type="text" />
                    <div className="greyText mt4">Please use the third person: "he" or "she" rather than "I" or "me."<br />Each speaker will be given the opportunity to edit their conference bio to include a photo, website, and public social media contacts. For now, we just ask to help the Program Committee better understand your background.</div>
                </div>

                {this.props.allowDeletions ? (
                    <button onClick={this.onRemove} className="buttonWarningNormal mt16 right" tabIndex="0" type="button">
                        Remove Speaker
                    </button>
                ) : null}
            </div>
        );
    }
}

module.exports = Speaker;
