import React from "react";
import Pokemon from './Components/Pokemon'
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
const App=()=>{
    const [pokeData,setPokeData]=useState([]);
    const [loading,setLoading]=useState(true);
    const [url,setUrl]=useState("https://pokeapi.co/api/v2/pokemon?limit=10")
    const [nextUrl,setNextUrl]=useState();
    const [prevUrl,setPrevUrl]=useState();

    const app=async()=>{
        setLoading(true)
        const res=await axios.get(url);
        setNextUrl(res.data.next);
        setPrevUrl(res.data.previous);
        getPokemon(res.data.results)
        setLoading(false)
    }
    const getPokemon=async(res)=>{
       res.map(async(item)=>{
          const result=await axios.get(item.url)
          setPokeData(state=>{
              state=[...state,result.data]
              state.sort((a,b)=>a.id>b.id?1:-1)
              return state;
          })
       })   
    }
    useEffect(()=>{
        app();
    },[url])
    return(
        <>
            <div className="app-container">
            <h1 className='title'>Pokemon</h1>
                <div className="pokemon-container">
                  <div className="all-container">
                    <Pokemon pokemon={pokeData} loading={loading}/>
                    
                    <div className="div">
                        {  prevUrl && <button className="load-more" onClick={()=>{setPokeData([])
                            setUrl(prevUrl) 
                        }}>Back</button>}

                        { nextUrl && <button className="load-more" onClick={()=>{setPokeData([])
                            setUrl(nextUrl)
                        }}>Next</button>}
                    </div>
                  </div>
                </div>
            </div>
            
        </>
    )
}
export default App;