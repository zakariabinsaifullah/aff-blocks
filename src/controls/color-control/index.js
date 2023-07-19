/**
 * WordPress dependencies
 */
import {
	BaseControl,
	Flex,
	FlexBlock,
	FlexItem,
	ColorIndicator,
	ColorPicker,
	Popover,
	Button,
} from '@wordpress/components';
import { withInstanceId } from '@wordpress/compose';
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { COLORS } from '../../constants';

import './color-control.scss';

const ColorControl = ({ label, color, onChange, instanceId }) => {
	const [colorPanel, setColorPanel] = useState(false);

	const id = `color-control-${instanceId}`;
	return (
		<div className="gkits-control-container gkits-color-control">
			<Flex>
				<FlexBlock>
					<BaseControl id={id} label={label} />
				</FlexBlock>
				<FlexItem>
					<Button
						icon="image-rotate"
						label={__('Reset', 'affiliaterg-blocks')}
						onClick={() => onChange('')}
						className={`gkits-reset-button ${
							color ? 'active' : 'disabled'
						}`}
					/>
				</FlexItem>
				<FlexItem>
					<button
						className="color-indicator"
						onClick={() => setColorPanel(true)}
					>
						<ColorIndicator colorValue={color} />
					</button>
					{colorPanel && (
						<Popover
							position="bottom right"
							onFocusOutside={() => setColorPanel(false)}
							offset={10}
						>
							<div className="gkits-color-panel">
								<ColorPicker
									color={color}
									onChangeComplete={(value) =>
										onChange(value.hex)
									}
									disableAlpha={false}
								/>
								<div className="gkits-colors-palette">
									<label
										className="gkits-label gkits-mb-8"
										htmlFor="gkits-colors-palette"
									>
										{__(
											'Colors Palette',
											'affiliaterg-blocks'
										)}
									</label>
									<div id="gkits-colors-palette">
										{COLORS &&
											COLORS.map(
												(paletteColor, index) => {
													return (
														<ColorIndicator
															className={`gkits-color-indicator ${
																paletteColor.color ===
																color
																	? 'active'
																	: ''
															}`}
															title={
																paletteColor.name
															}
															key={index}
															colorValue={
																paletteColor.color
															}
															onClick={() =>
																onChange(
																	paletteColor.color
																)
															}
														/>
													);
												}
											)}
									</div>
								</div>
							</div>
						</Popover>
					)}
				</FlexItem>
			</Flex>
		</div>
	);
};

export default withInstanceId(ColorControl);
