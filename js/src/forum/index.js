import TextEditor from 'flarum/components/TextEditor';
import ComposerBody from 'flarum/components/ComposerBody';
import DiscussionComposer from 'flarum/components/DiscussionComposer';
import { extend } from 'flarum/extend';

app.initializers.add('simonxeko/preview-discussion', () => {

  let index = 1;
  let textareaId = 'textarea1';
  let previewMode = false;

  const onClickPreview = (context) => { 
    previewMode = !previewMode;
    if (previewMode) {
      s9e.TextFormatter.preview($('#' + textareaId).val(), $('#preview-discussion')[0]);
      $('#preview-discussion').show();
      // Add previewing class to to style {.item-preview .Button}
      $('#composer').addClass("previewing");
    } else {
      $('#preview-discussion').hide();
      $('#' + textareaId).focus();
      $('#composer').removeClass("previewing");
    }
  }

  extend(DiscussionComposer.prototype, 'init', function() {
    this.editor.props.preview = () => {
      onClickPreview();
    }
  });

  extend(TextEditor.prototype, 'init', function() {
    textareaId = 'textarea'+(index++);
  });

  extend(TextEditor.prototype, 'view', function(vdom) {
    if (!vdom.children[0].attrs.id) { // Check id to avoid conflicts with markdown extension
      vdom.children[0].attrs.id = this.textareaId;
    } 
  });

  extend(TextEditor.prototype, 'oninput', function() {
    // Simultaneously render preview
    // s9e.TextFormatter.preview($('#' + textareaId).val(), $('#preview-discussion')[0]);
  });

  extend(ComposerBody.prototype, 'headerItems', function(items) {
    items.add('preview-discussion', 
      m("div#preview-discussion.Post-body", {
        style: "display: none; position: absolute; background: white; z-index: 99;",
        onclick: onClickPreview,
      }, ""),
    50);
  });

  setInterval(() => {
    if ($('#' + textareaId).offset()) {
      $('#preview-discussion').css({
        width: $('#' + textareaId).width(),
        height: $('#' + textareaId).height() + 10,
        top: $('#' + textareaId).offset().top - $('.Composer').offset().top,
        left: $('#' + textareaId).offset().left - $('.Composer').offset().left,
      });
    }
  }, 300);
});
