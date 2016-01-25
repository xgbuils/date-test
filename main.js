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
    var date = createDateFromString(dateString)
    var hours = date.getHours()
    var dl = document.createElement('dl')
    if (isNan(hours)) {
        dl.setAttribute('class', 'isnan')
    }
    dl.appendChild(createElement('dt', 'String'))
    dl.appendChild(createElement('dd', dateString))
    dl.appendChild(createElement('dt', 'Date'))
    dl.appendChild(createElement('dd', date))
    dl.appendChild(createElement('dt', 'Hours'))
    dl.appendChild(createElement('dd', hours))
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
        var pattern = /([0-9-]+) ([0-9:]+)[ T]?(\+[0-9][0-9]):?([0-9][0-9])/i; //2014-06-18 17:35:28 +0200
        returnDate = new Date(dateString.replace(pattern, '$1T$2$3:$4'));//2014-06-18T17:35:28+02:00
    }
    return returnDate;
};

window.onload = function () {
    document.body.appendChild(createList([
        '2016-01-11T11:05:41+0100',
        '2016-11-11T11:05:41+0100',
        '2016-1-11T11:05:41+0100',
        '2016-01-11T1:05:41+0100',
        '2016-01-11T1:5:41+0100',
        '2016-01-11T1:5:1+0100'
    ]))
}

