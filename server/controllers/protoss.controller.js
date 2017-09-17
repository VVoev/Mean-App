const jobsController = (data) => {
    return {
        getAllUnits(req, res){
            if (req.query === null) {
                return data.protoss.getAll()
                    .then((units) => {
                        return res.json(units);
                    })
            }
            else {
                data.protoss.findByParams(req.query)
                    .then((filteredunits) => {
                        return res.send(filteredunits);
                    })
                    .catch((err) => {
                        return res.status(400).json({errorMsg: err});
                    })
            }
        },

    }
}

module.exports = jobsController;

