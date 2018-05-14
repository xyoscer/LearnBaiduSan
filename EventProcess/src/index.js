/**
 * Created by XiYin on 14/05/2018.
 */
import san from 'san';
import {router} from 'san-router';
import Parent from './moreParent.san';

// 让匹配规则在target中渲染一个Component,Component组件也可以异步加载一个组件
router.add({rule: '/', Component: Parent, target: "#app"});
router.start();