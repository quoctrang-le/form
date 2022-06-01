import React, { useContext } from 'react';
import BoxModel from './components/BoxModel';
import { LoadingContext } from './components/GlobalDataProvider';
import Loading from './components/Loading';
import Register from './containers/Register';

const App = () => {
  const { isLoading } = useContext(LoadingContext);

  return (
    <>
      {isLoading && <Loading />}
      <Register />
      <BoxModel />
    </>
  );
};

export default App;
