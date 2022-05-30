import * as React from 'react';
import { createRoot } from "react-dom/client";
import App from './App';
import './css/bootstrap.scss';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement!);
root.render(<App />);
// render(<App />, rootElement);