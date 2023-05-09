/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save(props) {
	const blockProps = useBlockProps.save();

	const {
		attributes: { heading, caption, imageUrl }
	} = props;
	return (
		<section {...blockProps}>
			<div className="tailgrids-hero__content">
				<h2>{heading}</h2>
				<p>{caption}</p>
			</div>
			<div className="tailgrids-hero__holder">
				<div className="tailgrids-hero__holder--main" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="800">
					<img src={imageUrl} />
				</div>
			</div>
		</section>
	);
}
