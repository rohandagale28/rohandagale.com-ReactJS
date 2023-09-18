import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import TwitterIcon from '@mui/icons-material/Twitter';

export const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="s1">
                    <p>Do What You Can't</p>
                    <p id='auther'>- Casey Neistat</p>
                </div>
                <div className="s2">
                    <ul>
                        <li><a href="https://www.instagram.com/rohan_dagle28/" target='_blank'><InstagramIcon sx={{ fontSize: "1.8rem" }} /></a></li>
                        <li><a href="https://github.com/rohandagale28" target='_blank'><GitHubIcon sx={{ fontSize: "1.8rem" }} /></a></li>
                        <li><a href="https://www.linkedin.com/in/rohan-dagale-7b67461b3/" target='_blank'><LinkedInIcon sx={{ fontSize: "1.8rem" }} /></a></li>
                        <li><a href="" target='_blank'><MailIcon sx={{ fontSize: "1.8rem" }} /></a></li>
                        <li><a href="https://twitter.com/RohanDagal39605" target='_blank'><TwitterIcon sx={{ fontSize: "1.8rem" }} /></a></li>
                    </ul>
                </div>
                <div style={{ position: "absolute", bottom: "14px", color: "#999999", fontSize: ".880rem" }}>Copyright &copy; 2023 RohanDagale</div>
            </div >
        </>
    )
}
