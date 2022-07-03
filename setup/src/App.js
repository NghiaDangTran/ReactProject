import React from 'react';
import Layout from './component/Layout';
import { BrowserRouter as Router } from 'react-router-dom'

function App(props) {
  return (
    <div>
      <Router>
        <div>
          <Layout></Layout>
        </div>
      </Router>
    </div>
  );
}

export default App;