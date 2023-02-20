import { ProjectContainer, StyleArea, ProjectArea, ShowCarrousel, DivImg, ArrowButton, ModalDiv, LinkButton } from "./Projects.styles"
import emovieproject from "../../assets/emovieproject.png"
import portfolioproject from "../../assets/portfolioproject.png"
import { FaCaretDown, FaAngleRight, FaAngleLeft, FaLink, FaGithub } from "react-icons/fa";
import { useRef, useState } from "react";
import Modal from 'react-modal'

const customStyles = {
    content: {
      width: '330px',
      height: '200px',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },

    overlay: {
      backgroundColor: '#000000a2',
    }
  };

type Tipo = HTMLDivElement

type Teste = {
    name: string;
    img: string;
    tecnologias: string;
    github: string;
    site: string;
}

function Projects() {

    const emovie = {
        name: 'E.MOVIE',
        img: emovieproject,
        tecnologias: 'REACT, CSS, HTML',
        github: 'https://github.com/eduardomdev/movie_project',
        site: 'https://movie-project-omega-bice.vercel.app/',
    }
    
    const portfolio = {
        name: 'PORTFOLIO',
        img: portfolioproject,
        tecnologias: 'React | Styled Components | TS | HTML',
        github: '',
        site: '',
    }

    Modal.setAppElement('#root');

    const images = [emovie, portfolio]

    const [modalIsOpen, setIsOpen] = useState<boolean>(false);

    const [newValue, setNewValue] = useState< Teste | null >(null)

    function modalValue(projeto: Teste){
        setNewValue(projeto)
        openModal()
    }
    
    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }


    const myRef = useRef<HTMLDivElement>(null)


    function clickLeft(e: any){
        e.preventDefault()

        if(myRef.current){
            myRef.current.scrollLeft -= myRef.current.offsetWidth
        }
    }

    function clickRight(e: any){
        e.preventDefault()

        if(myRef.current){
            myRef.current.scrollLeft += myRef.current.offsetWidth
        }
    }

    return (
        <ProjectContainer>
            <StyleArea>
                <h1>Portifolio</h1>
                <FaCaretDown></FaCaretDown>
            </StyleArea>
            <ProjectArea>
                <ArrowButton onClick={clickLeft}><FaAngleLeft></FaAngleLeft></ArrowButton>
                <ShowCarrousel ref={myRef}>
                    {
                        images.map(projeto => (
                            <DivImg onClick={() => modalValue(projeto)} style={{backgroundImage: `url(${projeto.img})`}}>
                                <div>
                                </div>
                            </DivImg>
                        ))
                    }
                </ShowCarrousel>
                <ArrowButton onClick={clickRight}><FaAngleRight></FaAngleRight></ArrowButton>
            </ProjectArea>
                <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles}> 
                    {(
                       newValue == null 
                       ? <h2>Não encontrado!</h2> 
                       : <ModalDiv>
                            <h1>{newValue.name}</h1>
                            <p>Tecnologias Utilizadas:</p>
                            <p>{newValue.tecnologias}</p>
                            <span>
                                <a href={newValue.site}><LinkButton><FaLink></FaLink></LinkButton></a>
                                <a href={newValue.github}><LinkButton><FaGithub></FaGithub></LinkButton></a>
                            </span>
                         </ModalDiv>
                    )}
                </Modal>   
        </ProjectContainer>
    )
}

export default Projects