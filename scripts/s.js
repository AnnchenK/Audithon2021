/*var xhr = new XMLHttpRequest();
xhr.open('GET', '', false)
xhr.send();
if (xhr.status != 200) {
    alert(xhr.status +': ' + xhr.statusText);
} else {
    var x = JSON.parse(xhr.response);
    console.log(x);
    var key = 0;
    for(var k in x) {
        for(var t in x[k])
            if ((x[k])[t] == 0)
                delete (x[k])[t];

        
        if (jQuery.isEmptyObject(x[k]))
            delete x[k]
    }
    console.log(JSON.stringify(x))
}*/ //preprocrssing

var regToServ;
var mfc, month;
var chart1, chart2, chart3, chart4

var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://raw.githubusercontent.com/AnnchenK/Storage/master/RegionalScoresOfServices.json', false)
xhr.send();

if (xhr.status != 200) 
{
    alert(xhr.status +': ' + xhr.statusText);
} 
else 
{
    regToServ = JSON.parse(xhr.response);
    var regs = Object.keys(regToServ)
    var dropdown = document.getElementById('myDropdown')
    
    for(var k in regs)
    {
        var a = document.createElement('a')
        a.innerHTML = regs[k]
        a.setAttribute('onclick', 'sending(this.innerHTML)')
        dropdown.appendChild(a)
    }
        
}

