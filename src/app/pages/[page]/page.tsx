import HomeComponent from "@/components/home"

interface PagesProps {
    params:{
        page: number;
        filter?: string 
    }
    searchParams: { [key: string]: string | string[] | undefined };

}

export default function Pages({params, searchParams}: PagesProps) {
    
    console.log("params page: ", params.page);
    console.log("params filter: ", searchParams.test);
    return(
        <HomeComponent page={params.page} filter={searchParams.test }   />
    )
}