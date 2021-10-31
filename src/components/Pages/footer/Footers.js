import React from 'react';
import logoImg from '../../../utilities/images/logo.png';

const Footers = () => {
    return (
        <>
        <div>
        
<footer className="page-footer">

  <div className="container">
  </div>
            <div className="footer-text text-center text-white bg-warning p-3 mt-5">
            <img
        src={logoImg}
        width="130"
        height="50"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
              © 2021 Copyright:   
                        <a className="text-white" href="https://gogo-tours.web.app/"> goGo Tours</a>
              <span className="text-danger fw-bold fs-1"> goGo Tours !</span>
   
  </div>
</footer>

            </div>
            </>
    );
};

export default Footers;