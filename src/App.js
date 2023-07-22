import React from "react";
import Navbar from './COmponents/Navbar';
import Filter from './COmponents/Filter';
import Cards from './COmponents/Cards';
import {apiUrl , filterData} from './data';
import { toast } from "react-toastify";
import {useEffect , useState} from 'react';

const App = () => {

  const[Courses, setCourses]=useState([]);
// const [loading, setLoading] = useState(true);

  async function fetchData() {
    // setLoading(true);
    try{
      let response = await fetch(apiUrl);
      let output = await response.json();
      ///output -> 
      console.log(output);
      setCourses(output.data);
    }
    catch(error) {
        toast.error("Network me koi dikkat hai");
    }
    // setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);
  

  return (
    <div>
    <div>
      <Navbar/>
      </div>

      <div>
      <Filter 
        filterData={filterData}
      />
      </div>
      
      <Cards Courses={Courses}/>
    </div>

  )
};

export default App;
