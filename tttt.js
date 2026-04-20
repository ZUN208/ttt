  let dt;
  fetch('https://reqres.in/api/users',{
    headers: {
        "x-api-key": "pro_4cd3f6ecc88d621dfc6813ffb43ebceb603464eeb28c821f65f5e88b0d384180"
    }
}).then(res => res.json()).then(data => { dt = data; console.log(dt); }).catch(err => console.log(err))

for (let [key, d] of dt.entries()) {
    console.log(d);
}