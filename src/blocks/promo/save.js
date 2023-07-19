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
		photo,
		title,
		titleTag,
		subtitle,
		subtitleTag,
		trawaDo,
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
			<div className="photo">
				{photo && <img src={photo.url} alt={photo.alt || title} />}
				<div className="mobile__hide">
					{btnLabel && btnLink && (
						<a
							className="cta-btn"
							href={btnLink && btnLink.url}
							target={
								btnLink && btnLink.openInNewTab
									? '_blank'
									: '_self'
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
				<h5 className="trawa-do">
					{'trwa do: '}
					<RichText.Content value={trawaDo} />
				</h5>
				{description && (
					<RichText.Content
						tagName="p"
						className="description"
						value={description}
					/>
				)}
			</div>
			<div className="desktop__hide">
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
