import { useLocation } from "react-router-dom"
import { Photo } from "../../models/Photo"
import { BackButton, Container, DescriptionContainer, Image, Text } from "./styles"


type Location = {
    state: {
      photo: Photo
    }
  }

const PhotoView = () => {
const location: Location = useLocation()
  const { photo } = location.state
    return (
        <>
            <BackButton to='/'>{'Voltar'}</BackButton>
            <Container>
                <Image src={photo.regularUrl}/>
                <DescriptionContainer>
                    {
                        photo.description && 
                        <Text>Description: {photo.description}</Text>
                    }
                    <Text>Created at: {photo.creationDate.toLocaleDateString('pt-BR')}</Text>
                </DescriptionContainer>
            </Container>
        </>
    )
}

export default PhotoView
