const attributes = {
	uniqueID: {
		type: 'string',
	},
	blockStyle: {
		type: 'object',
	},
	photo: {
		type: 'object',
	},
	title: {
		type: 'string',
	},
	titleColor: {
		type: 'string',
	},
	titleTag: {
		type: 'string',
		default: 'h3',
	},
	subtitle: {
		type: 'string',
		default: '1600 punktów w Bezcennych Chwilach',
	},
	subtitleColor: {
		type: 'string',
	},
	subtitleBgColor: {
		type: 'string',
	},
	subtitleTag: {
		type: 'string',
		default: 'h5',
	},
	trawaDo: {
		type: 'string',
	},
	trawaDoColor: {
		type: 'string',
	},
	description: {
		type: 'string',
	},
	descriptionColor: {
		type: 'string',
	},
	btnLabel: {
		type: 'string',
		default: 'Sprawdź',
	},
	btnLink: {
		type: 'object',
		default: {
			url: '#',
			openInNewTab: false,
		},
	},
	btnColor: {
		type: 'string',
	},
	btnBgColor: {
		type: 'string',
	},
	btnHoverColor: {
		type: 'string',
	},
	btnHoverBgColor: {
		type: 'string',
	},
	containerBgColor: {
		type: 'string',
	},
	containerBorderRadius: {
		type: 'number',
	},
};

export default attributes;
