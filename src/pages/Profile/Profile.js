import React from "react";
import {useSelector} from "react-redux";
import {userDataSelector} from "../../Redux/selectors";
import {Redirect} from "react-router-dom";
import styleProfile from './Profile.module.css'
import avatar from "../../assets/img/avatar.png";
export const Profile = () => {

    const userData = useSelector(userDataSelector)
    if(!userData) return <Redirect to={'/'} />
    return (
        <div className={styleProfile.profile}>
            <div className={styleProfile.image}>
                <img src={avatar} alt="Avatar" className={styleProfile.avatar}/>
            </div>
            <h1>{userData[0].login}</h1>
            <h3>Test</h3>
        </div>
    )
}
