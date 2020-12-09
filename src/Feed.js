import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import './Feed.css'

function Feed({ username, description, imageUrl }) {
    return (
        <div className='post__' >
            <div className='post__h'>
                <Avatar
                    className='post__avatar small'
                    alt='Niko_goGItadze'
                    src='https://scontent.ftbs1-2.fna.fbcdn.net/v/t1.0-9/78790307_2465856630335571_366130044835201024_o.jpg?_nc_cat=105&ccb=2&_nc_sid=09cbfe&_nc_ohc=26CtMfnFMrwAX-dh92s&_nc_ht=scontent.ftbs1-2.fna&oh=0d2fb107493462fdf4bf02484768c5b6&oe=5FF215D8'
                    />
                <h5 className='post__username' >{username}</h5>    
            </div>
            <div className='post__i'>
                <img className='post__image' src={imageUrl}></img>
            </div>
            <div className='post__d'>
                <h6 className='post__text' ><strong className='post__u' >{username}</strong>{description}</h6>
            </div>
        </div>
    )
}

export default Feed