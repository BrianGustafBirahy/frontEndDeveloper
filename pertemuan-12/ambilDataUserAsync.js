const ambilDataUserAsync = async () => {
    const response = await fetch("https://reqres.in/api/users");
    const json = await response.json();
    console.log(json.data);
  };  
export default ambilDataUserAsync;