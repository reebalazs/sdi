from pyramid.view import view_config

class SampleViews(object):
    def __init__(self, request, context):
        self.request = request
        self.context = context

    @view_config(renderer='templates/index_view.pt')
    def index_view(self):
        return dict(title='Welcome to Substance D')

    @view_config(renderer='templates/contents_view.pt',
                 name='contents')
    def contents_view(self):
        items = []
        for i in range(0, 20):
            items.append(
                dict(
                    title="Item %s" % i,
                    author="Author %s" % i
                )
            )
        return dict(title='Contents', items=items)

