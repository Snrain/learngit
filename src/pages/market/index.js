import React from 'react';
import styles from './home.less';
import BannerComponent from './components/bannerComponent/bannerComponent'
import PopularappComponent from './components/popularappComponents/popularappComponent'
import CasesComponent from './components/casesComponent/casesComponent'
import PartnersComponent from './components/partnersComponent/partnersComponent'

export default () => {
  return (
    <div>
    <BannerComponent></BannerComponent>
    <PopularappComponent></PopularappComponent>
    <CasesComponent></CasesComponent>
    <PartnersComponent></PartnersComponent>
    
    </div>
  );
}
