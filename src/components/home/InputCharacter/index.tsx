'use client'
import {  useRouter, } from "next/navigation";
import { useState } from "react";
import { Container, InputCharacters } from "./styles";




export default  function InputCharacter() {  
    const router = useRouter()
    // console.log("params page: ", page);
    // console.log("params filter: ", filter);
    const [typingTimeout, setTypingTimeout] = useState<number | undefined>();

    const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        const value = target.value;
        console.log("handleChange", value);
        clearTimeout(typingTimeout);
        setTypingTimeout(
          window.setTimeout(() => {
            setTypingTimeout(0);
            router.push(`http://localhost:3000/pages/1?test=${value}`)
        }, 500)
        );
      };

    return (
        <Container>
            <InputCharacters onChange={(e:any) => handleChange(e)} placeholder="Busque por um personagem"/>
            {/* <CardList key={1} page={page} filter={filter} /> */}
          
        </Container>
        
    )
}