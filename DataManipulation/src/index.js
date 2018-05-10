/**
 * Created by XiYin on 09/05/2018.
 */
import san from 'san'
import {router} from 'san-router'
import Hello from './hello.san'

router.add({rule: '/', Component:Hello, target:'#app'});
router.start();