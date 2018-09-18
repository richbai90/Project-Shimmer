import shortid from 'shortid';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
// import Divider from '@material-ui/core/Divider';
import componentDefinitions from '../../componentDefinitions';
import ViewComponent from './ViewComponent';
import { ToolbarStyles } from './styles';

export interface ComponentDrawerProps {
  portalFilter: string;
  classes: ToolbarStyles;
  componentsToRender: typeof componentDefinitions;
}

const ComponentDrawer : React.SFC<ComponentDrawerProps> = ({
  classes,
  componentsToRender,
}) =>  (
    <div className={classes.portal}>
        {componentsToRender.map((item) => {
          const {
            name,
            value,
            id,
          } = item;
          if (value === 'heading') {
            return (
              <div className={classes.componentDrawerHeader} key={shortid.generate()} >
                <div className={classes.cssTriangle}></div>
                < Typography
                  style={{ paddingTop: '8px' }}
                  className={classes.header}
                  id={value}
                >
                  {name}
                </Typography>
              </div>
            );
          }
          if (value === 'subheading') {
            return (
              <div>
                < Typography
                   key={shortid.generate()}
                   variant="subheading"
                   className={classes.subheader}
                > {name}
                </Typography>
              </div>
            );
          }
          return (
            <Grid container
              style = {{ height: 'fitContent', padding: '4px' }}
              draggable
              id={value}
              key={shortid.generate()}
            >
              <ViewComponent
                key={id}
                name={name}
                value={value}
                classes={classes}
              />
            </Grid>
          );
        })}
    </div>
  );

export default ComponentDrawer;
