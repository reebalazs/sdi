import unittest
from pyramid import testing

class Test_mainlayout(unittest.TestCase):

    def setUp(self):
        self.config = testing.setUp()

    def tearDown(self):
        testing.tearDown()

    def _makeOne(self, request, context):
        from layouts import SDIMainLayout

        inst = SDIMainLayout(request, context)
        return inst

    def test_tb_url(self):
        context = testing.DummyResource()
        request = testing.DummyRequest(application_url='')
        inst = self._makeOne(context, request)
        result = inst.tb_url('xxx')
        self.assertEqual(result['title'], 'Hello World!')


class Test_views(unittest.TestCase):

    def setUp(self):
        self.config = testing.setUp()

    def tearDown(self):
        testing.tearDown()

    def _makeOne(self, request, context):
        from views import SampleViews

        inst = SampleViews(request, context)
        return inst

    def test_index_view(self):
        request = testing.DummyRequest()
        context = testing.DummyResource()
        inst = self._makeOne(request, context)
        result = inst.index_view()
        self.assertEqual(result['title'],
                         'Welcome to Substance D')

    def test_contents_view(self):
        request = testing.DummyRequest()
        context = testing.DummyResource()
        inst = self._makeOne(request, context)
        result = inst.contents_view()
        self.assertEqual(result['title'], 'Contents')


class SDIFunctionalTests(unittest.TestCase):
    def setUp(self):
        from sdi import main

        app = main({})
        from webtest import TestApp

        self.testapp = TestApp(app)

    def test_index_view(self):
        result = self.testapp.get('/', status=200)
        self.assertTrue('Welcome to Substance D' in result.body)

    def test_contents_view(self):
        result = self.testapp.get('/', status=200)
        self.assertTrue('Welcome to Substance D' in result.body)
