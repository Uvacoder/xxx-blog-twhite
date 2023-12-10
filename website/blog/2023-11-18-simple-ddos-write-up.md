---
title: Simple DDoS Write-up
author: tiff
tags: [python, ddos]
draft: true
---


For my first attempt at scripting a CLI tool for pentesting I built a tiny DDoS script. It was... eventful, for sure.

<!--truncate-->


## Learning about Python Standard Libraries

The first thing I needed to figure out was how to open a socket with Python's `os.socket` library. There are a lot of different methods and functions to learn about, but one of the examples I saw used: `sock.SOCK_STREAM`




- Learning about argv and arguments in order to create a CLI tool like this
    - Tried to get user input with argparse
    - Had a difficult  time understanding argparse and grabbing input with it
    - Tried to use Typer to grab user input but was missing the fundamentals of Python entirely
        - Paired with an experienced Python programmer
        - Got useful feedback
- Rewrote the script, paring it down from an over engineered mess
    - Was still baffled until I looked at a similar project on GitHub from a colleague
    - Was able to reason about my own code by looking at hers
    - Finished the first version of the script
- The script runs, however there is testing to be done
- The main objective to the script is to DDoS a target, however I am only sending 4MB of random packets to a target, even if it is in a infinite loop with While true, it is not sending enough junk traffic to effect my local ip
- More research and testing is needed

[twhite96/ddos-script at refactor/typer-cli](https://github.com/twhite96/ddos-script/tree/refactor/typer-cli)

[twhite96/ddos-script at fix/simplify](https://github.com/twhite96/ddos-script/tree/fix/simplify)



