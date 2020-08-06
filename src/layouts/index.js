import React from 'react';
import HeaderComponent from '@/components/headerComponent/headerComponent'
import MarketFooterComponent from '@/components/marketFooterComponent/MarketFooterComponent'
import FootComponent from '@/components/footComponent/footComponent'


function BasicLayout(props) {
  return (
    <div>
      <HeaderComponent />
      {props.children}
      <MarketFooterComponent />
      <FootComponent/>
    </div>
  );
}

export default BasicLayout;