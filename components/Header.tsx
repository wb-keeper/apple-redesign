import React from 'react';
import Image from 'next/image'

const Header = () => {
    return (
        <header>
            <div className='relative h-10 w-5 cursor-pointer opacity-75 transition hover:opacity-100'>
                <Image
                    src='/logo.png' alt='' fill objectFill='contain'/>
            </div>
        </header>
    );
};

export default Header;