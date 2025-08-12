export {};

class Comment {
    id: number;
    userId: number;
    content: string;
    replies: Comment[] = [];

    constructor(id: number, userId: number, content: string) {
        this.id = id;
        this.userId = userId;
        this.content = content;
    }

    addReply(reply: Comment) {
        this.replies.push(reply);
    }
}

class Post {
    id: number;
    userId: number;
    content: string;
    likes: number[] = [];
    comments: Comment[] = [];

    constructor(id: number, userId: number, content: string) {
        this.id = id;
        this.userId = userId;
        this.content = content;
    }
    addLike(userId: number) {
        if (!this.likes.find((id) => id === userId)) {
            this.likes.push(userId);
        }
    }

    addComment(comment: Comment) {
        this.comments.push(comment);
    }
}

class User {
    id: number;
    posts: Post[] = [];
    followers: number[] = [];

    constructor(id: number) {
        this.id = id;
    }

    createPost(content: string, network: SocialNetwork) {
        const newPost = new Post(Date.now(), this.id, content);
        this.posts.push(newPost);
        network.addPost(newPost);
    }
}

class SocialNetwork {
    users: User[] = [];
    posts: Post[] = [];

    addUser(user: User) {
        this.users.push(user);
    }

    addPost(post: Post) {
        this.posts.push(post);
    }

    findPostById(postId: number): Post | undefined {
        return this.posts.find((p) => p.id === postId);
    }

    likePost(userId: number, postId: number) {
        const post = this.findPostById(postId);
        if (post) {
            post.addLike(userId);
        } else {
            console.log("Post không tồn tại");
        }
    }

    commentOnPost(userId: number, postId: number, content: string) {
        const post = this.findPostById(postId);
        if (post) {
            const cmt = new Comment(Date.now(), userId, content);
            post.addComment(cmt);
        } else {
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
