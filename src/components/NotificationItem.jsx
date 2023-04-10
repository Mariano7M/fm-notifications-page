import PropTypes from 'prop-types'
import './NotificationItem.css'
import { NOTIFICATIONS_TYPE, getNotificationTitle } from '../notificationsType'

export default function NotificationItem({ notificationItem }) {
	return (
		<li
			className={`notification-item ${
				notificationItem.isRead ? '' : 'notification-item--no-read'
			} `}>
			<img
				className='notification-item__user-avatar'
				src={`./images/${notificationItem.profilePicture}`}
				alt='user avatar'
			/>
			<div className='notification-item__content'>
				<div className='notification-item__main-content'>
					<div>
						<p
							className={`notification-item__title ${
								notificationItem.isRead ? '' : 'notification-item--new'
							}`}>
							<span className='notification-item__username'>Mark Webber</span>
							&nbsp;{getNotificationTitle(notificationItem.type)}&nbsp;
							{(notificationItem.type === NOTIFICATIONS_TYPE.USER_JOIN_GROUP ||
								notificationItem.type ===
									NOTIFICATIONS_TYPE.USER_LEFT_GROUP) && (
								<span className='notification-item__group'>
									{notificationItem.groupName}
								</span>
							)}
							{notificationItem.type ===
								NOTIFICATIONS_TYPE.REACTION_TO_POST && (
								<span className='notification-item__post'>
									{notificationItem.postName}
								</span>
							)}
						</p>
						<p className='notification-item__subtitle'>
							{notificationItem.date}
						</p>
					</div>
					{notificationItem.type === NOTIFICATIONS_TYPE.PRIVATE_MESSAGE && (
						<p className='notification-item__message'>
							{notificationItem.message}
						</p>
					)}
				</div>
				{notificationItem.type === NOTIFICATIONS_TYPE.COMMENT_ON_PICTURE && (
					<img
						className='notification-item__picture'
						src={`./images/${notificationItem.picture}`}
						alt='picture published'
					/>
				)}
			</div>
		</li>
	)
}

NotificationItem.propTypes = {
	notificationItem: PropTypes.object.isRequired,
}
