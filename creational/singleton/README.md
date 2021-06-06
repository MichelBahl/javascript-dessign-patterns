# Creational Pattern - Singleton Pattern.

This is the first part in my series (23 GoF Design Patterns). My series will help you understand about design patterns by building useful things. For this reason, you can see the place in which each pattern could be applied. I want to focus on learning by doing instead of talking too much about theories. 

I'm Hiep. I work as a full-time software engineer. Most of my open-source projects are focused on one thing - to help people learn 📚.

I created a git repository that help you understand about design patterns by building useful things.

> Github link: 
>
> https://github.com/hieptl/javascript-dessign-patterns
> 
> If you feel the repository is useful, please help me share the post and give me a Github's star. It will make me feel motivation to work even harder. I will try to make many open sources and share to the community <3.
>
> I created a post to share about __learning react by building Netflix__, I hope that it is useful for you.
> 
> https://dev.to/hieptl/learn-react-by-building-netflix-1127


## __Table of Contents__
| No. | Topics |
| --- | --------- |
|1  | [Definition.](#definition) |
|2  | [Scenarios.](#scenarios) |
|3  | [Building Logger.](#building-logger) |
|4  | [Result.](#result) |

## __Table of Images.__
| No. | Topics |
| --- | --------- |
|1  | [Figure 1: Singleton Patter - Result.](#figure1) |

<a id="definition"></a>
## 1. Definition.

Singleton pattern will be used to  ensure a class has only one instance, and provide a global point of access to it.

<a id="scenarios"></a>
## 2. Scenarios.

We want to display something on the console, we often use ```console.log``` statement.

However, the information should be displayed in different formats (table format or including date and time, etc). Hence, we should create Logger class that include different methods in order to achieve that and we  can use it in different places in our applications.

> Whenever we need to use Logger class, we have to create a new instance of Logger class by writing something like this:
> ```js
> const logger = new Logger();
> ```
>
> In this case, creating different logger instances is not neccessary. Therefore, we should find a way to create a single instance which could be reused instead of creating the new one.

<a id="building-logger"></a>
## 3. Building Logger.

Our Logger class will be looked like this:

```js
class Logger {
  constructor() {
    if (Logger._instance) {
      console.log('return previously created logger object instead of creating a new one');
      return Logger._instance;
    }
    console.log('create new logger object for the first time');
    Logger._instance = this;
    return this;
  }

  log (...logs) {
    logs.forEach(log => console.log(log));
  }

  logWithTableFormat(...logs) {
    console.table(logs);
  }
}

const firstLogger = new Logger();
const secondLogger = new Logger();

console.log(`are firstLogger and secondLogger the same ? ${firstLogger === secondLogger}`);

firstLogger.log({userName: 'hieptl', job: 'Software Engineer'});
secondLogger.logWithTableFormat({userName: 'hieptl', job: 'Software Engineer'});
```

In the constructor, we will check if the instance was created, that instance would be returned instead of creating the new one.

If the instance was not created, we would create a new instance and assign to ```Logger._instace``` so that we can reuse that instance later.

<a id="result"></a>
## 4. Result.

<a id="figure1"></a>
<img src="../../images/singleton.png" alt="singleton" width="666"/>

Figure 1. Singleton Pattern - Result.

The above image describes about the first logger instance and the second logger instance are the same.
On the other hand, our Logger class can display the information in different formats.

I hope that the post can help you understand about single pattern. 

Thanks and Best Regards, \
Hiep.



