import React from 'react'
import firebase from 'firebase'
import Avatar from '@material-ui/core/Avatar'

export default function Profile({username, photoUrl, month, day, year, email}) {
    return (
        <div className='profile__' >
           <Avatar
                    className='post__avatar large'
                    alt={username}
                    src={photoUrl}
            />
            <h4>{username}</h4>
            <h5>{email}</h5>
            <h6>Birthday</h6>
            <div className='profile__d' >
                <h6>{month}</h6>
                <h6>{day}</h6>
                <h6>{year}</h6>
            </div>

        </div>
    )
}
