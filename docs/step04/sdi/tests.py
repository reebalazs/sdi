import unittest
from pyramid.testing import (
    DummyResource,
    DummyRequest
    )

class Test_views(unittest.TestCase):
    def _makeOne(self, request, context):
        from views import SampleViews

        inst = SampleViews(request, context)
        return inst

    def test_hello_world(self):
        request = DummyRequest()
        context = DummyResource()
        inst = self._makeOne(request, context)
        result = inst.hello_world()
        self.assertEqual(result['title'], 'Hello World!')


class SDIFunctionalTests(unittest.TestCase):
    def setUp(self):
        from sdi import main

        app = main({})
        from webtest import TestApp

        self.testapp = TestApp(app)

    def test_it(self):
        result = self.testapp.get('/', status=200)
        self.assertTrue('Hello World!' in result.body)
