from pyramid.view import view_config

class SampleViews(object):

    def __init__(self, request, context):
        self.request = request
        self.context = context

    @view_config(renderer='templates/hello_world.pt')
    def hello_world(self):
        return dict(title='Hello World!')

