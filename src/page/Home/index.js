import React from 'react';
import {
  Link,
} from "react-router-dom";
import './index.css';

const Home = () => {
  return (
    <div className="home-container">
      <ul>
        <li>
          <h1>效果预览:</h1>
        </li>
        <li>
          <Link Link to="/matrix">多维网格</Link>
        </li>
        <li>
          <Link to="/list">列表</Link>
        </li>
        <li>
          <Link to="/nav">导航栏</Link>
        </li>
        <li>
          <Link to="/staggered">交错效果(预览, 暂不可用)</Link>
        </li>
      </ul>
    </div>
  )
}

export default Home;