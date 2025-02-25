import { MdEmail, MdLock } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/Button'
import { Header } from "../../components/Header"
import { Input } from '../../components/Input'
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import { Column, Container, CriarText, EsqueciText, Row, SubTitleLogin, Title, TitleLogin, Wrapper } from './styles'
import { api } from '../../services/api'
import { IFormData } from './types'


const schema = yup
  .object({
    email: yup.string().email('Email não é válido!').required('Campo obrigatório!'),
    password: yup.string().min(8, 'No mínimo 8 caracteres!').required('Campo obrigatório!'),
  })
  .required()

const Login = () => {
    const navigate = useNavigate()

    const {
        control,
        handleSubmit,
        formState: { errors }
      } = useForm<IFormData>({
        resolver: yupResolver(schema),
        mode: 'onChange',
        defaultValues: {
            email: '',
            password: '',
        }
      })


      const onSubmit = async (FormData: IFormData) => {
        try {
            const { data } = await api.get(`users?email=${FormData.email}&senha=${FormData.password}`)
            if(data.length === 1) {
                navigate('/feed')
            } else {
                alert('Email ou senha inválido.')
            }
        }catch {
            alert('Houve um erro, tente novamente.')
        }
    }
    

    return (
        <>
            <Header />
            <Container>
                <Column>
                    <Title>
                        A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
                    </Title>
                </Column>
                <Column>
                    <Wrapper>
                        <TitleLogin>Faça seu cadastro</TitleLogin>
                        <SubTitleLogin>Faça seu login e make the change._</SubTitleLogin>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="E-mail" leftIcon={<MdEmail/>}/>  
                            <Input name="password" errorMessage={errors?.password?.message}  control={control}  placeholder="Senha" type="password" leftIcon={<MdLock/>}/>
                            <Button title="Entrar" variant="Senconday"  type="submit" />
                        </form>
                        <Row>
                            <EsqueciText to="/forgot">Esqueci minha senha</EsqueciText>
                            <CriarText to="/register">Criar conta</CriarText>
                        </Row>
                    </Wrapper>
                </Column>
            </Container>
        </>
    )
}

export { Login }