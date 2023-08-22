---
author: "tiff"
title: Proxmox, Containers, and Proxies
tags: [virtualization, proxying]
---

## What is Proxmox?

[Proxmox](https://www.proxmox.com/en/proxmox-ve) is a bit hard to setup and get right, but once it is up and done, it's a nice way to create a cluster of nodes, all sandboxed with their own networks, ready to go. 

<!--truncate-->

Proxmox is a [Hypervisor](https://www.redhat.com/en/topics/virtualization/what-is-a-hypervisor) which is beyond the scope of this little post. Basically all you need to know is it is like a container that can hold multiple VMs in different clusters, each node on its own separate networks, with their own IPs.


## Why Proxmox?

Say you want to run multiple machines you want to destroy with malware, run amok attacking it's network with Kali tools. How to best do that? Why, VMs of course!

<small>Or you could use something like Linode, of course...</small>



:::tip 
**Helpful Links**: 
[Proxmox with own domain. DNS, Cloudflare and SSL proper settings. : Proxmox](https://www.reddit.com/r/Proxmox/comments/ryd0ki/comment/hrod3er/)

[How to Passthrough a Disk in Proxmox in 2023 - WunderTech](https://www.wundertech.net/how-to-passthrough-a-disk-in-proxmox/)

[What is ZFS? Why are People Crazy About it?](https://itsfoss.com/what-is-zfs/)

[How to Virtualize Your Home Router / Firewall Using pfSense | Techno Tim](https://technotim.live/posts/proxmox-pfsense/)

[How to Install pfSense on Proxmox in 2023 - WunderTech](https://www.wundertech.net/how-to-install-pfsense-on-proxmox/)
:::


**Bonus**: 

Soon I'll be getting more into Proxy servers and why they're important. Here's a list of SOCKS5 proxies which is a highly recommended protocol.

[SOCKS free proxy servers list, open Socks5 and Socks4 proxies](https://spys.one/en/socks-proxy-list/)

