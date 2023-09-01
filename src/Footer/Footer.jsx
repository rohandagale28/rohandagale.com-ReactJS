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
                        <li><a href="" target='_blank'><InstagramIcon sx={{ fontSize: "2rem" }} /></a></li>
                        <li><a href="" target='_blank'><GitHubIcon sx={{ fontSize: "2rem" }} /></a></li>
                        <li><a href="" target='_blank'><LinkedInIcon sx={{ fontSize: "2rem" }} /></a></li>
                        <li><a href="" target='_blank'><MailIcon sx={{ fontSize: "2rem" }} /></a></li>
                        <li><a href="" target='_blank'><TwitterIcon sx={{ fontSize: "2rem" }} /></a></li>
                    </ul>
                </div>
            </div >
        </>
    )
}
