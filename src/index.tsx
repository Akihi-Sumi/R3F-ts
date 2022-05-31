import * as React from 'react';
import ReactDOM  from 'react-dom';
import { createRoot } from "react-dom/client";
import reportWebVitals from './reportWebVitals';
import App from './App';
import './css/bootstrap.scss';
import WaterShader from './WaterShader/ws-index';
import { Route, BrowserRouter } from 'react-router-dom';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement!);
root.render(<App />);

ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <div>
          <Route path="/" element={<App/>} />
          <Route path="/WaterShader/ws-index" element={<WaterShader />} />
        </div>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);

reportWebVitals();