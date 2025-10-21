import Link from "next/link";
import MainHeaderBackground from '@/components/main-header/main-header-backgroud';

import logoImg from '@/assets/logo.png'

import classes from './main-header.module.css';
import Image from "next/image";
import NavLink from "./nav-link";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image src={logoImg} alt="A Plate with food on it" />
          NextLevel Food
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href='/meals'>Explore Meals</NavLink>
            </li>
            <li>
              <NavLink href='/community'>Join Cumminity</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>

  )
}