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
		step,
		photo,
		title,
		titleTag,
		subtitle,
		subtitleTag,
		description,
		btnLabel,
		btnLink,
	} = attributes;

	// Block Props
	const blockProps = useBlockProps.save({
		className: uniqueId,
	});

	return (
		<div {...blockProps}>
			{step && <div className="step">{step}</div>}
			{title && (
				<RichText.Content
					tagName={titleTag}
					className="title"
					value={title}
				/>
			)}
			{description && (
				<RichText.Content
					tagName="p"
					className="description"
					value={description}
				/>
			)}
			<div className="pair-content">
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
				{subtitle && (
					<div className="sub-title-container">
						<RichText.Content
							tagName={subtitleTag}
							className="subtitle"
							value={subtitle}
						/>
					</div>
				)}
			</div>
			{photo && (
				<div className="photo">
					<img src={photo.url} alt={photo.alt || title} />
				</div>
			)}
		</div>
	);
}
