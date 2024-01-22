//This targets the div where profile information will appear//
const overview = document.querySelector(".overview");
const username = "kellyraefoote";

const getData = async function () {
    const userInfo = await fetch(
        `https://api.github.com/users/${username}`);
        const data = await userInfo.json();
       console.log(data);
        displayData(data);
};

getData();

const displayData = function(data) {
    //create a new div//
    const div = document.createElement("div");
    //add classlist "user-info" to new div//
    div.classList.add("user-info");
    div.innerHTML = `
     <figure>
         <img alt="user avatar" src=${data.avatar_url} />
     </figure>
     <div>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Bio:</strong> ${data.bio}</p>
        <p><strong>Location:</strong> ${data.location}</p>
        <p><strong>Number of public repos:</strong> ${data.public_repos}</p>
     </div> 
    `;
    overview.append(div);
}