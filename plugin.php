<?php
/**
 * Plugin Name:       AFF FG Blocks
 * Description:       A collection of custom blocks for AFF FG.
 * Requires at least: 5.7
 * Requires PHP:      7.0
 * Version:           1.0.1
 * Author:            Zakaria Binsaifullah
 * Author URI:        https://makegutenblock.com
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       aff-blocks
 *
 */

// Stop Direct Access 
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Blocks Final Class
 */

final class AFF_BLOCKS_CLASS {
	public function __construct() {

		// define constants
		$this->define_constants();

		// block initialization
		add_action( 'init', [ $this, 'blocks_init' ] );

		// blocks category
		if( version_compare( $GLOBALS['wp_version'], '5.7', '<' ) ) {
			add_filter( 'block_categories', [ $this, 'register_block_category' ], 10, 2 );
		} else {
			add_filter( 'block_categories_all', [ $this, 'register_block_category' ], 10, 2 );
		}

		// register blocks style
		add_filter( 'render_block', [ $this, 'generate_inline_style_on_render_block' ], 10, 2 );
	}

	/**
	 * Initialize the plugin
	 */
	public static function init(){
		static $instance = false; 
		if( ! $instance ) {
			$instance = new self();
		}
		return $instance;
	}

	/**
	 * Define the plugin constants
	 */
	private function define_constants() {
		define( 'AFF_VERSION', '1.0.1' );
		define( 'AFF_URL', plugin_dir_url( __FILE__ ) );	
	}

	/**
	 * Register Block Category
	 */
	public function register_block_category( $categories, $post ) {
		return array_merge(
			array(
				array(
					'slug'  => 'aff-blocks',
					'title' => __( 'AFF FG', 'aff-blocks' ),
				),
			),
			$categories,
		);
	}

	/**
	 * Blocks Registration 
	 */
	public function register_block( $name, $options = array() ) {
		register_block_type( __DIR__ . '/build/blocks/' . $name, $options );
	 }

	/**
	 * Blocks Initialization
	*/
	public function blocks_init() {
		$blocksList = [
			'cta',
			'advice',
			'info',
			'promo',
			'step',
			'steps'
		];
		
		// register blocks
		if( ! empty( $blocksList ) ) {
			foreach( $blocksList as $block ) {
				$this->register_block( $block );
			}
		}
	}

	/**
     * Register Inline Style
     */
    function generate_inline_style_on_render_block($block_content, $block ) {

        if (isset($block['blockName']) && str_contains($block['blockName'], 'aff/')) {
            if (isset($block['attrs']['blockStyle'])) {

                $style = $block['attrs']['blockStyle'];
                $handle = isset( $block['attrs']['uniqueId'] ) ? $block['attrs']['uniqueId'] : 'aff-blocks';

                // convert style array to string
                if ( is_array($style) ) {
                    $style = implode(' ', $style);
                }

                // minify style to remove extra space
                $style = preg_replace( '/\s+/', ' ', $style );

                wp_register_style(
                    $handle,
                    false
                );
                wp_enqueue_style( $handle );
                wp_add_inline_style( $handle, $style );

            }
        }
        return $block_content;
    }

}

/**
 * Kickoff
*/
AFF_BLOCKS_CLASS::init();
