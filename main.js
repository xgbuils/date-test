function createList (list) {
    var ul = document.createElement('div')
    for (var i = 0; i < list.length; ++i) {
        var li = document.createElement('div')
        li.appendChild(createDateElement(list[i]))
        ul.appendChild(li)
    }
    return ul
}

function createDateElement (dateString) {
    var dateBefore = new Date(dateString)
    var dateAfter = createDateFromString(dateString)
    var hoursBefore = dateBefore.getHours()
    var hoursAfter = dateAfter.getHours()
    var dl = document.createElement('dl')
    if (isNan(hoursAfter)) {
        dl.setAttribute('class', 'isnan')
    }
    dl.appendChild(createElement('dt', 'String'))
    dl.appendChild(createElement('dd', dateString))
    dl.appendChild(createElement('dt', 'Date'))
    dl.appendChild(createElement('dd', dateAfter))
    dl.appendChild(createElement('dt', 'Hours (before)'))
    dl.appendChild(createElement('dd', hoursBefore))
    dl.appendChild(createElement('dt', 'Hours (after)'))
    dl.appendChild(createElement('dd', hoursAfter))
    return dl
}

function createElement (tag, text) {
    var node = document.createElement(tag)
    var nodeText = document.createTextNode(text)
    node.appendChild(nodeText)
    return node
}

function isNan (num) {
    return num !== num
}

var createDateFromString = function (dateString) {
        var returnDate = new Date(dateString);
        if (!(returnDate instanceof Date) || isNaN(returnDate.valueOf())) {
            // '2014-06-18 17:35:28 +0200' or '2014-06-18T17:35:28+0200' or '2014-06-18 17:35:28+02:00'
            var pattern = /([0-9-]+)[ T]([0-9:]+)\s*(\+[0-9][0-9]):?([0-9][0-9])/i;
            // is transformed to '2014-06-18T17:35:28+02:00'
            returnDate = new Date(dateString.replace(pattern, '$1T$2$3:$4'));
        }
        return returnDate;
    };

window.onload = function () {
    document.body.appendChild(createList([
        '2016-01-11T11:05:41+0100',
        '2016-01-11 11:05:41+0100',
        '2016-01-11T11:05:41+01:00',
        '2016-01-11 11:05:41+01:00',
    ]))
}

