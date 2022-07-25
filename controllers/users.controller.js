var User = require('../model/Users.model');


module.exports = {

  showAlluser: async(_req,res) =>{
    User.find((_err, data)=>{
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
  updateUser: async(req,res) => {
    const id  = req.params.id;
    console.log(id)
    User.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
          if (!data) {
            res.status(404).send({
              message: `Impossible de mettre à jour user avec id=${id}!`
            });
          } else res.send({ message: "utilisateur mise à jour avec succès." });
        })
        .catch(() => {
          res.status(500).send({
            message: "Erreur mise à jour avec id=" + id
          });
        });
  },
  searchUser: async(req,res) => {
    const id = req.params.id;
    User.findById(id)
        .then(data => {
          if (!data)
            res.status(404).send({ message: "Utilisateur introuvable pour id " + id });
          else res.send(data);
        })
        .catch(err => {
          res
              .status(500)
              .send({ message: "Erreur recuperation utilisateur avec id=" + id });
        });
  },
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
        .catch(() => {
          res.status(500).send({
            message: "Impossible de supprimer utilisateur avec id=" + id
          });
        });
  },


}