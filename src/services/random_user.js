import axios from 'axios'

const fetchData = async () => {
 
     try {
        let response = await axios('https://api.randomuser.me/');
        //console.log(response.data.results)
        return response.data.results
     } catch (error) {
         console.log(error)
     }
}

export default fetchData