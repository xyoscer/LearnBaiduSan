/**
 * Created by XiYin on 16/05/2018.
 */
import {router} from 'san-router';
import App from './App.san';
router.add({rule: '/',Component: App, target: '#app'});
router.start();