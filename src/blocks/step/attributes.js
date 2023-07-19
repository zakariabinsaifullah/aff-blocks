const attributes = {
	uniqueID: {
		type: 'string',
	},
	blockStyle: {
		type: 'object',
	},
	step: {
		type: 'number',
		default: 1,
	},
	serialColor: {
		type: 'string',
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
		default: 'h5',
	},
	subtitle: {
		type: 'string',
	},
	subtitleColor: {
		type: 'string',
	},
	subtitleTag: {
		type: 'string',
		default: 'h5',
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
	containerBgColor: {
		type: 'string',
	},
	containerHoverBgColor: {
		type: 'string',
	},
	containerBorderRadius: {
		type: 'number',
	},
};

export default attributes;
