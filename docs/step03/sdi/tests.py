import unittest

class Test_views(unittest.TestCase):
    def test_hello_world(self):
        from views import hello_world
        result = hello_world({})
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
