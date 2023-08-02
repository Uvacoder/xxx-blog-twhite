---
author: tiff
title: Form Submission Fun
slug: form-submissions
tags: [forms, security, web]
---

I signed up for a website that's recently come out of beta after a long wait time.

On the login/settings form it asked you for an _anonymous_ username to post data to the site.

I entered the string: `someone` and received this back from the server in an error message in the UI:

<script src="https://pastebin.com/embed_js/i1eeeqPQ"></script>

Interesting right?

I figured I might play around with this. I am not sure if they are using a SQL or NoSQL database but I'm going to dig into the error a bit.
