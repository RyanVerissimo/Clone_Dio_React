import { Header } from "../../components/Header"
import { BacktoLogin, Column, Container, ImagemForgot, InputForgot, RecuperationMessage, Row, Title, Wrapper } from "./styles"
import ForgotImage from "../../assets/robocconfuso.png"
import { Button } from "../../components/Button"
import { useState } from "react"

const Forgot = () => {
    
    const [email, setEmail] = useState("") 
    const [message, setMessage] = useState(false)
    const [error, setError] = useState("")  

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>)  => {
        setEmail(e.target.value)  
    }

    const HandleClick = () => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!email) {
            setError("Por favor, insira um email.");
            setMessage(false);
        } else if (!emailRegex.test(email)) {
            setError("Por favor, insira um email válido.");
            setMessage(false);
        } else {
            setError("");  
            setMessage(true);  
        }
    }

    return(
        <>
            <Header />
            <Container>
                <Column>
                    <ImagemForgot src={ForgotImage} alt="Robô confuso" />
                </Column>
                <Column>
                    <Wrapper>
                        <Title>Insira seu e-mail de recuperação</Title>
                        <InputForgot name="email" placeholder="E-mail" value={email} onChange={handleEmailChange}/>
                        <Button title="Enviar" variant="Senconday" type="submit" onClick={HandleClick}></Button>
                        <Row>
                            {message && <RecuperationMessage>Email de recuperação enviado com sucesso.</RecuperationMessage>}
                            {error && <RecuperationMessage style={{ color: "#f44336" }}>{error}</RecuperationMessage>}
                            <BacktoLogin to="/login">Voltar para login</BacktoLogin>
                        </Row>
                    </Wrapper>
                </Column>
            </Container>
        </>
    )
}

export { Forgot }