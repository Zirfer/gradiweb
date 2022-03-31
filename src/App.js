import './App.css';
import { Suspense, lazy } from 'react';
import Loader from './sharedComponents/Loader';
const Producto = lazy(() => import('./components/Producto'));

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Suspense fallback={<Loader />}>
          <Producto />
        </Suspense>
      </header>
    </div>
  );
}

export default App;
