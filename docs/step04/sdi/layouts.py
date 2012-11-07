from pyramid_layout.layout import layout_config

@layout_config(
    template='sdi:templates/main_layout.pt'
)
class SDIMainLayout(object):
    def __init__(self, context, request):
        self.context = context
        self.request = request
        self.home_url = request.application_url

    def css_url(self, path):
        """ Shorten the path to SDI CSS  """
        p = 'sdi:static/css/' + path
        return self.request.static_url(p)

    @property
    def project_title(self):
        return 'Substance D'