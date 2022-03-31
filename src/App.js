import './App.css';
import { Suspense, lazy } from 'react';
import Loader from './sharedComponents/Loader';
import ThemeProvider from 'react-bootstrap/ThemeProvider'
const Producto = lazy(() => import('./components/Producto/Producto.js'));

function App() {

  return (
    <ThemeProvider breakpoints={['lg', 'md', 'sm']}>
      <div className="App">
        <Suspense fallback={<Loader />}>
          <Producto />
        </Suspense>
      </div>
    </ThemeProvider>
  );
}

export default App;
