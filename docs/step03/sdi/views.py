from pyramid.view import view_config
from pyramid.response import Response

@view_config(renderer='templates/hello_world.pt')
def hello_world(request):
    return dict(title='Hello World!')

