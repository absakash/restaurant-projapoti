import React from 'react';
import { Outlet } from 'react-router-dom';
import Fotter from '../shared/Fotter';
import Home from '../components/homePages/Home';
import NavbarHeader from '../shared/NavbarHeader';

const MainLayout = () => {
      return (
            <div>
                  <NavbarHeader></NavbarHeader>
                  <Outlet></Outlet>

                  <Fotter></Fotter>
            </div>
      );
};

export default MainLayout;