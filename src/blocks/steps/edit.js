/**
 * WordPress dependencies
 */
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

// editor style
import './editor.scss';

/**
 * Edit function
 */

export default function Edit() {
	// Block Props
	const blockProps = useBlockProps();
	return (
		<div {...blockProps}>
			<InnerBlocks
				allowedBlocks={['aff/step']}
				template={[['aff/step']]}
				renderAppender={() => <InnerBlocks.ButtonBlockAppender />}
			/>
		</div>
	);
}
