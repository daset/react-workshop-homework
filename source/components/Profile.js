import React from 'react';

// Instruments
import avatar from '../theme/assets/avatars/nasa.jpg';

export default class Header extends React.Component {
    render() {
        return (
                <div className = 'profile'>
                    <img className = 'avatar' src = { avatar } />
                    <div className = 'main'>
                        <div className = 'stats'>
                            <div>
                                <span>2,436&nbsp;</span>
                                posts
                            </div>
                            <div>
                                <span>34,9m&nbsp;</span>
                                followers
                            </div>
                            <div>
                                <span>70&nbsp;</span>
                                following
                            </div>
                        </div>
                        <span className = 'nickname'>nasa</span>
                    </div>
                </div>
        );
    }
}