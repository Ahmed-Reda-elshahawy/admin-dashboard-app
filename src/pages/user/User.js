import React from 'react';
import SingleFeature from '../../components/singleFeature/SingleFeature';
import { singleUser } from '../../Data';

const User = () => {
    return (
        <div className='user-container'>
            <SingleFeature singleData={singleUser} />
        </div>
    );
};

export default User;