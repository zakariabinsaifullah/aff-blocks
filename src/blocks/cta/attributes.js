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
		default: 'h4',
	},
	subtitle: {
		type: 'string',
	},
	subtitleColor: {
		type: 'string',
	},
	subtitleTag: {
		type: 'string',
		default: 'h6',
	},
	description: {
		type: 'string',
	},
	descriptionColor: {
		type: 'string',
	},
	btnLabel: {
		type: 'string',
		default: 'Click Here',
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
