async function hello(req,res){
    try{
        res.send('Hello World!')
    }catch(err){
        res.send('SOMETHING WENT WRONG')
    }
}


module.exports = {hello}