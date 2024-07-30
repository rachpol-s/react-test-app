import PropTypes from 'prop-types'

export default function Checkbox({ text, isChecked }) {
    return <div>
        {text} {isChecked ? 'is checked' : 'is uncheck'}
    </div>
}

Checkbox.propTypes = {
    text: PropTypes.string,
    isChecked: PropTypes.bool
}