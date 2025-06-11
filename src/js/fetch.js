import axios from "axios";


 async function getFeedback(){
    

    const getHttps = await axios({
        method:'get',
        headers: {
            'accept': 'application/json'
        },

        url: 'https://sound-wave.b.goit.study/api/feedbacks?limit=10&page=1',

 	

    })



    
    const allData = getHttps.data.data;

    const result = allData.map(value =>({
        rating: value.rating,
        name: value.name,
        descr: value.descr,
    }))

    
    
    return result;
    
}

export default getFeedback;