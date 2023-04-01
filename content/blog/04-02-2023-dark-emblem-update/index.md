---
title: Dark Emblem Rewrite
date: "2023-04-02T00:00:00.000Z"
color: white
backgroundColor: rgb(19, 27, 38)
---

Going into 2023, Dark Emblem - an NFT card game where you can collect cards and participate in raids – was having a few issues. Keeping the UI application in sync with the latest blockchain blocks was turning out to be difficult.

Users were reporting that while the WAX Dark Emblem contact was working correctly, the UI would show the incorrect state of their cards. Even if the blockchain is working correctly, not showing that cards had been transferred to their owners because of syncing issues did not bring any peace of mind.

## Server issues

What exact issues were we experiencing? The problems with inconsistent data can be split into two parts: bad APIs, and a pull mechanism to sync data from the blockchain. There are multiple WAX blockchain nodes that can be queries via a REST API. The issue here is that these nodes are community maintained, which means some nodes end up being outdated and not offering the most up-to-date APIs, some nodes end up randomly going down, and some nodes end up adding their own rate-limits. This made displaying data on the UI a big issue, since it was it out of our control on how stable the APIs we used to query blockchain state were.

We also had an issue where we would pull data from any available WAX API nodes on a set interval, but because of the nodes’ instabilities, combined with some nodes being out of date, we would have to rely on APIs that were generally available. This came with its own set of issues, where older APIs were difficult to consume, especially for traversing the blockchain history.

Combating these issues was two-fold. One, we now let users pick their preferred WAX API node when they log in. This is similar to how other WAX based games behave as well.

The other issue was that we relied on a pull mechanism. This has been completely replaced with using a push based mechanism via dfuse API. A lot of the work on our dfuse integration was built upon some joint work we did with another WAX discord server.

## UI problems

The original UI was built as a set of single page applications. While this let us iterate quickly and deploy new app like our marketing site, dapp, and docs, it showed quite a few problems as we continued building.

Sharing and interacting with the community is a huge part of any blockchain project. The issue is that single page applications built with create-react-app don’t provide a mechanism to set the social share data that is necessary to have links show up with nice previews. So when a user went to share their awesome new card, all the preview showed was the main page’s default title and description.

I mentioned that we had a marketing site, a dapp, and a docs site. Each one of these was a separate application that was deployed independently. The Dark Emblem team is small, and this level of complexity was getting difficult to maintain.

We migrated the three single page applications to a single NextJS application that we use to partially server side render our application. This new structure lets us deploy one application that servers all of our needs for our UI, but still only sends the JS necessary to hydrate the page and make it interactive.

## Technical challenges

Our other struggles have been more general: the applications and services getting hard to maintain and deploy, harder to split up parts of the application and still maintain code, and it getting harder to maintain costs.

While each one of these required a lot of technical work to restructure the code with NextJS and with our new server package called propel, another major change was moving from Lerna to Nx. Nx let us split up our services into modules that we could re-use and deploy.

## Propelling forward

There was a lot of work throughout 2022 to 2023 to rewrite Dark Emblem to where it is today. We simplified our services to keep costs down. Nx let us split our application up into re-usable modules, simplifying our dev workflow. NextJS let us create a UI application to better suit our use-cases. And dfuse let us build a more realtime experience for our applications.

We are looking forward to a great 2023 and beyond!

Join us on [Dark Emblem](https://www.darkemblem.com).

## Related articles

* [Dark Emblem Blog Announcement](https://www.darkemblem.com/blog/post/2023-04-02-new-site-released)
* [Technical Announcement](https://idmontie.github.io/blog/post/2023-04-02-dark-emblem-rewrite)
