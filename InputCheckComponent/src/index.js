/**
 * Created by XiYin on 15/05/2018.
 */
import {router} from 'san-router';
import App from 'app.san';
router.add({rule: '/',Component: App,target: '#app'});
router.start();