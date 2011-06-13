
var data = new Array();
var real_data = new Array();
var rev_match = /Reviews: (\d+)/;
$("body").find(".z-list").each(function() {
    var size = 0;
    var list = this;
    $(this).find(".gray").each(function() {
        size = rev_match.exec($(this).text())[1] * 1;
        if(size > 0) {
            data.push(new Array(size, list));
        }
    });
});
function comp(a, b) {
    if (a[0] < b[0]) {
        return 1;
    } else if(a[0] > b[0]) {
        return -1;
    } else {
        return 0;
    }
}
data.sort(comp);
for (item in data) {
    real_data.push(data[item][1]);
}
var insert = $("body").find(".z-list").parent().find("> br:first");
$("body").find(".z-list").detach();
insert.after(real_data);