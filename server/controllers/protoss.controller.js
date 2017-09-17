const protossController = (data,protoss) => {
    return {
        getAllUnits(req, res){
            if (req.query === null) {
                return protoss.getAll()
                    .then((units) => {
                        return res.json(units);
                    })
                    .catch((error)=>{
                        return res.send(400,error);
                    })
            }
        },

    }
}
module.exports = protossController;

