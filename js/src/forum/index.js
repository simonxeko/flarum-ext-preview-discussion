import TextEditor from 'flarum/components/TextEditor';
import PreviewButton from './components/PreviewButton';

app.initializers.add('simonxeko/preview-discussion', () => {
  console.log('[simonxeko/preview-discussion] Hello, forum!');

  let index = 1;
  
  extend(TextEditor.prototype, 'init', function() {
    this.textareaId = 'textarea'+(index++);
  });

  extend(TextEditor.prototype, 'view', function(vdom) {
    vdom.children[0].attrs.id = this.textareaId;
  });


  extend(TextEditor.prototype, 'controlItems', function (items) {
    const tooltip = name => app.translator.trans(`flarum-markdown.forum.composer.${name}_tooltip`);
    
    // create and add the button
    items.add('preview', 
      <PreviewButton title={tooltip('preview')} icon="fas fa-heading" style={{ prefix: '### ' }} />,
    200);
  });

});
