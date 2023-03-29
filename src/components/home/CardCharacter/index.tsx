import Image from "next/image"
import {  Alive, CardInfos, Container, Name, RowAlive, RowName, TextBold, TextNormal } from "./styles"

export  const CardCharacter = () => {
    return (
        <Container>
            <Image alt="Avatar" src="https://rickandmortyapi.com/api/character/avatar/24.jpeg" 
                width={150} height={150} style={{borderRadius: "8px 0 0px 8px"}} />
            <CardInfos>
                <RowName>
                    <Name>Giant Judge</Name>
                </RowName>
                <RowAlive>
                    <Alive />
                    <TextNormal>Vivo - Humano</TextNormal>
                </RowAlive>
                <TextBold>
                    Last known location:
                </TextBold>
                <TextNormal>Citadel of Ricks</TextNormal>
                <TextBold>
                    Last known location:
                </TextBold>
                <TextNormal>Citadel of Ricks</TextNormal>
            </CardInfos>
        </Container>
        
    )
}
