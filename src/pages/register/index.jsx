import { yupResolver } from "@hookform/resolvers/yup"
import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import * as yup from "yup"
import { useForm } from "react-hook-form"
import { MdEmail, MdLock, MdPerson } from "react-icons/md"
import { Button } from "../../components/Button"
import { useNavigate } from "react-router-dom"
import { Column, Container, DeclarationText, HaveAccountText, LogInText, RegisterMessage, Row, SubtitleRegister, Title, TitleRegister, Wrapper } from "./styles"
import { useState } from "react"

const schema = yup
  .object({
    email: yup.string().email('Email não é válido!').required('Campo obrigatório!'),
    password: yup.string().min(8, 'No mínimo 8 caracteres!').required('Campo obrigatório!'),
    name: yup.string().matches(/^[A-Za-zÀ-ÿ\s]+$/, "O nome deve conter apenas letras").min(5, 'No mínimo 5 caracteres!').required('Campo é obrigatório'),
  })
  .required()

const Register = () => {
    const navigate = useNavigate()

    const {
            control,
            handleSubmit,
            formState: { errors }
          } = useForm({
            resolver: yupResolver(schema),
            mode: 'onSubmit',
            defaultValues: {
                name: '',
                email: '',
                password: '',
            }
          })

    const [message, setMessage] = useState(false)

    const onSubmit = async (FormData) => {
        console.log(FormData)
        setMessage(true)  

        setTimeout(() => {
            navigate('/login')
        }, 3000)  
    }

    return(
        <>
            <Header />
            <Container>
                <Column>
                    <Title>A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.</Title>
                </Column>
                <Column>
                    <Wrapper>
                        <TitleRegister>Comece agora grátis</TitleRegister>
                        <SubtitleRegister>Crie sua conta e make the change._</SubtitleRegister>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input 
                                name="name" 
                                errorMessage={errors?.name?.message} 
                                control={control}  
                                placeholder="Nome Completo" 
                                leftIcon={<MdPerson/>} 
                            />
                            <Input 
                                name="email" 
                                errorMessage={errors?.email?.message} 
                                control={control} 
                                placeholder="E-mail" 
                                leftIcon={<MdEmail/>}
                            />  
                            <Input 
                                name="password" 
                                errorMessage={errors?.password?.message}  
                                control={control}  
                                placeholder="Senha" 
                                type="password" 
                                leftIcon={<MdLock/>}
                            />
                            <Button 
                                title="Criar minha conta" 
                                variant="Senconday" 
                                type="submit"
                            />
                            {message && <RegisterMessage>Cadastro realizado com sucesso.</RegisterMessage>} {}
                            <DeclarationText>Ao clicar em &quot;criar minha conta grátis&quot;, declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</DeclarationText>
                        </form>
                        <Row>
                            <HaveAccountText>Já tenho conta.</HaveAccountText>
                            <LogInText to="/login">Fazer login</LogInText>
                        </Row>
                    </Wrapper>
                </Column>
            </Container> 
        </>
    )
}

export { Register }
