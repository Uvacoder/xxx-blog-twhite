---
title: "Simple Scripts: Beginning"
author: tiff
tags: [python, ddos, smb]
---

I'm currently working through (and banging my head against) working with Python scripts to simulate pentesting techniques.

<!--truncate-->

I enjoy watching the [TCM Security YouTube channel](https://www.youtube.com/@TCMSecurityAcademy) for several reasons:

1. It's entertaining
2. It's informative and current
3. And it gives you ideas to help you stand out in a crowded pool of applicants in InfoSec

The one video in particular stood out to me:


<iframe width="100%" height="315" src="https://www.youtube.com/embed/y7FRIEURJ34?si=IrHQPrqWPmljJP2R" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

In it, The Cyber Mentor talks about having side projects to throw on your GitHub and as such, list on your resume.

I thought this was a *wonderful* idea, and while you don't *need* to code to be in InfoSec, to stand out, it might be helpful.

Since I come from a software dev background, this felt like the right thing to do.

## It's cool to move *blazingly fast* and enshittify things

I worked with Python almost 10 years ago when I was learning to code. I enjoyed it, but the wave was frontend; the framework wars were brewing and I was caught up in the hype, such as this:

<!-- <iframe width="560" height="315" src="https://www.youtube.com/embed/sxcRxZpUJWo?si=W3olS1W09JKqMGc7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> -->

https://www.youtube.com/embed/sxcRxZpUJWo?si=W3olS1W09JKqMGc7

*No offense to Kent, but this is certianly one of the videos of all time*

There was a very *chic* mystic about frontend engineering and I fell into it, even though [I really didn't like it](https://www.tiffanywhite.dev/posts/final-thoughts).

I kept up with it, made my bones and bacon in and with it, lost jobs with it, but I remained in that space, hating every bit of it.

I began to get angry at the very thought of something breaking because 10 million upstream dependenices depended on this:

![](/img/blog/has.png)

Which is just checking to see if there is some property on an object. This is basically one line of code that is an upstream dependency on millions of projects. That's just one example.

I'm not trying to rant here, just trying to set context. Anyway.


## Simple scripts and their lack of being simple

I'm back to using Python to write a simple DDoS script. 

I've spent majority of my time on GitHub repos doing similar things, in the Python docs, and writing, overengineering, then simplifying the script.

There are bizarre errors I am not familiar with, however I am lucky to have a good friend to pair program with, who has been helpful.

You can find the script on my repo.


[ddos-script, main branch](https://github.com/twhite96/ddos-script/tree/main)

[ddos-script at refactor branch](https://github.com/twhite96/ddos-script/tree/refactor/typer-cli)