/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { InspectorControls } = wp.blockEditor;
const { PanelBody, RangeControl, CardDivider, SelectControl, TabPanel } =
	wp.components;
import { TAGS } from '../../constants';
/**
 * Internal dependencies
 */
import ColorControl from '../../controls/color-control';

const Inspector = ({ attributes, setAttributes }) => {
	const {
		titleTag,
		titleColor,
		subtitleTag,
		subtitleColor,
		descriptionColor,
		btnColor,
		btnBgColor,
		btnHoverColor,
		btnHoverBgColor,
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
			<PanelBody title={__('Subtitle', 'aff-blocks')} initialOpen={false}>
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
				<TabPanel
					className="aff-tabs"
					activeClass="active-tab"
					tabs={[
						{
							name: 'tab1',
							title: __('Normal', 'aff-blocks'),
							className: 'tab-one',
						},
						{
							name: 'tab2',
							title: __('Hover', 'aff-blocks'),
							className: 'tab-two',
						},
					]}
				>
					{(tab) => {
						if (tab.name === 'tab1') {
							return (
								<>
									<ColorControl
										label={__('Color', 'aff-blocks')}
										color={btnColor}
										onChange={(value) =>
											setAttributes({ btnColor: value })
										}
									/>
									<ColorControl
										label={__('Background', 'aff-blocks')}
										color={btnBgColor}
										onChange={(value) =>
											setAttributes({ btnBgColor: value })
										}
									/>
								</>
							);
						} else if (tab.name === 'tab2') {
							return (
								<>
									<ColorControl
										label={__('Color', 'aff-blocks')}
										color={btnHoverColor}
										onChange={(value) =>
											setAttributes({
												btnHoverColor: value,
											})
										}
									/>
									<ColorControl
										label={__('Background', 'aff-blocks')}
										color={btnHoverBgColor}
										onChange={(value) =>
											setAttributes({
												btnHoverBgColor: value,
											})
										}
									/>
								</>
							);
						}
					}}
				</TabPanel>
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
