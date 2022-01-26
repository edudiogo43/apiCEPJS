import express from 'express';
import api from './api.js';
import cors from 'cors';

const app = express();
const PORT = 8081;

app.use(express.json());
app.use(cors());

app.get("/buscacep/:cep", async (req,res) => {
    const cep = req.params.cep.replace("-","");
    console.log(cep);

    try {
        const { data } = await api.get(`${cep}/json`);
        return res.status(202).json(data)
        
    } catch (error) {
        res.status(401).json({error: "unable to connect on API"})
    }


})

app.listen(PORT , () => {
    console.log(`Server running on port ${PORT}`);
})