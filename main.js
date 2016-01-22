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
        '2016-01-11T11:05:41+0100',
        '2016-11-11T11:05:41+0100',
        '2016-1-11T11:05:41+0100',
        '2016-01-11T1:05:41+0100',
        '2016-01-11T1:5:41+0100',
        '2016-01-11T1:5:1+0100'
    ]))
}

