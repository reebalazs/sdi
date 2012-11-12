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
        #columns = [
        #    dict(
        #        name='author',
        #        title='Author'
        #    ),
        #    dict(
        #        name='title',
        #        title='Title'
        #    )
        #]
        # SlickGrid uses a different column description format than the old table.
        columns = [
            { #"id": "author",
                "name": "Author", "field": "author", "width": 120, "minWidth": 120,
                "cssClass": "cell-author", "editor": "text",
                "validator": "required", "sortable": True},
            { #"id": "title",
                "name": "Title", "field": "title", "width": 120, "minWidth": 120,
                "cssClass": "cell-title", "editor": "text",
                "validator": "required", "sortable": True},
            ]

        items = []
        for i in range(0, 20):
            items.append(
                dict(
                    title="Item %s" % i,
                    author="Author %s" % i
                )
            )
        return dict(title='Contents', columns=columns, items=items)

