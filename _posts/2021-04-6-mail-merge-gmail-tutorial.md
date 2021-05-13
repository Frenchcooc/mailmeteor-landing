---
layout: blogpost
title: "How to mail merge in Gmail (2021 tutorial)"
description: Learn how to send personalized emails with Mail Merge in Gmail.
cta_title: Try the best mail merge tool for Gmail
canonical: https://mailmeteor.com/mail-merge-gmail/tutorial
category: TUTORIAL

meta_author: Jean Dubrulle
meta_author_link: "https://twitter.com/cuireuncroco"
meta_image: >-
  /assets/img/blog/mail-merge-gmail/mail-merge-for-gmail-guide.png

og_title: "How to mail merge in Gmail (2021 tutorial)"
og_description: Learn how to send personalized emails with Mail Merge in Gmail.
og_url: https://mailmeteor.com/mail-merge-gmail/tutorial
og_image: https://mailmeteor.com/assets/img/opengraph/mail-merge-gmail-tutorial.jpg

meta_date_published: "April 6, 2021"
meta_date_lastupdated: "April 12, 2021"
published: true

permalink: /mail-merge-gmail/tutorial
---

Imagine you’ve got an email you need to send out to all of your customers, students, or employees.

Writing out one email per person would take up a lot of time. The good news is, your computer can send all of those emails at the same time with just the click of a button. We call this process a mail merge.

As one of the biggest email providers, Gmail allows anyone, anywhere to mail merge. Business, institutions and individuals all use Gmail to mail merge on a daily basis to make their lives easier.

However, one of your first questions might be: **how to do a mail merge in Gmail?**

A better question might be: what’s the best way to mail merge in Gmail properly? Well, there are 2 ways you can approach creating a mail merge in Gmail. The first is by using a Google add-on that will do everything for you, and the second is to create your own mail merge script within Gmail. In this mail merge tutorial, we’ll show you how to do both methods.

## Method 1 – Use Mailmeteor to mail merge in Gmail

<div class="embed-responsive embed-responsive-16by9">
    <iframe class="embed-responsive-item" title="How to mail merge in Gmail" show-info="O" src="https://www.youtube.com/embed/-YX65-kywOE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>
</div>
<br>

Mailmeteor is the top-rated Google mail merge add-on, designed to make mail merging in Gmail quick and easy. Clients and businesses of all-sizes use Mailmeteor to reliably deliver their emails to extensive lists of recipients without any hassle. Here’s a step-by-step guide to how it works:

