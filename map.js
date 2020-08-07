
ymaps.ready(init);

function init(){
    var myMap = new ymaps.Map("map", {
	    center: [51.134748, 
ymaps.ready(init);

function init(){
    var myMap = new ymaps.Map("map", {
	    center: [51.13534215544706, 71.40871289967193], // РђСЃС‚Р°РЅР°
	    zoom: 14,
        controls: ['zoomControl']
    });

    var myMainIcon = new ymaps.Placemark([51.13549, 71.418542], {}, {
	    iconLayout: 'default#image',
	    iconImageHref: 'https://uploads-ssl.webflow.com/5f1e897ab5a619ea278df9f6/5f2a6060669e3160a089f6b5_map-icon-atlant.svg',
	    iconImageSize: [94, 120],
	    // iconImageOffset: [-3, -42]
	});

    // РљРѕР»Р»РµРєС†РёРё

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

    // РљРѕР»Р»РµРєС†РёРё end

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
            balloonContent: "РњРµР»СЊРЅРёС†Р°"
        }))
        .add(new ymaps.Placemark([51.140232, 71.409063], {
            balloonContent: "РђР»Р°С€Р°"
        }))
        .add(new ymaps.Placemark([51.140607, 71.409227], {
            balloonContent: "РџРѕСЂС‚РѕС„РёРЅРѕ"
        }))
        .add(new ymaps.Placemark([51.140607, 71.409227], {
            balloonContent: "РџРѕСЂС‚РѕС„РёРЅРѕ"
        }))
        .add(new ymaps.Placemark([51.141332, 71.409516], {
            balloonContent: "Р‘Р°РіСЂР°С‚РёРѕРЅРё"
        }))
        .add(new ymaps.Placemark([51.141247, 71.41136], {
            balloonContent: "'РџРµСЂС‡РёРЅРё' Grill wine"
        }))
        .add(new ymaps.Placemark([51.141247, 71.41136], {
            balloonContent: "'РџРµСЂС‡РёРЅРё' Grill wine"
        }))
        .add(new ymaps.Placemark([51.141695, 71.41079], {
            balloonContent: "MAMMA MIA"
        }))
        .add(new ymaps.Placemark([51.141883, 71.409798], {
            balloonContent: "Korean House"
        }))
        .add(new ymaps.Placemark([51.143089, 71.410169], {
            balloonContent: "Рђccord, Zoloto. Restaurant & Karaoke"
        }))
        .add(new ymaps.Placemark([51.143089, 71.410169], {
            balloonContent: "Рђccord, Zoloto. Restaurant & Karaoke"
        }))
        .add(new ymaps.Placemark([51.108210, 71.418320], {
            balloonContent: "Р‘РѕС‚Р°РЅРёС‡РµСЃРєРёР№ СЃР°Рґ"
        }))
        .add(new ymaps.Placemark([51.124236, 71.457414], {
            balloonContent: "РџСЂРµР·РёРґРµРЅС‚СЃРєРёР№ РїР°СЂРє"
        }))
        .add(new ymaps.Placemark([51.131584, 71.456966], {
            balloonContent: "РџР°СЂРє Р‘Р°СѓС‹СЂР¶Р°РЅ РњРѕРјС‹С€СѓР»С‹"
        }))
        .add(new ymaps.Placemark([51.131584, 71.456966], {
            balloonContent: "РџР°СЂРє Р‘Р°СѓС‹СЂР¶Р°РЅ РњРѕРјС‹С€СѓР»С‹"
        }))
        .add(new ymaps.Placemark([51.134637, 71.439933], {
            balloonContent: "РџР°СЂРє РђСЂР°Р№"
        }))
        .add(new ymaps.Placemark([51.1347, 71.436376], {
            balloonContent: "РџР°СЂРє В«Р–РµС‚С‹СЃСѓВ»"
        }))
        .add(new ymaps.Placemark([51.127585, 71.435147], {
            balloonContent: "РџРѕСЋС‰РёР№ С„РѕРЅС‚Р°РЅ"
        }))
        .add(new ymaps.Placemark([51.129185, 71.424201], {
            balloonContent: "Р±СѓР»СЊРІР°СЂ РќСѓСЂР¶РѕР»"
        }))
        .add(new ymaps.Placemark([51.12994, 71.40996], {
            balloonContent: "РџР°СЂРє В«Т’Р°С€С‹Т›С‚Р°СЂВ»"
        }))
        .add(new ymaps.Placemark([51.131765, 71.408787], {
            balloonContent: "РџР°СЂРє РІР»СЋР±Р»РµРЅРЅС‹С…"
        }))
        .add(new ymaps.Placemark([51.15764, 71.42045], {
            balloonContent: "Р¦РµРЅС‚СЂР°Р»СЊРЅС‹Р№ РїР°СЂРє"
        }))
        .add(new ymaps.Placemark([51.145495, 71.489338], {
            balloonContent: "РџР°СЂРє В«Р–РµСЂТ±Р№С‹Т›В»"
        }))
        .add(new ymaps.Placemark([51.12874, 71.430545], {
            balloonContent: "Р‘Р°Р№С‚РµСЂРµРє"
        }))
        .add(new ymaps.Placemark([51.12874, 71.430545], {
            balloonContent: "Р‘Р°Р№С‚РµСЂРµРє"
        }))
        .add(new ymaps.Placemark([51.129167, 71.424247], {
            balloonContent: "Р‘СѓР»СЊРІР°СЂ РќСѓСЂР¶РѕР»"
        }))
        .add(new ymaps.Placemark([51.132569, 71.405716], {
            balloonContent: "РўР Р¦ РҐР°РЅ РЁР°С‚С‹СЂ"
        }))
        .add(new ymaps.Placemark([51.134616, 71.410047], {
            balloonContent: "РђСЃС‚Р°РЅР° РћРїРµСЂР°"
        }))
        .add(new ymaps.Placemark([51.138663, 71.409617], {
            balloonContent: "РўР Р¦ РЎР°СЂС‹Р°СЂРєР°"
        }))
        .add(new ymaps.Placemark([51.145316, 71.419376], {
            balloonContent: "РЎС‚РѕР»РёС‡РЅС‹Р№ С†РёСЂРє"
        }))
        .add(new ymaps.Placemark([51.159045, 71.420222], {
            balloonContent: "РЎС‚РѕР»РёС‡РЅС‹Р№ РїР°СЂРє РєСѓР»СЊС‚СѓСЂС‹ Рё РѕС‚РґС‹С…Р°"
        }))
        .add(new ymaps.Placemark([51.089439, 71.403915], {
            balloonContent: "РўР Р¦ Mega Silk Way"
        }))
        .add(new ymaps.Placemark([51.088579, 71.417393], {
            balloonContent: "Р­РєСЃРїРѕ-2017"
        }))
        .add(new ymaps.Placemark([51.131958, 71.427744], {
            balloonContent: "Р‘РѕСѓР»РёРЅРі"
        }))
        .add(new ymaps.Placemark([51.158125, 71.421524], {
            balloonContent: "РљР°СЂС‚РёРЅРі-РєР»СѓР± KartMax"
        }))
        .add(new ymaps.Placemark([51.147449, 71.416055], {
            balloonContent: "Р¦РµРЅС‚СЂ СЃРµРјРµР№РЅРѕРіРѕ РѕС‚РґС‹С…Р° Ailand"
        }))
        .add(new ymaps.Placemark([51.157183, 71.420332], {
            balloonContent: "Р’РµСЂРµРІРѕС‡РЅС‹Р№ РїР°СЂРє В«Р“Р°РјРјРёВ»"
        }))

        ;


    eduCollection
        .add(new ymaps.Placemark([51.117281, 71.431201], {
            balloonContent: "Р”РµС‚СЃРєРёР№ СЃР°Рґ в„–75"
        }))
        .add(new ymaps.Placemark([51.141189, 71.391494], {
            balloonContent: "Р”РµС‚СЃРєРёР№ СЃР°Рґ в„–89"
        }))
        .add(new ymaps.Placemark([51.110692, 71.428553], {
            balloonContent: "Р”РµС‚СЃРєРёР№ СЃР°Рґ в„–78 РђСЃС‹Р»"
        }))
        .add(new ymaps.Placemark([51.14358, 71.387669], {
            balloonContent: "Р”РµС‚СЃРєРёР№ СЃР°Рґ в„–88"
        }))
        .add(new ymaps.Placemark([51.143618, 71.39372], {
            balloonContent: "Р”РµС‚СЃРєРёР№ СЃР°Рґ в„–53"
        }))
        .add(new ymaps.Placemark([51.145145, 71.402698], {
            balloonContent: "Р”РµС‚СЃРєРёР№ СЃР°Рґ в„– 63"
        }))
        .add(new ymaps.Placemark([51.131767, 71.434429], {
            balloonContent: "РЁРєРѕР»Р°-Р»РёС†РµР№ в„–66"
        }))
        .add(new ymaps.Placemark([51.142496, 71.415768], {
            balloonContent: "РЁРєРѕР»Р°-РіРёРјРЅР°Р·РёСЏ в„–17"
        }))
        .add(new ymaps.Placemark([51.097665, 71.418877], {
            balloonContent: "РђРєР°РґРµРјРёСЏ С…РѕСЂРµРѕРіСЂР°С„РёРё"
        }))
        .add(new ymaps.Placemark([51.097973, 71.423435], {
            balloonContent: "РњРµР¶РґСѓРЅР°СЂРѕРґРЅР°СЏ С€РєРѕР»Р°"
        }))
        .add(new ymaps.Placemark([51.099414, 71.414075], {
            balloonContent: "РЁРєРѕР»Р°-Р»РёС†РµР№ в„–84"
        }))
        .add(new ymaps.Placemark([51.098551, 71.41561], {
            balloonContent: "Sheikh khalifa bin zayed school"
        }))
        .add(new ymaps.Placemark([51.089928, 71.401003], {
            balloonContent: "РќР°Р·Р°СЂР±Р°РµРІ РЈРЅРёРІРµСЂСЃРёС‚РµС‚"
        }))

        ;


    habCollection
        .add(new ymaps.Placemark([51.142437, 71.412958], {
            balloonContent: "РЎР°Р»РѕРЅ РєСЂР°СЃРѕС‚С‹ Art&beauty"
        }))
        .add(new ymaps.Placemark([51.141486, 71.410677], {
            balloonContent: "РЎР°Р»РѕРЅ РєСЂР°СЃРѕС‚С‹ Gaziza"
        }))
        .add(new ymaps.Placemark([51.136645, 71.41772], {
            balloonContent: "РљР»СѓР± Р·РґРѕСЂРѕРІСЊСЏ Рё РєСЂР°СЃРѕС‚С‹ Grand Prix"
        }))
        .add(new ymaps.Placemark([51.135824, 71.422368], {
            balloonContent: "РЎР°Р»РѕРЅ РєСЂР°СЃРѕС‚С‹ Р¦РёСЂСЋР»СЊРЅРёРє"
        }))
        .add(new ymaps.Placemark([51.133985, 71.421919], {
            balloonContent: "РђРґР¶Р°РЅР° РЎРџРђ"
        }))
        .add(new ymaps.Placemark([51.141845, 71.446052], {
            balloonContent: "OldBoy РњРёР»Р°РЅСЃРєРёР№, Р±Р°СЂР±РµСЂС€РѕРї"
        }))
        .add(new ymaps.Placemark([51.129036, 71.41711], {
            balloonContent: "РЎР°Р»РѕРЅ РєСЂР°СЃРѕС‚С‹ Selfie Love"
        }))
        .add(new ymaps.Placemark([51.126595, 71.41216], {
            balloonContent: "Р”РµС‚СЃРєРёР№ РєР°СЂРґРёРѕ-С…РёСЂСѓСЂРіРёС‡РµСЃРєРёР№ С†РµРЅС‚СЂ"
        }))
        .add(new ymaps.Placemark([51.124914, 71.405049], {
            balloonContent: "РќР°С†. РќР°СѓС‡РЅС‹Р№ Р¦РµРЅС‚СЂ РњР°С‚РµСЂРёРЅСЃС‚РІР° Рё Р”РµС‚СЃС‚РІР° Р Рљ"
        }))
        .add(new ymaps.Placemark([51.121734, 71.408572], {
            balloonContent: "РќР°С†РёРѕРЅР°Р»СЊРЅС‹Р№ Р¦РµРЅС‚СЂ РќРµР№СЂРѕС…РёСЂСѓСЂРіРёРё"
        }))
        .add(new ymaps.Placemark([51.120643, 71.403099], {
            balloonContent: "Р РµСЃРїСѓР±Р»РёРєР°РЅСЃРєРёР№ РґРµС‚СЃРєРёР№ Р Р¦"
        }))
        .add(new ymaps.Placemark([51.118745, 71.40257], {
            balloonContent: "РќР°С†. РќР°СѓС‡РЅС‹Р№ РљР°СЂРґРёРѕ-РҐРёСЂСѓСЂРіРёС‡РµСЃРєРёР№ Р¦РµРЅС‚СЂ"
        }))
        .add(new ymaps.Placemark([51.117492, 71.406823], {
            balloonContent: "РќР°С†. РќР°СѓС‡РЅС‹Р№ Р¦РµРЅС‚СЂ РћРЅРєРѕР»РѕРіРёРё Рё РўСЂР°СЃРїР»Р°РЅС‚РѕР»РѕРіРёРё"
        }))
        .add(new ymaps.Placemark([51.092682, 71.425373], {
            balloonContent: "РђРїС‚РµРєР° Europharma"
        }))
        .add(new ymaps.Placemark([51.083686, 71.401696], {
            balloonContent: "Р¦РµРЅС‚СЂР°Р»СЊРЅС‹Р№ РіРѕСЃРїРёС‚Р°Р»СЊ РњР’Р”"
        }))
        .add(new ymaps.Placemark([51.082163, 71.411371], {
            balloonContent: "РЈС‡РµР±РЅРѕ-РєР»РёРЅРёС‡РµСЃРєРёР№ С†РµРЅС‚СЂ"
        }))
        .add(new ymaps.Placemark([51.083435, 71.419879], {
            balloonContent: "Р”РµС‚СЃРєР°СЏ РёРЅС„РµРєС†РёРѕРЅРЅР°СЏ Р±РѕР»СЊРЅРёС†Р° в„–2"
        }))
        .add(new ymaps.Placemark([51.075751, 71.426786], {
            balloonContent: "РњРµРґРёС†РёРЅСЃРєРёР№ С†РµРЅС‚СЂ"
        }))
        ;

    diffCollection
        .add(new ymaps.Placemark([51.147493, 71.459766], {
            balloonContent: "Р‘Р°РЅРє Р¦РµРЅС‚СЂ-РљСЂРµРґРёС‚"
        }))
        .add(new ymaps.Placemark([51.145266, 71.406556], {
            balloonContent: "Р‘РёР·РЅРµСЃ-С†РµРЅС‚СЂ SMART"
        }))
        .add(new ymaps.Placemark([51.140476, 71.412876], {
            balloonContent: "Р‘РёР·РЅРµСЃ-С†РµРЅС‚СЂ Buro Haus"
        }))
        .add(new ymaps.Placemark([51.137039, 71.414714], {
            balloonContent: "РђР»СЊС„Р°-Р‘Р°РЅРє"
        }))
        .add(new ymaps.Placemark([51.136256, 71.414298], {
            balloonContent: "Р‘РёР·РЅРµСЃ-С†РµРЅС‚СЂ Q"
        }))
        .add(new ymaps.Placemark([51.135434, 71.424711], {
            balloonContent: "Р¦РµСЃРЅР°Р‘Р°РЅРє"
        }))
        .add(new ymaps.Placemark([51.13127, 71.423857], {
            balloonContent: "РЎР±РµСЂР±Р°РЅРє"
        }))
        .add(new ymaps.Placemark([51.131985, 71.415642], {
            balloonContent: "Р•РІСЂР°Р·РёР№СЃРєРёР№ Р±Р°РЅРє"
        }))
        .add(new ymaps.Placemark([51.130843, 71.414998], {
            balloonContent: "Halyk Bank"
        }))
        .add(new ymaps.Placemark([51.130937, 71.417861], {
            balloonContent: "Р‘РёР·РЅРµСЃ-С†РµРЅС‚СЂ В«РљСѓР±РёРєВ»"
        }))
        .add(new ymaps.Placemark([51.129155, 71.414783], {
            balloonContent: "РљР°Р·РєРѕРјРјРµСЂС†Р±Р°РЅРє"
        }))
        .add(new ymaps.Placemark([51.130084, 71.416279], {
            balloonContent: "Citibank Kazakhstan"
        }))
        .add(new ymaps.Placemark([51.128741, 71.406863], {
            balloonContent: "Р‘РёР·РЅРµСЃ-С†РµРЅС‚СЂ SAAD"
        }))
        .add(new ymaps.Placemark([51.126418, 71.417895], {
            balloonContent: "Forte Bank"
        }))
        .add(new ymaps.Placemark([51.125696, 71.423051], {
            balloonContent: "Р‘Р°РЅРє РђСЃС‚Р°РЅС‹"
        }))
        .add(new ymaps.Placemark([51.124043, 71.421194], {
            balloonContent: "Kaspi Bank"
        }))
        .add(new ymaps.Placemark([51.093275, 71.425414], {
            balloonContent: "Maxi Market"
        }))
        .add(new ymaps.Placemark([51.093818, 71.425661], {
            balloonContent: "Р‘РµРєРєРµСЂ Рё Рљ"
        }))
        .add(new ymaps.Placemark([51.094081, 71.424298], {
            balloonContent: "Broccoli"
        }))
        .add(new ymaps.Placemark([51.127607, 71.407501], {
            balloonContent: "Festival Avenue"
        }))
        .add(new ymaps.Placemark([51.128421, 71.40833], {
            balloonContent: "РўР¦ Festival Avenue"
        }))
        .add(new ymaps.Placemark([51.128344, 71.412336], {
            balloonContent: "РўР Р¦ РђР·РёСЏ РџР°СЂРє"
        }))
        .add(new ymaps.Placemark([51.128399, 71.425583], {
            balloonContent: "РўР Р¦ РљРµСЂСѓРµРЅ"
        }))
        .add(new ymaps.Placemark([51.127013, 71.416308], {
            balloonContent: "РњРµС‡РµС‚СЊ РќСѓСЂ-РђСЃС‚Р°РЅР°"
        }))
        .add(new ymaps.Placemark([51.12609, 71.4733], {
            balloonContent: "РњРµС‡РµС‚СЊ РҐР°Р·СЂРµС‚ РЎСѓР»С‚Р°РЅ"
        }))
        .add(new ymaps.Placemark([51.12609, 71.4733], {
            balloonContent: "Fitness Palace"
        }))
        .add(new ymaps.Placemark([51.11456, 71.41011], {
            balloonContent: "Р”РІРѕСЂРµС† РµРґРёРЅРѕР±РѕСЂСЃС‚РІ"
        }))
        .add(new ymaps.Placemark([51.109946, 71.408241], {
            balloonContent: "РЎРїРѕСЂС‚РєРѕРјРїР»РµРєСЃ РЎР°СЂС‹Р°СЂРєР°"
        }))
        .add(new ymaps.Placemark([51.107508, 71.403719], {
            balloonContent: "РђСЃС‚Р°РЅР° РђСЂРµРЅР°"
        }))
        .add(new ymaps.Placemark([51.108734, 71.396401], {
            balloonContent: "РЎС‚Р°РґРёРѕРЅ Р‘Р°СЂС‹СЃ РђСЂРµРЅР°"
        }))
        .add(new ymaps.Placemark([51.10396, 71.40545], {
            balloonContent: "Р›РµРґРѕРІС‹Р№ РґРІРѕСЂРµС† РђР»Р°Сѓ"
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




}], // РђСЃС‚Р°РЅР°
	    zoom: 14,
        controls: ['zoomControl']
    });

    var myMainIcon = new ymaps.Placemark([51.13549, 71.418542], {}, {
	    iconLayout: 'default#image',
	    iconImageHref: 'https://uploads-ssl.webflow.com/5f1e897ab5a619ea278df9f6/5f2a6060669e3160a089f6b5_map-icon-atlant.svg',
	    iconImageSize: [94, 120],
	    // iconImageOffset: [-3, -42]
	});

    // РљРѕР»Р»РµРєС†РёРё

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

    // РљРѕР»Р»РµРєС†РёРё end

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
            balloonContent: "РњРµР»СЊРЅРёС†Р°"
        }))
        .add(new ymaps.Placemark([51.140232, 71.409063], {
            balloonContent: "РђР»Р°С€Р°"
        }))
        .add(new ymaps.Placemark([51.140607, 71.409227], {
            balloonContent: "РџРѕСЂС‚РѕС„РёРЅРѕ"
        }))
        .add(new ymaps.Placemark([51.140607, 71.409227], {
            balloonContent: "РџРѕСЂС‚РѕС„РёРЅРѕ"
        }))
        .add(new ymaps.Placemark([51.141332, 71.409516], {
            balloonContent: "Р‘Р°РіСЂР°С‚РёРѕРЅРё"
        }))
        .add(new ymaps.Placemark([51.141247, 71.41136], {
            balloonContent: "'РџРµСЂС‡РёРЅРё' Grill wine"
        }))
        .add(new ymaps.Placemark([51.141247, 71.41136], {
            balloonContent: "'РџРµСЂС‡РёРЅРё' Grill wine"
        }))
        .add(new ymaps.Placemark([51.141695, 71.41079], {
            balloonContent: "MAMMA MIA"
        }))
        .add(new ymaps.Placemark([51.141883, 71.409798], {
            balloonContent: "Korean House"
        }))
        .add(new ymaps.Placemark([51.143089, 71.410169], {
            balloonContent: "Рђccord, Zoloto. Restaurant & Karaoke"
        }))
        .add(new ymaps.Placemark([51.143089, 71.410169], {
            balloonContent: "Рђccord, Zoloto. Restaurant & Karaoke"
        }))
        .add(new ymaps.Placemark([51.108210, 71.418320], {
            balloonContent: "Р‘РѕС‚Р°РЅРёС‡РµСЃРєРёР№ СЃР°Рґ"
        }))
        .add(new ymaps.Placemark([51.124236, 71.457414], {
            balloonContent: "РџСЂРµР·РёРґРµРЅС‚СЃРєРёР№ РїР°СЂРє"
        }))
        .add(new ymaps.Placemark([51.131584, 71.456966], {
            balloonContent: "РџР°СЂРє Р‘Р°СѓС‹СЂР¶Р°РЅ РњРѕРјС‹С€СѓР»С‹"
        }))
        .add(new ymaps.Placemark([51.131584, 71.456966], {
            balloonContent: "РџР°СЂРє Р‘Р°СѓС‹СЂР¶Р°РЅ РњРѕРјС‹С€СѓР»С‹"
        }))
        .add(new ymaps.Placemark([51.134637, 71.439933], {
            balloonContent: "РџР°СЂРє РђСЂР°Р№"
        }))
        .add(new ymaps.Placemark([51.1347, 71.436376], {
            balloonContent: "РџР°СЂРє В«Р–РµС‚С‹СЃСѓВ»"
        }))
        .add(new ymaps.Placemark([51.127585, 71.435147], {
            balloonContent: "РџРѕСЋС‰РёР№ С„РѕРЅС‚Р°РЅ"
        }))
        .add(new ymaps.Placemark([51.129185, 71.424201], {
            balloonContent: "Р±СѓР»СЊРІР°СЂ РќСѓСЂР¶РѕР»"
        }))
        .add(new ymaps.Placemark([51.12994, 71.40996], {
            balloonContent: "РџР°СЂРє В«Т’Р°С€С‹Т›С‚Р°СЂВ»"
        }))
        .add(new ymaps.Placemark([51.131765, 71.408787], {
            balloonContent: "РџР°СЂРє РІР»СЋР±Р»РµРЅРЅС‹С…"
        }))
        .add(new ymaps.Placemark([51.15764, 71.42045], {
            balloonContent: "Р¦РµРЅС‚СЂР°Р»СЊРЅС‹Р№ РїР°СЂРє"
        }))
        .add(new ymaps.Placemark([51.145495, 71.489338], {
            balloonContent: "РџР°СЂРє В«Р–РµСЂТ±Р№С‹Т›В»"
        }))
        .add(new ymaps.Placemark([51.12874, 71.430545], {
            balloonContent: "Р‘Р°Р№С‚РµСЂРµРє"
        }))
        .add(new ymaps.Placemark([51.12874, 71.430545], {
            balloonContent: "Р‘Р°Р№С‚РµСЂРµРє"
        }))
        .add(new ymaps.Placemark([51.129167, 71.424247], {
            balloonContent: "Р‘СѓР»СЊРІР°СЂ РќСѓСЂР¶РѕР»"
        }))
        .add(new ymaps.Placemark([51.132569, 71.405716], {
            balloonContent: "РўР Р¦ РҐР°РЅ РЁР°С‚С‹СЂ"
        }))
        .add(new ymaps.Placemark([51.134616, 71.410047], {
            balloonContent: "РђСЃС‚Р°РЅР° РћРїРµСЂР°"
        }))
        .add(new ymaps.Placemark([51.138663, 71.409617], {
            balloonContent: "РўР Р¦ РЎР°СЂС‹Р°СЂРєР°"
        }))
        .add(new ymaps.Placemark([51.145316, 71.419376], {
            balloonContent: "РЎС‚РѕР»РёС‡РЅС‹Р№ С†РёСЂРє"
        }))
        .add(new ymaps.Placemark([51.159045, 71.420222], {
            balloonContent: "РЎС‚РѕР»РёС‡РЅС‹Р№ РїР°СЂРє РєСѓР»СЊС‚СѓСЂС‹ Рё РѕС‚РґС‹С…Р°"
        }))
        .add(new ymaps.Placemark([51.089439, 71.403915], {
            balloonContent: "РўР Р¦ Mega Silk Way"
        }))
        .add(new ymaps.Placemark([51.088579, 71.417393], {
            balloonContent: "Р­РєСЃРїРѕ-2017"
        }))
        .add(new ymaps.Placemark([51.131958, 71.427744], {
            balloonContent: "Р‘РѕСѓР»РёРЅРі"
        }))
        .add(new ymaps.Placemark([51.158125, 71.421524], {
            balloonContent: "РљР°СЂС‚РёРЅРі-РєР»СѓР± KartMax"
        }))
        .add(new ymaps.Placemark([51.147449, 71.416055], {
            balloonContent: "Р¦РµРЅС‚СЂ СЃРµРјРµР№РЅРѕРіРѕ РѕС‚РґС‹С…Р° Ailand"
        }))
        .add(new ymaps.Placemark([51.157183, 71.420332], {
            balloonContent: "Р’РµСЂРµРІРѕС‡РЅС‹Р№ РїР°СЂРє В«Р“Р°РјРјРёВ»"
        }))

        ;


    eduCollection
        .add(new ymaps.Placemark([51.117281, 71.431201], {
            balloonContent: "Р”РµС‚СЃРєРёР№ СЃР°Рґ в„–75"
        }))
        .add(new ymaps.Placemark([51.141189, 71.391494], {
            balloonContent: "Р”РµС‚СЃРєРёР№ СЃР°Рґ в„–89"
        }))
        .add(new ymaps.Placemark([51.110692, 71.428553], {
            balloonContent: "Р”РµС‚СЃРєРёР№ СЃР°Рґ в„–78 РђСЃС‹Р»"
        }))
        .add(new ymaps.Placemark([51.14358, 71.387669], {
            balloonContent: "Р”РµС‚СЃРєРёР№ СЃР°Рґ в„–88"
        }))
        .add(new ymaps.Placemark([51.143618, 71.39372], {
            balloonContent: "Р”РµС‚СЃРєРёР№ СЃР°Рґ в„–53"
        }))
        .add(new ymaps.Placemark([51.145145, 71.402698], {
            balloonContent: "Р”РµС‚СЃРєРёР№ СЃР°Рґ в„– 63"
        }))
        .add(new ymaps.Placemark([51.131767, 71.434429], {
            balloonContent: "РЁРєРѕР»Р°-Р»РёС†РµР№ в„–66"
        }))
        .add(new ymaps.Placemark([51.142496, 71.415768], {
            balloonContent: "РЁРєРѕР»Р°-РіРёРјРЅР°Р·РёСЏ в„–17"
        }))
        .add(new ymaps.Placemark([51.097665, 71.418877], {
            balloonContent: "РђРєР°РґРµРјРёСЏ С…РѕСЂРµРѕРіСЂР°С„РёРё"
        }))
        .add(new ymaps.Placemark([51.097973, 71.423435], {
            balloonContent: "РњРµР¶РґСѓРЅР°СЂРѕРґРЅР°СЏ С€РєРѕР»Р°"
        }))
        .add(new ymaps.Placemark([51.099414, 71.414075], {
            balloonContent: "РЁРєРѕР»Р°-Р»РёС†РµР№ в„–84"
        }))
        .add(new ymaps.Placemark([51.098551, 71.41561], {
            balloonContent: "Sheikh khalifa bin zayed school"
        }))
        .add(new ymaps.Placemark([51.089928, 71.401003], {
            balloonContent: "РќР°Р·Р°СЂР±Р°РµРІ РЈРЅРёРІРµСЂСЃРёС‚РµС‚"
        }))

        ;


    habCollection
        .add(new ymaps.Placemark([51.142437, 71.412958], {
            balloonContent: "РЎР°Р»РѕРЅ РєСЂР°СЃРѕС‚С‹ Art&beauty"
        }))
        .add(new ymaps.Placemark([51.141486, 71.410677], {
            balloonContent: "РЎР°Р»РѕРЅ РєСЂР°СЃРѕС‚С‹ Gaziza"
        }))
        .add(new ymaps.Placemark([51.136645, 71.41772], {
            balloonContent: "РљР»СѓР± Р·РґРѕСЂРѕРІСЊСЏ Рё РєСЂР°СЃРѕС‚С‹ Grand Prix"
        }))
        .add(new ymaps.Placemark([51.135824, 71.422368], {
            balloonContent: "РЎР°Р»РѕРЅ РєСЂР°СЃРѕС‚С‹ Р¦РёСЂСЋР»СЊРЅРёРє"
        }))
        .add(new ymaps.Placemark([51.133985, 71.421919], {
            balloonContent: "РђРґР¶Р°РЅР° РЎРџРђ"
        }))
        .add(new ymaps.Placemark([51.141845, 71.446052], {
            balloonContent: "OldBoy РњРёР»Р°РЅСЃРєРёР№, Р±Р°СЂР±РµСЂС€РѕРї"
        }))
        .add(new ymaps.Placemark([51.129036, 71.41711], {
            balloonContent: "РЎР°Р»РѕРЅ РєСЂР°СЃРѕС‚С‹ Selfie Love"
        }))
        .add(new ymaps.Placemark([51.126595, 71.41216], {
            balloonContent: "Р”РµС‚СЃРєРёР№ РєР°СЂРґРёРѕ-С…РёСЂСѓСЂРіРёС‡РµСЃРєРёР№ С†РµРЅС‚СЂ"
        }))
        .add(new ymaps.Placemark([51.124914, 71.405049], {
            balloonContent: "РќР°С†. РќР°СѓС‡РЅС‹Р№ Р¦РµРЅС‚СЂ РњР°С‚РµСЂРёРЅСЃС‚РІР° Рё Р”РµС‚СЃС‚РІР° Р Рљ"
        }))
        .add(new ymaps.Placemark([51.121734, 71.408572], {
            balloonContent: "РќР°С†РёРѕРЅР°Р»СЊРЅС‹Р№ Р¦РµРЅС‚СЂ РќРµР№СЂРѕС…РёСЂСѓСЂРіРёРё"
        }))
        .add(new ymaps.Placemark([51.120643, 71.403099], {
            balloonContent: "Р РµСЃРїСѓР±Р»РёРєР°РЅСЃРєРёР№ РґРµС‚СЃРєРёР№ Р Р¦"
        }))
        .add(new ymaps.Placemark([51.118745, 71.40257], {
            balloonContent: "РќР°С†. РќР°СѓС‡РЅС‹Р№ РљР°СЂРґРёРѕ-РҐРёСЂСѓСЂРіРёС‡РµСЃРєРёР№ Р¦РµРЅС‚СЂ"
        }))
        .add(new ymaps.Placemark([51.117492, 71.406823], {
            balloonContent: "РќР°С†. РќР°СѓС‡РЅС‹Р№ Р¦РµРЅС‚СЂ РћРЅРєРѕР»РѕРіРёРё Рё РўСЂР°СЃРїР»Р°РЅС‚РѕР»РѕРіРёРё"
        }))
        .add(new ymaps.Placemark([51.092682, 71.425373], {
            balloonContent: "РђРїС‚РµРєР° Europharma"
        }))
        .add(new ymaps.Placemark([51.083686, 71.401696], {
            balloonContent: "Р¦РµРЅС‚СЂР°Р»СЊРЅС‹Р№ РіРѕСЃРїРёС‚Р°Р»СЊ РњР’Р”"
        }))
        .add(new ymaps.Placemark([51.082163, 71.411371], {
            balloonContent: "РЈС‡РµР±РЅРѕ-РєР»РёРЅРёС‡РµСЃРєРёР№ С†РµРЅС‚СЂ"
        }))
        .add(new ymaps.Placemark([51.083435, 71.419879], {
            balloonContent: "Р”РµС‚СЃРєР°СЏ РёРЅС„РµРєС†РёРѕРЅРЅР°СЏ Р±РѕР»СЊРЅРёС†Р° в„–2"
        }))
        .add(new ymaps.Placemark([51.075751, 71.426786], {
            balloonContent: "РњРµРґРёС†РёРЅСЃРєРёР№ С†РµРЅС‚СЂ"
        }))
        ;

    diffCollection
        .add(new ymaps.Placemark([51.147493, 71.459766], {
            balloonContent: "Р‘Р°РЅРє Р¦РµРЅС‚СЂ-РљСЂРµРґРёС‚"
        }))
        .add(new ymaps.Placemark([51.145266, 71.406556], {
            balloonContent: "Р‘РёР·РЅРµСЃ-С†РµРЅС‚СЂ SMART"
        }))
        .add(new ymaps.Placemark([51.140476, 71.412876], {
            balloonContent: "Р‘РёР·РЅРµСЃ-С†РµРЅС‚СЂ Buro Haus"
        }))
        .add(new ymaps.Placemark([51.137039, 71.414714], {
            balloonContent: "РђР»СЊС„Р°-Р‘Р°РЅРє"
        }))
        .add(new ymaps.Placemark([51.136256, 71.414298], {
            balloonContent: "Р‘РёР·РЅРµСЃ-С†РµРЅС‚СЂ Q"
        }))
        .add(new ymaps.Placemark([51.135434, 71.424711], {
            balloonContent: "Р¦РµСЃРЅР°Р‘Р°РЅРє"
        }))
        .add(new ymaps.Placemark([51.13127, 71.423857], {
            balloonContent: "РЎР±РµСЂР±Р°РЅРє"
        }))
        .add(new ymaps.Placemark([51.131985, 71.415642], {
            balloonContent: "Р•РІСЂР°Р·РёР№СЃРєРёР№ Р±Р°РЅРє"
        }))
        .add(new ymaps.Placemark([51.130843, 71.414998], {
            balloonContent: "Halyk Bank"
        }))
        .add(new ymaps.Placemark([51.130937, 71.417861], {
            balloonContent: "Р‘РёР·РЅРµСЃ-С†РµРЅС‚СЂ В«РљСѓР±РёРєВ»"
        }))
        .add(new ymaps.Placemark([51.129155, 71.414783], {
            balloonContent: "РљР°Р·РєРѕРјРјРµСЂС†Р±Р°РЅРє"
        }))
        .add(new ymaps.Placemark([51.130084, 71.416279], {
            balloonContent: "Citibank Kazakhstan"
        }))
        .add(new ymaps.Placemark([51.128741, 71.406863], {
            balloonContent: "Р‘РёР·РЅРµСЃ-С†РµРЅС‚СЂ SAAD"
        }))
        .add(new ymaps.Placemark([51.126418, 71.417895], {
            balloonContent: "Forte Bank"
        }))
        .add(new ymaps.Placemark([51.125696, 71.423051], {
            balloonContent: "Р‘Р°РЅРє РђСЃС‚Р°РЅС‹"
        }))
        .add(new ymaps.Placemark([51.124043, 71.421194], {
            balloonContent: "Kaspi Bank"
        }))
        .add(new ymaps.Placemark([51.093275, 71.425414], {
            balloonContent: "Maxi Market"
        }))
        .add(new ymaps.Placemark([51.093818, 71.425661], {
            balloonContent: "Р‘РµРєРєРµСЂ Рё Рљ"
        }))
        .add(new ymaps.Placemark([51.094081, 71.424298], {
            balloonContent: "Broccoli"
        }))
        .add(new ymaps.Placemark([51.127607, 71.407501], {
            balloonContent: "Festival Avenue"
        }))
        .add(new ymaps.Placemark([51.128421, 71.40833], {
            balloonContent: "РўР¦ Festival Avenue"
        }))
        .add(new ymaps.Placemark([51.128344, 71.412336], {
            balloonContent: "РўР Р¦ РђР·РёСЏ РџР°СЂРє"
        }))
        .add(new ymaps.Placemark([51.128399, 71.425583], {
            balloonContent: "РўР Р¦ РљРµСЂСѓРµРЅ"
        }))
        .add(new ymaps.Placemark([51.127013, 71.416308], {
            balloonContent: "РњРµС‡РµС‚СЊ РќСѓСЂ-РђСЃС‚Р°РЅР°"
        }))
        .add(new ymaps.Placemark([51.12609, 71.4733], {
            balloonContent: "РњРµС‡РµС‚СЊ РҐР°Р·СЂРµС‚ РЎСѓР»С‚Р°РЅ"
        }))
        .add(new ymaps.Placemark([51.12609, 71.4733], {
            balloonContent: "Fitness Palace"
        }))
        .add(new ymaps.Placemark([51.11456, 71.41011], {
            balloonContent: "Р”РІРѕСЂРµС† РµРґРёРЅРѕР±РѕСЂСЃС‚РІ"
        }))
        .add(new ymaps.Placemark([51.109946, 71.408241], {
            balloonContent: "РЎРїРѕСЂС‚РєРѕРјРїР»РµРєСЃ РЎР°СЂС‹Р°СЂРєР°"
        }))
        .add(new ymaps.Placemark([51.107508, 71.403719], {
            balloonContent: "РђСЃС‚Р°РЅР° РђСЂРµРЅР°"
        }))
        .add(new ymaps.Placemark([51.108734, 71.396401], {
            balloonContent: "РЎС‚Р°РґРёРѕРЅ Р‘Р°СЂС‹СЃ РђСЂРµРЅР°"
        }))
        .add(new ymaps.Placemark([51.10396, 71.40545], {
            balloonContent: "Р›РµРґРѕРІС‹Р№ РґРІРѕСЂРµС† РђР»Р°Сѓ"
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
