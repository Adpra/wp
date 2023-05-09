/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { Button } from '@wordpress/components';
import { useBlockProps, RichText, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit(props) {
	const blockProps = useBlockProps();

	const {
		attributes: {heading, caption, imageUrl, imageId},
		setAttributes
	} = props;

	const onChangeHeading = (newHeroHeading) => {
		setAttributes({heading: newHeroHeading});
	}

	const onChangeCaption = (newCaption) => {
		setAttributes({caption: newCaption});
	}

	const onUpdateImage = (image) => {
		setAttributes({ imageUrl: image.url, imageId: image.id });
	}

	return (
		<section { ...blockProps }>
			<div>
			<RichText
					tagName="h2"
					onChange={ onChangeHeading }
					value={ heading }
					placeholder="Insert Heading"
				/>
			<RichText
					tagName="P"
					onChange={ onChangeCaption }
					value={ caption }
					placeholder="Insert caption"
				/>
			</div>

			<MediaUploadCheck>
							<MediaUpload
								title={ __( 'Image', 'baru' ) }
								onSelect={ onUpdateImage }
								allowedTypes={ [ 'image' ] }
								value={ imageId }
								render={ ( { open } ) => (
									<Button
										className={ 'editor-post-featured-image__toggle' }
										onClick={ open }
										style={{ padding: 0 }}>
										{ imageUrl && <img src={imageUrl} style={{ width: '100%', objectFit: 'cover' }}/> }
										Upload Image
									</Button>
								) }
							/>
						</MediaUploadCheck>

		</section>
	);
}
