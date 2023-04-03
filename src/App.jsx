import './App.css'

const newNotifications = [
	{
		id: '01',
		user: 'Mark Webber',
		type: 'REACTION_TO_POST',
		postName: 'My first tournament today!',
		date: '1m ago',
	},
	{
		id: '02',
		user: 'Angela Gray',
		type: 'NEW_FOLLOWER',
		date: '5m ago',
	},
	{
		id: '03',
		user: 'Jacob Thompson',
		type: 'NEW_MEMBER_GROUP',
		groupName: 'Chess Club',
		date: '1 day ago',
	},
	{
		id: '04',
		user: 'Rizky Hasanuddin',
		type: 'PRIVATE_MESSAGE',
		message:
			"Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
		date: '5 days ago',
	},
]

function App() {
	return (
		<div className='App'>
			<header>
				<p>Notifications {newNotifications.length}</p>
				<button>Mark all as read</button>
			</header>
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
