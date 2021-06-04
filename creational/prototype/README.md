# Creational Pattern - Prototype Pattern.

This is the second part in my series (23 GoF Design Patterns). My series will help you understand about design patterns by building real projects. For this reason, you can see the places in which each pattern could be applied. I want to focus on learning by doing instead of talking too much about theories. 

I'm Hiep. I work as a full-time software engineer. Most of my open-source projects are focused on one thing - to help people learn 📚.

I created a git repository that help you understand about design patterns by building real projects.

> Github link: 
>
> https://github.com/hieptl/javascript-dessign-patterns
> 
> If the repository is useful, please help me share the post and give me a Github's star. It will make me feel motivation to work even harder. I will try to make many open sources and share to the community :heart:.
>
> I created a post to share about __learning React by building Netflix__, I hope that it is useful for you.
> 
> https://dev.to/hieptl/learn-react-by-building-netflix-1127


## __Table of Contents__
| No. | Topics |
| --- | --------- |
|1  | [Definition.](#definition) |
|2  | [Scenarios.](#scenarios) |
|3  | [Building Post Cloner.](#building-post-cloner) |
|4  | [Result.](#result) |

<a id="definition"></a>
## 1. Definition.

Prototype pattern will help you to create an object from an existing object.

> In order to clone an object in Javascript, we have several ways such as Object.assign(), spread operator, libraries and so on.
>
> However, we should build by ourselves to understand about the core concepts. Therefore, we will feel more interested in programming and increase logical thinking. 

<a id="scenarios"></a>
## 2. Scenarios.

We can imagine that dev.to provides a feature that allows the authors clone their existing posts.

As mentioned before, there are several ways that help us to clone an object in Javascript. However, we will create the solution by ourselves by using Prototype pattern. 

<a id="building-post-cloner"></a>
## 3. Building Post Cloner.

> I want to use Javascript class to implement the idea because in the case you are using object-oriented programming languages or you have to use those languages in the future, you can still implement design patterns by using different languages. In my opinion, design patterns are mindset and approaches and not depend on programming languages.

Our Post class will be looked like this:

```js
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
```

In the constructor, we accept __title__ and __content__ as parameters. It means that when the author wants to create a new post, the author needs to input title and content for the post.

The most important part is about the __clone__ method. The method will help us to create a new object from an existing object. __this__ keyword is used to refer to the properties of the current instance (the existing object).

<a id="result"></a>
## 4. Result.

```js
The first post: 
Post { title: 'Post Title', content: 'Post Content' }
The second post: 
Post { title: 'Post Title', content: 'Post Content' }
```

The above result describes that the content of the first post and the content of the second post are the same after running the code. We implemented the idea by using Prototype pattern.

By using design patterns, we can understand the core concepts and make our code become more readable and cleaner. I hope that the post can help you understand about Prototype pattern. 

Thanks and Best Regards,
Hiep.



