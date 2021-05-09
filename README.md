##### This is a NodeJS Express Mock API application for API practice 

**To install type:**

```
npm install
```

##### This is the /posts Route

###### Creating posts POST /posts

_Method: POST_

_URL:    http://localhost:3000/posts_

_JSON Body:_

```

 {
    "newPost" : {
	                "userId": 3,
	                "id": 101,
	                "title": "UPDATING id 4",
	                "body": "Hello, watch me UPDATE you"
            	}

 }

 ```




###### Fetching all posts GET/posts

_Method: GET_

_URL:    http://localhost:3000/posts_



###### Fetch a single post GET/posts/id

_Method: GET_

_URL:    http://localhost:3000/posts/101_



###### Update a single post PUT /posts/id

_Method: PUT_

_URL:    http://localhost:3000/posts/101_

```

JSON Body:

{
    "userId": 3,
    "id": 101,
    "title": "UPDATING id 101",
    "body": "Hello, watch me UPDATE you"
}

```