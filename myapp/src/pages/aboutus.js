import React from 'react'
import Navbar from '../components/Navbar'

export default function AboutUs() {
    return (
        <>
            <Navbar />
            <div>
                <h1 className="text-center">About Us</h1>
                <hr />
                <h2 className="mt-5">This is Enliven.</h2>
                <hr className="w-25" />
                <p>
                    In the midst of a pandemic, connecting with others has become increasingly more difficult.
                    We wanted to figure out a way to connect with people virtually and without barriers.
                </p>
                <p>
                    Introducing <strong>Enliven</strong>, a content-sharing platform where you can see the content of users around the globe,
                    without the barriers of only seeing content from people you follow. We encourage users to post meaningful,
                    contributing, and encouraging content in order to spark hope and positivity in such a difficult period of all our lives.
                </p>
                <p>
                    This idea was brought forth by a group of four college students at Florida Atlantic University.
                    We hope this platform can help you in your own growth as an individual and to help others along the way.
                </p>
                <p>
                    Everyone can make a meaningful impact here. By signing up with us, you are becoming a crucial component of this amazing
                    movement to share encouragement and advice, and to receive some as well.
                </p>
                <p>
                    Feel free to utilize our News page! Simply type in any search term and find out the most relevant news articles
                    related to your search term.
                </p>
                <p>
                    We hope you enjoy this platform and we can’t wait to see the amazing things you’d like to share with everyone!
                </p>
            </div>
        </>
    )
}
