import React, {useEffect} from 'react'
import './student.css'
import profPic from '../assets/images/prof_pic.jpg';
import Footer from "../footer/Footer";
// import '../../../Static website/src/themes/dark.css'
function Student() {
    useEffect(() => {
        document.getElementsByClassName('nav-item active')[0].classList.remove('active');
        document.getElementById('authenticationTab').classList.add('active');
        document.getElementById('authenticationTab').childNodes[0].innerText = 'Student';
     });
    
    return (
        <div>
             <section>
            <div class="manage-container d-flex flex-direction-column align-items-around justify-evenly">

                <div class="d-flex flex-direction-row justify-around section-container">

                    <div class="d-flex flex-direction-column align-items-start section-content"><span
                            class="font-oswald section-header">For you</span>
                        <div class="table-container">
                            <div class="empty"></div>
                            <div class="feed-post">
                                <div class="image-avatar">
                                    <img src={profPic} class="avatar"/>
                                </div>
                                <div class="about-details">
                                    <h1 class="name">Fname Lname</h1>
                                </div>
                                <div class="post-content">
                                    <p>Be yourself; everyone else is already taken.</p>
                                </div>
                            </div>
                            <div class="empty"></div>
                            <div class="feed-post">
                                <div class="image-avatar">
                                    <img src={profPic} class="avatar"/>
                                </div>
                                <div class="about-details">
                                    <h1 class="name">Fname Lname</h1>
                                </div>
                                <div class="post-content">
                                    <p>Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.</p>
                                </div>                        
                            </div>
                            <div class="empty"></div>
                            <div class="feed-post">
                                <div class="image-avatar">
                                    <img src={profPic} class="avatar"/>
                                </div>
                                <div class="about-details">
                                    <h1 class="name">Fname Lname</h1>
                                </div>
                                <div class="post-content">
                                    <p>Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                <div class="d-flex flex-direction-row justify-around section-container" id="manager-actions">

                    <div class="d-flex flex-direction-column align-items-start section-content"><span
                            class="font-oswald section-header">Club feed</span>
                            <div class="table-container">
                                <div class="empty"></div>
                            <div class="feed-post">
                                <div class="image-avatar">
                                    <img src={profPic} class="avatar"/>
                                </div>
                                <div class="about-details">
                                    <h1 class="title">Club Name</h1>
                                    <h1 class="subtitle">Fname Lname</h1>
                                </div>
                                <div class="post-content">
                                    <p>Be yourself; everyone else is already taken.</p>
                                </div>
                            </div>
                            <div class="empty"></div>
                            <div class="feed-post">
                                <div class="image-avatar">
                                    <img src={profPic} class="avatar"/>
                                </div>
                                <div class="about-details">
                                    <h1 class="title">Club Name</h1>
                                    <h1 class="subtitle">Fname Lname</h1>
                                </div>
                                <div class="post-content">
                                    <p>Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.</p>
                                </div>                        
                            </div>
                            <div class="empty"></div>
                            <div class="feed-post">
                                <div class="image-avatar">
                                    <img src={profPic} class="avatar"/>
                                </div>
                                <div class="about-details">
                                    <h1 class="title">Club Name</h1>
                                    <h1 class="subtitle">Fname Lname</h1>
                                </div>
                                <div class="post-content">
                                    <p>Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.</p>
                                </div>
                            </div>
                            </div>
                    </div>
                </div>
            </div>
            
            </div>
            </section>
            <Footer/>
        </div>
    
    );
}
export default Student;