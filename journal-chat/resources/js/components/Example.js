import React from 'react';
import ReactDOM from 'react-dom';
import { Mypage } from './Mypage';

function Index() {
    return (
        <Mypage></Mypage>
    );
}

export default Index;

if (document.getElementById('app')) {
    ReactDOM.render(<Index />, document.getElementById('app'));
}
