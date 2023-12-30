import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {ToastContainer} from "react-toastify";
import {IndexRouter} from "./routers/IndexRouter";
import 'react-toastify/dist/ReactToastify.css';
import {applyMiddleware, createStore} from "redux";
import reducers from "./redux/reducer";
import {thunk} from "redux-thunk";
import {Provider} from "react-redux";
import {Link as LinkScroll} from "react-scroll";

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(reducers, applyMiddleware(thunk));

root.render(
  <>
    <Provider store={store}>
        <IndexRouter />
        <ToastContainer />
        <LinkScroll to="header" spy={true} smooth={true} duration={500}>
        <button
            type="button"
            data-te-ripple-init={true}
            data-te-ripple-color="light"
            className="!fixed bg-secondary bottom-5 right-5 rounded-full block p-3 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:opacity-70 active:shadow-lg"
            id="btn-back-to-top">
            <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                className="h-4 w-4"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512">
                <path
                    fill="currentColor"
                    d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"></path>
            </svg>
        </button>
        </LinkScroll>
    </Provider>
  </>
);

reportWebVitals();
