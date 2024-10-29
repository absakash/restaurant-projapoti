import React from 'react';
import Banner from './Banner';
import Contact from './Contact';
import Visit from './Visit';
import Foodcupon from './Foodcupon';
import ExploreMore from './ExploreMore';
import Special from './Special';
import Practiceheader from '../practice/Practiceheader';
const Home = () => {
      return (
            <div>
                  <Banner></Banner>
                  <Contact></Contact>  
                 <Visit></Visit>

                 <Foodcupon></Foodcupon>

                 <ExploreMore></ExploreMore>
                 {/* <Special></Special> */}
                {/* <Practiceheader></Practiceheader> */}

                 
                  
            </div>
      );
};

export default Home;