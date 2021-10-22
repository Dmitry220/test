import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {usersSelector} from "../../Redux/selectors";
import {useHistory} from "react-router";
import {setUser} from "../../Redux/actions";
import style from './loginForm.module.css'
import avatar from './../../assets/img/avatar.png'

export const LoginForm = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [nameInputValue, setNameInputValue] = useState('');
    const [passInputValue, setPassInputValue] = useState('');
    const users = useSelector(usersSelector);

    const formSubmit = (e) => {
        e.preventDefault();
        dispatch(setUser(checkDataUserArray))
        history.push('/profile')
    }
    const checkDataUserArray = users.filter(u => u.login === nameInputValue && u.password === passInputValue);

    return (

        <form action="">
            <div className={style.imgСontainer}>
                <img src={avatar} alt="Avatar" className={style.avatar}/>
            </div>
            <div className={style.container}>
                <label><b>Логин</b></label>
                <input
                    type="text"
                    value={nameInputValue}
                    onChange={(e) => setNameInputValue(e.target.value)}
                    placeholder={'Введите имя'}
                />
                <label><b>Пароль</b></label>
                <input
                    type="password"
                    value={passInputValue}
                    onChange={(e) => setPassInputValue(e.target.value)}
                    autoComplete={'on'}
                    placeholder={'Введите пароль'}
                />
                <button
                    type={'submit'}
                    className={style.btn}
                    onClick={formSubmit}
                    disabled={!checkDataUserArray.length}>
                    Войти
                </button>
            </div>
        </form>
    )
}
