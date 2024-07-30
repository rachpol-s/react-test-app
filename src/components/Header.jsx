import PropTypes from 'prop-types'

export default function Header({ text }) {
  return <div>header {text}</div>
}

Header.propTypes = {
  text: PropTypes.string
}