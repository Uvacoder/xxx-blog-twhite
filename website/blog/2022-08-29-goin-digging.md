---
author: tiff
title: Goin Diggin
slug: spelunking
tags: [security, web]
---

I have a few pseudo-technical friends with websites, both using a form of WordPress.

I asked them if I could do a few pen tests on their sites to practice my limited skills. They gave me permission, albeit spoken permission which means I will need to get explicit permission in writing before I start, break something important, get sued, and lose friends.

Where to start? Easy. SQL injection.

## First foray into pen testing a site

My friend hired a lazy developer to create her website. It was hosted on a strange host without SSL enabled which was a huge red flag for me.

They were frustrated by his lack of progress developing the site and I was curious about the developer and what stack he used, and, if possible, see if I could break into the site.

## jQuery and Angular

The site used a mishmash of jQuery and Angular. My first inclination was to find the authentication page. How? DevTools. Easy enough. Find the route that leads to the auth. The route was `/login.js`.

I clicked the file in DevTools which miraculously took me right to the login page, which was also unencrypted.

I tried what I knew about SQL injection.

I entered a random character in the username and password fields. What returned was an error but nothing that I could work with; there was no information about the database revealed in the error in the UI.

I didn't give up hope.

I did some more digging and found the developer of the site on LinkedIn, his information freely available on there. I had his email, now all I would need is a way to guess his password to the site.

Unfortunately for me, I didn't have any password dumps from pastebin or a place like that. All the regular easy passwords didn't work either, and I didn't have Kali setup with a tool to compare password hashes and break the encryption to suss out possible passwords.

Still, it was a fun exercise from someone not knowing what they were doing.
