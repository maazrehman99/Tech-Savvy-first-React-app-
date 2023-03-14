import React from 'react'
import '../styles/Home.scss'
import vg from "../assets/2.webp"
import {AiFillGoogleCircle,
  AiFillInstagram,
  AiFillYoutube,
  AiFillAmazonCircle} from 'react-icons/ai'

const Home = () => {
  return (
<>
<div className="home" id='Home'>
        <main>
            <h1>Tech Savvy</h1>
            <p>Solution to all of your Problem</p>
        </main>
    </div>

    <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, quas ullam iste animi nulla a magnam ratione vitae laborum doloribus ea, voluptates asperiores minima rerum .</p>
        </div>
    </div>

    <div className="home3" id='About'>
      <div>
        <h1>Who We Are?</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident amet dolorum velit dolorem quam totam dignissimos sapiente earum quas porro ducimus placeat quaerat, officiis quae aspernatur reiciendis atque minus pariatur.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident amet dolorum velit dolorem quam totam dignissimos sapiente earum quas porro ducimus placeat quaerat, officiis quae aspernatur reiciendis atque minus pariatur.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident amet dolorum velit dolorem quam totam dignissimos sapiente earum quas porro ducimus placeat quaerat, officiis quae aspernatur reiciendis atque minus pariatur.
        </p>
      </div>
    </div>

    <div className="home4" id='Brands'>
      <div>
        <h1>Brands</h1>
        <article>
          <div style={{
            animationDelay:"0.7s"
          }}>
            <AiFillGoogleCircle />
            <p>Google</p>

          </div>
          <div style={{
            animationDelay:"0.5s"
          }}>
            <AiFillAmazonCircle />
            <p>Amazon</p>

          </div>
          <div style={{
            animationDelay:"0.3s"
          }}>
            <AiFillInstagram />
            <p>Instagram</p>

          </div>
          <div style={{
            animationDelay:"1s"
          }}>
            <AiFillYoutube />
            <p>Youtube</p>

          </div>
        </article>
      </div>
    </div>
</>
  )
}

export default Home