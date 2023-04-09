import NotificationItem from './NotificationItem'
import PropTypes from 'prop-types'
import './NotificationsList.css'

export default function NotificationsList({ notifications }) {
	return (
		<ul className='notifications__list'>
			{notifications.map(notification => (
				<NotificationItem
					key={notification.id}
					notificationItem={notification}
				/>
			))}
		</ul>
	)
}

NotificationsList.propTypes = {
	notifications: PropTypes.array.isRequired,
}
