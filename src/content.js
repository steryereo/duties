import React from 'react';
import { createRoot } from 'react-dom/client';

import App from "./App";

const APP_ID = 'duties-app-root';

const body = document.querySelector('[aria-label="Editable content"]');
const app = document.createElement('div');
app.id = APP_ID;

body.appendChild(app);

const container = document.getElementById(APP_ID);
const root = createRoot(container);
root.render(<App />);
