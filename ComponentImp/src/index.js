/**
 * Created by XiYin on 15/05/2018.
 */
// import san from 'san';
import {router} from 'san-router';
import Panel from './ExpansionPanel.san';

router.add({rule: '/', Component: Panel, target: "#app"});
router.start();