1. **Install Mailmeteor**

   <img src="/assets/img/blog/mail-merge-gmail/tutorial-mailmeteor-install.png" alt="Install Mailmeteor for Google Sheets" style="box-shadow:none" width="600px" height="381px"/>

   Let’s start right at the beginning. [Download and install Mailmeteor](https://workspace.google.com/marketplace/app/mailmeteor_mail_merge_for_gmail/1008170693301) on your Gmail account from the Google Workspace Marketplace. Mailmeteor effortlessly integrates with your current Google Suite setup, specifically in Sheets and on Gmail.

2. **Create a contact list on Google Sheets**

   Now you’ve got Mailmeteor installed, go ahead and [open a new Google Sheets spreadsheet](http://sheets.new/).

   Once you’ve got the blank sheet in front of you, you’ll need to make a mailing list of the audience you want to target. You can do this manually yourself as a table or you can just import an existing contact list onto the sheet.

   To import your recipients, simply click on _Menu > File > Import_, and pick out your mailing list from your computer. Files can be in Excel or .csv formats.

   If you’re choosing to do things manually, here’s how it should go:

   ➤ Create column headers

   <img src="/assets/img/blog/mail-merge-gmail/tutorial-spreadsheet-demo-mail-merge.png" alt="Example spreadsheet to mail merge in Gmail" style="box-shadow:none" width="600px" height="382px"/>

   Having column headers for your contacts lists enables the Mailmeteor add-on to add more personalization to your mail merge emails with each column representing a field. You can have, and name, as many of these columns as you want, but you should have at least one that contains the email addresses of your contacts – call this column ‘**email**’.

   ➤ Add your contacts’ information

   ![Add your contact's information](/assets/img/blog/mail-merge-gmail/tutorial-spreadsheet-demo-add-columns.gif){:width="600px" height="338px"}

   Here you’ll need to add all of the data you have for your recipients into your table under the appropriate columns.

   <div class="blogpost-note">
      <span class="font-weight-bold">Pro tip:</span> Don’t worry if you can’t fill all of the columns - if you don’t have all the necessary information for example – the only one that needs filling completely is the email column, so we know who to send the email to.
   </div>

3. **Open Mailmeteor in Sheets**

   <img src="/assets/img/blog/mail-merge-gmail/tutorial-mailmeteor-addon.png" alt="Open Mailmeteor add-on to mail merge in Google Sheets" style="box-shadow:none" width="600px" height="382px"/>

   This is where the Mailmeteor add-on comes in. Click on the ‘**Add-ons**‘ tab in the bar between ‘Tools’ and ‘Help’ and select Mailmeteor from the list. Click ‘**Open Mailmeteor**’ and an interface should pop up, with the number of emails you can send as part of your mail merge.

4. **Create an email template**

   ![Create a new template in Mailmeteor](/assets/img/blog/mail-merge-gmail/tutorial-mailmeteor-compose-template.gif){:width="600px" height="408px"}

   Once we’ve got to this point, you’ll need to write out the email you intend to send to your recipients. This is a template, and we call it a template because some sections will be filled in by our personalization service. Click ‘**Create a new template**’ and you’ll be shown an interface for writing your email, similar to the Gmail editor we’re all used to.

5. **Personalize your email**

   This is where the magic happens. Personalized emails improve open rates and make readers feel like the email is written to them specifically, so it’s pretty important. Mail merges like those offered by Mailmeteor replace certain variable fields in the email with personalized content from your contact list that you provided earlier.

   To add in variable fields into your email, just write the variable you need and add double brackets one either side. For example: **Hi \{\{ firstname \}\}**. Mailmeteor will automatically fill in the variables when you send your mail merge.

   Here's a template you can copy-paste:

   <div style="padding: 3rem; background-color: #7da4ff17; margin: 1rem 0">
   <p>Hello {% raw %}{{ firstname }}{% endraw %},</p>

   <p>I'm glad we could meet lately. As discussed, we are using a brand new mail merge solution called Mailmeteor.</p>

   <p>Mailmeteor lets you send hundreds of personalized emails, right from Gmail.</p>

   <p>I’d love to let you see some of the features to get your feedback. We want to ensure Mailmeteor would actually help you do your job better at {% raw %}{{ company }}{% endraw %}.</p>

   <p>Would you have 10-15 minutes free to chat? (I promise to keep the time!). Let me know the time that suits you best.</p>

   </div>

   Once you’ve written your email template and added your variables, go ahead and click ‘**Save**‘.

6. **Give your email a quick check**

   ![Preview mail merge before sending](/assets/img/blog/mail-merge-gmail/tutorial-mailmeteor-preview-mail-merge.gif){:width="600px" height="408px"}

   Before you press send, you’ll want to check your emails before they go. Mailmeteor’s preview options lets you do just that, showing you exactly what your personalized emails will look like when they land in the inboxes of your contacts. Use this to make sure your email reads like you want it to, and more importantly, that all of the variables are correctly filled out without any stray brackets.

   <div class="blogpost-note">
      <span class="font-weight-bold">Pro tip:</span> You should also take the opportunity to send test emails to your phone, email, tablet and any other platform you expect your email to be read on. Take the time to ensure your email looks great whatever the device.
   </div>

7. **Send your emails!**

   ![Sending a mail merge with Mailmeteor](/assets/img/blog/mail-merge-gmail/tutorial-mailmeteor-sending-mail-merge.gif){:width="600px" height="408px"}

   Let’s go: Get your first ever Mailmeteor mail merge sent off!

   If you’ve followed our mail merge instructions above, your mail merge will get people reading your emails and engaging with your brand. It’s that simple.

**With that, you’re all set! Mailmeteor is the top-rated Gmail mail merge add-on for sending high-quality, personalized email content to up to 2000 recipients with just a click of a button. [Start your mail merge in Gmail with Mailmeteor](/).**

## Method 2 – Mail merge with Gmail through Google Apps Scripts

For those that prefer to handle the technical details themselves, the other way to create a mail merge for Gmail is to build a Gmail mail merge yourself. This is a somewhat more advanced method, so you’ll need a bit more tech knowhow if you’d prefer to go down this route rather than through an easy add-on like Mailmeteor.

To start, you’ll need the Google Apps Script which you’ll use to build your own Google add-on. You can find the open-source code for Google Apps Script on [GitHub](https://github.com/googleworkspace/solutions/blob/master/mail-merge/src/Code.js), written by Martin Hawksey (@mhawksey).

Here’s our quick guide to creating your own mail merge without an add-on:

![Gmail mail merge without an add-on](/assets/img/blog/mail-merge-gmail/mail-merge-apps-script-example.gif){:width="600px" height="386px"}

1. **Download a sample mail merge spreadsheet**

   To get to grips with creating your mail merge tool, you’ll need to download a sample mail merge spreadsheet to work from. You can make a copy of this [demonstration spreadsheet](https://docs.google.com/spreadsheets/d/1EfjLuYGab8Xt8wCn4IokBIG0_W4tBtiU4vxl3Y7FPsA/copy).

2. **Add your mail merge email address to the spreadsheet**

   You’ll want to add in the email addresses of your recipients into the spreadsheet at this point. Add the email addresses into the recipients column.

3. **Create a draft email with personalization variables**

   Open up Gmail here and write the email you want to send to your recipients. Add in personalization variables using double brackets in the same way you would do for the Mailmeteor add-on – for example: _\{\{ firstname \}\}_ for the information in the First Name column. This will allow the mail merge script to draw its variable information from your spreadsheet.

4. **Begin the mail merge through the Apps Script**

   You’ll need to start the mail merge process here by heading back into the spreadsheet and clicking on the new menu dropdown named **Mail Merge**. This is the Apps Script menu, which is what you’ll be using to send the merge.

5. **Check the authorization and proceed**

   A note should appear as you go through the mail merge process, asking for you permission for the script to proceed. It’s important to carefully read all of the information given to you, to ensure the script isn’t malicious or faulty. When you get a prompt, enter the subject line from your Gmail template message, and click **OK**.

6. **Send off your emails**

   If you’ve followed the above guidelines correctly, your email should have been sent off, and the ‘Email Sent’ column will update. If you want to see the emails you’ve dispatched, you can check the sent folder of your Gmail account to find out what they looked like.

**There you have it! That’s our brief guide into building a mail merge in Gmail without an add-on using Google Apps Scripts.**

## Conclusion: how to properly mail merge in Gmail?

Using a script is inherently riskier than sending through an add-on, simply because if anything is wrong with the script, it can cause problems with your authenticity as a sender. Sending large numbers of emails through a script can cause alarm bells with Gmail, who might pin you down as a spam sender.

Because of this, opting to send emails with a highly-rated mail merge add-on like Mailmeteor is safer and faster. Using Mailmeteor, you will be able to send personalized emails that stand out in crowded inboxes.

Learn more about the [features and benefits of Mailmeteor here](/features).

<div style="padding: 3rem; background-color: #7da4ff17; margin: 1rem 0">
  This guide was written by Jean Dubrulle, Mailmeteor’s founder. <a href="https://mailmeteor.com">Mailmeteor is an award-winning mail merge solution</a>, ranked as the best-rated Google add-on. Give us a try and let us know what you think ;-)

  <br>
  <br>
  <p><a href="https://mailmeteor.com" class="font-weight-bold">Try Mailmeteor, mail merge for Gmail</a></p>
</div>

<small class="blogpost-related-articles">
Learn more about Gmail merge: 
<a href="/mail-merge-gmail/">Mail merge Gmail in 2021: the Definitive Guide</a>
</small>
