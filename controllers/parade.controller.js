var Parade = require('../model/Parades');


module.exports = {
  
    showAllparade: async(req,res) =>{
        Parade.find((err, data)=>{
            res.json(data);
            
        });
    },
    create: async(req,res) =>{

        const parade = new Parade({ ...req.body});
        await parade.save();
        res.json(parade);
        
    },
    deleteParadeById: async (req, res) => {
        const { id } = req.params;
        await Parade.findByIdAndRemove({ _id: id });
        
    }


    
}