=======================
Step 03: Pyramid Layout
=======================

- Combine templating and code for SDI into a "layout"


Goals
=====

Notes
=====

- Adds pyramid_layout to setup.py

- Add to .ini

- XXX pyramid_layout in .ini doesn't load, had to put in __init__.

- Same as reload_templates

- Make helpers in the Layout class for static stuff

Steps
=====

#. ``$ cp -r step01 step 02; cd step02; python setup.py develop``

#. Copy the following into ``step02/development.ini``:

   .. literalinclude:: step02/development.ini
      :linenos:

#. Copy the following into ``step02/sdi/__init__.py``:

   .. literalinclude:: step02/sdi/__init__.py
      :linenos:

#. Copy the following into ``step02/sdi/views.py``:

   .. literalinclude:: step02/sdi/views.py
      :linenos:

#. ``mkdir templates``

#. Copy the following into ``step02/sdi/templates/hello_world.pt``:

   .. literalinclude:: step02/sdi/templates/hello_world.pt
      :linenos:

#. ``$ pserve development.ini``

#. Open ``http://127.0.0.1:6543/`` in your browser.

Analysis
========

