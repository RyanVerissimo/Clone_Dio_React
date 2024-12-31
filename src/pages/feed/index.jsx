import { Card } from '../../components/Card'
import { UserInfo } from '../../components/UserInfo'
import { Header } from "../../components/Header"

import { Column, Container, Title, TitleHighLight }  from './styles'

const Feed = () => {
    return (
        <>
            <Header autenticado={true}/>
            <Container>
                <Column flex={3}>
                    <Title>Feed</Title>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </Column>
                <Column flex={1}>
                    <TitleHighLight># RANKING TOP 5 DA SEMANA</TitleHighLight>
                    <UserInfo percentual={88} nome="Ryan Oliveira" image="https://avatars.githubusercontent.com/u/113875982?v=4"/>
                    <UserInfo percentual={40} nome="Ryan Oliveira" image="https://avatars.githubusercontent.com/u/113875982?v=4"/>
                    <UserInfo percentual={99} nome="Ryan Oliveira" image="https://avatars.githubusercontent.com/u/113875982?v=4"/>
                    <UserInfo percentual={70} nome="Ryan Oliveira" image="https://avatars.githubusercontent.com/u/113875982?v=4"/>
                    <UserInfo percentual={50} nome="Ryan Oliveira" image="https://avatars.githubusercontent.com/u/113875982?v=4"/>
                </Column>
            </Container>
        </>
    )
}

export { Feed }