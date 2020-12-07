

async function getData() 
 {
     // Väntar på respons från fetch 
    let response = await fetch('https://api.github.com/users');
     // Fortsätt när handskakning är löst 
    let data = await response.json()
     return data;
 }
// Call getData function 
getData()
// Logga datan
.then(data => {
    console.log(data);
    $('#clickme').click(function() {
    let p = document.createElement("p"); // skapar ny <p></p>
for (let i = 0; i < data.length; i++) {
  let account = data[i];
  let line = document.createTextNode(`Login: ${account.login} - URL: ${account.url}`);
  p.appendChild(line);
}
let accountsDiv = document.getElementById('accounts');
accountsDiv.appendChild(p);
  })

}
);
