REST API
========

Overview of the REST API.

Collection 'blog'
-----------------

List all blog posts
    GET /blog/

Get blog post 'first-blog-post'
    GET /blog/first-blog-post

Create a new blog post 'first-blog-post'
    PUT /blog/first-blog-post

Update blog post 'first-blog-post'
    POST /blog/first-blog-post

Delete blog post 'first-blog-post'
    DELETE /blog/first-blog-post

Payload 'blog'
--------------

### Collection of blog posts
#### List all blog posts
    GET /blog/
    Returns: 200 (OK)

    [
        {
            "id": ...,
            "path": ...,
            "author": ...,
            "date": ...,
            "publish": ...,
            "header": ...,
            "byline": ...,
            "tags": [...],
            "body": ...,
        }, {
            "id": ...,
            "path": ...,
            "author": ...,
            "date": ...,
            "publish": ...,
            "header": ...,
            "byline": ...,
            "tags": [...],
            "body": ...,
        }
    ]

#### Create a new blog post
    PUT /blog/first-blog-post
    Returns: 200 (OK)
             204 (No Content)

### Single blog post
    GET /blog/123
    Returns: 200 (OK)
             404 (Not Found)

    {
        "id": 123,
        "path": "first-blog-post",
        "author": "Simon Kers",
        "date": "2016-01-01",
        "publish": "2016-01-01",
        "header": "First blog post",
        "byline": "Welcome to the grand premier of the new MYM site",
        "tags": [
                "dev", "tech", "blog"
        ],
        "body": "Praesent consectetur quis eros eget mattis. Mauris eros lacus, blandit id eleifend sit amet, lacinia ut dolor. Suspendisse sed molestie nulla, interdum ornare lorem. Integer non ligula egestas, venenatis sem tempor, pellentesque arcu. Aenean commodo arcu eget eros porttitor, at sagittis enim porta. Curabitur pharetra lacinia leo, a rutrum ligula euismod eget. Sed arcu dolor, tempor vestibulum efficitur id, dapibus non mi. Etiam egestas elit elit, sit amet dignissim velit efficitur eget. Sed fermentum pharetra mauris, in interdum urna ullamcorper at. Morbi molestie augue eu felis elementum malesuada.

Fusce placerat felis sed ex volutpat, eu pretium magna venenatis. Mauris vel velit nibh. Nunc et efficitur nisl. Proin at sapien lobortis, laoreet risus et, maximus mi. Maecenas molestie venenatis urna, eget ultricies est efficitur non. Aenean hendrerit felis diam, in gravida ligula suscipit vel. Mauris sagittis eleifend lacus, eget varius justo. Sed a viverra arcu, in laoreet tortor. Maecenas egestas et lacus sit amet sagittis. Suspendisse sed mi id felis fermentum gravida quis sed ligula. Cras ut venenatis orci. Nullam vel nibh metus.

Maecenas sed enim vel ligula fermentum finibus non sed orci. Proin in mi vestibulum, hendrerit erat a, tincidunt nulla. Aliquam tristique leo id dolor malesuada, non ullamcorper ex fringilla. Nam eu erat quis justo sagittis pulvinar posuere sed lectus. Nulla finibus nec purus et porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non sagittis risus. In facilisis pharetra lobortis. Duis mattis eleifend semper. Praesent dictum fringilla feugiat. Mauris dictum neque ut iaculis luctus. Aenean justo velit, finibus at ullamcorper et, maximus at magna.

Fusce malesuada posuere ipsum, vitae varius metus iaculis id. Morbi gravida diam mauris, nec tincidunt eros porta sed. Maecenas euismod, nisi vel eleifend congue, nunc magna consectetur tortor, viverra elementum diam orci sed nunc. Cras faucibus laoreet est, eu imperdiet lectus. Morbi quam augue, laoreet nec enim vel, dictum bibendum eros. Cras eleifend neque elit, in vulputate enim facilisis ac. Integer mollis in velit pretium dapibus. Proin in consequat sapien. Proin luctus rutrum eleifend. Sed enim massa, imperdiet rhoncus efficitur et, blandit eu nisl. Duis euismod turpis quis ipsum ultrices, sit amet egestas erat efficitur. Mauris placerat dictum purus, condimentum commodo nibh maximus eu. Fusce efficitur, tortor vitae tincidunt accumsan, sapien nulla lobortis lectus, at efficitur quam nulla vitae risus. Nullam id blandit leo, at fringilla sem.

Suspendisse iaculis faucibus est in efficitur. Phasellus rutrum porta est, at convallis dolor molestie eget. Nullam posuere luctus sem at gravida. Sed eu sem hendrerit, consequat dolor eget, fermentum odio. Suspendisse potenti. In egestas quam enim, vel vehicula turpis tristique eget. Mauris tincidunt eros enim, sed luctus libero fermentum eu. Nulla maximus orci vel tellus viverra, vel ultrices lorem venenatis. Sed neque nibh, luctus in pulvinar ut, imperdiet eget leo.",
    }

#### Update a blog post
    PUT /blog/123
    Returns: 200 (OK)
             204 (No Content)
             404 (Not Found)

#### Delete a blog post
    DELETE /blog/123
    Returns: 200 (OK)
             404 (Not Found)

