import React from 'react'
import vg from "../assets/47151884.jpg"
import { AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram } from "react-icons/ai"

export default function Home() {
    return (
        <>
            <div className='home' id="home">Home
                <main>
                    <h1>TechStark</h1>
                    <p>Solution to all your problems</p>
                </main>
            </div>

            <div className="home2">
                <img src={vg} alt="Graphics" />
                <div>
                    <p>
                        We are your one and only solution to the tech problems you face every day. We are leading tech compnay whose aim is to increaas the problem solving ability in children.
                    </p>
                </div>
            </div>

            <div className="home3" id="about">
                <div>
                    <h1>Who we are?</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis veniam illum, vel enim cumque expedita natus numquam nihil atque a optio? Possimus aut nam sapiente voluptatem, quam maxime expedita laborum quod ducimus id tempore ipsum autem dolores, nobis labore quasi. Unde eius explicabo vero sequi doloremque assumenda possimus, quasi ullam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est maiores laborum deserunt amet debitis aliquam!</p>
                </div>
            </div>

            <div className="home4" id="brands">
                <div>
                    <h1>Brands</h1>
                    <article>
                        <div style={{
                            animationDelay: "0.3s",
                        }}>
                            <AiFillGoogleCircle />
                            <p>Google</p>
                        </div>
                        <div style={{
                            animationDelay: "0.5s",
                        }}>
                            <AiFillAmazonCircle />
                            <p>Amazon</p>
                        </div>
                        <div style={{
                            animationDelay: "0.7s",
                        }}>
                            <AiFillInstagram />
                            <p>Instagram</p>
                        </div>
                        <div style={{
                            animationDelay: "0.9s",
                        }}>
                            <AiFillYoutube />
                            <p>YouTube</p>
                        </div>
                    </article>
                </div>
            </div>
        </>
    )
}
