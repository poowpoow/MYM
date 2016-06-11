var express    = require('express');
var bodyParser = require('body-parser');
var app        = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

var router = express.Router();

var db = [
    {
        "id": 1,
        "path": "first-blog-post",
        "author": "Simon Kers",
        "date": "2016-01-01",
        "publish": "2016-01-01",
        "header": "First blog post",
        "byline": "Welcome to the grand premier of the new MYM site",
        "tags": [
                "dev", "tech", "blog"
        ],
        "body": "Praesent consectetur quis eros eget mattis. Mauris eros lacus, blandit id eleifend sit amet, lacinia ut dolor. Suspendisse sed molestie nulla, interdum ornare lorem. Integer non ligula egestas, venenatis sem tempor, pellentesque arcu. Aenean commodo arcu eget eros porttitor, at sagittis enim porta. Curabitur pharetra lacinia leo, a rutrum ligula euismod eget. Sed arcu dolor, tempor vestibulum efficitur id, dapibus non mi. Etiam egestas elit elit, sit amet dignissim velit efficitur eget. Sed fermentum pharetra mauris, in interdum urna ullamcorper at. Morbi molestie augue eu felis elementum malesuada.\n Fusce placerat felis sed ex volutpat, eu pretium magna venenatis. Mauris vel velit nibh. Nunc et efficitur nisl. Proin at sapien lobortis, laoreet risus et, maximus mi. Maecenas molestie venenatis urna, eget ultricies est efficitur non. Aenean hendrerit felis diam, in gravida ligula suscipit vel. Mauris sagittis eleifend lacus, eget varius justo. Sed a viverra arcu, in laoreet tortor. Maecenas egestas et lacus sit amet sagittis. Suspendisse sed mi id felis fermentum gravida quis sed ligula. Cras ut venenatis orci. Nullam vel nibh metus."
    },{
        "id": 2,
        "path": "second-blog-post",
        "author": "Simon Kers",
        "date": "2016-01-02",
        "publish": "2016-01-02",
        "header": "Second blog post",
        "byline": "It's been a great journey",
        "tags": [
                "dev", "tech", "blog"
        ],
        "body": "Praesent consectetur quis eros eget mattis. Mauris eros lacus, blandit id eleifend sit amet, lacinia ut dolor. Suspendisse sed molestie nulla, interdum ornare lorem. Integer non ligula egestas, venenatis sem tempor, pellentesque arcu. Aenean commodo arcu eget eros porttitor, at sagittis enim porta. Curabitur pharetra lacinia leo, a rutrum ligula euismod eget. Sed arcu dolor, tempor vestibulum efficitur id, dapibus non mi. Etiam egestas elit elit, sit amet dignissim velit efficitur eget. Sed fermentum pharetra mauris, in interdum urna ullamcorper at. Morbi molestie augue eu felis elementum malesuada.\n Fusce placerat felis sed ex volutpat, eu pretium magna venenatis. Mauris vel velit nibh. Nunc et efficitur nisl. Proin at sapien lobortis, laoreet risus et, maximus mi. Maecenas molestie venenatis urna, eget ultricies est efficitur non. Aenean hendrerit felis diam, in gravida ligula suscipit vel. Mauris sagittis eleifend lacus, eget varius justo. Sed a viverra arcu, in laoreet tortor. Maecenas egestas et lacus sit amet sagittis. Suspendisse sed mi id felis fermentum gravida quis sed ligula. Cras ut venenatis orci. Nullam vel nibh metus."
    }
];

router.use(function(req, res, next) {
    console.log(req);
    next();
});

router.get('/', function(req, res) {
    res.json(db);
});

router.get('/first-blog-post', function(req, res) {
    res.json(db[0]);
});

router.put('/:path', function(req, res) {
    //res.
});

app.use('/blog', router);

app.listen(port);
console.log('Listening on http://localhost:' + port);

