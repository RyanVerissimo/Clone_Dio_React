import logo from '../../assets/logo-dio.png'
import { Button } from "../Button"
import { BuscarInputContainer, Container, Input, Menu, MenuRight, Row, SeparationButtons, UserPicture, Wrapper } from "./styles"
import { IHeader } from './types'

const Header = ({autenticado}: IHeader) => {
    return (
        <Wrapper>
            <Container>
                <Row>
                    <img src={logo} alt="Logo da DIO"/>
                    {autenticado ? (
                        <>
                            <BuscarInputContainer>
                                <Input placeholder="Buscar..."/>
                            </BuscarInputContainer>
                            <Menu>Live Code</Menu>
                            <Menu>Global</Menu>
                        </>
                    ) : null}
                    
                </Row>

                <Row>
                    {autenticado ? (
                        <UserPicture src='https://avatars.githubusercontent.com/u/113875982?v=4'/>
                    ) : (
                        <>  
                            <SeparationButtons>
                                <MenuRight href="#">Home</MenuRight>
                                <Button title="Entrar"/>
                                <Button title="Cadastrar"/>
                            </SeparationButtons>
                        </>
                    )}
                </Row>
            </Container>
        </Wrapper>
    )
}


export { Header }