function sending(reg) 
{
    var conformity = {
        "Алтайский край": {
            "mfc": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/regions%20MFC/%D0%90%D0%BB%D1%82%D0%B0%D0%B9%D1%81%D0%BA%D0%B8%D0%B9%20%D0%BA%D1%80%D0%B0%D0%B9.json',
            "month": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/count%20of%20message%20per%20mounth/%D0%90%D0%BB%D1%82%D0%B0%D0%B9%D1%81%D0%BA%D0%B8%D0%B9%20%D0%BA%D1%80%D0%B0%D0%B9.json'
        },
        "Амурская область": {
            "mfc": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/regions%20MFC/%D0%90%D0%BC%D1%83%D1%80%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C.json',
            "month": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/count%20of%20message%20per%20mounth/%D0%90%D0%BC%D1%83%D1%80%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C.json'
        },
        "Архангельская область": {
            "mfc": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/regions%20MFC/%D0%90%D1%80%D1%85%D0%B0%D0%BD%D0%B3%D0%B5%D0%BB%D1%8C%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C.json',
            "month": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/count%20of%20message%20per%20mounth/%D0%90%D1%80%D1%85%D0%B0%D0%BD%D0%B3%D0%B5%D0%BB%D1%8C%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C.json'
        },
        "Астраханская область": {
            "mfc": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/regions%20MFC/%D0%90%D1%81%D1%82%D1%80%D0%B0%D1%85%D0%B0%D0%BD%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C.json',
            "month": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/count%20of%20message%20per%20mounth/%D0%90%D1%81%D1%82%D1%80%D0%B0%D1%85%D0%B0%D0%BD%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C.json'
        },
        "Белгородская область": {
            "mfc": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/regions%20MFC/%D0%91%D0%B5%D0%BB%D0%B3%D0%BE%D1%80%D0%BE%D0%B4%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C.json',
            "month": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/count%20of%20message%20per%20mounth/%D0%91%D0%B5%D0%BB%D0%B3%D0%BE%D1%80%D0%BE%D0%B4%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C.json'
        },
        "Брянская область": {
            "mfc": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/regions%20MFC/%D0%91%D1%80%D1%8F%D0%BD%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C.json',
            "month": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/count%20of%20message%20per%20mounth/%D0%91%D1%80%D1%8F%D0%BD%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C.json'
        },
        "Владимирская область": {
            "mfc": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/regions%20MFC/%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BC%D0%B8%D1%80%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C.json',
            "month": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/count%20of%20message%20per%20mounth/%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BC%D0%B8%D1%80%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C.json'
        },
        "Волгоградская область": {
            "mfc": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/regions%20MFC/%D0%92%D0%BE%D0%BB%D0%B3%D0%BE%D0%B3%D1%80%D0%B0%D0%B4%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C.json',
            "month": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/count%20of%20message%20per%20mounth/%D0%92%D0%BE%D0%BB%D0%B3%D0%BE%D0%B3%D1%80%D0%B0%D0%B4%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C.json'
        },
        "Вологодская область": {
            "mfc": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/regions%20MFC/%D0%92%D0%BE%D0%BB%D0%BE%D0%B3%D0%BE%D0%B4%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C.json',
            "month": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/count%20of%20message%20per%20mounth/%D0%92%D0%BE%D0%BB%D0%BE%D0%B3%D0%BE%D0%B4%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C.json'
        },
        "Воронежская область": {
            "mfc": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/regions%20MFC/%D0%92%D0%BE%D1%80%D0%BE%D0%BD%D0%B5%D0%B6%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C.json',
            "month": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/count%20of%20message%20per%20mounth/%D0%92%D0%BE%D1%80%D0%BE%D0%BD%D0%B5%D0%B6%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C.json'
        },
        "Еврейская автономная область": {
            "mfc": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/regions%20MFC/%D0%95%D0%B2%D1%80%D0%B5%D0%B9%D1%81%D0%BA%D0%B0%D1%8F%20%D0%B0%D0%B2%D1%82%D0%BE%D0%BD%D0%BE%D0%BC%D0%BD%D0%B0%D1%8F%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C.json',
            "month": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/count%20of%20message%20per%20mounth/%D0%95%D0%B2%D1%80%D0%B5%D0%B9%D1%81%D0%BA%D0%B0%D1%8F%20%D0%B0%D0%B2%D1%82%D0%BE%D0%BD%D0%BE%D0%BC%D0%BD%D0%B0%D1%8F%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C.json'
        },
        "Забайкальский край": {
            "mfc": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/regions%20MFC/%D0%97%D0%B0%D0%B1%D0%B0%D0%B9%D0%BA%D0%B0%D0%BB%D1%8C%D1%81%D0%BA%D0%B8%D0%B9%20%D0%BA%D1%80%D0%B0%D0%B9.json',
            "month": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/count%20of%20message%20per%20mounth/%D0%97%D0%B0%D0%B1%D0%B0%D0%B9%D0%BA%D0%B0%D0%BB%D1%8C%D1%81%D0%BA%D0%B8%D0%B9%20%D0%BA%D1%80%D0%B0%D0%B9.json'
        },
        "Ивановская область": {
            "mfc": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/regions%20MFC/%D0%98%D0%B2%D0%B0%D0%BD%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C.json',
            "month": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/count%20of%20message%20per%20mounth/%D0%98%D0%B2%D0%B0%D0%BD%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C.json'
        },
        "Иркутская область": {
            "mfc": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/regions%20MFC/%D0%98%D1%80%D0%BA%D1%83%D1%82%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C.json',
            "month": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/count%20of%20message%20per%20mounth/%D0%98%D1%80%D0%BA%D1%83%D1%82%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C.json'
        },
        "Кабардино-Балкарская Республика": {
            "mfc": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/regions%20MFC/%D0%9A%D0%B0%D0%B1%D0%B0%D1%80%D0%B4%D0%B8%D0%BD%D0%BE-%D0%91%D0%B0%D0%BB%D0%BA%D0%B0%D1%80%D1%81%D0%BA%D0%B0%D1%8F%20%D1%80%D0%B5%D1%81%D0%BF%D1%83%D0%B1%D0%BB%D0%B8%D0%BA%D0%B0.json',
            "month": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/count%20of%20message%20per%20mounth/%D0%9A%D0%B0%D0%B1%D0%B0%D1%80%D0%B4%D0%B8%D0%BD%D0%BE-%D0%91%D0%B0%D0%BB%D0%BA%D0%B0%D1%80%D1%81%D0%BA%D0%B0%D1%8F%20%D1%80%D0%B5%D1%81%D0%BF%D1%83%D0%B1%D0%BB%D0%B8%D0%BA%D0%B0.json'
        },
        "Калининградская область": {
            "mfc": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/regions%20MFC/%D0%9A%D0%B0%D0%BB%D0%B8%D0%BD%D0%B8%D0%BD%D0%B3%D1%80%D0%B0%D0%B4%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C.json',
            "month": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/count%20of%20message%20per%20mounth/%D0%9A%D0%B0%D0%BB%D0%B8%D0%BD%D0%B8%D0%BD%D0%B3%D1%80%D0%B0%D0%B4%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C.json'
        },
        "Калужская область": {
            "mfc": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/regions%20MFC/%D0%9A%D0%B0%D0%BB%D1%83%D0%B6%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C.json',
            "month": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/count%20of%20message%20per%20mounth/%D0%9A%D0%B0%D0%BB%D1%83%D0%B6%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C.json'
        },
        "Камчатский край": {
            "mfc": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/regions%20MFC/%D0%9A%D0%B0%D0%BC%D1%87%D0%B0%D1%82%D1%81%D0%BA%D0%B8%D0%B9%20%D0%BA%D1%80%D0%B0%D0%B9.json',
            "month": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/count%20of%20message%20per%20mounth/%D0%9A%D0%B0%D0%BC%D1%87%D0%B0%D1%82%D1%81%D0%BA%D0%B8%D0%B9%20%D0%BA%D1%80%D0%B0%D0%B9.json'
        },
        "Карачаево-Черкесская Республика": {
            "month": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/count%20of%20message%20per%20mounth/%D0%9A%D0%B0%D1%80%D0%B0%D1%87%D0%B0%D0%B5%D0%B2%D0%BE-%D0%A7%D0%B5%D1%80%D0%BA%D0%B5%D1%81%D1%81%D0%BA%D0%B0%D1%8F%20%D1%80%D0%B5%D1%81%D0%BF%D1%83%D0%B1%D0%BB%D0%B8%D0%BA%D0%B0.json'
        },
        "Кемеровская область": {
            "mfc": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/regions%20MFC/%D0%9A%D0%B5%D0%BC%D0%B5%D1%80%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C.json',
            "month": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/count%20of%20message%20per%20mounth/%D0%9A%D0%B5%D0%BC%D0%B5%D1%80%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C.json'
        },
        "Кировская область": {
            "mfc": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/regions%20MFC/%D0%9A%D0%B8%D1%80%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C.json',
            "month": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/count%20of%20message%20per%20mounth/%D0%9A%D0%B8%D1%80%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C.json'
        },
        "Костромская область": {
            "mfc": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/regions%20MFC/%D0%9A%D0%BE%D1%81%D1%82%D1%80%D0%BE%D0%BC%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C.json',
            "month": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/count%20of%20message%20per%20mounth/%D0%9A%D0%BE%D1%81%D1%82%D1%80%D0%BE%D0%BC%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C.json'
        },
        "Краснодарский край": {
            "mfc": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/regions%20MFC/%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B4%D0%B0%D1%80%D1%81%D0%BA%D0%B8%D0%B9%20%D0%BA%D1%80%D0%B0%D0%B9.json',
            "month": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/count%20of%20message%20per%20mounth/%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B4%D0%B0%D1%80%D1%81%D0%BA%D0%B8%D0%B9%20%D0%BA%D1%80%D0%B0%D0%B9.json'
        },
        "Красноярский край": {
            "mfc": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/regions%20MFC/%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D1%8F%D1%80%D1%81%D0%BA%D0%B8%D0%B9%20%D0%BA%D1%80%D0%B0%D0%B9.json',
            "month": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/count%20of%20message%20per%20mounth/%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D1%8F%D1%80%D1%81%D0%BA%D0%B8%D0%B9%20%D0%BA%D1%80%D0%B0%D0%B9.json'
        },
        "Курганская область": {
            "mfc": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/regions%20MFC/%D0%9A%D1%83%D1%80%D0%B3%D0%B0%D0%BD%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C.json',
            "month": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/count%20of%20message%20per%20mounth/%D0%9A%D1%83%D1%80%D0%B3%D0%B0%D0%BD%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C.json'
        },
        "Курская область": {
            "mfc": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/regions%20MFC/%D0%9A%D1%83%D1%80%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C.json',
            "month": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/count%20of%20message%20per%20mounth/%D0%9A%D1%83%D1%80%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C.json'
        },
        "Ленинградская область": {
            "mfc": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/regions%20MFC/%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD%D0%B3%D1%80%D0%B0%D0%B4%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C.json',
            "month": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/count%20of%20message%20per%20mounth/%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD%D0%B3%D1%80%D0%B0%D0%B4%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C.json'
        },
        "Липецкая область": {
            "mfc": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/regions%20MFC/%D0%9B%D0%B8%D0%BF%D0%B5%D1%86%D0%BA%D0%B0%D1%8F%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C.json',
            "month": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/count%20of%20message%20per%20mounth/%D0%9B%D0%B8%D0%BF%D0%B5%D1%86%D0%BA%D0%B0%D1%8F%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C.json'
        },
        "Магаданская область": {
            "mfc": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/regions%20MFC/%D0%9C%D0%B0%D0%B3%D0%B0%D0%B4%D0%B0%D0%BD%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C.json',
            "month": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/count%20of%20message%20per%20mounth/%D0%9C%D0%B0%D0%B3%D0%B0%D0%B4%D0%B0%D0%BD%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C.json'
        },
        "Москва": {
            "mfc": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/regions%20MFC/%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0.json',
            "month": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/count%20of%20message%20per%20mounth/%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0.json'
        },
        "Московская область": {
            "mfc": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/regions%20MFC/%D0%9C%D0%BE%D1%81%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C.json',
            "month": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/count%20of%20message%20per%20mounth/%D0%9C%D0%BE%D1%81%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C.json'
        },
        "Мурманская область": {
            "mfc": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/regions%20MFC/%D0%9C%D1%83%D1%80%D0%BC%D0%B0%D0%BD%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C.json',
            "month": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/count%20of%20message%20per%20mounth/%D0%9C%D1%83%D1%80%D0%BC%D0%B0%D0%BD%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C.json'
        },
        "Ненецкий автономный округ": {
            "month": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/count%20of%20message%20per%20mounth/%D0%9D%D0%B5%D0%BD%D0%B5%D1%86%D0%BA%D0%B8%D0%B9%20%D0%B0%D0%B2%D1%82%D0%BE%D0%BD%D0%BE%D0%BC%D0%BD%D1%8B%D0%B9%20%D0%BE%D0%BA%D1%80%D1%83%D0%B3.json'
        },
        "Нижегородская область": {
            "mfc": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/regions%20MFC/%D0%9D%D0%B8%D0%B6%D0%B5%D0%B3%D0%BE%D1%80%D0%BE%D0%B4%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C.json',
            "month": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/count%20of%20message%20per%20mounth/%D0%9D%D0%B8%D0%B6%D0%B5%D0%B3%D0%BE%D1%80%D0%BE%D0%B4%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C.json'
        },
        "Новгородская область": {
            "mfc": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/regions%20MFC/%D0%9D%D0%BE%D0%B2%D0%B3%D0%BE%D1%80%D0%BE%D0%B4%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C.json',
            "month": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/count%20of%20message%20per%20mounth/%D0%9D%D0%BE%D0%B2%D0%B3%D0%BE%D1%80%D0%BE%D0%B4%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C.json'
        },
        "Новосибирская область": {
            "mfc": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/regions%20MFC/%D0%9D%D0%BE%D0%B2%D0%BE%D1%81%D0%B8%D0%B1%D0%B8%D1%80%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C.json',
            "month": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/count%20of%20message%20per%20mounth/%D0%9D%D0%BE%D0%B2%D0%BE%D1%81%D0%B8%D0%B1%D0%B8%D1%80%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C.json'
        },
        "Омская область": {
            "mfc": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/regions%20MFC/%D0%9E%D0%BC%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C.json',
            "month": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/count%20of%20message%20per%20mounth/%D0%9E%D0%BC%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C.json'
        },
        "Оренбургская область": {
            "mfc": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/regions%20MFC/%D0%9E%D1%80%D0%B5%D0%BD%D0%B1%D1%83%D1%80%D0%B3%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C.json',
            "month": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/count%20of%20message%20per%20mounth/%D0%9E%D1%80%D0%B5%D0%BD%D0%B1%D1%83%D1%80%D0%B3%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C.json'
        },
        "Орловская область": {
            "mfc": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/regions%20MFC/%D0%9E%D1%80%D0%BB%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C.json',
            "month": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/count%20of%20message%20per%20mounth/%D0%9E%D1%80%D0%BB%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C.json'
        },
        "Пензенская область": {
            "mfc": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/regions%20MFC/%D0%9F%D0%B5%D0%BD%D0%B7%D0%B5%D0%BD%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C.json',
            "month": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/count%20of%20message%20per%20mounth/%D0%9F%D0%B5%D0%BD%D0%B7%D0%B5%D0%BD%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C.json'
        },
        "Пермский край": {
            "mfc": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/regions%20MFC/%D0%9F%D0%B5%D1%80%D0%BC%D1%81%D0%BA%D0%B8%D0%B9%20%D0%BA%D1%80%D0%B0%D0%B9.json',
            "month": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/count%20of%20message%20per%20mounth/%D0%9F%D0%B5%D1%80%D0%BC%D1%81%D0%BA%D0%B8%D0%B9%20%D0%BA%D1%80%D0%B0%D0%B9.json'
        },
        "Приморский край": {
            "mfc": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/regions%20MFC/%D0%9F%D1%80%D0%B8%D0%BC%D0%BE%D1%80%D1%81%D0%BA%D0%B8%D0%B9%20%D0%BA%D1%80%D0%B0%D0%B9.json',
            "month": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/count%20of%20message%20per%20mounth/%D0%9F%D1%80%D0%B8%D0%BC%D0%BE%D1%80%D1%81%D0%BA%D0%B8%D0%B9%20%D0%BA%D1%80%D0%B0%D0%B9.json'
        },
        "Псковская область": {
            "mfc": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/regions%20MFC/%D0%9F%D1%81%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C.json',
            "month": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/count%20of%20message%20per%20mounth/%D0%9F%D1%81%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C.json'
        },
        "Республика Адыгея (Адыгея)": {
            "mfc": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/regions%20MFC/%D0%A0%D0%B5%D1%81%D0%BF%D1%83%D0%B1%D0%BB%D0%B8%D0%BA%D0%B0%20%D0%90%D0%B4%D1%8B%D0%B3%D0%B5%D1%8F.json',
            "month": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/count%20of%20message%20per%20mounth/%D0%A0%D0%B5%D1%81%D0%BF%D1%83%D0%B1%D0%BB%D0%B8%D0%BA%D0%B0%20%D0%90%D0%B4%D1%8B%D0%B3%D0%B5%D1%8F.json'
        },
        "Республика Алтай": {
            "mfc": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/regions%20MFC/%D0%A0%D0%B5%D1%81%D0%BF%D1%83%D0%B1%D0%BB%D0%B8%D0%BA%D0%B0%20%D0%90%D0%BB%D1%82%D0%B0%D0%B9.json',
            "month": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/count%20of%20message%20per%20mounth/%D0%A0%D0%B5%D1%81%D0%BF%D1%83%D0%B1%D0%BB%D0%B8%D0%BA%D0%B0%20%D0%90%D0%BB%D1%82%D0%B0%D0%B9.json'
        },
        "Республика Башкортостан": {
            "mfc": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/regions%20MFC/%D0%A0%D0%B5%D1%81%D0%BF%D1%83%D0%B1%D0%BB%D0%B8%D0%BA%D0%B0%20%D0%91%D0%B0%D1%88%D0%BA%D0%BE%D1%80%D1%82%D0%BE%D1%81%D1%82%D0%B0%D0%BD.json',
            "month": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/count%20of%20message%20per%20mounth/%D0%A0%D0%B5%D1%81%D0%BF%D1%83%D0%B1%D0%BB%D0%B8%D0%BA%D0%B0%20%D0%91%D0%B0%D1%88%D0%BA%D0%BE%D1%80%D1%82%D0%BE%D1%81%D1%82%D0%B0%D0%BD.json'
        },
        "Республика Бурятия": {
            "mfc": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/regions%20MFC/%D0%A0%D0%B5%D1%81%D0%BF%D1%83%D0%B1%D0%BB%D0%B8%D0%BA%D0%B0%20%D0%91%D1%83%D1%80%D1%8F%D1%82%D0%B8%D1%8F.json',
            "month": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/count%20of%20message%20per%20mounth/%D0%A0%D0%B5%D1%81%D0%BF%D1%83%D0%B1%D0%BB%D0%B8%D0%BA%D0%B0%20%D0%91%D1%83%D1%80%D1%8F%D1%82%D0%B8%D1%8F.json'
        },
        "Республика Дагестан": {
            "mfc": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/regions%20MFC/%D0%A0%D0%B5%D1%81%D0%BF%D1%83%D0%B1%D0%BB%D0%B8%D0%BA%D0%B0%20%D0%94%D0%B0%D0%B3%D0%B5%D1%81%D1%82%D0%B0%D0%BD.json',
            "month": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/count%20of%20message%20per%20mounth/%D0%A0%D0%B5%D1%81%D0%BF%D1%83%D0%B1%D0%BB%D0%B8%D0%BA%D0%B0%20%D0%94%D0%B0%D0%B3%D0%B5%D1%81%D1%82%D0%B0%D0%BD.json'
        },
        "Республика Ингушетия": {
            "month": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/count%20of%20message%20per%20mounth/%D0%A0%D0%B5%D1%81%D0%BF%D1%83%D0%B1%D0%BB%D0%B8%D0%BA%D0%B0%20%D0%98%D0%BD%D0%B3%D1%83%D1%88%D0%B5%D1%82%D0%B8%D1%8F.json'
        },
        "Республика Калмыкия": {
            "mfc": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/regions%20MFC/%D0%A0%D0%B5%D1%81%D0%BF%D1%83%D0%B1%D0%BB%D0%B8%D0%BA%D0%B0%20%D0%9A%D0%B0%D0%BB%D0%BC%D1%8B%D0%BA%D0%B8%D1%8F.json',
            "month": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/count%20of%20message%20per%20mounth/%D0%A0%D0%B5%D1%81%D0%BF%D1%83%D0%B1%D0%BB%D0%B8%D0%BA%D0%B0%20%D0%9A%D0%B0%D0%BB%D0%BC%D1%8B%D0%BA%D0%B8%D1%8F.json'
        },
        "Республика Карелия": {
            "mfc": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/regions%20MFC/%D0%A0%D0%B5%D1%81%D0%BF%D1%83%D0%B1%D0%BB%D0%B8%D0%BA%D0%B0%20%D0%9A%D0%B0%D1%80%D0%B5%D0%BB%D0%B8%D1%8F.json',
            "month": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/count%20of%20message%20per%20mounth/%D0%A0%D0%B5%D1%81%D0%BF%D1%83%D0%B1%D0%BB%D0%B8%D0%BA%D0%B0%20%D0%9A%D0%B0%D1%80%D0%B5%D0%BB%D0%B8%D1%8F.json'
        },
        "Республика Коми": {
            "month": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/count%20of%20message%20per%20mounth/%D0%A0%D0%B5%D1%81%D0%BF%D1%83%D0%B1%D0%BB%D0%B8%D0%BA%D0%B0%20%D0%9A%D0%BE%D0%BC%D0%B8.json'
        },
        "Республика Крым": {
            "mfc": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/regions%20MFC/%D0%A0%D0%B5%D1%81%D0%BF%D1%83%D0%B1%D0%BB%D0%B8%D0%BA%D0%B0%20%D0%9A%D1%80%D1%8B%D0%BC.json',
            "month": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/count%20of%20message%20per%20mounth/%D0%A0%D0%B5%D1%81%D0%BF%D1%83%D0%B1%D0%BB%D0%B8%D0%BA%D0%B0%20%D0%9A%D1%80%D1%8B%D0%BC.json'
        },
        "Республика Марий Эл": {
            "mfc": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/regions%20MFC/%D0%A0%D0%B5%D1%81%D0%BF%D1%83%D0%B1%D0%BB%D0%B8%D0%BA%D0%B0%20%D0%9C%D0%B0%D1%80%D0%B8%D0%B9%20%D0%AD%D0%BB.json',
            "month": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/count%20of%20message%20per%20mounth/%D0%A0%D0%B5%D1%81%D0%BF%D1%83%D0%B1%D0%BB%D0%B8%D0%BA%D0%B0%20%D0%9C%D0%B0%D1%80%D0%B8%D0%B9%20%D0%AD%D0%BB.json'
        },
        "Республика Мордовия": {
            "mfc": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/regions%20MFC/%D0%A0%D0%B5%D1%81%D0%BF%D1%83%D0%B1%D0%BB%D0%B8%D0%BA%D0%B0%20%D0%9C%D0%BE%D1%80%D0%B4%D0%BE%D0%B2%D0%B8%D1%8F.json',
            "month": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/count%20of%20message%20per%20mounth/%D0%A0%D0%B5%D1%81%D0%BF%D1%83%D0%B1%D0%BB%D0%B8%D0%BA%D0%B0%20%D0%9C%D0%BE%D1%80%D0%B4%D0%BE%D0%B2%D0%B8%D1%8F.json'
        },
        "Республика Саха (Якутия)": {
            "mfc": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/regions%20MFC/%D0%A0%D0%B5%D1%81%D0%BF%D1%83%D0%B1%D0%BB%D0%B8%D0%BA%D0%B0%20%D0%A1%D0%B0%D1%85%D0%B0%20(%D0%AF%D0%BA%D1%83%D1%82%D0%B8%D1%8F).json',
            "month": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/count%20of%20message%20per%20mounth/%D0%A0%D0%B5%D1%81%D0%BF%D1%83%D0%B1%D0%BB%D0%B8%D0%BA%D0%B0%20%D0%A1%D0%B0%D1%85%D0%B0%20(%D0%AF%D0%BA%D1%83%D1%82%D0%B8%D1%8F).json'
        },
        "Республика Северная Осетия-Алания": {
            "mfc": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/regions%20MFC/%D0%A0%D0%B5%D1%81%D0%BF%D1%83%D0%B1%D0%BB%D0%B8%D0%BA%D0%B0%20%D0%A1%D0%B5%D0%B2%D0%B5%D1%80%D0%BD%D0%B0%D1%8F%20%D0%9E%D1%81%D0%B5%D1%82%D0%B8%D1%8F-%D0%90%D0%BB%D0%B0%D0%BD%D0%B8%D1%8F.json',
            "month": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/count%20of%20message%20per%20mounth/%D0%A0%D0%B5%D1%81%D0%BF%D1%83%D0%B1%D0%BB%D0%B8%D0%BA%D0%B0%20%D0%A1%D0%B5%D0%B2%D0%B5%D1%80%D0%BD%D0%B0%D1%8F%20%D0%9E%D1%81%D0%B5%D1%82%D0%B8%D1%8F-%D0%90%D0%BB%D0%B0%D0%BD%D0%B8%D1%8F.json'
        },
        "Республика Татарстан (Татарстан)": {
            "mfc": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/regions%20MFC/%D0%A0%D0%B5%D1%81%D0%BF%D1%83%D0%B1%D0%BB%D0%B8%D0%BA%D0%B0%20%D0%A2%D0%B0%D1%82%D0%B0%D1%80%D1%81%D1%82%D0%B0%D0%BD.json',
            "month": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/count%20of%20message%20per%20mounth/%D0%A0%D0%B5%D1%81%D0%BF%D1%83%D0%B1%D0%BB%D0%B8%D0%BA%D0%B0%20%D0%A2%D0%B0%D1%82%D0%B0%D1%80%D1%81%D1%82%D0%B0%D0%BD.json'
        },
        "Республика Тыва": {
            "mfc": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/regions%20MFC/%D0%A0%D0%B5%D1%81%D0%BF%D1%83%D0%B1%D0%BB%D0%B8%D0%BA%D0%B0%20%D0%A2%D1%8B%D0%B2%D0%B0.json',
            "month": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/count%20of%20message%20per%20mounth/%D0%A0%D0%B5%D1%81%D0%BF%D1%83%D0%B1%D0%BB%D0%B8%D0%BA%D0%B0%20%D0%A2%D1%8B%D0%B2%D0%B0.json'
        },
        "Республика Хакасия": {
            "mfc": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/regions%20MFC/%D0%A0%D0%B5%D1%81%D0%BF%D1%83%D0%B1%D0%BB%D0%B8%D0%BA%D0%B0%20%D0%A5%D0%B0%D0%BA%D0%B0%D1%81%D0%B8%D1%8F.json',
            "month": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/count%20of%20message%20per%20mounth/%D0%A0%D0%B5%D1%81%D0%BF%D1%83%D0%B1%D0%BB%D0%B8%D0%BA%D0%B0%20%D0%A5%D0%B0%D0%BA%D0%B0%D1%81%D0%B8%D1%8F.json'
        },
        "Ростовская область": {
            "mfc": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/regions%20MFC/%D0%A0%D0%BE%D1%81%D1%82%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C.json',
            "month": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/count%20of%20message%20per%20mounth/%D0%A0%D0%BE%D1%81%D1%82%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C.json'
        },
        "Рязанская область": {
            "mfc": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/regions%20MFC/%D0%A0%D1%8F%D0%B7%D0%B0%D0%BD%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C.json',
            "month": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/count%20of%20message%20per%20mounth/%D0%A0%D1%8F%D0%B7%D0%B0%D0%BD%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C.json'
        },
        "Самарская область": {
            "mfc": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/regions%20MFC/%D0%A1%D0%B0%D0%BC%D0%B0%D1%80%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C.json',
            "month": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/count%20of%20message%20per%20mounth/%D0%A1%D0%B0%D0%BC%D0%B0%D1%80%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C.json'
        },
        "Санкт-Петербург": {
            "mfc": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/regions%20MFC/%D0%A1%D0%B0%D0%BD%D0%BA%D1%82-%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3.json',
            "month": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/count%20of%20message%20per%20mounth/%D0%A1%D0%B0%D0%BD%D0%BA%D1%82-%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3.json'
        },
        "Саратовская область": {
            "mfc": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/regions%20MFC/%D0%A1%D0%B0%D1%80%D0%B0%D1%82%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C.json',
            "month": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/count%20of%20message%20per%20mounth/%D0%A1%D0%B0%D1%80%D0%B0%D1%82%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C.json'
        },
        "Сахалинская область": {
            "mfc": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/regions%20MFC/%D0%A1%D0%B0%D1%85%D0%B0%D0%BB%D0%B8%D0%BD%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C.json',
            "month": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/count%20of%20message%20per%20mounth/%D0%A1%D0%B0%D1%85%D0%B0%D0%BB%D0%B8%D0%BD%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C.json'
        },
        "Свердловская область": {
            "mfc": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/regions%20MFC/%D0%A1%D0%B2%D0%B5%D1%80%D0%B4%D0%BB%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C.json',
            "month": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/count%20of%20message%20per%20mounth/%D0%A1%D0%B2%D0%B5%D1%80%D0%B4%D0%BB%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C.json'
        },
        "Севастополь": {
            "mfc": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/regions%20MFC/%D0%A1%D0%B5%D0%B2%D0%B0%D1%81%D1%82%D0%BE%D0%BF%D0%BE%D0%BB%D1%8C.json',
            "month": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/count%20of%20message%20per%20mounth/%D0%A1%D0%B5%D0%B2%D0%B0%D1%81%D1%82%D0%BE%D0%BF%D0%BE%D0%BB%D1%8C.json'
        },
        "Смоленская область": {
            "mfc": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/regions%20MFC/%D0%A1%D0%BC%D0%BE%D0%BB%D0%B5%D0%BD%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C.json',
            "month": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/count%20of%20message%20per%20mounth/%D0%A1%D0%BC%D0%BE%D0%BB%D0%B5%D0%BD%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C.json'
        },
        "Ставропольский край": {
            "mfc": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/regions%20MFC/%D0%A1%D1%82%D0%B0%D0%B2%D1%80%D0%BE%D0%BF%D0%BE%D0%BB%D1%8C%D1%81%D0%BA%D0%B8%D0%B9%20%D0%BA%D1%80%D0%B0%D0%B9.json',
            "month": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/count%20of%20message%20per%20mounth/%D0%A1%D1%82%D0%B0%D0%B2%D1%80%D0%BE%D0%BF%D0%BE%D0%BB%D1%8C%D1%81%D0%BA%D0%B8%D0%B9%20%D0%BA%D1%80%D0%B0%D0%B9.json'
        },
        "Тамбовская область": {
            "mfc": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/regions%20MFC/%D0%A2%D0%B0%D0%BC%D0%B1%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C.json',
            "month": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/count%20of%20message%20per%20mounth/%D0%A2%D0%B0%D0%BC%D0%B1%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C.json'
        },
        "Тверская область": {
            "month": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/count%20of%20message%20per%20mounth/%D0%A2%D0%B2%D0%B5%D1%80%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C.json'
        },
        "Томская область": {
            "mfc": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/regions%20MFC/%D0%A2%D0%BE%D0%BC%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C.json',
            "month": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/count%20of%20message%20per%20mounth/%D0%A2%D0%BE%D0%BC%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C.json'
        },
        "Тульская область": {
            "mfc": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/regions%20MFC/%D0%A2%D1%83%D0%BB%D1%8C%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C.json',
            "month": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/count%20of%20message%20per%20mounth/%D0%A2%D1%83%D0%BB%D1%8C%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C.json'
        },
        "Тюменская область": {
            "mfc": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/regions%20MFC/%D0%A2%D1%8E%D0%BC%D0%B5%D0%BD%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C.json',
            "month": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/count%20of%20message%20per%20mounth/%D0%A2%D1%8E%D0%BC%D0%B5%D0%BD%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C.json'
        },
        "Удмуртская Республика": {
            "mfc": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/regions%20MFC/%D0%A3%D0%B4%D0%BC%D1%83%D1%80%D1%82%D1%81%D0%BA%D0%B0%D1%8F%20%D1%80%D0%B5%D1%81%D0%BF%D1%83%D0%B1%D0%BB%D0%B8%D0%BA%D0%B0.json',
            "month": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/count%20of%20message%20per%20mounth/%D0%A3%D0%B4%D0%BC%D1%83%D1%80%D1%82%D1%81%D0%BA%D0%B0%D1%8F%20%D1%80%D0%B5%D1%81%D0%BF%D1%83%D0%B1%D0%BB%D0%B8%D0%BA%D0%B0.json'
        },
        "Ульяновская область": {
            "mfc": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/regions%20MFC/%D0%A3%D0%BB%D1%8C%D1%8F%D0%BD%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C.json',
            "month": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/count%20of%20message%20per%20mounth/%D0%A3%D0%BB%D1%8C%D1%8F%D0%BD%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C.json'
        },
        "Хабаровский край": {
            "mfc": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/regions%20MFC/%D0%A5%D0%B0%D0%B1%D0%B0%D1%80%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9%20%D0%BA%D1%80%D0%B0%D0%B9.json',
            "month": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/count%20of%20message%20per%20mounth/%D0%A5%D0%B0%D0%B1%D0%B0%D1%80%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9%20%D0%BA%D1%80%D0%B0%D0%B9.json'
        },
        "Ханты-Мансийский автономный округ - Югра": {
            "mfc": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/regions%20MFC/%D0%A5%D0%B0%D0%BD%D1%82%D1%8B-%D0%9C%D0%B0%D0%BD%D1%81%D0%B8%D0%B9%D1%81%D0%BA%D0%B8%D0%B9%20%D0%B0%D0%B2%D1%82%D0%BE%D0%BD%D0%BE%D0%BC%D0%BD%D1%8B%D0%B9%20%D0%BE%D0%BA%D1%80%D1%83%D0%B3%20-%20%D0%AE%D0%B3%D1%80%D0%B0.json',
            "month": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/count%20of%20message%20per%20mounth/%D0%A5%D0%B0%D0%BD%D1%82%D1%8B-%D0%9C%D0%B0%D0%BD%D1%81%D0%B8%D0%B9%D1%81%D0%BA%D0%B8%D0%B9%20%D0%B0%D0%B2%D1%82%D0%BE%D0%BD%D0%BE%D0%BC%D0%BD%D1%8B%D0%B9%20%D0%BE%D0%BA%D1%80%D1%83%D0%B3%20-%20%D0%AE%D0%B3%D1%80%D0%B0.json'
        },
        "Челябинская область": {
            "mfc": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/regions%20MFC/%D0%A7%D0%B5%D0%BB%D1%8F%D0%B1%D0%B8%D0%BD%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C.json',
            "month": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/count%20of%20message%20per%20mounth/%D0%A7%D0%B5%D0%BB%D1%8F%D0%B1%D0%B8%D0%BD%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C.json'
        },
        "Чеченская Республика": {
            "mfc": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/regions%20MFC/%D0%A7%D0%B5%D1%87%D0%B5%D0%BD%D1%81%D0%BA%D0%B0%D1%8F%20%D1%80%D0%B5%D1%81%D0%BF%D1%83%D0%B1%D0%BB%D0%B8%D0%BA%D0%B0.json',
            "month": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/count%20of%20message%20per%20mounth/%D0%A7%D0%B5%D1%87%D0%B5%D0%BD%D1%81%D0%BA%D0%B0%D1%8F%20%D1%80%D0%B5%D1%81%D0%BF%D1%83%D0%B1%D0%BB%D0%B8%D0%BA%D0%B0.json'
        },
        "Чувашская Республика - Чувашия": {
            "mfc": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/regions%20MFC/%D0%A7%D1%83%D0%B2%D0%B0%D1%88%D1%81%D0%BA%D0%B0%D1%8F%20%D1%80%D0%B5%D1%81%D0%BF%D1%83%D0%B1%D0%BB%D0%B8%D0%BA%D0%B0%20-%20%D0%A7%D1%83%D0%B2%D0%B0%D1%88%D0%B8%D1%8F.json',
            "month": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/count%20of%20message%20per%20mounth/%D0%A7%D1%83%D0%B2%D0%B0%D1%88%D1%81%D0%BA%D0%B0%D1%8F%20%D1%80%D0%B5%D1%81%D0%BF%D1%83%D0%B1%D0%BB%D0%B8%D0%BA%D0%B0.json'
        },
        "Чукотский автономный округ": {
            "month": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/count%20of%20message%20per%20mounth/%D0%A7%D1%83%D0%BA%D0%BE%D1%82%D1%81%D0%BA%D0%B8%D0%B9%20%D0%B0%D0%B2%D1%82%D0%BE%D0%BD%D0%BE%D0%BC%D0%BD%D1%8B%D0%B9%20%D0%BE%D0%BA%D1%80%D1%83%D0%B3.json'
        },
        "Ямало-Ненецкий автономный округ": {
            "mfc": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/regions%20MFC/%D0%AF%D0%BC%D0%B0%D0%BB%D0%BE-%D0%9D%D0%B5%D0%BD%D0%B5%D1%86%D0%BA%D0%B8%D0%B9%20%D0%B0%D0%B2%D1%82%D0%BE%D0%BD%D0%BE%D0%BC%D0%BD%D1%8B%D0%B9%20%D0%BE%D0%BA%D1%80%D1%83%D0%B3.json',
            "month": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/count%20of%20message%20per%20mounth/%D0%AF%D0%BC%D0%B0%D0%BB%D0%BE-%D0%9D%D0%B5%D0%BD%D0%B5%D1%86%D0%BA%D0%B8%D0%B9%20%D0%B0%D0%B2%D1%82%D0%BE%D0%BD%D0%BE%D0%BC%D0%BD%D1%8B%D0%B9%20%D0%BE%D0%BA%D1%80%D1%83%D0%B3.json'
        },
        "Ярославская область": {
            "mfc": 'https://raw.githubusercontent.com/AnnchenK/Storage/master/regions%20MFC/%D0%AF%D1%80%D0%BE%D1%81%D0%BB%D0%B0%D0%B2%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C.json',
            "month": 'https://github.com/AnnchenK/Storage/blob/master/count%20of%20message%20per%20mounth/%D0%AF%D1%80%D0%BE%D1%81%D0%BB%D0%B0%D0%B2%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C.json'
        }
    }

    var keys = Object.keys(conformity)
    var i
    for(var k in keys)
        if (keys[k] == reg)
            i = k;

    mfcUrl = (conformity[reg])["mfc"]
    console.log(mfcUrl)

    monthUrl = (conformity[reg])["month"]
    console.log(monthUrl)

    if (mfcUrl != undefined)
    {
        mfc = new XMLHttpRequest();
        mfc.open('GET', mfcUrl, false)
        mfc.send();
    }
    month = new XMLHttpRequest();
    month.open('GET', monthUrl, false);
    month.send()

    document.getElementById('bttn').style.display = 'inline'
    var dropdown = document.getElementById('myDropdown1')
    while(dropdown.firstChild)
        dropdown.removeChild(dropdown.firstChild)
    var serv = Object.keys(regToServ[reg])
    var inp = document.createElement('input')
    inp.type = 'text'
    inp.placeholder = "Поиск.."
    inp.id = "myInput1"
    inp.setAttribute('onkeyup', 'filterFunction1()')
    dropdown.appendChild(inp)
    for (var t in serv)
    {
        var a = document.createElement('a')
        a.innerHTML = serv[t]
        a.setAttribute('onclick', 'servData(this.innerHTML)')
        document.getElementById('myDropdown1').appendChild(a)
    }

}

