import React from 'react';
import {StyleSheet, css} from 'aphrodite';

import MenuBtn from '../header/MenuButton';
import Avatar from '../header/Avatar';
import plusImg from '../../img/+.svg';

const Header = (props) => {
    return(
        <header className={css(styles.dashHeader)} >
        <div className="container">
            <div className="row">
                <div className="col"></div>
                <div className="col">
                    <div className="row">
                        <div className="col">
                            
                        </div>
                        <div className="controls col">
                            <MenuBtn>
                                <img src={plusImg} alt="menu buttom plus" />
                            </MenuBtn>
                            <Avatar />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </header>
    )
}
const styles = StyleSheet.create({
    dashHeader: {
        border: "1px solid #EFEFEF",
        height: "115px",
        width: "100%",
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        float: 'right'
    }
});

export default Header;