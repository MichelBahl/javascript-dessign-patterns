class Post {
  constructor(title, content) {
    this.title = title;
    this.content = content;
  }

  clone() {
    return new Post(this.title, this.content);
  }
}

const firstPost = new Post('Post Title', 'Post Content');

const secondPost = firstPost.clone();

console.log('The first post: ');
console.log(firstPost);
console.log('The second post: ');
console.log(secondPost);