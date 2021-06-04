# Creational Pattern - Builder Pattern.

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
|3  | [Building a Bakery Shop.](#building-a-bakery-shop) |
|4  | [Result.](#result) |

<a id="definition"></a>
## 1. Definition.

Builder pattern will help you to separate the construction of a complex object from its representations. We can reuse the same construction process to create various representations.

> We can feel free to add properties to an object in different ways by using Javascript, for example, you can use object literal syntax and write something like this:
>
> ```js
>const cake = {};
>cake.hasSugar = true;
>cake.hasStrawberry = true;
>...
>```
>
> However, we should build by ourselves to understand about the core concepts. Therefore, we will feel more interested in programming and increase logical thinking. 

<a id="scenarios"></a>
## 2. Scenarios.

We can imagine that we have a bakery shop. We need to make different cakes by following the requirements from the customers.

As mentioned before, We can achieve the result in different ways in Javascript. However, we will create the solution by ourselves by using Builder pattern. 

<a id="building-a-bakery-shop"></a>
## 3. Building a Bakery Shop.

> I want to use Javascript class to implement the idea because in the case you are using object-oriented programming languages or you have to use those languages in the future, you can still implement design patterns by using different languages. In my opinion, design patterns are mindset and approaches and not depend on programming languages.

Our Post class will be looked like this:

```js
class Cake {
  // you can put other properties for your cake <3.
  // I use sugar and starwberry for the demo purpose.
  constructor(hasSugar, hasStrawBerry) {
    this.hasSugar = hasSugar;
    this.hasStrawBerry = hasStrawBerry;
  }
}

class CakeBuilder {
  constructor() {
    this.cake = new Cake();
  }

  withSugar(hasSugar) {
    this.cake.hasSugar = hasSugar;
    return this;
  }

  withStrawberry(hasStrawBerry) {
    this.cake.hasStrawBerry = hasStrawBerry;
    return this;
  }

  makeCake() { 
    return this.cake;
  }
}

const firstCakeBuilder = new CakeBuilder();

const cake = firstCakeBuilder
.withSugar(true)
.withStrawberry(true)
.makeCake();

console.log(cake);
```

Step 1: We create __Cake__ class. The constructor of the class accepts __hasSugar__ and __hasStrawberry__ properties as parameters. (You can add more properties for your cake, two properties are used for the demo purpose :smile:).

Step 2: We create __CakeBuilder__ class. In the constructor of the class, a new cake object will be created. On the other hand, we create methods to build the corresponding properites for the cake object, for example, we have __withSugar__ to build __hasSugar__ property, __withStrawberry__ to build __hasStrawberry__ property and so on. If you have many properties, you just need to create more methods to build values for those properties.

Step 3: We create __makeCake__ method. The method will not be used to build value for any properties. It is used to return the final cake instance.

Step 4: In order to use the cake builder, we need to create a new object of __CakeBuilder__ class. By invoking different methods from __cakeBuilder__ object, we are building properties for our cake. Please do not forget about __makeCake__ method. It will return the final cake for us. The last but not least, we assign the final result to __cake__ variable and then you can do everything you want with your cake.

```js
const cakeBuilder = new CakeBuilder();

const cake = cakeBuilder
.withSugar(true)
.withStrawberry(true)
.makeCake();
```


<a id="result"></a>
## 4. Result.

```js
Cake { hasSugar: true, hasStrawBerry: true }
```

The above result describes that the final cake is created by applying Bulider pattern.

By using design patterns, we can understand the core concepts and make our code become more readable and cleaner. I hope that the post can help you understand about Builder pattern. 

Thanks and Best Regards,
Hiep.



