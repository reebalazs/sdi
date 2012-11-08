============
Introduction
============

This tutorial envisions a certain idea for an SDI. Before getting into
the technical steps of building it, we need to set the scene. What is
this SDI? Who is it for, not for, and why is it needed?

What Is (and Isn't) Substance D?
================================

We've learned a lot about content-oriented web systems over the years.
Some of that pain^H^H^H^Hwisdom went into Pyramid as a web application
framework.

Substance D is the other part. It's a Pyramid-like take on Zope-y
Plone-y, hope-y change-y kinds of web applications. Technologies and
approaches from Zope and a small subset of the kinds of problems solved
by the machinery of Plone.

However, Substance D is *not* a ready-to-go, end-user application like
Plone. It is a way to quickly build a custom Plone. Thus,
Substance D is aimed at developers of content-oriented applications.

In particular, Substance D has an out-of-the-box (OOTB) admin UI that
puts attractive pixels on the screen. This is only an admin screen.
Just like Substance D isn't intended to be the end-user application,
this admin screen isn't intended to be the retail UI.

We call this admin screen the Substance D Interface (SDI.) In the
current release, it does not shoot down ICBMs.

Who Is the SDI For (and Not For)?
=================================

When developers get started on content applications, they need something
in place that can manage the content. Kind of like Windows Explorer.
They might also need something to manage stuff behind the scenes once
the content application is deployed.

*Maybe* they want to put some power users or early customer evaluators
in front of such a UI, while they are still working on the actual
customer UX.

That's what the SDI is for and who it is for.

At the same time, Substance D developers need to plug into the SDI.
Their custom content types and services will have pixels that need
a-pixelatin'. This is also a target audience for the SDI.

How Pluggable?
==============

The challenge. Bitter experience ahead.

At first you just write an application with a slick UI and everyone
loves it. Then people want to extend it. So you provide some extension
points so people can plug into it in normal ways. But then, wildly
unexpected use cases rear their head. You solve it by turning your UI
into an operating system hammer factory factory.

Pluggability is hard. Too much is too much, too little is too little.
Knowing what to leave out is as important as knowing what to leave in.

Specifics
=========

That said, here's the vision for the SDI:

- A self-contained package inside Substance D

- Well-defined and documented protocols between Substance D applications
  and the SDI (e.g. "here is my list of tabs")

- ZPT with macros and slots

- Overriding of templates, JS, views, etc. via normal Pyramid overriding

- Use of pyramid_layout layouts and panels to allow more extension points

- A fluid, responsive Twitter Bootstrap design

What's With NodeJS?
===================

We want to use LESS, internally (meaning Substance D developers can
ignore LESS.) So we need a LESS compiler. We chose NodeJS for this,
which means we paid the Node tax.

Once we paid the Node tax, some other uses popped up. For example,
JavaScript testing.

To Do
=====

- Use nodeenv ?

- Figure out reload_templates from the beginning

- Get the tests to work for pyramid_layout


Outline
=======

- Zombie testing

- Simple JS concatenation with UglifyJS under Node

- Gesture support

- require.js

- TB forms with jqBootstrapValidation

- Localization