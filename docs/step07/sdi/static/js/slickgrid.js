
/*jslint undef: true, newcap: true, nomen: false, white: true, regexp: true */
/*jslint plusplus: false, bitwise: true, maxerr: 50, maxlen: 110, indent: 4 */
/*jslint sub: true */
/*globals window navigator document console */
/*globals setTimeout clearTimeout setInterval */ 
/*globals Slick alert */ 


(function ($) {

    function requiredFieldValidator(value) {
        if (value === null || value === undefined || !value.length) {
            return {valid: false, msg: "This is a required field"};
        }
        else {
            return {valid: true, msg: null};
        }
    }

    var dataView;
    var grid;
    var data = [];
    var columns = [
        {id: "sel", name: "#", field: "num", behavior: "select",
            cssClass: "cell-selection", width: 40, cannotTriggerInsert: true,
            resizable: false, selectable: false},
        {id: "title", name: "Title", field: "title", width: 120, minWidth: 120,
            cssClass: "cell-title", editor: Slick.Editors.Text,
            validator: requiredFieldValidator, sortable: true},
        {id: "duration", name: "Duration", field: "duration",
            editor: Slick.Editors.Text, sortable: true},
        {id: "start", name: "Start", field: "start", minWidth: 60,
            editor: Slick.Editors.Date, sortable: true},
        {id: "finish", name: "Finish", field: "finish", minWidth: 60,
            editor: Slick.Editors.Date, sortable: true}
    ];
    var origColumns = columns.slice();

    var options = {
        editable: false,
        enableAddRow: true,
        enableCellNavigation: true,
        asyncEditorLoading: true,
        forceFitColumns: false
    };

    var sortcol = "title";
    var sortdir = 1;
    var searchString = "";
    function myFilter(item, args) {
        if (args.searchString !== "" &&
                item["title"].indexOf(args.searchString) == -1) {
            return false;
        }

        return true;
    }


    function comparer(a, b) {
        var x = a[sortcol], y = b[sortcol];
        return (x == y ? 0 : (x > y ? 1 : -1));
    }

    //function toggleFilterRow() {
    //    if ($(grid.getTopPanel()).is(":visible")) {
    //        grid.hideTopPanel();
    //    } else {
    //       grid.showTopPanel();
    //    }
    //}


    //$(".grid-header .ui-icon")
    //    .addClass("ui-state-default ui-corner-all")
    //    .mouseover(function (e) {
    //        $(e.target).addClass("ui-state-hover");
    //    })
    //    .mouseout(function (e) {
    //        $(e.target).removeClass("ui-state-hover");
    //    });

    $(function () {

        // prepare the data
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


        var html_id = 'sdi-0000'; // XXX XXX Now just manually...

        dataView = new Slick.Data.DataView({inlineFilters: true});
        grid = new Slick.Grid('#' + html_id, dataView, columns, options);
        grid.setSelectionModel(new Slick.RowSelectionModel());

        var columnpicker = new Slick.Controls.ColumnPicker(
                columns, grid, options);


        // move the filter panel defined in a hidden div into grid top panel
        //$("#inlineFilterPanel")
        //    .appendTo(grid.getTopPanel())
        //    .show();

        grid.onCellChange.subscribe(function (e, args) {
            dataView.updateItem(args.item.id, args.item);
        });

        grid.onAddNewRow.subscribe(function (e, args) {
            var item = {
                "num": data.length, 
                "id": "new_" + (Math.round(Math.random() * 10000)),
                "title": "New task",
                "duration": "1 day",
                "start": "01/01/2009",
                "finish": "01/01/2009"
            };
            $.extend(item, args.item);
            dataView.addItem(item);
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

        var h_runfilters = null;

        function updateFilter() {
            dataView.setFilterArgs({
                searchString: searchString
            });
            dataView.refresh();
        }


        // wire up the search textbox to apply the filter to the model
        $("#txtSearch,#txtSearch2").keyup(function (e) {
            Slick.GlobalEditorLock.cancelCurrentEdit();

            // clear on Esc
            if (e.which == 27) {
                this.value = "";
            }

            searchString = this.value;
            updateFilter();
        });

        $("#btnSelectRows").click(function () {
            if (!Slick.GlobalEditorLock.commitCurrentEdit()) {
                return;
            }

            var rows = [];
            var i;
            for (i = 0; i < 10 && i < dataView.getLength(); i++) {
                rows.push(i);
            }

            grid.setSelectedRows(rows);
        });


        // initialize the model after all the events have been hooked up
        dataView.beginUpdate();
        dataView.setItems(data);
        //dataView.setFilterArgs({
        //    searchString: searchString
        //});
        //dataView.setFilter(myFilter);
        dataView.endUpdate();

        // autosize first
        grid.autosizeColumns();

        // autoresize columns
        var timer;
        $(window).resize(function (evt) {
            if (timer !== null) {
                clearTimeout(timer);
            }
            timer = setTimeout(function () {
                var width = $(window).width();
                var wide = (width > 768); // ipad orientation narrow / wide
                // Hide or show the last two columns, based on the layout.
                // XXX this is a little rough... we'd need to be smarter here
                // to conserve our current columns sizes and order.
                if (wide) {
                    if (columns.length < 5) {
                        columns.push(origColumns[3]);
                        columns.push(origColumns[4]);
                    }
                } else {
                    if (columns.length > 3) {
                        columns = origColumns.slice(0, 3);
                    }
                }

                // and resize.
                grid.setColumns(columns);
                grid.autosizeColumns();
                timer = null;
            }, 400);
        });


    });

})(window.jQuery);

