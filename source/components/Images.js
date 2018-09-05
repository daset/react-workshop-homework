import React from 'react';

// Instruments
import images from '../theme/assets/images';

// Components
import Image from './Image';
import Stories from './Stories';

export default class Images extends React.Component {
    render() {
        const imagesJSX = images.map((image) => {
            return <Image key = { image.id } public = { image.public } src = { image.src } />
        });

        return (
            <div className='images'>
                    <Stories />
                    {imagesJSX}
                </div>
        );
    }
}