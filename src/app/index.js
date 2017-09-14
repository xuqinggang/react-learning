import ReactDOM from 'react-dom';
import React from 'react';
import { Link } from 'react-router-dom';
// import configureStore from './redux/configureStore';
// import { Provider } from 'react-redux';
// import { syncHistoryWithStore } from 'react-router-redux';
// import { browserHistory } from 'react-router';
import routes from './routes';
// // import DevTools from './redux/DevTools';
// import injectTapEventPlugin from "react-tap-event-plugin";
// 导入重置样式
// import './styles/reset.scss'

// const store = configureStore();
// const history = syncHistoryWithStore(browserHistory, store);

// injectTapEventPlugin();
ReactDOM.render((
    <div>
      { routes() }
    </div>
//   <Provider store={store}>
//     <div>
//       {routes(history)}
//       <DevTools />
//     </div>
//   </Provider>
), document.getElementById('root'));
// ReactDOM.render(
    // <QrCode />
    // <Test2/>
    // <div>
    //     <Hello></Hello>
    //     <div>
    //         <a href="javascript:void(0)">xxx</a>
    //         <input type="text" />
    //         asdf
    //         <span>123123</span>
    //     </div>
    // </div>
    // <App>
    // </App>
  // <Provider store={store}>
  //   <div>
  //     {routes(history)}
  //   </div>
  // </Provider>
// , document.getElementById('root'));
if (module && module.hot) {
	module.hot.accept();
}
