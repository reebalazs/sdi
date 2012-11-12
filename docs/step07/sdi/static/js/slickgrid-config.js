
/*
 * SlickGrid configuration
 * It is stored as DOM data, and the slickgrid
 * component can look it up by the data key,
 * by specifying configName: 'slickgrid-config' (or any other name) as an option.
 * It will be used as default options for a grid.
 *
 * We need this because functions are not JSON-convertible.
 */

(function ($) {

    // our custom validator
    function requiredFieldValidator(value) {
        if (value === null || value === undefined || !value.length) {
            return {valid: false, msg: "This is a required field"};
        }
        else {
            return {valid: true, msg: null};
        }
    }

    // mapping of all the default options that configure the behavior
    // of the grid. If your workflow is to marshall the options
    // from the server encoded as JSON, then this is the place where
    // you can specify those options that contain non-JSON marshallable
    // objects (such as, functions).
    // This data will be looked up from the node where the grid is bound
    // to, and its parent nodes. This allows for multiple configurations
    // inside a project.
    $(document).data('slickgrid-config', {
        editors: {
            text: Slick.Editors.Text,
            date: Slick.Editors.Date
        },
        formatters: {
        },
        validators: {
            required: requiredFieldValidator
        },
        handleCreate: function() {
            // Finish customizing the grid.
            // The following objects are available:
            //
            // this.grid:         the grid
            // this.dataView:     the data or data view
            // this.columns:      column definitions
            // this.origColumns:  column definitions saved
            // this.element:      the element which binds the grid
            var grid = this.grid;
            var dataView = this.dataView;
            var columns = this.columns;

            var sortcol = "title";
            var sortdir = 1;
            var searchString = "";
            function myFilter(item, args) {
                if (args.searchString !== "" &&
                        item.title.indexOf(args.searchString) == -1) {
                    return false;
                }

                return true;
            }

            function comparer(a, b) {
                var x = a[sortcol], y = b[sortcol];
                return (x == y ? 0 : (x > y ? 1 : -1));
            }

            // prepare the data
            var data = [];
            var i;
            for (i = 0; i < 5000; i++) {
                var d = (data[i] = {});

                d["id"] = "id_" + i;
                d["num"] = i;
                d["title"] = "Task " + i;
                d["duration"] = "5 days";
                d["start"] = "01/01/2009";
                d["finish"] = "01/05/2009";
            }


            grid.setSelectionModel(new Slick.RowSelectionModel());

            var columnpicker = new Slick.Controls.ColumnPicker(
                    this.columns, grid, this.options.slickgridOptions);

            grid.onCellChange.subscribe(function (e, args) {
                dataView.updateItem(args.item.id, args.item);
            });

            grid.onKeyDown.subscribe(function (e) {
                // select all rows on ctrl-a
                if (e.which != 65 || !e.ctrlKey) {
                    return false;
                }

                var rows = [];
                var i;
                for (i = 0; i < dataView.getLength(); i++) {
                    rows.push(i);
                }

                grid.setSelectedRows(rows);
                e.preventDefault();
            });

            grid.onSort.subscribe(function (e, args) {
                sortdir = args.sortAsc ? 1 : -1;
                sortcol = args.sortCol.field;

                dataView.sort(comparer, args.sortAsc);
            });

            // wire up model events to drive the grid
            dataView.onRowCountChanged.subscribe(function (e, args) {
                grid.updateRowCount();
                grid.render();
            });

            dataView.onRowsChanged.subscribe(function (e, args) {
                grid.invalidateRows(args.rows);
                grid.render();
            });

            // initialize the model after all the events have been hooked up
            dataView.beginUpdate();
            dataView.setItems(data);
            dataView.setFilterArgs({
                searchString: searchString
            });
            dataView.setFilter(myFilter);
            dataView.endUpdate();

        }

    });
})(window.jQuery);

