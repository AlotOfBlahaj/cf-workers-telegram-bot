import TelegramUser from './TelegramUser.js';

type MessageEntityType =
	'mention'
	| 'hashtag'
	| 'bot_command'
	| 'url'
	| 'email'
	| 'bold'
	| 'italic'
	| 'code'
	| 'pre'
	| 'text_link'
	| 'text_mention';

interface TelegramMessageEntity {
	type: MessageEntityType;
	offset: number;
	length: number;
	url?: string;
	user?: TelegramUser;
	language?: string;
}

export default TelegramMessageEntity;
