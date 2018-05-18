/**
 * Created by XiYin on 18/05/2018.
 */
import {router} from 'san-router';
import App from './app.san';
//import 'font-awesome/css/font-awesome.css';

router.add({rule: '/',Component: App, target: '#app'});
router.start();