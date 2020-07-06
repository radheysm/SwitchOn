const express = require('express');
const router = express.Router();
const {check, validationResult} = require('express-validator');
const auth = require('../../middleware/auth');
const AssignForm = require('../../models/AssignForm');


// @route     POST api/aasignForm
// @desc      Assign a Form
// @access    Private

router.post('/',[auth], async (req, res)=> {
    console.log(req.body);
    try {
        // const user = await User.findById(req.user.id).select('-password');
        const newForm = new AssignForm({
        text : req.body.text,
        assignTo : req.body.assignTo,
        
    });


    const assignForm = await newForm.save();
    res.json(assignForm);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error')
    }
    
});

// @route     GET api/post
// @desc      Get all Post
// @access    Private

router.get('/', auth, async (req, res) =>{
    try {
        const forms = await AssignForm.find().sort({date:-1});
        res.json(forms);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});


module.exports = router;