import propTypes from 'prop-types';

const Templates = ({
  templates,
  loadTemplate,
}) => (
  <Card>
    {
      templates.map(template => (
        <Button primary={ template.name } onClick={ () => { loadTemplate(template.import); } } />
      ))
    }
  </Card>
);

Templates.propTypes = {
  templates: propTypes.arrayOf(
    propTypes.shape({
      name: propTypes.string,
      import: propTypes.string,
    }),
  ),
  loadTemplate: propTypes.func,
};

export default Templates;
