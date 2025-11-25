module.exports=  (app) => {
    app.get('/noticias', (req, res) => {
        try{
            await app.dbCliente.connect();
            const resultado = await app.dbCliente.db('portalnoticias')
            .collection('noticias')
            .find()
            .toArray();
            res.json(resultado);
        
        }catch(error){
            res.send("erro:"+error)
        }finally{
            await app.dbCliente.close()
        }
    })
}

