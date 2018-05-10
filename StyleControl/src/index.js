/**
 * Created by XiYin on 10/05/2018.
 */
import san from 'san';
import {router} from 'san-router';
import StyleControl from './styleControl.san';

router.add({rule: '/', Component: StyleControl, target: '#app'});
router.start();
