import { IGetFavicon, IPlatforms, TGetFavicon } from "../types";

export const PLATFORMS: IPlatforms[] = [
  {
    domain: "https://squareup.com",
    redirect: "/login?return_to=%2Ffavicon.ico",
    name: "Square",
    match: false,
  },
  {
    domain: "https://twitter.com",
    redirect: "/login?redirect_after_login=%2f..%2ffavicon.ico",
    name: "Twitter",
    match: false,
  },
  {
    domain: "https://www.facebook.com",
    redirect:
      "/login.php?next=https%3A%2F%2Fwww.facebook.com%2Ffavicon.ico%3F_rdr%3Dp",
    name: "Facebook",
    match: false,
  },
  {
    domain: "https://accounts.google.com",
    redirect:
      "/ServiceLogin?passive=true&continue=https%3A%2F%2Fwww.google.com%2Ffavicon.ico&uilel=3&hl=en&service=mail",
    name: "Gmail",
    match: false,
  },
  {
    domain: "https://accounts.google.com",
    redirect:
      "/ServiceLogin?passive=true&continue=https%3A%2F%2Fwww.youtube.com%2Ffavicon.ico&uilel=3&hl=en&service=youtube",
    name: "YouTube",
    match: false,
  },
  {
    domain: "https://plus.google.com",
    redirect:
      "/up/accounts/upgrade/?continue=https://plus.google.com/favicon.ico",
    name: "Google Plus",
    match: false,
  },
  {
    domain: "https://login.skype.com",
    redirect:
      "/login?message=signin_continue&redirect_uri=https%3A%2F%2Fsecure.skype.com%2Ffavicon.ico",
    name: "Skype",
    match: false,
  },
  {
    domain: "https://www.spotify.com",
    redirect:
      "/en/login/?forward_url=https%3A%2F%2Fwww.spotify.com%2Ffavicon.ico",
    name: "Spotify",
    match: false,
  },
  {
    domain: "https://www.reddit.com",
    redirect: "/login?dest=https%3A%2F%2Fwww.reddit.com%2Ffavicon.ico",
    name: "Reddit",
    match: false,
  },
  {
    domain: "https://www.tumblr.com",
    redirect: "/login?redirect_to=%2Ffavicon.ico",
    name: "Tumblr",
    match: false,
  },
  {
    domain: "https://www.expedia.de",
    redirect:
      "/user/login?ckoflag=0&selc=0&uurl=qscr%3Dreds%26rurl%3D%252Ffavicon.ico",
    name: "Expedia",
    match: false,
  },
  {
    domain: "https://www.dropbox.com",
    redirect:
      "/login?cont=https%3A%2F%2Fwww.dropbox.com%2Fstatic%2Fimages%2Fabout%2Fdropbox_logo_glyph_2015.svg",
    name: "Dropbox",
    match: false,
  },
  {
    domain: "https://www.amazon.com",
    redirect:
      "/ap/signin/178-4417027-1316064?_encoding=UTF8&openid.assoc_handle=usflex&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.mode=checkid_setup&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.ns.pape=http%3A%2F%2Fspecs.openid.net%2Fextensions%2Fpape%2F1.0&openid.pape.max_auth_age=10000000&openid.return_to=https%3A%2F%2Fwww.amazon.com%2Ffavicon.ico",
    name: "Amazon.com",
    match: false,
  },
  {
    domain: "https://www.pinterest.com",
    redirect: "/login/?next=https%3A%2F%2Fwww.pinterest.com%2Ffavicon.ico",
    name: "Pinterest",
    match: false,
  },
  {
    domain: "https://de.foursquare.com",
    redirect: "/login?continue=%2Ffavicon.ico",
    name: "Foursquare",
    match: false,
  },
  {
    domain: "https://eu.battle.net",
    redirect: "/login/de/index?ref=http://eu.battle.net/favicon.ico",
    name: "Battle.net",
    match: false,
  },
  {
    domain: "https://store.steampowered.com",
    redirect: "/login/?redir=favicon.ico",
    name: "Steam",
    match: false,
  },
  {
    domain: "https://www.academia.edu",
    redirect: "/login?cp=/favicon.ico&cs=www",
    name: "Academia.edu",
    match: false,
  },
  {
    domain: "https://accounts.google.com",
    redirect:
      "/ServiceLogin?service=blogger&hl=de&passive=1209600&continue=https://www.blogger.com/favicon.ico",
    name: "Blogger",
    match: false,
  },
  {
    domain: "https://github.com",
    redirect:
      "/login?return_to=https%3A%2F%2Fgithub.com%2Ffavicon.ico%3Fid%3D1",
    name: "Github",
    match: false,
  },
  {
    domain: "https://medium.com",
    redirect:
      "/m/signin?redirect=https%3A%2F%2Fmedium.com%2Ffavicon.ico&loginType=default",
    name: "Medium",
    match: false,
  },
  {
    domain: "https://news.ycombinator.com",
    redirect: "/login?goto=y18.gif%23",
    name: "Hackernews",
    match: false,
  },
  {
    domain: "https://carbonmade.com",
    redirect: "/signin?returnTo=favicon.ico",
    name: "Carbonmade",
    match: false,
  },
  {
    domain: "https://courses.edx.org",
    redirect: "/login?next=/favicon.ico",
    name: "EdX",
    match: false,
  },
  {
    domain: "https://slack.com",
    redirect: "/checkcookie?redir=https%3A%2F%2Fslack.com%2Ffavicon.ico%23",
    name: "Slack",
    match: false,
  },
  {
    domain: "https://www.khanacademy.org",
    redirect: "/login?continue=https%3A//www.khanacademy.org/favicon.ico",
    name: "Khan Academy",
    match: false,
  },
  {
    domain: "https://www.paypal.com",
    redirect: "/signin?returnUri=https://t.paypal.com/ts?v=1.0.0",
    name: "Paypal",
    match: false,
  },
  {
    domain: "https://500px.com",
    redirect: "/login?r=%2Ffavicon.ico",
    name: "500px",
    match: false,
  },
  {
    domain: "https://www.airbnb.com",
    redirect:
      "/login?redirect_params[action]=favicon.ico&redirect_params[controller]=home",
    name: "Airbnb",
    match: false,
  },
  {
    domain: "https://disqus.com",
    redirect: "/profile/login/?next=https%3A%2F%2Fdisqus.com%2Ffavicon.ico",
    name: "Disqus",
    match: false,
  },
  {
    domain: "https://secure.meetup.com",
    redirect:
      "/login/?returnUri=https%3A%2F%2Fwww.meetup.com%2Fimg%2Fajax_loader_trans.gif",
    name: "Meetup",
    match: false,
  },
  {
    domain: "https://bitbucket.org",
    redirect: "/account/signin/?next=/favicon.ico",
    name: "BitBucket",
    match: false,
  },
  {
    domain: "https://secure.indeed.com",
    redirect: "/account/login?continue=%2ffavicon.ico",
    name: "Indeed",
    match: false,
  },
  {
    domain: "https://vk.com",
    redirect: "/login?u=2&to=ZmF2aWNvbi5pY28-",
    name: "VK",
    match: false,
  },
];

export const getFavicon = (network: IGetFavicon): TGetFavicon => {
  let favicon = network.domain + "/favicon.ico";

  if (network.name === "Dropbox") {
    favicon = "https://www.dropbox.com/static/images/favicon.ico";
  }
  if (network.name === "YouTube") {
    favicon =
      "https://www.youtube.com/s/desktop/e342c29d/img/favicon_32x32.png";
  }
  if (network.name === "Gmail") {
    favicon = "https://mail.google.com/favicon.ico";
  }

  return favicon;
};
