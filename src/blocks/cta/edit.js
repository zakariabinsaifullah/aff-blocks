/**
 * WordPress dependencies
 */
import {
	useBlockProps,
	RichText,
	MediaPlaceholder,
	MediaUpload,
	MediaUploadCheck,
	BlockControls,
} from '@wordpress/block-editor';
import {
	ToolbarGroup,
	ToolbarButton,
	Popover,
	TextControl,
	ToggleControl,
} from '@wordpress/components';
const { Fragment, useEffect, useState } = wp.element;
const { __ } = wp.i18n;

// editor style
import './editor.scss';

/**
 * Internal dependencies
 */
import Inspector from './inspector';
import { softMinifyCssStrings } from '../../helper/softminify';

/**
 * Edit function
 */

export default function Edit({ attributes, setAttributes, clientId }) {
	const {
		uniqueId,
		blockStyle,
		photo,
		title,
		titleTag,
		titleColor,
		subtitle,
		subtitleTag,
		subtitleColor,
		description,
		descriptionColor,
		btnLabel,
		btnLink,
		btnColor,
		btnBgColor,
		btnHoverColor,
		btnHoverBgColor,
		containerBgColor,
		containerBorderRadius,
	} = attributes;

	// Unique ID
	useEffect(() => {
		if (!uniqueId) {
			setAttributes({
				uniqueId: 'aff-' + clientId.slice(0, 8),
			});
		}
	}, []);

	const [linkPanel, showLinkPanel] = useState(false);

	// Block Props
	const blockProps = useBlockProps({
		className: uniqueId,
	});

	/**
	 * Block Styles
	 */
	const deskStyles = `
		.${uniqueId}{
			background-color: ${containerBgColor ? containerBgColor : ''};
			border-radius: ${
				containerBorderRadius
					? `0 0 ${containerBorderRadius}px ${containerBorderRadius}px `
					: ''
			};
		}

		.${uniqueId} .title{
			color: ${titleColor ? titleColor : ''};
		}

		.${uniqueId} .subtitle{
			color: ${subtitleColor ? subtitleColor : ''};
		}

		.${uniqueId} .description{
			color: ${descriptionColor ? descriptionColor : ''};
		}

		.${uniqueId} .cta-btn{
			color: ${btnColor ? btnColor : ''};
			background-color: ${btnBgColor ? btnBgColor : ''};
		}

		.${uniqueId} .cta-btn:hover{
			color: ${btnHoverColor ? btnHoverColor : ''};
			background-color: ${btnHoverBgColor ? btnHoverBgColor : ''};
		}
	`;
	const tabStyles = ``;
	const mobStyles = ``;

	/**
	 * Block All Styles
	 */
	const blockStyleCss = `
		${deskStyles}
		@media (max-width: 1024px) and (min-width: 768px) {
			${tabStyles}
		}
		@media (max-width: 767px) {
			${mobStyles}
		}
	`;

	// Set Block Styles
	useEffect(() => {
		if (JSON.stringify(blockStyle) !== JSON.stringify(blockStyleCss)) {
			setAttributes({ blockStyle: blockStyleCss });
		}
	}, [attributes]);

	return (
		<Fragment>
			<style>{`${softMinifyCssStrings(blockStyleCss)}`}</style>
			<Inspector attributes={attributes} setAttributes={setAttributes} />
			{photo && (
				<BlockControls>
					<ToolbarGroup>
						<MediaUploadCheck>
							<MediaUpload
								onSelect={(media) =>
									setAttributes({
										photo: media,
									})
								}
								allowedTypes={['image']}
								value={photo && photo.id}
								render={({ open }) => {
									return (
										<ToolbarButton
											label={__(
												'Edit Logo',
												'aff-blocks'
											)}
											onClick={open}
											icon="edit"
										/>
									);
								}}
							/>
						</MediaUploadCheck>
					</ToolbarGroup>
				</BlockControls>
			)}
			{btnLabel && (
				<BlockControls>
					<ToolbarGroup>
						<ToolbarButton
							label={__('Add Link', 'aff-blocks')}
							onClick={() => showLinkPanel(true)}
							icon="admin-links"
						/>
					</ToolbarGroup>
					{linkPanel && (
						<Popover
							position="bottom right"
							onFocusOutside={() => showLinkPanel(false)}
							offset={5}
						>
							<div className="aff-link-control">
								<TextControl
									label={__('Button Link', 'aff-blocks')}
									value={btnLink && btnLink.url}
									onChange={(v) =>
										setAttributes({
											btnLink: { ...btnLink, url: v },
										})
									}
								/>
								<ToggleControl
									label={__('Open in new tab', 'aff-blocks')}
									checked={btnLink && btnLink.openInNewTab}
									onChange={() =>
										setAttributes({
											btnLink: {
												...btnLink,
												openInNewTab:
													!btnLink.openInNewTab,
											},
										})
									}
								/>
							</div>
						</Popover>
					)}
				</BlockControls>
			)}
			<div {...blockProps}>
				<div className="photo">
					{photo ? (
						<img src={photo.url} alt={photo.alt || title} />
					) : (
						<MediaPlaceholder
							onSelect={(media) =>
								setAttributes({
									photo: media,
								})
							}
							allowedTypes={['image']}
							multiple={false}
							labels={{
								title: __('Logo', 'aff-blocks'),
								instructions: __(
									'Upload your company logo',
									'aff-blocks'
								),
							}}
							icon={'format-image'}
						/>
					)}
				</div>
				<div className="content">
					<RichText
						tagName={titleTag}
						className="title"
						value={title}
						onChange={(v) => setAttributes({ title: v })}
						placeholder={__('Company Name', 'aff-blocks')}
					/>
					<RichText
						tagName={subtitleTag}
						className="subtitle"
						value={subtitle}
						onChange={(v) => setAttributes({ subtitle: v })}
						placeholder={__('subtitle..', 'aff-blocks')}
					/>
					<RichText
						tagName="p"
						className="description"
						value={description}
						onChange={(v) => setAttributes({ description: v })}
						placeholder={__('description..', 'aff-blocks')}
					/>
					<div className="cta-btn">
						<RichText
							tagName="span"
							value={btnLabel}
							onChange={(v) => setAttributes({ btnLabel: v })}
							placeholder={__('label..', 'aff-blocks')}
						/>
					</div>
				</div>
			</div>
		</Fragment>
	);
}
