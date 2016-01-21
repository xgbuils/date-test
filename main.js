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
    var date = new Date(dateString)
    var hours = date.getHours()
    var dl = document.createElement('dl')
    if (isNan(hours)) {
        dl.setAttribute('class', 'isnan')
    }
    dl.appendChild(createElement('dt', 'String'))
    dl.appendChild(createElement('dd', dateString))
    //dl.appendChild(document.createTextNode(' '))
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

window.onload = function () {
    document.body.appendChild(createList([
        'it is not a date',
        '1997',
        '1997-07',
        '1997-07-16',
        '1997-07-16T19:20+01:00',
        '1997-07-16 19:20+01:00',
        '1994-11-05T08:15:30-05:00',
        '1994-11-05 08:15:30-05:00',
        '1997-07-16T19:20:30+01:00',
        '1997-07-16 19:20:30+01:00',
        '1997-07-16T19:20:30.45+01:00',
        '1997-07-16 19:20:30.45+01:00',
        'Thu Jan 21 2016 21:38:14 GMT+0100 (CET)',
        '10/6/2000',
        'Monday, November 06, 2000',
        'Monday, November 06, 2000 12:00:00 AM',
        '11/6/2000 12:00 AM',
        '11/6/2000 12:00:00 AM',
        'November 06',
        '2000-11-06 00:00:00Z',
        'November, 2000',
        '19950204',
        '23:59:59',
        '1995-02-04 24:00'
    ]))
}

