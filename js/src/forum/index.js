/*
 * This file is part of simonxeko/preview-discussion.
 *
 * Copyright (c) 2021 simonxeko & iPurpl3x.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

import app from 'flarum/app';
import { extend } from 'flarum/extend';
import ComposerState from 'flarum/states/ComposerState';
import ComposerBody from 'flarum/components/ComposerBody';
import DiscussionComposer from 'flarum/components/DiscussionComposer';
import TextEditor from 'flarum/components/TextEditor';

app.initializers.add('simonxeko/preview-discussion', () => {
	// For the `DiscussionComposer` add a property to the `ComposerState` used to
	// check if the preview is being whown or not. The will be accessible globally by
	// accessing `app.composer.showPreview`.
	extend(ComposerState.prototype, 'load', function (_, componentClass) {
		if (componentClass === DiscussionComposer) {
			this.showPreview = false;
		}
	});

	// Add an empty element to the `ComposerBody.headerItems`. This will be filled with content
	// once the preview is shown.
	extend(ComposerBody.prototype, 'headerItems', function (items) {
		items.add(
			'preview-discussion',
			<div
				className={`Composer-preview Post-body ${app.composer.showPreview ? '' : 'hidden'}`}
			></div>,
			50
		);
	});

	// Add a `jumpToPreview` method to the `DiscussionComposer`. Doing that implies
	// that the button for preview will be shown in the `controlItems` of the `TextEditor`.
	// Thiw method will be the callback called when this button is clicked.
	DiscussionComposer.prototype.jumpToPreview = function () {
		// Update the state
		this.composer.showPreview = !this.composer.showPreview;

		// If we need to show the preview...
		if (this.composer.showPreview) {
			// ... Set the content of the dedicated element using the `s9e.TextFormatter`
			s9e.TextFormatter.preview(
				this.composer.fields.content(),
				this.$('.Composer-preview')[0]
			);
		}
	};

	extend(TextEditor.prototype, 'view', function (vdom) {
		// When showing the preview we need to alter the UI:
		if (app.composer.showPreview) {
			// Hide the textarea
			try {
				if (vdom.children[0].tag === 'textarea') {
					vdom.children[0].attrs.className += ' hidden';
				}
			} catch {}

			// Make the preview button look active
			try {
				const itemPreview = vdom.children[1].children[0].children.find(
					(item) => item.attrs.className === 'item-preview'
				);
				if (itemPreview) {
					itemPreview.children[0].attrs.className += ' active';
				}
			} catch {}
		}
	});

	// To make that the preview container has the right size and position (including when the composer
	// is resized) we need to continually update it.
	extend(ComposerBody.prototype, 'oncreate', function () {
		setInterval(function () {
			if (app.composer.showPreview) {
				const $textarea = this.$('.TextEditor textarea');
				if ($textarea.offset()) {
					this.$('.Composer-preview').css({
						width: $textarea.width(),
						height: $textarea.height() + 10,
						top: $textarea.offset().top - $('.Composer').offset().top,
						left: $textarea.offset().left - $('.Composer').offset().left,
					});
				}
			}
		}, 100);
	});
});
