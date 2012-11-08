from pyramid_layout.panel import panel_config

@panel_config(
    name='header_sitemenu',
    renderer='templates/panel_header_sitemenu.pt'
)
def header_sitemenu(context, request, items=None):
    # If items are passed in, use items, otherwise use SDI concept of
    # what should show up in the site menu
    url = request.url
    items = [
        dict(
            title="Home",
            url=request.application_url,
            active='active' if 'contents' not in url else ''
        ),
        dict(
            title="Contents",
            url=request.application_url + '/contents',
            active='active' if 'contents' in url else ''
        ),
    ]
    return dict(items=items)

@panel_config(
    name='grid',
    renderer='templates/grid_panel.pt'
)
def grid(context, request, columns, items,
        html_id=None,   # html id can be specified or autogenerated.
        ):
    # Show a grid with the columns and items
    # XXX right now they are ignored though

    layout = request.layout_manager.layout
    html_id = layout.html_id(html_id=html_id)  # autogenerate id if needed

    return dict(
        columns=columns,
        items=items,
        html_id=html_id,
    )
