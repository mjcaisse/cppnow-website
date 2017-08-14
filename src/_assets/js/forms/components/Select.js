const _compact = require('lodash/compact');
const _isFunction = require('lodash/isFunction');
const _map = require('lodash/map');
const _omit = require('lodash/omit');
const React = require('react');

class Option extends React.PureComponent {
    render() {
        return (
            <option
                value={this.props.value}
                disabled={this.props.disabled}
                label={this.props.label}>

                {this.props.label}
            </option>
        );
    }
}

class Select extends React.PureComponent {
    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        if (_isFunction(this.props.onChange))
        {
            this.props.onChange(e);
        }

        const selectedIndex = this.refs.select.selectedIndex;

        if (selectedIndex === -1 || (this.props.showEmpty && selectedIndex === 0))
        {
            // Select 'undefined'
            this.props.onSelect(void 0);
            return;
        }

        const offset = this.props.showEmpty ? -1 : 0;

        this.props.onSelect(this.props.choices[selectedIndex + offset].value);
    }

    render() {
        const { choices, showEmpty, onSelect, onChange, sheet, classes } = this.props;
        const other = _omit(this.props, ['choices', 'showEmpty', 'onSelect', 'onChange', 'sheet', 'classes']);

        return (
            <select ref="select" onChange={this.onChange} {...other}>
                {_compact([
                    (showEmpty ? (
                        <option value="" key="default">-- choose --</option>
                    ) : null),
                    _map(choices, (choice) => (
                        <Option
                            key={`${choice.value}+${choice.label}`}
                            value={choice.value}
                            disabled={choice.disabled}
                            label={choice.label} />
                    )),
                ])}
            </select>
        );
    }
}

module.exports = Select;
