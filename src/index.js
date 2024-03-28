import React from 'react';
import ReactDOM from 'react-dom/client';
import MyButton from './components/button';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div>
      <MyButton margin={'100px'}>
          Button content of outside
      </MyButton>
    </div>
  </React.StrictMode>
)







