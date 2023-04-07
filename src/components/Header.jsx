import PropTypes from 'prop-types'

export default function Header({ notificationsCount, handleMarkAsRead }) {
	return (
		<header>
			<p>
				Notifications <span>{notificationsCount}</span>
			</p>
			<button onClick={handleMarkAsRead}>Mark all as read</button>
		</header>
	)
}

Header.propTypes = {
	notificationsCount: PropTypes.number.isRequired,
	handleMarkAsRead: PropTypes.func.isRequired,
}
