import React from 'react';
import styles from './index.less';
import AdvanComponent from './components/advanComponent/advanComponent';
import NameComponent from './components/nameComponent/nameComponent';
import ProcessComponent from './components/processComponent/processComponent';
import SceneComponent from './components/sceneComponent/sceneComponent';


export default () => {
  return (
    <div>
      <NameComponent/>
      <AdvanComponent/>
      <SceneComponent/>
      <ProcessComponent/>
      
    </div>
  );
}
