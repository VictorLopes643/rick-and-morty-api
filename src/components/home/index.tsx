import { useQuery } from "@apollo/client/react"
import { CardCharacter } from "./CardCharacter"
import { InputCharacters, Container } from "./styles"
import * as React from 'react'
import { gql } from "@apollo/client";
import { getClient } from "../../api/apollo";
import {CardList} from "./CardList";
import { Button } from "./Button/Button";
import InputCharacter from "./InputCharacter";

interface HomeProps {
    page: number;
    filter: any
}

export default  function HomeComponent({page,filter }:HomeProps) {  
    

    console.log("params page: ", page);
    console.log("params filter: ", filter);

    return (
        <Container>
            <InputCharacter />
            {/** @ts-expect-error */}
            <CardList key={1} page={page} filter={filter} />
          
        </Container>
        
    )
}