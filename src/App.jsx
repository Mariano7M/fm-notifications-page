import Header from './components/Header'
import './App.css'

const newNotifications = [
	{
		id: '01',
		profilePicture: '',
		user: 'Mark Webber',
		type: 'REACTION_TO_POST',
		postName: 'My first tournament today!',
		date: '1m ago',
		isRead: false,
	},
	{
		id: '02',
		profilePicture: '',
		user: 'Angela Gray',
		type: 'NEW_FOLLOWER',
		date: '5m ago',
		isRead: false,
	},
	{
		id: '03',
		profilePicture: '',
		user: 'Jacob Thompson',
		type: 'NEW_MEMBER_GROUP',
		groupName: 'Chess Club',
		date: '1 day ago',
		isRead: false,
	},
	{
		id: '04',
		profilePicture: '',
		user: 'Rizky Hasanuddin',
		type: 'PRIVATE_MESSAGE',
		message:
			"Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
		date: '5 days ago',
		isRead: true,
	},
	{
		id: '05',
		profilePicture: '',
		user: 'Kimberly Smith',
		type: 'COMMENT_ON_PICTURE',
		picture: '',
		date: '1 week ago',
		isRead: true,
	},
	{
		id: '06',
		profilePicture: '',
		user: 'Nathan Peterson',
		type: 'REACTION_TO_POST',
		postName: '5 end-game strategies to increase your win rate',
		date: '2 weeks ago',
		isRead: true,
	},
	{
		id: '07',
		profilePicture: '',
		user: 'Anna Kim',
		type: 'REACTION_TO_POST',
		groupName: 'Chess Club',
		date: '2 weeks ago',
		isRead: true,
	},
]

function App() {
	function handleMarkAsRead() {
		console.log(
			'🚀 ~ file: App.jsx:73 ~ handleMarkAsRead ~ newNotifications.length:',
			newNotifications.length
		)
	}

	return (
		<div className='App'>
			<Header
				notificationsCount={newNotifications.length}
				handleMarkAsRead={handleMarkAsRead}
			/>
			<main>
				<ul>
					<li>
						<p>
							Mark Webber reacted to your recent post My first tournament today!
						</p>
						<p>1m ago</p>
					</li>
				</ul>
			</main>
		</div>
	)
}

export default App
