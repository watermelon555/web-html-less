import Image from '../../assets/image/dbssjc.png';
import React from 'react';

export const Float = () => {
  return <div>
    <header className="clearfix">
      <div className="logo">
        <img src={Image} alt=""/>
      </div>
      <ul className="clearfix nav">
        <li>首页</li>
        <li>456</li>
        <li>123</li>
        <li>关于</li>
      </ul>
    </header>

    <div className="content clearfix">
      <aside>一行有六个字</aside>
      <main></main>
      <div className="ad"></div>

    </div>

    <div className="imageList">
      <div className="x clearfix">
        <div className="image"></div>
        <div className="image"></div>
        <div className="image"></div>
        <div className="image"></div>
        <div className="image"></div>
        <div className="image"></div>
        <div className="image"></div>
      </div>
    </div>
  </div>
}
