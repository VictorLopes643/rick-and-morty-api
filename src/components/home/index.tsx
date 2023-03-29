"use client"
import { CardCharacter } from "./CardCharacter"
import { InputCharacters, CardList, Container } from "./styles"

export  const HomeComponent = () => {
    return (
        <Container>
            <InputCharacters  placeholder="Busque por um personagem"/>
            <CardList>
                <CardCharacter />
                <CardCharacter />
                <CardCharacter />
                <CardCharacter />
                <CardCharacter />
                <CardCharacter />
            </CardList>

        </Container>
        
    )
}
