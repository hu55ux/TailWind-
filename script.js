const getUserData = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await data.json();
  return users;
};

const mainDiv = document.getElementById("mainDiv");
const displayUserData = async () => {
  const users = await getUserData();
  users.forEach((user) => {
    const userDiv = document.createElement("div");
    userDiv.style.border = "1px solid #ccc";
    
    userDiv.style.padding = "10px";
    userDiv.style.margin = "10px 0";

    const userName = document.createElement("h2");
    userName.innerText = `Name: ${user.name}, Email: ${user.email}`;

    const userAddress = document.createElement("p");
    userAddress.innerText = `Address: ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`;

    userDiv.appendChild(userName);
    userDiv.appendChild(userAddress);
    mainDiv.appendChild(userDiv);
  });
};

displayUserData();
