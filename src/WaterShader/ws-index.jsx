import { createRoot } from 'react-dom/client';
import React, {WaterShader} from 'react'
import './ws-styles.css'
import App from './ws-App'

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);

export default WaterShader;