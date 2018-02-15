var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index');
});

router.get('/api2', function (req, res) {
    var array = [
        {
            name: 'Frozen',
            video: 'https://www.youtube.com/embed/TbQm5doF_Uc',
            image: 'http://m.b5z.net/i/u/6127364/i/frozen_3.jpg'
        },
        {
            name: 'Brave',
            video: 'https://www.youtube.com/embed/TEHWDA_6e3M',
            image: 'https://vignette.wikia.nocookie.net/disneyprincess/images/f/f2/Brave-Merida-Poster.jpeg/revision/latest?cb=20130812152253'
        },
        {
            name: 'Moana',
            video: 'https://www.youtube.com/embed/LKFuXETZUsI',
            image: 'https://cdn.traileraddict.com/content/walt-disney-pictures/moana-poster-9.jpg'
        },
        {
            name: 'Zootopia',
            video: 'https://www.youtube.com/embed/jWM0ct-OLsM',
            image: 'https://i.pinimg.com/originals/e4/bb/97/e4bb97ed99a32328cbf3a9517845abb8.jpg'
        }

    ]

    res.json(array);
});

router.get('/api2/trailers',function (req,res) {
    res.render('index');
});

module.exports = router;
