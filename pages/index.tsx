import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Button from "../components/button";

// my_var = something
// const my_var = something
/*
function myFunction(param1, param2){
  do something...
}

const myFunction = (param1, param2) => {

}
 */
const Home: NextPage = () => {
  return (
    <div className="h-screen w-full">
            <Button />
    </div>
  )
}

export default Home
