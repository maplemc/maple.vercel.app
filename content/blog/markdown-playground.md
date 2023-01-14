---
title: Markdown Playground
author: StylexTV
description: Relax in Minecraft with Soothing Scene Videos and Wallpapers!
---
The holiday season is upon us, dear reader. It can be a stressful time no matter what you’re celebrating (or not celebrating). But I am here to remind, nay – urge you to relax that mind and unwind for a moment. And lo and behold, I just happen to have some gifts that will help you with that!

We have created a series of videos that will turn any screen into a relaxing Minecraft moment. The Minecraft world may be filled with adventure, but it’s also somewhere to appreciate the beauty of the small things. Like heavy drops of rain falling on the leaves of a mangrove tree. Or how the soft snow drifts down to wrap the Overworld up in a bright, white blanket. Find the five soothing scenes in a playlist on our YouTube channel, listen to the serene soundscapes on Spotify, and download their matching wallpapers to your device.

Our writers are so devoted to their craft that they have sent postcards to help our readers answer the question – which soothing scene speaks to you? And if you feel compelled to answer, let us know in the comment section!

If there’s anything I’ve learned from social media, it’s that 1) Almost nobody knows what “POV” means and 2) Foxes do NOT make good pets. They will scream all night, sleep all day, destroy everything you own, and they will never, ever be potty trained. And yet I still want one. Badly. Not even my Minecraft fox sanctuary will scratch that itch.

You can imagine my delight (and relief) when I saw this ambient video and realized I don’t need to indulge my self-destructive need to invite a wild animal into my real-life home. I put this video on repeat on my TV and all of a sudden, I had everything I needed: a beautiful cabin reminiscent of the Minecraft base I’ve always wanted to build but don’t have the skill to; a roaring fireplace to make me feel warm inside and out; and finally, the pet I’ve always wanted without the life-changing consequences.

If this is your dream too, then sit back, hit play, and enjoy the coziest video to ever grace your screen. Just remember to put it on repeat unless you want to be thrown into a completely different world courtesy of the Autoplay feature when it’s done.

-Cristina Anderca

---

Until now, trying to style an article, document, or blog post with Tailwind has been a tedious task that required a keen eye for typography and a lot of complex custom CSS.

By default, Tailwind removes all of the default browser styling from paragraphs, headings, lists and more. This ends up being really useful for building application UIs because you spend less time undoing user-agent styles, but when you really are just trying to style some content that came from a rich-text editor in a CMS or a markdown file, it can be surprising and unintuitive.

We get lots of complaints about it actually, with people regularly asking us things like:

> Why is Tailwind removing the default styles on my h1 elements? How do I disable this? What do you mean I lose all the other base styles too?

We hear you, but we're not convinced that simply disabling our base styles is what you really want. You don't want to have to remove annoying margins every time you use a p element in a piece of your dashboard UI. And I doubt you really want your blog posts to use the user-agent styles either — you want them to look awesome, not awful.

The @tailwindcss/typography plugin is our attempt to give you what you actually want, without any of the downsides of doing something stupid like disabling our base styles.

It adds a new prose class that you can slap on any block of vanilla HTML content and turn it into a beautiful, well-formatted document:

## Blockquotes

> Blockquotes can also be nested...
>> ...by using additional greater-than signs right next to each other...
>>> ...or with spaces between arrows.

> Dorothy followed her through many of the beautiful rooms in her castle.

## `Code`

Inline `code`

```vue
<template>
  <main>
    <ContentDoc path="/about" />
  </main>
</template>
```

```javascript
var foo = function (bar) {
  return bar++;
};

console.log(foo(5));
```

## Links

[link text](http://dev.nodeca.com)

[link with title](http://nodeca.github.io/pica/demo/ "title text!")

Autoconverted link https://github.com/nodeca/pica (enable linkify to see)

## Emphasis
You can add emphasis by making text bold or italic.

I just love **bold text**.
Italicized text is the *cat's meow*.
This text is ***really important***.

## Lists

- Just
- An
- Unordered
- List

1. Foo
2. Bar
3. Baz

## Tables

| Key | Type      | Description |
|-----|-----------|-------------|
| 1   | Wonderful | Table       |
| 2   | Wonderful | Data        |
| 3   | Wonderful | Website     |

|Key | Type | Default | Description|
|-----|-----|-----|-----|
`title`|`string`|First `<h1>` of the page|Title of the page, will also be injected in metas
`description`|`string`|First `<p>` of the page|Description of the page, will be shown below the title and injected into the metas
`draft`|`Boolean`|`false`|Mark the page as draft (and only display it in development mode).
`navigation`|`Boolean`|`true`|Define if the page is included in `fetchContentNavigation` return value.
`head`|`Object`|`true`|Easy access to `useContentHead`

## Images

:image{page="blog/markdown-playground" path="soothing_scene.png"}
<figcaption>A soothing scene to relax to</figcaption>

The holiday season is upon us, dear reader. It can be a stressful time no matter what you’re celebrating (or not celebrating). But I am here to remind, nay – urge you to relax that mind and unwind for a moment. And lo and behold, I just happen to have some gifts that will help you with that!

---

We have created a series of videos that will turn any screen into a relaxing Minecraft moment. The Minecraft world may be filled with adventure, but it’s also somewhere to appreciate the beauty of the small things. Like heavy drops of rain falling on the leaves of a mangrove tree. Or how the soft snow drifts down to wrap the Overworld up in a bright, white blanket. Find the five soothing scenes in a playlist on our YouTube channel, listen to the serene soundscapes on Spotify, and download their matching wallpapers to your device.

## Emojies

> Classic markup: :wink: :crush: :cry: :tear: :laughing: :yum:
> Shortcuts (emoticons): :-) :-( 8-) ;)

See [how to change output](https://github.com/markdown-it/markdown-it-emoji#change-output) with twemoji.

## Embeds

:spotify-song{id="4PtJNlcpEGyNAkYy44m5fI"}
:youtube-video{id="bEoa2GjmPUk"}

The holiday season is upon us, dear reader. It can be a stressful time no matter what you’re celebrating (or not celebrating). But I am here to remind, nay – urge you to relax that mind and unwind for a moment. And lo and behold, I just happen to have some gifts that will help you with that!