import React from 'react';

function Footer(props) {
    return (
        <footer className='footer'>
            <div className="footer_logo">
                <a href="/" className="header-logo-link">
                    <img src="./img/svg/qpick-logo.svg" alt="QPICK" className="header-logo-pic" />
                </a>
            </div>
            <div className="footer_links">
                <a href="/">Избранное</a>
                <a href="/">Корзина</a>
                <a href="/">Контакты</a>
            </div>
            <a href="/">Условия сервиса</a>
            
        </footer>
    );
}

export default Footer;