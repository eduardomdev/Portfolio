import { FooterDiv, SpanDiv } from "./Footer.styles"
import { FaLinkedin, FaGithub , FaInstagram} from "react-icons/fa";
import {  MdOutlineEmail } from "react-icons/md";


function Footer(){
    return(
        <FooterDiv>
            <div>
                 <SpanDiv>
                        <a href="https://www.linkedin.com/in/eduardo-maciel-463572264/"><FaLinkedin></FaLinkedin></a>
                        <a href="https://github.com/eduardomdev"><FaGithub></FaGithub></a>
                        <a href="https://www.instagram.com/eduardo.macieln/"><FaInstagram></FaInstagram></a>
                    </SpanDiv>
                    <SpanDiv>
                        <MdOutlineEmail></MdOutlineEmail>
                        <p>eduardomneris@gmail.com</p>
                    </SpanDiv>
            </div>
        </FooterDiv>
    )
}

export default Footer