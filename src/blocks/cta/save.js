/* eslint-disable react/jsx-no-target-blank */
/**
 * WordPress dependencies
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';

/**
 * Save function
 */

export default function save({ attributes }) {
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
		containerBorder,
		containerBorderRadius,
	} = attributes;

	// Block Props
	const blockProps = useBlockProps.save({
		className: uniqueId,
	});

	return (
		<div {...blockProps}>
			{photo && (
				<div className="photo">
					<img src={photo.url} alt={photo.alt || title} />
				</div>
			)}

			<div className="content">
				{title && (
					<RichText.Content
						tagName={titleTag}
						className="title"
						value={title}
					/>
				)}
				{subtitle && (
					<RichText.Content
						tagName={subtitleTag}
						className="subtitle"
						value={subtitle}
					/>
				)}
				{description && (
					<RichText.Content
						tagName="p"
						className="description"
						value={description}
					/>
				)}
				{btnLabel && btnLink && (
					<a
						className="cta-btn"
						href={btnLink && btnLink.url}
						target={
							btnLink && btnLink.openInNewTab ? '_blank' : '_self'
						}
						rel={
							btnLink && btnLink.openInNewTab
								? 'noopener noreferrer'
								: 'noopener'
						}
					>
						<RichText.Content tagName="span" value={btnLabel} />
					</a>
				)}
			</div>
		</div>
	);
}
