import React from 'react';

export default ({children}) => {
  return (
    <>
      <header>this is header</header>
      {children}
      <footer>this is footer</footer>
    </>
  );
};
