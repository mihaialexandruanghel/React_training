import React from 'react';

interface HeaderProps{
    data:number,
    name?: string
}

function Header(props: HeaderProps){
    // props;
    return(
        <div>
            <h1>Header Component</h1>
            {props.data}
            {props.name}
        </div>
    );
}

export default Header;