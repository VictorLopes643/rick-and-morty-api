import Image from "next/image"
import {  Alive, CardInfos, Container, Name, RowAlive, RowName, TextBold, TextNormal } from "./styles"

interface cardCharacterProps {
    character: any
}

export  const CardCharacter = ({character}:cardCharacterProps) => {
    return (
        <Container>
            <Image alt="Avatar" src={character.image}
                width={150} height={150} style={{borderRadius: "8px 0 0px 8px", height:"100%!important"}} />
            <CardInfos>
                <RowName>
                        <Name>{character.name}</Name>
                </RowName>
                <RowAlive>
                    <Alive />
                    <TextNormal>{character.status} - {character.species}</TextNormal>
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
