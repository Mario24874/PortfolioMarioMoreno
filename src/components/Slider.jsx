import React from 'react';
import './Slider.css'; 

import postgresqlIcon from '../images/slider/postgresql-icon.png';
import angularIcon from '../images/slider/angular-icon.png';
import reactIcon from '../images/slider/react-icon.png';
import flutterIcon from '../images/slider/flutter-icon.png';
import typescriptIcon from '../images/slider/typescript-icon.png';
import pythonIcon from '../images/slider/python-icon.png';
import javaIcon from '../images/slider/java-icon.png';
import csharpIcon from '../images/slider/Csharp-icon.png';
import cplusplusIcon from '../images/slider/C++-icon.png';
import phpIcon from '../images/slider/php-icon.png';
import mysqlIcon from '../images/slider/mysql-icon.png';
import firebaseIcon from '../images/slider/firebase-icon.png';
import flaskIcon from '../images/slider/flask-icon.png';
import laravelIcon from '../images/slider/laravel-icon.png';
import mongodbIcon from '../images/slider/mongodb-icon.png';
import springIcon from '../images/slider/spring-icon.png';
import vueIcon from '../images/slider/vue-icon.png';
import djangoIcon from '../images/slider/django-icon.png';
import dockerIcon from '../images/slider/docker-icon.png';
import kubernetesIcon from '../images/slider/kubernetes-icon.png';
import nextIcon from '../images/slider/next-icon.png';
import nodejsIcon from '../images/slider/nodejs-icon.png';

const Slider = () => (
  <div className="banner">
    <div className="slider" style={{ '--quantity': 22 }}>
      <div className="item" style={{ '--position': 1 }}><img src={postgresqlIcon} alt="" /></div>
      <div className="item" style={{ '--position': 2 }}><img src={angularIcon} alt="" /></div>
      <div className="item" style={{ '--position': 3 }}><img src={reactIcon} alt="" /></div>
      <div className="item" style={{ '--position': 4 }}><img src={flutterIcon} alt="" /></div>
      <div className="item" style={{ '--position': 5 }}><img src={typescriptIcon} alt="" /></div>
      <div className="item" style={{ '--position': 6 }}><img src={pythonIcon} alt="" /></div>
      <div className="item" style={{ '--position': 7 }}><img src={javaIcon} alt="" /></div>
      <div className="item" style={{ '--position': 8 }}><img src={csharpIcon} alt="" /></div>
      <div className="item" style={{ '--position': 9 }}><img src={cplusplusIcon} alt="" /></div>
      <div className="item" style={{ '--position': 10 }}><img src={phpIcon} alt="" /></div>
      <div className="item" style={{ '--position': 11 }}><img src={mysqlIcon} alt="" /></div>
      <div className="item" style={{ '--position': 12 }}><img src={firebaseIcon} alt="" /></div>
      <div className="item" style={{ '--position': 13 }}><img src={flaskIcon} alt="" /></div>
      <div className="item" style={{ '--position': 14 }}><img src={laravelIcon} alt="" /></div>
      <div className="item" style={{ '--position': 15 }}><img src={mongodbIcon} alt="" /></div>
      <div className="item" style={{ '--position': 16 }}><img src={springIcon} alt="" /></div>
      <div className="item" style={{ '--position': 17 }}><img src={vueIcon} alt="" /></div>
      <div className="item" style={{ '--position': 18 }}><img src={djangoIcon} alt="" /></div>
      <div className="item" style={{ '--position': 19 }}><img src={dockerIcon} alt="" /></div>
      <div className="item" style={{ '--position': 20 }}><img src={kubernetesIcon} alt="" /></div>
      <div className="item" style={{ '--position': 21 }}><img src={nextIcon} alt="" /></div>
      <div className="item" style={{ '--position': 22 }}><img src={nodejsIcon} alt="" /></div>
    </div>
    <div className="content">
      <h1 data-content="TECHNOLOGIES">
        TECHNOLOGIES
      </h1>
      <div className="model"></div>
    </div>
  </div>
);

export default Slider;