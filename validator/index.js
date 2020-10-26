exports.userSignupValidator = (req, res, next) => {
    req.check("name", "Name is required").notEmpty()
        .withMessage("Please enter a name!!!");
    req.check("surname", "Surname is required").notEmpty()
        .withMessage("Please enter a surname!!!")
    req.check("email", "Enter a email validate")
        .matches(/.+\@.+\..+/)
        .withMessage("Email must contain @")
    const errors = req.validationErrors();
    if (errors) {
        const firstError = errors.map(error => error.msg)[0];
        return res.status(400).json({ error: firstError });
    }
    next();
};

exports.userLogInValidator = (req, res, next) => {
    req.check("email", "Enter a email validate")
        .matches(/.+\@.+\..+/)
        .withMessage("Email must contain @ is necesary")
    req.check("password", "Password is required").notEmpty();
        
    const errors = req.validationErrors();
    if (errors) {
        const firstError = errors.map(error => error.msg)[0];
        return res.status(400).json({ error: firstError });
    }
    next();
};

exports.tweetsCreateValidator = (req, res, next)=>{
    req.check("message", "Message is required").notEmpty()
        .withMessage("Please enter a message is required"); 
        
    const errors = req.validationErrors();
    if (errors) {
        const firstError = errors.map(error => error.msg)[0];
        return res.status(400).json({ error: firstError });
    }
    next();
};