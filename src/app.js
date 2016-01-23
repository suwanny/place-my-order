import AppMap from "can-ssr/app-map";
import route from "can/route/";
import 'can/map/define/';
import 'can/route/pushstate/';

const AppViewModel = AppMap.extend({
  define: {
    message: {
      value: 'Hello World!',
      serialize: false
    },
    title: {
      value: 'place-my-order',
      serialize: false
    }
  }
});

route(':page', {page: 'home'});
route(':page/:slug', {slug: null});
route(':page/:slug/:action', {slug: null, action: null});

// import Restaurant from './models/restaurant';
// Restaurant.getList({}).then(restaurants => console.log(restaurants.attr()));


export default AppViewModel;
