"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Comment {
    constructor(id, userId, content) {
        this.replies = [];
        this.id = id;
        this.userId = userId;
        this.content = content;
    }
    addReply(reply) {
        this.replies.push(reply);
    }
}
class Post {
    constructor(id, userId, content) {
        this.likes = [];
        this.comments = [];
        this.id = id;
        this.userId = userId;
        this.content = content;
    }
    addLike(userId) {
        if (!this.likes.find((id) => id === userId)) {
            this.likes.push(userId);
        }
    }
    addComment(comment) {
        this.comments.push(comment);
    }
}
class User {
    constructor(id) {
        this.posts = [];
        this.followers = [];
        this.id = id;
    }
    createPost(content, network) {
        const newPost = new Post(Date.now(), this.id, content);
        this.posts.push(newPost);
        network.addPost(newPost);
    }
}
class SocialNetwork {
    constructor() {
        this.users = [];
        this.posts = [];
    }
    addUser(user) {
        this.users.push(user);
    }
    addPost(post) {
        this.posts.push(post);
    }
    findPostById(postId) {
        return this.posts.find((p) => p.id === postId);
    }
    likePost(userId, postId) {
        const post = this.findPostById(postId);
        if (post) {
            post.addLike(userId);
        }
        else {
            console.log("Post không tồn tại");
        }
    }
    commentOnPost(userId, postId, content) {
        const post = this.findPostById(postId);
        if (post) {
            const cmt = new Comment(Date.now(), userId, content);
            post.addComment(cmt);
        }
        else {
            console.log("Post không tồn tại");
        }
    }
}
const network = new SocialNetwork();
const u1 = new User(1);
const u2 = new User(2);
network.addUser(u1);
network.addUser(u2);
u1.createPost("Hello World!", network);
const firstPostId = network.posts[0].id;
network.likePost(u2.id, firstPostId);
network.commentOnPost(u2.id, firstPostId, "Hay quá!");
console.log(network.posts[0]);
