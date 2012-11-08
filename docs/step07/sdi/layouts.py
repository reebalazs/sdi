from pyramid_layout.layout import layout_config

@layout_config(
    template='sdi:templates/main_layout.pt'
)
class SDIMainLayout(object):
    def __init__(self, context, request):
        self.context = context
        self.request = request
        self.home_url = request.application_url
        self.username = 'Some User'
        self.user_url = '/some_user'
        self.html_id_next = 0
        self.client_components = set()

    def tb_url(self, path):
        """ Shorten the path to Twitter Bootstrap assets  """
        p = 'sdi:static/bootstrap-2.2.1/docs/assets/' + path
        return self.request.static_url(p)

    def sdi_css(self, path):
        """ Shorten the path to SDI CSS  """
        p = 'sdi:static/css/' + path
        return self.request.static_url(p)

    def sdi_js(self, path):
        """ Shorten the path to SDI JS  """
        p = 'sdi:static/js/' + path
        return self.request.static_url(p)

    def sdi_images(self, path):
        """ Shorten the path to SDI images  """
        p = 'sdi:static/images/' + path
        return self.request.static_url(p)

    def sg_url(self, path):
        """ Shorten the path to SlickGrid resources  """
        p = 'sdi:static/SlickGrid-2.0.2/' + path
        return self.request.static_url(p)

    def html_id(self, html_id=None, prefix='sdi-'):
        """Return a sequential html id"""
        if html_id is None:
            html_id = "%s%04i" % (prefix, self.html_id_next)
            self.html_id_next += 1
        return html_id

    def select_client_component(self, *names):
        self.client_components.update(names)
    
    def has_client_component(self, name):
        return name in self.client_components


    @property
    def project_title(self):
        return 'Substance D'
        
