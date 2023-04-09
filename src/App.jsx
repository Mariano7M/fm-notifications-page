import Footer from './components/Footer'
import NotificationList from './components/NotificationsList'
import NotificationHeader from './components/NotificationHeader'
import './App.css'
import { useState } from 'react'

const initialNotifications = [
	{
		id: '01',
		profilePicture: 'avatar-mark-webber.webp',
		user: 'Mark Webber',
		type: 'REACTION_TO_POST',
		postName: 'My first tournament today!',
		date: '1m ago',
		isRead: false,
	},
	{
		id: '02',
		profilePicture: 'avatar-angela-gray.webp',
		user: 'Angela Gray',
		type: 'NEW_FOLLOWER',
		date: '5m ago',
		isRead: false,
	},
	{
		id: '03',
		profilePicture: 'avatar-jacob-thompson.webp',
		user: 'Jacob Thompson',
		type: 'USER_JOIN_GROUP',
		groupName: 'Chess Club',
		date: '1 day ago',
		isRead: false,
	},
	{
		id: '04',
		profilePicture: 'avatar-rizky-hasanuddin.webp',
		user: 'Rizky Hasanuddin',
		type: 'PRIVATE_MESSAGE',
		message:
			"Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
		date: '5 days ago',
		isRead: true,
	},
	{
		id: '05',
		profilePicture: 'avatar-kimberly-smith.webp',
		user: 'Kimberly Smith',
		type: 'COMMENT_ON_PICTURE',
		picture: 'image-chess.webp',
		date: '1 week ago',
		isRead: true,
	},
	{
		id: '06',
		profilePicture: 'avatar-nathan-peterson.webp',
		user: 'Nathan Peterson',
		type: 'REACTION_TO_POST',
		postName: '5 end-game strategies to increase your win rate',
		date: '2 weeks ago',
		isRead: true,
	},
	{
		id: '07',
		profilePicture: 'avatar-anna-kim.webp',
		user: 'Anna Kim',
		type: 'USER_LEFT_GROUP',
		groupName: 'Chess Club',
		date: '2 weeks ago',
		isRead: true,
	},
]

function App() {
	const [notifications, setNotifications] = useState(initialNotifications)
	const newNotificationsCount = notifications.filter(
		notification => !notification.isRead
	).length

	function handleMarkAsRead() {
		setNotifications(currentState => {
			return currentState.map(notification => {
				if (!notification.isRead) {
					return {
						...notification,
						isRead: true,
					}
				}
				return notification
			})
		})
	}

	return (
		<div className='app'>
			<div className='app__notifications'>
				<NotificationHeader
					notificationsCount={newNotificationsCount}
					handleMarkAsRead={handleMarkAsRead}
				/>
				<main>
					<NotificationList notifications={notifications} />
				</main>
			</div>
			<Footer />
		</div>
	)
}

export default App
