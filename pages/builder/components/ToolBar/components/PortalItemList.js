/* eslint object-curly-newline: ["error", { "consistent": true }] */
/* eslint-env es6 */

const PortalItemList = [
  // Layout -- will tend to be background components, containers...
  { name: 'Layout', value: 'heading', parent: 'layout', position: 0, id: 'drawer/header_layout' },
  { name: 'Line', value: 'line', parent: 'layout', id: 'drawer/line' },
  { name: 'Containers', value: 'subheading', parent: 'layout', id: 'drawer/sub_container' },
  { name: 'Paper', value: 'paper', parent: 'layout', id: 'drawer/paper' },
  { name: 'Card', value: 'card', parent: 'layout', id: 'drawer/card' },
  { name: 'Form Container', value: 'form', parent: 'layout', id: 'drawer/form' },
  { name: 'Background', value: 'subheading', parent: 'layout', id: 'drawer/sub_background' },
  { name: 'Image', value: 'image', parent: 'layout', id: 'drawer/bg_image' },
  { name: 'Color', value: 'color', parent: 'layout', id: 'drawer/bg_color' },
  // Form ... small elements can only be placed inside form container.
  { name: 'Forms', value: 'heading', parent: 'forms', position: 1, id: 'drawer/header_forms' },
  { name: 'Templates', value: 'formsTemplates', parent: 'forms', id: 'drawer/formsTemplates' },
  { name: 'Form Container', value: 'formsContainer', parent: 'forms', id: 'drawer/formsContainer' },
  { name: 'Input Types: ', value: 'subheading', parent: 'forms', id: 'drawer/sub_inputs' },
  { name: 'Textbox', value: 'textbox', parent: 'forms', id: 'drawer/textbox' },
  { name: 'Multiline Textbox', value: 'multilineTextbox', parent: 'forms', id: 'drawer/multilineTextbox' },
  { name: 'Dropdown Menu', value: 'dropDownMenu', parent: 'forms', id: 'drawer/dropDownMenu' },
  { name: 'Radio Button', value: 'radioBtn', parent: 'forms', id: 'drawer/radioBtn' },
  { name: 'Checkbox', value: 'checkbox', parent: 'forms', id: 'drawer/checkbox' },
  { name: 'Buttons', value: 'subheading', parent: 'forms', id: 'drawer/sub_buttons' },
  { name: 'Submit', value: 'submit', parent: 'forms', id: 'drawer/submit' },
  { name: 'Save', value: 'save', parent: 'forms', id: 'drawer/save' },
  { name: 'Cancel', value: 'cancel', parent: 'forms', id: 'drawer/cancel' },
  // Text and Labels
  { name: 'Text and Labels', value: 'heading', parent: 'text', position: 2, id: 'drawer/header_text' },
  { name: 'Label', value: 'label', parent: 'text', id: 'drawer/text_label' },
  { name: 'Header', value: 'headerTxt', parent: 'text', id: 'drawer/text_header' },
  { name: 'Title', value: 'title', parent: 'text', id: 'drawer/text_title' },
  { name: 'Subheading', value: 'subheadingTxt', parent: 'text', id: 'drawer/text_subheading' },
  { name: 'BodyText', value: 'bodyText', parent: 'text', id: 'drawer/text_bodyText' },
  { name: 'Smaller Body Text', value: 'smallerBodyText', parent: 'text', id: 'drawer/text_smallerBodyText' },
  // Tables and Charts
  { name: 'Tables and Charts', value: 'heading', parent: 'charts', position: 3, id: 'drawer/header_charts' },
  { name: 'Subheading', value: 'subheading', parent: 'charts', id: 'drawer/sub_SB' },
  { name: 'Item 1', value: 'item1', parent: 'charts', id: 'drawer/item1' },
  { name: 'Item 2', value: 'item2', parent: 'charts', id: 'drawer/item2' },
  { name: 'Item 3', value: 'item3', parent: 'charts', id: 'drawer/item3' },
  // Insert Image
  // { name: 'Image', value: 'image', parent: 'image', position: 4, id: 'drawer/header_image' },
  // Buttons:
  { name: 'Buttons', value: 'heading', parent: 'buttons', position: 4, id: 'drawer/header_buttons' },
  { name: 'default', value: 'default', parent: 'buttons', id: 'drawer/btn_default' },
  { name: 'Icon Only', value: 'icon', parent: 'buttons', id: 'drawer/btn_icon' },
  { name: 'Round', value: 'roundIcon', parent: 'buttons', id: 'drawer/btn_roundIcon' },
  { name: 'With Label and Icon', value: 'labelIcon', parent: 'buttons', id: 'drawer/btn_labelIcon' },
  { name: 'Upload', value: 'upload', parent: 'buttons', id: 'drawer/btn_upload' },
  { name: 'Action', value: 'action', parent: 'buttons', id: 'drawer/btn_action' },
];

export default PortalItemList;
