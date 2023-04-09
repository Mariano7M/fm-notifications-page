const NOTIFICATIONS_TYPE = {
	REACTION_TO_POST: 'REACTION_TO_POST',
	NEW_FOLLOWER: 'NEW_FOLLOWER',
	USER_LEFT_GROUP: 'USER_LEFT_GROUP',
	USER_JOIN_GROUP: 'USER_JOIN_GROUP',
	PRIVATE_MESSAGE: 'PRIVATE_MESSAGE',
	COMMENT_ON_PICTURE: 'COMMENT_ON_PICTURE',
}

const NOTIFICATIONS_TITLES = {
	REACTION_TO_POST: 'reacted to your recent post',
	NEW_FOLLOWER: 'followed you',
	USER_JOIN_GROUP: 'has joined your group',
	USER_LEFT_GROUP: 'left the group',
	PRIVATE_MESSAGE: 'sent you a private message',
	COMMENT_ON_PICTURE: 'commented on your picture',
}

const getNotificationTitle = notificationType =>
	NOTIFICATIONS_TITLES[notificationType]

export { NOTIFICATIONS_TYPE, getNotificationTitle }
