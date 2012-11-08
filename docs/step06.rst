============================
Step 06: Customizing the SDI
============================

- Layout customization (filling slots, static assets, overriding panel,
  overriding layout template, new layout class, etc.)


Goals
=====

Notes
=====

- setup.py changes the module to sdi_app

- override the logo with the food pyramid

- filling a slot with some other css and js

- overriding a panel

- extend the layout class

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

