import { Link } from 'react-router-dom';

import styles from '../../src/assets/appstyle/header.module.css'
import { FaSearch,FaUser,FaBell,FaCartPlus } from 'react-icons/fa'
import { useContext } from 'react';
import { Store } from '../reducers/RootReducer';

const mainMenu = [
    {
        name: "Sản Phẩm",
        to: "/product/latop"
    },
    {
        name: "Cửa hàng",
        to: "/"
    },
    {
        name: "Hỗ trợ",
        to: "/"
    },
    {
        name: "Đăng nhập",
        to: "/login"
    },
]

const menberMenu = [
    {
        name: "Thông tin tài khoản",
        to: "/"
    },
    {
        name: "Quản lý đơn hàng",
        to: "/"
    },
    {
        name: "Đăng xuất",
        to: "/"
    }
]



const MenuBar = () => {
    const { state } = useContext(Store);
    const { cart } = state;

    return (
        <header>
            <img src="/assets/image/Low Resolution Logo.png" alt="" className={styles["logo"]} />

            <ul className={styles["nav"]}>
                {loadMenu(mainMenu)}
            </ul>
            <div className={styles["iconBlock"]}>
                <div className={styles["distribution"]} />
                <button class={styles["btn"] + " " + styles["btn-search"]}>
                    <FaSearch size="30px" color="white"/>
                </button>
                <div className={styles['personal']}>    
                    <button class={styles["btn"] + " " + styles["btn-personal"]}>
                        <FaUser size="30px" color="white"/>
                    </button>
                    <ul className={styles["detailPersonal"]}>
                        {loadMenu(menberMenu)}
                    </ul>
                </div>
                <button class={styles["btn"] + " " + styles["btn-nofitication"]}>
                    <FaBell size="30px" color="white"/>
                </button>
                <button class={styles["btn"] + " " + styles["btn-cart"]}>
                    <Link to={"/cart"}>
                        <FaCartPlus size="30px" color="white"/>
                        <span className={styles["cart-item-qty"]}>{/*cart.cartItems.reduce((a,c) => a + c.quantity,0)*/
                        cart.cartItems.length}</span>
                    </Link>

                </button>
            </div>
        </header>
    )
}

const loadMenu = (menu) => {
    return (
        menu.map((menu, index) => (
            <li key={index} className={styles["nav-item"]}>
                <Link to={menu.to} className={styles["nav-link"]} >
                    {menu.name}
                </Link>
            </li>
        ))
    )
}

export default MenuBar;