function servData(serv)
{
    var month1 = JSON.parse(month.response)
    var month_statistic = new Array()
    for (var t in month1)
        if((month1[t])[serv] != undefined)
            month_statistic.push((month1[t])[serv])
        else
            month_statistic.push(0)
    if (mfcUrl != undefined)
    {
        var mfc1 = JSON.parse(mfc.response)
        var mfc_names = Object.keys(mfc1[serv])
        var mfc_statistic = new Array()
        for (var t in mfc1[serv])
            mfc_statistic.push((mfc1[serv])[t])
    }
    doGraphs(month_statistic, mfc_names, mfc_statistic, serv)
}

function doGraphs(month_statistic, mfc_names, mfc_statistic, serv)
{
    var ind = new XMLHttpRequest();
    ind.open('GET', 'https://raw.githubusercontent.com/AnnchenK/Storage/master/AvScoresOfIndex.json', false)
    ind.send();

    var index_names = ['Время предоставления государственной услуги', 'Время ожидания в очереди', 'Вежливость и компетентность сотрудника', 'Комфортность условий в помещении', 'Доступность информации о порядке предоставления государственной услуги', 'Доступность информации о порядке предоставления государственной услуги в электронном виде', 'Время ожидания ответа на подачу заявления', 'Удобство процедур предоставления государственной услуги', 'Процент комментариев с ответом', 'Средний рейтинг удовлетворенности по услуге']
    var statis_names = ['Количество оценок по услуге', 'Количество комментариев со средним 5.0', 'Число оценок: Время предоставления государственной услуги', 'Число оценок: Время ожидания в очереди', 'Число оценок: Вежливость и компетентность сотрудника', 'Число оценок: Комфортность условий в помещении', 'Число оценок: Доступность информации о порядке предоставления государственной услуги', 'Число оценок: Доступность информации о порядке предоставления государственной услуги в электронном виде', 'Число оценок: Время ожидания ответа на подачу заявления', 'Число оценок: Удобство процедур предоставления государственной услуги']

    var index = new Array()
    var statis = new Array()

    var ind1 = JSON.parse(ind.response)[serv]

    for (var t in index_names)
        if (ind1[(index_names[t])] != undefined)
            index.push(ind1[(index_names[t])])
        else
            index.push(0)

    for (var t in statis_names)
        if (ind1[(statis_names[t])] != undefined)
            statis.push(ind1[(statis_names[t])])
        else
            statis.push(0)

    if (chart1 != undefined)
    {
        document.getElementById('chart1').remove()
        var x = document.createElement('canvas')
        x.id = 'chart1'
        x.setAttribute('role', 'img')
        document.getElementById('graph1').appendChild(x)
    }
    var ctx1 = document.getElementById('chart1').getContext('2d');

    chart1 = new Chart(ctx1, {
        type: 'bar',
        data: {
            labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
            datasets: [{
                        data: index
            }]
        },
        options: {
            legend: {
                display: false
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Средние оценки'
                    }
                }],
                xAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Категории'
                    }
                }]
            }
        }
    });

    if (chart2 != undefined)
    {
        document.getElementById('chart2').remove()
        var x = document.createElement('canvas')
        x.id = 'chart2'
        x.setAttribute('role', 'img')
        document.getElementById('graph2').appendChild(x)
    }
    var ctx2 = document.getElementById('chart2').getContext('2d');

    chart2 = new Chart(ctx2, {
        type: 'bar',
        data: {
            labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
            datasets: [{
                data: statis
            }]
        },
        options: {
            legend: {
                display: false
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Количество оценок'
                    }
                }],
                xAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Категории'
                    }
                }]
            }
        }
    });

    if (chart1 != undefined)
    {
        document.getElementById('chart3').remove()
        var x = document.createElement('canvas')
        x.id = 'chart3'
        x.setAttribute('role', 'img')
        document.getElementById('graph3').appendChild(x)
    }
    var ctx3 = document.getElementById('chart3').getContext('2d');

    chart3 = new Chart(ctx3, {
        type: 'line',
        data: {
            labels: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Августь', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
            datasets: [{
                data: month_statistic
            }]
        },
        options: {
            legend: false,
            scales: {
                yAxes: [{
                    stacked: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Число сообщений'
                    }
                }],
                xAxes: [{
                    stacked: true,
                    position: 'bottom',
                    scaleLabel: {
                        display: true,
                        labelString: 'Месяц'
                    }
                }]
            }
        }
    })

    var desc1 = document.getElementById('desc1')
    for(var t in index_names)
    {
        var x = document.createElement('p')
        x.innerHTML = (Number(t) + Number(1)) + ' ' + index_names[t]
        desc1.appendChild(x)
    }
    desc1.style.overflowY = 'scroll'
    var desc2 = document.getElementById('desc2')
    for(var t in statis_names)
    {
        var x = document.createElement('p')
        x.innerHTML = (Number(t) + Number(1)) + ' ' + statis_names[t]
        desc2.appendChild(x)
    }
    desc2.style.overflowY = 'scroll'

    if (mfcUrl != undefined)
    {
        var mfcdiv = document.getElementById('mfcdiv')
        mfcdiv.innerHTML = ''
        var p1 = document.createElement('p')
        p1.innerHTML = 'Данные по МФЦ региона'
        p1.style.fontSize = '25px'
        var p2 = document.createElement('p')
        p2.innerHTML = 'Средний рейтинг ' + mfc_statistic[0]
        p2.style.fontSize = '20px'
        mfcdiv.appendChild(p1)
        mfcdiv.appendChild(p2)
        for(var t in mfc_names)
        {
            var x = document.createElement('p')
            x.innerHTML = mfc_names[t]
            mfcdiv.appendChild(x)
        }
        mfcdiv.style.overflowY = 'scroll'
    }
    else
    {
        var mfcdiv = document.getElementById('mfcdiv')
        mfcdiv.innerHTML = ''
        var p1 = document.createElement('p')
        p1.innerHTML = 'Нет данных по МФЦ региона'
        p1.style.fontSize = '25px'
        mfcdiv.appendChild(p1)        
    }
}

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function myFunction1() {
    document.getElementById("myDropdown1").classList.toggle("show");
}
  
function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
}

function filterFunction1() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput1");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown1");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
}