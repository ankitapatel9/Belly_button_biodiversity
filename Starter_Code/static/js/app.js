// Use the D3 library to read in `samples.json`

d3.json("./samples.json").then(function(data) {
    console.log(data);
});