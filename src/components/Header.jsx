import React, { Fragment } from 'react'
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const Autor = styled.p`
  margin: 0;
`;

const Header = ({titulo}) => {
    return ( 
        <Fragment>
            <nav className="nav wrapper light-blue darken-3">
                <a href="#!" className="brand-logo center">{titulo}</a>
            </nav>
            <Autor 
                className="magin-0 white-text light-blue darken-5 center-align"
            >
                By Job Zea
            </Autor>
        </Fragment>
     );
}

// Documentación
Header.propTypes = {
    titulo: PropTypes.string.isRequired
}
 
export default Header;