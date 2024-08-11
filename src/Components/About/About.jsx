import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profile_img.jpg'
const About = () => {
    return (
        <div className='about'>

            <div className="about-title">
                <h1>About Me</h1>
                <img src={theme_pattern} alt="" />
            </div>

            <div className="about-section">

                <div className="about-left">
                    <img src={profile_img} alt="" />
                </div>

                <div className="about-right">
                    <div className="about-para">
                        <p>Sushil Shrestha, from Vyas-2, Damauli, Tanahun, Nepal, recently completed my Bachelor's degree in BSc. CSIT from Tribhuvan University. With a strong foundation in computer science, I am now concentrating on React frontend development, where I am applying my knowledge to build responsive and efficient web applications.</p>
                        <p>As an aspiring developer, I am now deeply engaged in enhancing my skills, particularly in the field of React JS. My commitment to mastering modern web technologies reflects to becoming a proficient and impactful developer in the field.</p>
                    </div>

                    <div className="about-skills">
                        <div className="about-skill">
                            <p>HTML</p>
                            <hr style={{ width: "40%" }} />
                        </div>
                        <div className="about-skill">
                            <p>CSS</p>
                            <hr style={{ width: "50%" }} />
                        </div>
                        <div className="about-skill">
                            <p>JavaScript</p>
                            <hr style={{ width: "35%" }} />
                        </div>
                        <div className="about-skill">
                            <p>React JS</p>
                            <hr style={{ width: "52%" }} />
                        </div>
                        <div className="about-skill">
                            <p>Basic Python</p>
                            <hr style={{ width: "30%" }} />
                        </div>
                        <div className="about-skill">
                            <p>Git & Github</p>
                            <hr style={{ width: "40%" }} />
                        </div>
                    </div>
                </div>
            </div>


            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>1</h1>
                    <p>YEAR OF EXPERIENCE</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>Intern</h1>
                    <p>SOFTECH FOUNDATION PVT. LTD.</p>
                </div>
            
            </div>

        </div>
    )
}

export default About