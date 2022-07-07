var User = require('../model/Users.model');


module.exports = {
  
    showAlluser: async(req,res) =>{
        User.find((err, data)=>{
            res.json(data);
            
        });
    },
    createUser: async(req,res) =>{
        const user = new User({...req.body});
        console.log(user);  
        user.save();
        res.json(user);
        
    },
   /* createUser: async(req,res) =>{

        const user = new User({ ...req.body});
        await user.save();
        res.json(user);
        
    },*/
    /*deleteUserById: async (req, res) => {
        const { id } = req.params;
        await User.findByIdAndRemove({ _id: id });
        
    }*/
    deleteUserById: async (req, res) => {
        const id = req.params.id;
        User.findByIdAndRemove(id)
        .then(data => {
          if (!data) {
            res.status(404).send({
              message: `Impossible de supprimer utilisateur avec id=${id}.Utilisateur est possiblement introuvable!`
            });
          } else {
            res.send({
              message: "Utilisateur supprimée avec succès!"
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "Impossible de supprimer utilisateur avec id=" + id
          });
        });
        },

    
}