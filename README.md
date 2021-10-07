# react-leak :cyclone:

React hook provides your social media fingerprint in TypeScript :detective: [live demo](https://react-leak.vercel.app/)

### `yarn start` or `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## How does the login redirect mechanism work?
The exploit is pretty simple and actually easy to fix. Let's look at facebook.com to get an idea of how it works.

At first we need to understand the login redirect mechanism. Say you're logged in and visit `https://www.facebook.com/bookmarks/pages`. Now if you open this URL in a private tab where you are not logged in, you will get redirected to the login screen with this URL: `https://www.facebook.com/login.php?next=https%3A%2F%2Fwww.facebook.com%2Fbookmarks%2Fpages`\
Note the next parameter in the URL: https%3A%2F%2Fwww.facebook.com%2Fbookmarks%2Fpages.
That's the URL we came from and it is used to redirect us back there once we've logged in.
But if we enter the login URL in a browser tab where we are already logged in, we get redirected without getting prompted to login. Therefore this URL returns:
- if logged in -> the resource at the URL in the next parameter
- if logged out -> the login screen

## Learn More

This mechanism works for almost all major web platforms, because they all have a redirect parameter in their login endpoint and they need to host their favicon on their domain, [learn more](https://en.wikipedia.org/wiki/Favicon#Limitations_and_criticism).

For most web platforms there's a way to abuse the login mechanism to detect whether a user is logged in to that service.
Although this vulnerability is well known for several years most companies won't fix it.

## Metrics

<p align="center">
    <a href="https://hits.seeyoufarm.com"><img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fmilksense%2Freact-leak&count_bg=%23313131&title_bg=%23313131&icon=&icon_color=%23000000&title=views&edge_flat=false"/></a>
</p>