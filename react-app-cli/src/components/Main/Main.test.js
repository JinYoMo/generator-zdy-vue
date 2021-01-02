import React from 'react';
import ReactDom from 'react-dom';
import Main from './Main';

it('renders without crashing',()=>{
const div=document.createElement('div');
ReactDom.render(
<Main />,div);
ReactDom.unmountComponentAtNode(div);
})