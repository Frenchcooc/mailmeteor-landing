---
layout: blogpost
title: "Gmail Mail Merge Script Example using Google Apps Script"
description: Learn how to send hundreds of emails in Gmail by building your very own mail merge Gmail script.
cta_title: Mailmeteor is the best rated mail merge tool for Gmail
canonical: https://mailmeteor.com/mail-merge-gmail/script
category: TUTORIAL

meta_author: Corentin Brossault
meta_author_link: "https://twitter.com/frenchcooc"
meta_image: >-
  /assets/img/blog/mail-merge-gmail/mail-merge-for-gmail-guide.png

og_title: "Gmail Mail Merge Script Example using Google Apps Script"
og_description: Learn how to send hundreds of emails in Gmail, by building your very own mail merge Gmail script.
og_url: https://mailmeteor.com/mail-merge-gmail/script
og_image: https://mailmeteor.com/assets/img/opengraph/mail-merge-gmail-script.jpg

meta_date_published: "April 8, 2021"
meta_date_lastupdated: "April 8, 2021"
published: true

permalink: /mail-merge-gmail/script
---

Sending mass emails from Gmail is sometimes seen as a challenge. I can tell you it's not! In this article we'll look at the basics of building a mail merge script for Gmail and how it can fit your email marketing needs.

First, here's what you need to send emails in bulk with Gmail:

- a Gmail (or Google Workspace) account
- a list of contacts
- a template of the emails you want to send
- basic development skills

Now let's see the 6 steps to reproduce to create your Google script to send emails.

## Tutorial: Building a mail merge script for Gmail

1. Open [Google Apps Script](https://script.google.com/)

2. Click on the "**New project**" button to create a new project.

3. You should now see the script editor.

   ![Google Apps Script editor](/assets/img/blog/mail-merge-gmail/mail-merge-gmail-script-gas-editor.png){:width="600px" height="329px"}

4. From the editor, copy and paste the following script:

   <script src="https://gist.github.com/Frenchcooc/a2d12a7c663c6c432bb03ff3ea67b20d.js"></script>

   Update the `recipients` variable with your list of recipients. Also update the `template` subject and content to make it fit your needs

5. Click on "**Save**" to save your changes
6. Then click on "**▶️ Run**" to send your emails.

> _Note: the first time you use this script it will ask for the permission to send emails on your behalf. Then it won't ask you again._

Emails are usually immediately delivered, but sometimes it takes a few seconds. Check your ["Sent" folder in Gmail](https://mail.google.com/mail/#sent){:rel="nofollow noreferrer"} to confirm that all emails have been sent! As you will see, all your recipients receive a unique email sent from your email address. You don't need to use _bcc_ or any other techniques.

## Conclusion

Some say that it's impossible to send emails in bulk with Gmail. It's totally untrue. Of course, this is a very basic macro for Google Sheets to send lots of emails with Gmail. You might need to adapt it a little bit more, but thanks to Google Apps Script you can do lot of things.

Before you go, here are two things to keep in mind when using Gmail as an email marketing tool:

1. **Be sure to abide by [Gmail bulk senders guidelines](https://support.google.com/mail/answer/81126?hl=en){:rel="nofollow noreferrer"}.** Especially, note that you are limited to send a reasonable amount of emails per day. If you have a `@gmail.com` email address, you can send at most 500 emails/day while with a Google Workspace account, you sending limit hits 2000 emails per day. That's probably well enough for 99% of Gmail users, but it's good to have in mind those limits.
2. If you are looking for more a advanced script, for example that let you send personalized emails (e.g. `Hi \{\{ firstname \}\}`), I'd recommend you to use a Gmail mail merge tool such a [Mailmeteor](/) that does it for you. It already handles personalization, as well as dozens of features from attachments to aliases. Learn more about the [features and benefits of Mailmeteor here](/features).

<div style="padding: 3rem; background-color: #7da4ff17; margin: 1rem 0">
  This guide was written by Corentin Brossault, Mailmeteor’s founder. <a href="https://mailmeteor.com">Mailmeteor is an award-winning mail merge solution</a>, ranked as the best-rated Google add-on. Give us a try and let us know what you think ;-)
  <br>
  <br>
  <p><a href="https://mailmeteor.com" class="font-weight-bold">Try Mailmeteor, mail merge for Gmail</a></p>
</div>

<small class="blogpost-related-articles">
Learn more about Gmail & mailmerge: 
<a href="/mail-merge-gmail/">Mail merge Gmail in 2021: the Definitive Guide</a>
</small>
