import { FiThumbsUp } from "react-icons/fi"
import { CardContainer, Content, HasInfo, ImageBackground, PostInfo, UserInfo, UserPicture } from "./styles"

const Card = () => {
    return (
        <CardContainer>
            <ImageBackground src="https://hermes.dio.me/articles/cover/4cb46a28-34fb-4c72-9588-b5ed52b9470f.jpg"/>
            <Content>
                <UserInfo>
                    <UserPicture src="https://avatars.githubusercontent.com/u/113875982?v=4"/>
                    <div>
                        <h4>Ryan Oliveira</h4>
                        <p>Há 7 minutos</p>
                    </div>
                </UserInfo>
                <PostInfo>
                    <h4>Projeto para curso de HTML e CSS</h4>
                    <p>Projeto feito no curso de html e css no bootcamp dio do Global avanade...<strong>Saiba Mais</strong></p>
                </PostInfo>
                <HasInfo>
                    <h4>#HTML #CSS #JavaScript</h4>
                    <p>
                        <FiThumbsUp /> 10
                    </p>
                </HasInfo>
            </Content>

        </CardContainer>
    )
}

export { Card }