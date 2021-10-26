const app = require("./app");
const port = 3000

app.listen(port, () => {
    console.log(`Server started and is listening at port ${port}`)
    console.log(`Open a browser and go to the URL http://localhost:${port}`)
});
