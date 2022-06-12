import React, {useState, useEffect} from "react";
import Axios from "axios"
import SearchIcon from '../resources/search.svg'
import BeerComponent from '../beer/BeerComponent'

const url = "http://localhost:8080/api/beer";

function Home() {

    const [beers, setBeers] = useState([]);
    const [beerName, setBeerName] = useState("");
  
    const copyBeerName = (textToCopy) => {
      setBeerName(textToCopy.target.value);
    }
  
    const getBeers = async (beerNameParam) => {
      if (beerNameParam === "") {
        await Axios.get(url)
        .then(
          response => {
            setBeers(response.data);
          }
        )
      } else {
        await Axios.get(`${url}?name=${beerNameParam}`)
        .then(
          response => {
            setBeers(response.data);
          }
        )
      }
    }
  
    useEffect( () => {
          getBeers("");
    }, []);
  
    /* Functions above. Return below */
    
    return (
      <>
      <div className='buttons'>
        <>
        <button>Log in</button>
        <button>Authenticate</button>
        </>
      </div>
   
      <div className='app'>
        <h1>Wheremybeerat?</h1>
  
        <div className='search'>
          <input
            placeholder='Looking for something specific?'
            value={beerName}
            onChange={copyBeerName}
            />
  
          <img  
            src={SearchIcon}
            alt="search"
            onClick={() => {
              getBeers(beerName)
            }}
          />
        </div>
        
        {beers?.length > 0 ? 
        (
          <div className='container'>
              {beers.map((beer) => (
                <BeerComponent beer1={beer}/>  
              ))}
            </div>
          ) : 
          (
            <div className="empty">
              <h2>No beers to show yet. Loading..</h2>
            </div>
          )}
      </div> 
      </>
    );
  }

export default Home;