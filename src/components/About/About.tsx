import { AboutMe, TextAbout, TechAbout, Tecnologies, TechIcons } from "./About.styles"
import { FaCaretDown } from "react-icons/fa";

function About(){
    return(
        <AboutMe>
            <TextAbout>
                    <h1>Sobre mim</h1>
                    <FaCaretDown></FaCaretDown>
                <p>Me chamo Eduardo Maciel, tenho 22 anos, sou desenvolvedor Front End e estudante de Analise e Desenvolvimento de Sistemas. Tenho contato e afinidade com a tecnologia desde muito novo, comecei a ter contato com computadores aos 7 anos e assim foi durante toda minha adolescência. Aos 18 anos a vida acabou me levando por outro caminho e fui estudar Nutrição, onde durante todo curso senti que não fazia parte daquilo, que faltava algo e foi então que resolvi, no último ano de faculdade, dar uma chance a tecnologia, que durante toda minha vida fez parte de mim e hoje posso dizer que me encontrei nos códigos, onde tenho a determinação e a motivação para exercer com excelência aquilo que amo!
                <br />
                <br />
                "As mais impressionantes façanhas humanas são na realidade o agregado de inumeráveis elementos isolados e cada um dos quais, em certo sentido, nada tem de extraordinário!" - Daniel Chambliss
                </p>
            </TextAbout>
            <TechAbout>
                    <h1>Habilidades</h1>
                    <FaCaretDown></FaCaretDown>
                <Tecnologies>                
                    <TechIcons>
                    <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/javascript/javascript-original.svg" title="JavaScript" alt="JavaScript"/>
                    </TechIcons>
                    <TechIcons>
                    <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/react/react-original-wordmark.svg" title="React" alt="React"/>
                    </TechIcons>
                    <TechIcons>
                    <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/css3/css3-original.svg" title="CSS" alt="CSS"/>
                    </TechIcons>
                    <TechIcons>
                    <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/html5/html5-original.svg" title="HTML" alt="HTML"/>
                    </TechIcons>
                    <TechIcons>
                    <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/typescript/typescript-original.svg" title="Typescript" alt="Typescript"/>
                    </TechIcons>
                    <TechIcons>
                    <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/git/git-original-wordmark.svg" title="Git" alt="Git"/>
                    </TechIcons>
                    <TechIcons>
                    <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/github/github-original-wordmark.svg" title="Github" alt="Github"/>
                    </TechIcons>
                    <TechIcons>
                    <img src="https://avatars.githubusercontent.com/u/20658825?s=200&v=4" title="Styled-Components" alt="Styled-Components"/>
                    </TechIcons>
                </Tecnologies>
            </TechAbout>
        </AboutMe>
    )
}

export default About