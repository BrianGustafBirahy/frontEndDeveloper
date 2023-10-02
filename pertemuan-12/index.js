import helloWorld from "./helloWorld.js";
import ambilDataUser from "./ambilDataUser.js";
import ambilDataUserAsync from "./ambilDataUserAsync.js";
// 1. Promise
const massages = async() => {
    let msg = await helloWorld()
    console.log(msg);
}
massages();

// 2.fetch 
ambilDataUser();

// 3. Async Await
ambilDataUserAsync();