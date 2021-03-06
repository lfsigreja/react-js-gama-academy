import Routes from "./routes";
import GlobalStyle from "./styles/globalStyle";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import { Provider } from 'react-redux'
import store from './store/'

function App() {
  return (
    <>
      <Provider store={store}>
        <ToastContainer />
        <GlobalStyle />
        <Routes />
      </Provider>
    </>
  );
}

export default App;
