import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux"
import thunkMiddleware from 'redux-thunk'
import appReducers from "./reducers"
import App from "./components/App"
import "./index.css"

const store = createStore(appReducers, applyMiddleware(thunkMiddleware))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
)
