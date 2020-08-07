
ymaps.ready(init);

function init(){
    var myMap = new ymaps.Map("map", {
	    center: [51.13534215544706, 71.40871289967193], // Астана[51.13514640429517,71.41381982563632]
	    zoom: 14,
      controls: ['zoomcontrol']
    });

    var myMainIcon = new ymaps.Placemark([51.13549, 71.418542], {}, {
	    iconLayout: 'default#image',
	    iconImageHref: 'https://uploads-ssl.webflow.com/5f1e897ab5a619ea278df9f6/5f2a6060669e3160a089f6b5_map-icon-atlant.svg',
	    iconImageSize: [94, 120],
	    // iconImageOffset: [-3, -42]
	});

    // Коллекции

    funCollection = new ymaps.GeoObjectCollection(null, {
        preset: 'islands#yellowIcon',
        iconLayout: 'default#image',
        iconImageHref: 'https://uploads-ssl.webflow.com/5f1e897ab5a619ea278df9f6/5f2a60605bde4446d8d70dd5_map-icon-fun.svg',
        iconImageSize: [52, 52],
    })

    eduCollection = new ymaps.GeoObjectCollection(null, {
        preset: 'islands#blueIcon',
        iconLayout: 'default#image',
        iconImageHref: 'https://uploads-ssl.webflow.com/5f1e897ab5a619ea278df9f6/5f2a605f219253332a88a493_map-point-study.svg',
        iconImageSize: [52, 52],
    })

    habCollection = new ymaps.GeoObjectCollection(null, {
        preset: 'islands#blueIcon',
        iconLayout: 'default#image',
        iconImageHref: 'https://uploads-ssl.webflow.com/5f1e897ab5a619ea278df9f6/5f2a605f219253332a88a493_map-point-study.svg',
        iconImageSize: [52, 52],
    })

    diffCollection = new ymaps.GeoObjectCollection(null, {
        preset: 'islands#blueIcon',
	    iconLayout: 'default#image',
	    iconImageHref: 'https://uploads-ssl.webflow.com/5f1e897ab5a619ea278df9f6/5f2a6060f5fb1662f96008f1_map-point-health.svg',
	    iconImageSize: [52, 52],
    })

    // Коллекции end

    myMap.geoObjects.add(myMainIcon);

    funCollection
        .add(new ymaps.Placemark([51.128586, 71.438297], {
            balloonContent: "WineBar"
        }))
        .add(new ymaps.Placemark([51.126561, 71.437121], {
            balloonContent: "Augustin"
        }))
        .add(new ymaps.Placemark([51.12634, 71.437502], {
            balloonContent: "Taikazan"
        }))
        .add(new ymaps.Placemark([51.128868, 71.432834], {
            balloonContent: "CapitalMP"
        }))
        .add(new ymaps.Placemark([51.128183, 71.422841], {
            balloonContent: "Shokoladnitsa"
        }))
        .add(new ymaps.Placemark([51.131244, 71.418083], {
            balloonContent: "Italiano"
        }))
        .add(new ymaps.Placemark([51.130614, 71.41348], {
            balloonContent: "Kishlak"
        }))
        .add(new ymaps.Placemark([51.130614, 71.41348], {
            balloonContent: "Traditional"
        }))
        .add(new ymaps.Placemark([51.130614, 71.41348], {
            balloonContent: "Kishlak"
        }))
        .add(new ymaps.Placemark([51.138668, 71.408335], {
            balloonContent: "Traditional"
        }))
        .add(new ymaps.Placemark([51.09198, 71.423884], {
            balloonContent: "funAbbaXxl"
        }))
        .add(new ymaps.Placemark([51.139583, 71.408644], {
            balloonContent: "Мельница"
        }))
        .add(new ymaps.Placemark([51.140232, 71.409063], {
            balloonContent: "Алаша"
        }))
        .add(new ymaps.Placemark([51.140607, 71.409227], {
            balloonContent: "Портофино"
        }))
        .add(new ymaps.Placemark([51.140607, 71.409227], {
            balloonContent: "Портофино"
        }))
        .add(new ymaps.Placemark([51.141332, 71.409516], {
            balloonContent: "Багратиони"
        }))
        .add(new ymaps.Placemark([51.141247, 71.41136], {
            balloonContent: "'Перчини' Grill wine"
        }))
        .add(new ymaps.Placemark([51.141247, 71.41136], {
            balloonContent: "'Перчини' Grill wine"
        }))
        .add(new ymaps.Placemark([51.141695, 71.41079], {
            balloonContent: "MAMMA MIA"
        }))
        .add(new ymaps.Placemark([51.141883, 71.409798], {
            balloonContent: "Korean House"
        }))
        .add(new ymaps.Placemark([51.143089, 71.410169], {
            balloonContent: "Аccord, Zoloto. Restaurant & Karaoke"
        }))
        .add(new ymaps.Placemark([51.143089, 71.410169], {
            balloonContent: "Аccord, Zoloto. Restaurant & Karaoke"
        }))
        .add(new ymaps.Placemark([51.108210, 71.418320], {
            balloonContent: "Ботанический сад"
        }))
        .add(new ymaps.Placemark([51.124236, 71.457414], {
            balloonContent: "Президентский парк"
        }))
        .add(new ymaps.Placemark([51.131584, 71.456966], {
            balloonContent: "Парк Бауыржан Момышулы"
        }))
        .add(new ymaps.Placemark([51.131584, 71.456966], {
            balloonContent: "Парк Бауыржан Момышулы"
        }))
        .add(new ymaps.Placemark([51.134637, 71.439933], {
            balloonContent: "Парк Арай"
        }))
        .add(new ymaps.Placemark([51.1347, 71.436376], {
            balloonContent: "Парк «Жетысу»"
        }))
        .add(new ymaps.Placemark([51.127585, 71.435147], {
            balloonContent: "Поющий фонтан"
        }))
        .add(new ymaps.Placemark([51.129185, 71.424201], {
            balloonContent: "бульвар Нуржол"
        }))
        .add(new ymaps.Placemark([51.12994, 71.40996], {
            balloonContent: "Парк «Ғашықтар»"
        }))
        .add(new ymaps.Placemark([51.131765, 71.408787], {
            balloonContent: "Парк влюбленных"
        }))
        .add(new ymaps.Placemark([51.15764, 71.42045], {
            balloonContent: "Центральный парк"
        }))
        .add(new ymaps.Placemark([51.145495, 71.489338], {
            balloonContent: "Парк «Жерұйық»"
        }))
        .add(new ymaps.Placemark([51.12874, 71.430545], {
            balloonContent: "Байтерек"
        }))
        .add(new ymaps.Placemark([51.12874, 71.430545], {
            balloonContent: "Байтерек"
        }))
        .add(new ymaps.Placemark([51.129167, 71.424247], {
            balloonContent: "Бульвар Нуржол"
        }))
        .add(new ymaps.Placemark([51.132569, 71.405716], {
            balloonContent: "ТРЦ Хан Шатыр"
        }))
        .add(new ymaps.Placemark([51.134616, 71.410047], {
            balloonContent: "Астана Опера"
        }))
        .add(new ymaps.Placemark([51.138663, 71.409617], {
            balloonContent: "ТРЦ Сарыарка"
        }))
        .add(new ymaps.Placemark([51.145316, 71.419376], {
            balloonContent: "Столичный цирк"
        }))
        .add(new ymaps.Placemark([51.159045, 71.420222], {
            balloonContent: "Столичный парк культуры и отдыха"
        }))
        .add(new ymaps.Placemark([51.089439, 71.403915], {
            balloonContent: "ТРЦ Mega Silk Way"
        }))
        .add(new ymaps.Placemark([51.088579, 71.417393], {
            balloonContent: "Экспо-2017"
        }))
        .add(new ymaps.Placemark([51.131958, 71.427744], {
            balloonContent: "Боулинг"
        }))
        .add(new ymaps.Placemark([51.158125, 71.421524], {
            balloonContent: "Картинг-клуб KartMax"
        }))
        .add(new ymaps.Placemark([51.147449, 71.416055], {
            balloonContent: "Центр семейного отдыха Ailand"
        }))
        .add(new ymaps.Placemark([51.157183, 71.420332], {
            balloonContent: "Веревочный парк «Гамми»"
        }))

        ;


    eduCollection
        .add(new ymaps.Placemark([51.117281, 71.431201], {
            balloonContent: "Детский сад №75"
        }))
        .add(new ymaps.Placemark([51.141189, 71.391494], {
            balloonContent: "Детский сад №89"
        }))
        .add(new ymaps.Placemark([51.110692, 71.428553], {
            balloonContent: "Детский сад №78 Асыл"
        }))
        .add(new ymaps.Placemark([51.14358, 71.387669], {
            balloonContent: "Детский сад №88"
        }))
        .add(new ymaps.Placemark([51.143618, 71.39372], {
            balloonContent: "Детский сад №53"
        }))
        .add(new ymaps.Placemark([51.145145, 71.402698], {
            balloonContent: "Детский сад № 63"
        }))
        .add(new ymaps.Placemark([51.131767, 71.434429], {
            balloonContent: "Школа-лицей №66"
        }))
        .add(new ymaps.Placemark([51.142496, 71.415768], {
            balloonContent: "Школа-гимназия №17"
        }))
        .add(new ymaps.Placemark([51.097665, 71.418877], {
            balloonContent: "Академия хореографии"
        }))
        .add(new ymaps.Placemark([51.097973, 71.423435], {
            balloonContent: "Международная школа"
        }))
        .add(new ymaps.Placemark([51.099414, 71.414075], {
            balloonContent: "Школа-лицей №84"
        }))
        .add(new ymaps.Placemark([51.098551, 71.41561], {
            balloonContent: "Sheikh khalifa bin zayed school"
        }))
        .add(new ymaps.Placemark([51.089928, 71.401003], {
            balloonContent: "Назарбаев Университет"
        }))

        ;


    habCollection
        .add(new ymaps.Placemark([51.142437, 71.412958], {
            balloonContent: "Салон красоты Art&beauty"
        }))
        .add(new ymaps.Placemark([51.141486, 71.410677], {
            balloonContent: "Салон красоты Gaziza"
        }))
        .add(new ymaps.Placemark([51.136645, 71.41772], {
            balloonContent: "Клуб здоровья и красоты Grand Prix"
        }))
        .add(new ymaps.Placemark([51.135824, 71.422368], {
            balloonContent: "Салон красоты Цирюльник"
        }))
        .add(new ymaps.Placemark([51.133985, 71.421919], {
            balloonContent: "Аджана СПА"
        }))
        .add(new ymaps.Placemark([51.141845, 71.446052], {
            balloonContent: "OldBoy Миланский, барбершоп"
        }))
        .add(new ymaps.Placemark([51.129036, 71.41711], {
            balloonContent: "Салон красоты Selfie Love"
        }))
        .add(new ymaps.Placemark([51.126595, 71.41216], {
            balloonContent: "Детский кардио-хирургический центр"
        }))
        .add(new ymaps.Placemark([51.124914, 71.405049], {
            balloonContent: "Нац. Научный Центр Материнства и Детства РК"
        }))
        .add(new ymaps.Placemark([51.121734, 71.408572], {
            balloonContent: "Национальный Центр Нейрохирургии"
        }))
        .add(new ymaps.Placemark([51.120643, 71.403099], {
            balloonContent: "Республиканский детский РЦ"
        }))
        .add(new ymaps.Placemark([51.118745, 71.40257], {
            balloonContent: "Нац. Научный Кардио-Хирургический Центр"
        }))
        .add(new ymaps.Placemark([51.117492, 71.406823], {
            balloonContent: "Нац. Научный Центр Онкологии и Трасплантологии"
        }))
        .add(new ymaps.Placemark([51.092682, 71.425373], {
            balloonContent: "Аптека Europharma"
        }))
        .add(new ymaps.Placemark([51.083686, 71.401696], {
            balloonContent: "Центральный госпиталь МВД"
        }))
        .add(new ymaps.Placemark([51.082163, 71.411371], {
            balloonContent: "Учебно-клинический центр"
        }))
        .add(new ymaps.Placemark([51.083435, 71.419879], {
            balloonContent: "Детская инфекционная больница №2"
        }))
        .add(new ymaps.Placemark([51.075751, 71.426786], {
            balloonContent: "Медицинский центр"
        }))
        ;

    diffCollection
        .add(new ymaps.Placemark([51.147493, 71.459766], {
            balloonContent: "Банк Центр-Кредит"
        }))
        .add(new ymaps.Placemark([51.145266, 71.406556], {
            balloonContent: "Бизнес-центр SMART"
        }))
        .add(new ymaps.Placemark([51.140476, 71.412876], {
            balloonContent: "Бизнес-центр Buro Haus"
        }))
        .add(new ymaps.Placemark([51.137039, 71.414714], {
            balloonContent: "Альфа-Банк"
        }))
        .add(new ymaps.Placemark([51.136256, 71.414298], {
            balloonContent: "Бизнес-центр Q"
        }))
        .add(new ymaps.Placemark([51.135434, 71.424711], {
            balloonContent: "ЦеснаБанк"
        }))
        .add(new ymaps.Placemark([51.13127, 71.423857], {
            balloonContent: "Сбербанк"
        }))
        .add(new ymaps.Placemark([51.131985, 71.415642], {
            balloonContent: "Евразийский банк"
        }))
        .add(new ymaps.Placemark([51.130843, 71.414998], {
            balloonContent: "Halyk Bank"
        }))
        .add(new ymaps.Placemark([51.130937, 71.417861], {
            balloonContent: "Бизнес-центр «Кубик»"
        }))
        .add(new ymaps.Placemark([51.129155, 71.414783], {
            balloonContent: "Казкоммерцбанк"
        }))
        .add(new ymaps.Placemark([51.130084, 71.416279], {
            balloonContent: "Citibank Kazakhstan"
        }))
        .add(new ymaps.Placemark([51.128741, 71.406863], {
            balloonContent: "Бизнес-центр SAAD"
        }))
        .add(new ymaps.Placemark([51.126418, 71.417895], {
            balloonContent: "Forte Bank"
        }))
        .add(new ymaps.Placemark([51.125696, 71.423051], {
            balloonContent: "Банк Астаны"
        }))
        .add(new ymaps.Placemark([51.124043, 71.421194], {
            balloonContent: "Kaspi Bank"
        }))
        .add(new ymaps.Placemark([51.093275, 71.425414], {
            balloonContent: "Maxi Market"
        }))
        .add(new ymaps.Placemark([51.093818, 71.425661], {
            balloonContent: "Беккер и К"
        }))
        .add(new ymaps.Placemark([51.094081, 71.424298], {
            balloonContent: "Broccoli"
        }))
        .add(new ymaps.Placemark([51.127607, 71.407501], {
            balloonContent: "Festival Avenue"
        }))
        .add(new ymaps.Placemark([51.128421, 71.40833], {
            balloonContent: "ТЦ Festival Avenue"
        }))
        .add(new ymaps.Placemark([51.128344, 71.412336], {
            balloonContent: "ТРЦ Азия Парк"
        }))
        .add(new ymaps.Placemark([51.128399, 71.425583], {
            balloonContent: "ТРЦ Керуен"
        }))
        .add(new ymaps.Placemark([51.127013, 71.416308], {
            balloonContent: "Мечеть Нур-Астана"
        }))
        .add(new ymaps.Placemark([51.12609, 71.4733], {
            balloonContent: "Мечеть Хазрет Султан"
        }))
        .add(new ymaps.Placemark([51.12609, 71.4733], {
            balloonContent: "Fitness Palace"
        }))
        .add(new ymaps.Placemark([51.11456, 71.41011], {
            balloonContent: "Дворец единоборств"
        }))
        .add(new ymaps.Placemark([51.109946, 71.408241], {
            balloonContent: "Спорткомплекс Сарыарка"
        }))
        .add(new ymaps.Placemark([51.107508, 71.403719], {
            balloonContent: "Астана Арена"
        }))
        .add(new ymaps.Placemark([51.108734, 71.396401], {
            balloonContent: "Стадион Барыс Арена"
        }))
        .add(new ymaps.Placemark([51.10396, 71.40545], {
            balloonContent: "Ледовый дворец Алау"
        }))
        ;

    let lengthFun = funCollection._collectionComponent._baseArrayComponent._children.length;
    let lengthEdu = eduCollection._collectionComponent._baseArrayComponent._children.length;
    let lengthHab = habCollection._collectionComponent._baseArrayComponent._children.length;
    let lengthDiff = diffCollection._collectionComponent._baseArrayComponent._children.length;

    funHtmlEl = document.getElementById("count-other");
    eduHtmlEl = document.getElementById("count-health");
    habHtmlEl = document.getElementById("count-edu");
    diffHtmlEl = document.getElementById("count-fun");

    funHtmlEl.innerHTML = lengthFun;
    eduHtmlEl.innerHTML = lengthEdu;
    habHtmlEl.innerHTML = lengthHab;
    diffHtmlEl.innerHTML = lengthDiff;

    myMap.geoObjects.add(funCollection).add(eduCollection).add(habCollection).add(diffCollection);


    document.getElementById('fun').onclick = function () {
    	myMap.geoObjects.add(funCollection).remove(eduCollection).remove(habCollection).remove(diffCollection);
    };

    document.getElementById('edu').onclick = function () {
    	myMap.geoObjects.remove(funCollection).add(eduCollection).remove(habCollection).remove(diffCollection);
    };

    document.getElementById('hab').onclick = function () {
	    myMap.geoObjects.remove(funCollection).remove(eduCollection).add(habCollection).remove(diffCollection);
    };

    document.getElementById('diff').onclick = function () {
    	myMap.geoObjects.remove(funCollection).remove(eduCollection).remove(habCollection).add(diffCollection);
    };




}
