export default ({
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
)