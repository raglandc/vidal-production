---
key: 2
title: "Working with Typescript Can Be Painful"
url: "working-with-typescript-can-be-painful"
date: "Sept. 19th 2021"
author: "Chris Ragland"
readTime: "6 min"
image: https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2048&q=80
excerpt: "Javascript is the language of the internet, is Typescript here to change the game forever?"
isFeatured: true
---

<div>
<img width={1080} height={720} src={https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2048&q=80}>
</div>

## What is Typescript?

Typescript is a superset of Javascript. Which pretty much means Typescript is Javascript with some extra features. Typescript is more for the developers who are using it than any performance benefits.

Developers will build their entire project with TS, but the moment their code hits the browser it is compiled to JS. The browser does not understand TS, so everything that is written in the files gets converted to some version of JS.

TS was released in late 2012 by the Microsoft team.

## Why use Typescript?

Typescript is a useful tool for developers for several reasons.

#### TS allows developers to better understand what the developer is attempting to do.

When reading through previous code that you have written, or even other developers have written, it is often the case that you do not remember exactly what type of data you are passing around.

With TS you can simply hover a piece of data and quickly have insight to the structure of the data being passed around.

This will expedite the process of having to document code separately because TS is telling any developer reading the code what is happening and to which data it is happening to.

Do not get me wrong, the use of comments are still a must, or at least should be. Well documented code should always have comments that give insight to what and why the developer is doing one thing a certain way.

#### TS speeds up the development process. (With Visual Studio Code)

When writing your code, TS will consider what you are about to type and give you several options that you can easily tab through.

It is no surprise that TS, being developed by Microsoft would work so smoothly with Visual Studio Code which is also owned and operated by Microsoft.

Does Microsoft have some sort of a monopoly within the development world?

Kidding.

Sort of..

## Learning Curve

I know for people who come straight from the static typing backgrounds such as Java, C++, ext., will have the adjustment of learning JS. However, should already feel comfortable with how types work in general throughout a program.

For you Javascript-ers, welcome to the world of types.

Say goodbye to the days of passing data around all willy-nilly, not knowing how it works just that it does.

Now I will agree that it is better to be more strict in both the understanding of how data is being passed around as well as what is being passed around.

I, personally, had a lot of _fun_ when I first started learning to adjust to TS from a full JS background. Everything has types, your code and the code you import from libraries. You will often find yourself digging through library source files to find a type in order to have the library function working properly.

To this day I remember trying to use the Image component from NextJS and in order to pass an image dynamically through props to the component, I had to dig through files to find the type definition.

If you're wondering its:

`staticImportData`

However, that is a topic for another day.

### In Conclusion

Javascript is a beautiful language, that I believe surpassed and grew into something I do not think the creator would have thought it would amass to. It is the language of the internet.

However, in these growing times where more people are collaborating on projects today than ever, is it time for more strictly typed version of JS?

There is no telling.

What I do know is that I enjoy the idea behind TS and the features and documentation it provides for developers.

Maybe give it a try and see how you like it.
