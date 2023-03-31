import { gql, useQuery } from "@apollo/client";
import { getClient } from "../../../api/apollo";
import { Button } from "../Button/Button";
import { CardCharacter } from "../CardCharacter";
import { CardLists } from "./styles";

  interface CardListProps {
      page:number;
      filter?:  String;
  }

export  async  function CardList({page, filter}:CardListProps) { 
  console.log("CardList: ", filter)
  let query
  let newFilter = filter?.toString;
  if(filter){
    query = gql`query {
      characters(page: ${page},  filter: { name: "${filter}" }) {
        info {
          count
          pages
          next
          prev

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
  }else {
     query = gql`query {
      characters(page: ${page}) {
        info {
          count
          pages
          next
          prev

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
  }
    const client = getClient();
    const { data } = await client.query({query})
    console.log(data)
    const newPage = data.characters.info.prev === null? 1:  Number(data.characters.info.next -1)
   console.log("newPage", newPage)
   console.log("filter", filter)
   console.log("data.characters.results.", data.characters.results)

    return(
      <>
      
         <CardLists>
                {data.characters.results.map((character:any) => 
                (
                  <CardCharacter key={character.id}  character={character} />
                  )
                  
                  )}
            </CardLists>
          <Button page={newPage} pages={data.characters.info.pages} />
        </>
    )

}
