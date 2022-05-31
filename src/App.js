import React, { useContext } from 'react';
import { LoadingContext } from './components/GlobalDataProvider';
import Loading from './components/Loading';
import Register from './containers/Register';

const App = () => {
  const { isLoading } = useContext(LoadingContext);

  return (
    <>
      {isLoading && <Loading />}
      <Register />
    </>
  );
};

export default App;
