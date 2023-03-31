'use client'

import Link from "next/link"
import { useEffect, useState } from "react";
import { Container } from "./styles";

interface ButtonProps {
    page:number
    pages:number
}

export  const Button = ({page, pages}:ButtonProps) => {
    const [number, setNumber] = useState<any>();
    const [previousNumbers, setPreviousNumbers] = useState<any>();
    
    console.log('number: ', number);
    console.log('page: ', page);
  

    useEffect(() => {
        const arrayPages = [];
    
        for (let i = 0; i < pages; i++) {
            arrayPages.push( i );
        }
    
        setNumber(arrayPages);
      }, []);

      function obterIntervalo(num: number, arr: number[]): number[] {
        const indice = arr?.indexOf(num - 2);
        if (indice === -1) {
          console.log("etnrou q", arr?.slice(indice, indice + 5))
          return [1, 2, 3, 4, 5];
        }
        return arr?.slice(indice, indice + 5);
      }

      useEffect(()=> {
        setPreviousNumbers(obterIntervalo(page,number))
      },[number])

      function handlerPage(number: number){
        return `/pages/${Number(number)}`;
      }

    return (
        <Container>
     {previousNumbers?.map((number:number) => (
        // <div key={number}>{number}</div>
        <Link style={{margin: '1rem'}} href={handlerPage(number)} key={number}> {number}</Link>

      ))}
        
       {/* <Link href={handlerNext(page)} >+1</Link> */}
        </Container>
    )
}