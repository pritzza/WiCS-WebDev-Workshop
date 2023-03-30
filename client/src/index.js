import ReactDOM from 'react-dom/client';
import App from './App';

const ENTRY_POINT_ID = "root";

const root = ReactDOM.createRoot(document.getElementById(ENTRY_POINT_ID));

root.render(<App></App>);