/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { InspectorControls } = wp.blockEditor;
const { PanelBody, RangeControl, CardDivider, SelectControl } = wp.components;
import { TAGS } from '../../constants';
/**
 * Internal dependencies
 */
import ColorControl from '../../controls/color-control';

const Inspector = ({ attributes, setAttributes }) => {
	const {
		step,
		serialColor,
		titleTag,
		titleColor,
		subtitleTag,
		subtitleColor,
		descriptionColor,
		btnColor,
		btnBgColor,
		containerBgColor,
		containerHoverBgColor,
		containerBorderRadius,
	} = attributes;

	return (
		<InspectorControls>
			<PanelBody
				title={__('Step Number', 'aff-blocks')}
				initialOpen={false}
			>
				<RangeControl
					value={step}
					onChange={(v) =>
						setAttributes({
							step: v,
						})
					}
					min={1}
					max={100}
					allowsReset={true}
					resetFallbackValue={1}
				/>
				<CardDivider />
				<ColorControl
					label={__('Color', 'aff-blocks')}
					color={serialColor}
					onChange={(value) => setAttributes({ serialColor: value })}
				/>
			</PanelBody>
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
				<ColorControl
					label={__('Hover Background', 'aff-blocks')}
					color={containerHoverBgColor}
					onChange={(value) =>
						setAttributes({ containerHoverBgColor: value })
					}
				/>
			</PanelBody>
			<PanelBody title={__('Title', 'aff-blocks')} initialOpen={false}>
				<SelectControl
					label={__('Select Tag', 'aff-blocks')}
					value={titleTag}
					options={TAGS}
					onChange={(v) => {
						setAttributes({
							titleTag: v,
						});
					}}
				/>
				<CardDivider />
				<ColorControl
					label={__('Color', 'aff-blocks')}
					color={titleColor}
					onChange={(value) => setAttributes({ titleColor: value })}
				/>
			</PanelBody>
			<PanelBody
				title={__('Important Note', 'aff-blocks')}
				initialOpen={false}
			>
				<SelectControl
					label={__('Select Tag', 'aff-blocks')}
					value={subtitleTag}
					options={TAGS}
					onChange={(v) => {
						setAttributes({
							subtitleTag: v,
						});
					}}
				/>
				<CardDivider />
				<ColorControl
					label={__('Color', 'aff-blocks')}
					color={subtitleColor}
					onChange={(value) =>
						setAttributes({ subtitleColor: value })
					}
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
			<PanelBody title={__('Button', 'aff-blocks')} initialOpen={false}>
				<ColorControl
					label={__('Color', 'aff-blocks')}
					color={btnColor}
					onChange={(value) => setAttributes({ btnColor: value })}
				/>
				<ColorControl
					label={__('Background', 'aff-blocks')}
					color={btnBgColor}
					onChange={(value) => setAttributes({ btnBgColor: value })}
				/>
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
