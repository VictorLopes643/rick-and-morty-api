import { useQuery } from "@apollo/client/react"
import { CardCharacter } from "./CardCharacter"
import { InputCharacters, CardList, Container } from "./styles"
import * as React from 'react'
import { gql } from "@apollo/client";
import { getClient } from "../../api/apollo";
const query = gql`query {
    characters(page: 1, lime) {
      info {
        count
      }
      results {
        name
        status
        species
        image
        location {
          name
        }
        id
      }
    }
  }`;
export default async function HomeComponent() {  
    const client = getClient();
    const { data } = await client.query({ query });
    console.log("data: " ,data.characters.result )
    return (
        <Container>
            <InputCharacters  placeholder="Busque por um personagem"/>
            {JSON.stringify(data.characters.results[0].name)}
            <CardList>
                {data.characters.results.map((character:any) => 
                (
                    <CardCharacter key={character.id}  character={character} />
                    )

                )}
                {/* <CardCharacter />
                <CardCharacter />
                <CardCharacter />
                <CardCharacter />
                <CardCharacter />
                <CardCharacter /> */}
            </CardList>

        </Container>
        
    )
}
