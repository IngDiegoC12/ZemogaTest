import {React, useState, useEffect }  from 'react'
import Header from './Header'
import { Like, Sources } from './data'
import Card from './Card'
import './Home.css'


function Home() {
  
  const [data, setData] = useState([]);

useEffect(() => {
    async function getData() {

        // get data from realtime database
        try {
            const resp = await fetch('https://test-zemoga-default-rtdb.firebaseio.com/data.json');
            if (resp.ok) {
                setData(await resp.json());
            } else {
                throw resp;
            }
        } catch (error) {
            console.log(error);
        }
    }
    getData();
}, []);

    return (
        <>
          <Header {...Sources} />
          <div className='momContainer'>
              <h2 className='momTittle'>Previus Rulings</h2>
              <button className='momList'>hola</button>
          {data.map(dat => {

              const props = {
                  like: Like,
                  data: dat
              }
                return (
                  <Card key={dat.id} {...props}/>
                );
        })}
          </div>
        </>
    )
}

export default Home