import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Category1 from '../images/category1.png'
import Category2 from '../images/category2.png'
import Category3 from '../images/category3.png'
import Category4 from '../images/category4.png'
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
<div className="container">
<div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={4}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
</div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },

  
}));

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (

      <div style={{background:"rgba(255, 249, 247, 0.5)"}}>
      <div className="container">
    <p style={{textAlign:"center",fontWeight:"bold",fontSize:"18px",lineHeight:"17px",padding:"10px"}}>Our Course Categories</p>
<div className={classes.root}>
      <AppBar position="static"  color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="secondary"
          backgroundColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab  style={{background:""}} label="Most Popular " {...a11yProps(0)} />
          <Tab label="Multimedia" {...a11yProps(1)} />
          <Tab label="Design" {...a11yProps(2)} />
          <Tab label="Development" {...a11yProps(3)} />
          <Tab label="Language" {...a11yProps(4)} />
          <Tab label="Item Six" {...a11yProps(5)} />
          <Tab label="Item Seven" {...a11yProps(6)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        
        <img src={Category1} style={{width:"100%",height:"523px",}}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        
        <img src={Category2} className="tabpanel-cat" style={{width:"100%",height:"523px",borderRadius: "74px"}}/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        
      <img src={Category2} className="tabpanel-cat" style={{width:"100%",height:"523px",borderRadius: "74px"}}/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        
      <img src={Category3} className="tabpanel-cat" style={{width:"100%",height:"523px",borderRadius: "74px"}}/>
      </TabPanel>
      <TabPanel value={value} index={4}>
        
      <img src={Category4} className="tabpanel-cat" style={{width:"100%",height:"523px",borderRadius: "74px"}}/>
      </TabPanel>
      <TabPanel value={value} index={5}>
        
      <img src={Category2} className="tabpanel-cat" style={{width:"100%",height:"523px",borderRadius: "74px"}}/>
      </TabPanel>
      <TabPanel value={value} index={6}>
       
      <img src={Category2} className="tabpanel-cat" style={{width:"100%",height:"523px",borderRadius: "74px"}}/>
      </TabPanel>
    </div>
</div>
    </div>
  );
}