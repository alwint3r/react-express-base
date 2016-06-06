'use strict';

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import ProductCatalog from './components/ProductCatalogApp'
import promise from './middlewares/promise'
import reducer from './reducers/ProductReducer'

const finalCreateStore = applyMiddleware(promise)(createStore);
const store = finalCreateStore(reducer);

ReactDOM.render(
    <ProductCatalog store={store} />,
    document.getElementById('product-catalog-app')
);
