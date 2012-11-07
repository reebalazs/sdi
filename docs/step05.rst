=======================
Step 05: Pyramid Panels
=======================

- Break SDI into re-usable, overridable panels


Goals
=====

Notes
=====

- Panel 1: The menu

- Panel 2: A "grid"

- Slots for head/tail first/last

- configure include for step06

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

