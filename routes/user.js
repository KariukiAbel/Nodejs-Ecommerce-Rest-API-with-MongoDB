const router = require('express').Router();

router.get("/usertest", (req, res)=>{
res.send("user test is successfull");
})

router.post("/user_post_test", (req, res)=>{
  const username = req.body.username
  console.log(username);
  res.send("Your user name is: " + username)
})

module.exports = router
