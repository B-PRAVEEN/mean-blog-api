# BLOG IN MEAN

# Create Blog API
https://secure-scrubland-76748.herokuapp.com/api/create

# View All Blog Posts
https://secure-scrubland-76748.herokuapp.com/api/viewblog

# View Blog Post By ID
https://secure-scrubland-76748.herokuapp.com/api/viewblogbyid/?id=1

# Edit Blog Post By ID
https://secure-scrubland-76748.herokuapp.com/api/editbyid/?id=1

# Delete Blog Post By ID
https://secure-scrubland-76748.herokuapp.com/api/deletebyid/?id=1

# Create Schema Structure

```sh
{
       
        "postid": 4,
        "title": "1111",
        "content": "ABC NEW Content 2",
        "url": "hello-world2.html",
        "categoryid": [
            "1"
        ],
        "tag": [
            "edit"
        ],
        "author": {
            "authorid": 1,
            "name": "Praveen",
            "bio": "I am a developer",
            "sociallink": [
                "http://facebook.com"
            ]
        }
    }
```
# Edit Schema

```sh
{
  "postid": 4,
  "title":"New Title test ",
  "content": "ABC NEW Content",
  "updateDate": "2017-07-17T09:15:07.125Z",
  "tag": ["edit"],
  "categoryid" : ["1","2"]
}

```