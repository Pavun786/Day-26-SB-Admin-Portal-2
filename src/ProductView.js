

function ProductView(){

    const params =useParams()

    const [userData,setUserData]=useState([])

    useEffect(()=>{
      
        loadUser()
     
    },[])

    let loadUser=async()=>{
        try{
            let user =await axios.get(`https://63770e2281a568fc250af260.mockapi.io/users/${params.pavun}`)
            console.log(user.data)
            setUserData(user.data)
        } catch (error){

        }
    
     }
     return(
        <h1>{userData.BikeName}</h1>
        <h1>{userData.Brand}</h1>
        <h1>{userData.Model}</h1>
        <h1>{userData.Catagory}</h1>
        <h1>{userData.Mileage}</h1>
        <h1>{userData.MaxSpeed}</h1>
     )
}