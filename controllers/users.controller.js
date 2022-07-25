var User = require('../model/Users.model');
const bcrypt = require('bcrypt');


module.exports = {
  login: async (req, res, next) => {
    const { email, mdp } = req.body
    // Check if username and password is provided
    if (!email || !mdp) {
      return res.status(400).json({
        message: "Username or Password not present",
      })
    }
    try {
      const user = await User.findOne({ email, mdp })
      if (!user) {
        res.status(401).json({
          message: "Login not successful",
          error: "User not found",
        })
      } else {
        res.status(200).json({
          message: "Login successful",
          user,
        })
      }
    } catch (error) {
      res.status(400).json({
        message: "An error occurred",
        error: error.message,
      })
    }
  },
    showAlluser: async(_req,res) =>{
        User.find((_err, data)=>{
            res.json(data);
            
        });
    },

    createUser: async(req,res) =>{
      const {nom,prenom,date_naissance,mdp,email,Role}=req.body;
      const hashPassword = await bcrypt.hash(mdp,10);
        const user = new User({nom,prenom,date_naissance,mdp:hashPassword,email,Role});
        
        console.log(user);  
        user.save();
        res.json(user);
        
    },
   
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


  getUseById: async(req,res) => {
    const id = req.params.id;
    User.findById(id).then(data => {
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

    getUsersWhereAgeMoins: async (req, res) => {
      try {
        const { age } = req.body;
        const users = User.find();
        const NewUsers = [];
        User.find().then((users) => {
          console.log(users)
          users.filter((user) => {
            const userAge = getAge(user.date_naissance);
            if (userAge <= age) {
              NewUsers.push(user);
            }
          });
          res.send(NewUsers);
        });
        //res.send(NewUsers);
      } catch (error) {
        console.log(error.message);
      }
    },
    getUsersWhereAgePlus: async (req, res) => {
      try {
        const { age } = req.body;
        const users = User.find();
        const NewUsers = [];
        User.find()
          .then((users) => {
            users.filter((user) => {
              const userAge = getAge(user.date_naissance);
              if (userAge >= age) {
                NewUsers.push(user);
              }
            });
            res.send(NewUsers);
          })
          .catch((err) => {
            console.log(err.message);
          });
        //res.send(NewUsers);
      } catch (error) {
        console.log(error.message);
      }
    },
    getUsersWhereAgeEquals: async (req, res) => {
      try {
        const { age } = req.body;
        const users = User.find();
        const NewUsers = [];
        User.find()
          .then((users) => {
            users.filter((user) => {
              const userAge = getAge(user.date_naissance);
              if (userAge == age) {
                NewUsers.push(user);
              }
            });
            res.send(NewUsers);
          })
          .catch((err) => {
            console.log(err.message);
          });
        //res.send(NewUsers);
      } catch (error) {
        console.log(error.message);
      }
    },
    searchUserByName: async (req, res) => {
      try {
        const { nom, prenom } = req.body;
        const regexName = new RegExp(nom, "i");
        const regexLastName = new RegExp(prenom, "i");
        User.findOne({
          nom: { $regex: regexName },
          prenom: { $regex: regexLastName },
        }).then((resp) => {
          console.log(resp);
          res.send(resp);
        });
      } catch (error) {
        console.log(error.message);
      }
    },
    
  }
const getAge = (birthDate) => {
  let month_diff = Date.now() - birthDate.getTime();
  //convert the calculated difference in date format
  let age_dt = new Date(month_diff);
  //extract year from date
  let year = age_dt.getUTCFullYear();
  //now calculate the age of the user
  let age = Math.abs(year - 1970);
  console.log(age);
  return age;
};
