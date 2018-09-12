import shortid from 'shortid';
import propTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
// import Divider from '@material-ui/core/Divider';
import PortalItemList from './PortalItemList';
import PortalItems from './PortalItems';

const PortalComponent = ({
  portalFilter,
  classes,
  portalItems,
  updatePortalItems,
  // selectActiveItem,
  // activeItem,
}) => {
  const items = PortalItemList.filter(item => item.parent === portalFilter);
  // if items list is different from state, update state:
  if ((items.filter(x => !portalItems.includes(x))).length !== 0) {
    updatePortalItems(items);
  }
  /* This runs check so that it only updates once.
    Otherwise, when I had a console.log in this it kept runnnig for some reason?
  */
  return (
    <div className={classes.portal}>
        {items.map((item) => {
          const {
            name,
            value,
            id,
          } = item;
          if (value === 'heading') {
            return (
              <div className={classes.portalHeader} key={shortid.generate()} >
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
              name={name}
              value={value}
              id={value}
              key={shortid.generate()}
            >
              <PortalItems
                id={id}
                key={id}
                name={name}
                value={value}
                classes={classes}
                style={{ maxHeightheight: 'fitContent' }}
              />
            </Grid>
          );
        })}
    </div>
  );
};

PortalComponent.propTypes = {
  updatePortalItems: propTypes.func,
  selectActiveItem: propTypes.func,
  portalItems: propTypes.arrayOf(
    propTypes.shape({
      name: propTypes.string,
      value: propTypes.string,
      key: propTypes.string,
    }),
  ),
  activeItem: propTypes.string,
  portalFilter: propTypes.string,
  classes: propTypes.object,
  items: propTypes.arrayOf(
    propTypes.shape({
      name: propTypes.string,
      value: propTypes.string,
      key: propTypes.string,
    }),
  ),
};

export default PortalComponent;
