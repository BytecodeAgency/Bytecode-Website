const handlePost = (req, res) => {
    console.log(req.body); // eslint-disable-line
    res.sendStatus(200);
};

module.exports = handlePost;
