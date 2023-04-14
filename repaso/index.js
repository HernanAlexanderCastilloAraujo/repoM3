console.log("Se levanta el servidor")

const app = require('./src/app');
const PORT = 3001;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})


