import axios from "axios";


 async function getFeedback(){
    

    const getHttps = axios({
        method:'get',
        headers: {
            'accept': 'application/json'
        },

        url: 'https://sound-wave.b.goit.study/api/feedbacks?limit=10&page=1',

 	

    })
    // .then((value) =>{
    //     for(let i = 0; i < value.data.data.length; i++){
    //         console.log(value.data.data[i]);
    //     }

    //     // console.log( value.data.data)
    // })


    const allData = await getHttps;
    const usersRating = allData.data.data.rating;
    const usersName = allData.data.data.name;
    const usersDescr = allData.data.data.descr;
    
    return {rating: usersRating, name: usersName, descr: usersDescr};
    
}

export default getFeedback;