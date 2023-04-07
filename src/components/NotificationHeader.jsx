import PropTypes from 'prop-types'
import './NotificationHeader.css'

export default function Header({ notificationsCount, handleMarkAsRead }) {
	return (
		<section className='header'>
			<div className='header__notifications'>
				<h1 className='header__notifications__title'>Notifications </h1>
				<p className='header__notifications__count'>{notificationsCount}</p>
			</div>
			<button className='header__button' onClick={handleMarkAsRead}>
				Mark all as read
			</button>
		</section>
	)
}

Header.propTypes = {
	notificationsCount: PropTypes.number.isRequired,
	handleMarkAsRead: PropTypes.func.isRequired,
}
