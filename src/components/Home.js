import React, {useState,useEffect} from 'react'
import axios from 'axios';



function Home () {

    useEffect( () => {
        const fetchPets = async () => {
            const res = await axios.get('http://localhost:3001/pets/pets');
            const pets = res.data
            setPets(pets)
            console.log(pets)
            
        };
        fetchPets();
    },[])

    const[pets,setPets] = useState([])

    return(

        <div>

            {pets.map(pet =>  (
              <ul key={pet.id}> 
              
                  <li>{pet.animal}</li>
                  <li>{pet.breed}</li>
                  <li>{pet.color}</li>
                  <li>{pet.owner}</li>
              </ul>  
            ))}
        

        </div>
    )
}

export default Home;