===============================
Step 01: Hello World in Pyramid
===============================

Before we get into an SDI, we need to get Pyramid installed and a
sample application working.

Goals
=====

- Get Pyramid pixels on the screen as easily as possible

- Use that as a well-understood base for adding each unit of complexity

Objectives
==========

- Create a module with a view that acts as an HTTP server

- Visit the URL in your browser

Steps
=====

#. Make sure you have followed the steps in :doc:`setup`.

#. ``$ mkdir step01; cd step01``

#. Copy the following into ``step01/setup.py``:

   .. literalinclude:: step01/setup.py
      :linenos:

#. Copy the following into ``step01/setup.cfg``:

   .. literalinclude:: step01/setup.cfg
      :linenos:

#. Copy the following into ``step01/development.ini``:

   .. literalinclude:: step01/development.ini
      :linenos:

#. ``mkdir sdi; cd sdi``

#. Copy the following into ``step01/sdi/__init__.py``:

   .. literalinclude:: step01/sdi/__init__.py
      :linenos:

#. ``cd ..; python ./setup.py develop``

   *Make sure you are using the Python from your virtualenv!*

#. ``$ pserve development.ini``

#. Open ``http://127.0.0.1:6543/`` in your browser.

