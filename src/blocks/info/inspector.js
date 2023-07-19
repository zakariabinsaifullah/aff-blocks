/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { InspectorControls } = wp.blockEditor;
const { PanelBody, RangeControl, CardDivider } = wp.components;
/**
 * Internal dependencies
 */
import ColorControl from '../../controls/color-control';

const Inspector = ({ attributes, setAttributes }) => {
	const {
		nameColor,
		descriptionColor,
		containerBgColor,
		containerBorderRadius,
	} = attributes;

	return (
		<InspectorControls>
			<PanelBody
				title={__('Container', 'aff-blocks')}
				initialOpen={false}
			>
				<RangeControl
					label={__('Border Border', 'aff-blocks')}
					value={containerBorderRadius}
					onChange={(v) =>
						setAttributes({
							containerBorderRadius: v,
						})
					}
					min={0}
					max={100}
					allowsReset={true}
					resetFallbackValue={0}
				/>
				<CardDivider />
				<ColorControl
					label={__('Background Color', 'aff-blocks')}
					color={containerBgColor}
					onChange={(value) =>
						setAttributes({ containerBgColor: value })
					}
				/>
			</PanelBody>
			<PanelBody title={__('Name', 'aff-blocks')} initialOpen={false}>
				<ColorControl
					label={__('Color', 'aff-blocks')}
					color={nameColor}
					onChange={(value) => setAttributes({ nameColor: value })}
				/>
			</PanelBody>
			<PanelBody
				title={__('Description', 'aff-blocks')}
				initialOpen={false}
			>
				<ColorControl
					label={__('Color', 'aff-blocks')}
					color={descriptionColor}
					onChange={(value) =>
						setAttributes({ descriptionColor: value })
					}
				/>
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
