================================
Step 03: Twitter Bootstrap Fluid
================================

- Class-based view

- TB

- Responsive

- Fluid

- LESS compilation

Notes
=====

- Added ``nodeenv`` to ``setup.py``

Compiling LESS
==============

You can run an autocompiler which watches for any changed .less files
in a directory, runs ``lessc``, and compiles.

First we re-do setup.py to get ``nodeenv``:

#. ``cd step04``

#. ``../../env27/bin/python ./setup.py develop``

Now move up and make a new "nodenv" (an isolated virtualenv for NodeJS):

#. ``cd ../..``

#. ``env27/bin/nodeenv env_node``

   This downloads and installs NodeJS into the ``env_node`` directory.

#. ``. env_node/bin/activate``

#. ``npm install -g less``

Now that we have NodeJS and LESS installed, we can run the
always-running compiler:

#. ``cd docs/step03/src/sdi/static/css``

#. ``node less-watch-compiler.js . .``
