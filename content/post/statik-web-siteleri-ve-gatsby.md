---
author: "Caner Tuzunar"
date: 2021-04-15
linktitle: Statik Web Siteleri ve Gatsby JS
title: Statik Web Siteleri ve Gatsby JS 
---
1. Statik Site Nedir ve Gatsby
    1. Statik Site Nedir?
    2. Hiz ve Performans
    3. Guvenlik
    4. Gelistirme
    5. Olceklendirme
2. GatsbyJS Nedir?
3. Kurulum
4. Gatsby Dosyalari
    1. Gatsby Config
    2. Gatsby Browser
    3. Gatsby Node
5. Gatsby Veri Katmani
    1. GraphQL
    2. Sorgulari(Sayfa ve Sayfa Propslari)
    3. Statik Sorgular
6. Ornek Proje
7. Kaynakca

## Statik Site Nedir?

onceden derlenmis HTML, CSS and Javascript dosyalarini tarayiciya iletir. Dinamik web sitelerine gore esnek, hafif, hizli ve yayina almasi ucuzdur

### Hiz ve Performans

Sayfayi hazirlamak icin API veya veritabanindan sonuc donmesini beklemedigi icin statik web siteleri  dinamik sitelere gore hizlidir. Ayrica web serverdan donmesi gereken sey pre-built edilmis HTML, CSS, JS dosyalaridir. Hizli acilan web sayfalari seo optimazsyonunda statik web sitelerine avantaj sagliyor.

### Guvenlik

Hackerlar dinamik sitelere sizmak icin daha fazla firsata sahiptir cunku butun sistem birbirine baglidir fakat statik web sitelerin bagimliligi yoktur iceriklerinizi tuttugunuz veri tabanlarina dogrudan bagli degildir bu hackerlara sizmak icin daha az giris noktasi verir.

### Gelistirme

Son yillarda statik sitelerin populerlesmesiyle birlikte statik site uretmek icin bir cok framework cikti. Bu frameworkler bir cok acidan gelistiricelere kolaylik saglamakta markdown dosyalarini blog postu haline getirmek, React'in populerligi sayesinde yayginlasan JSX ile statik siteler uretmek gibi bir cok kolaylik sagliyorlar.

## Olceklendirme

Statik siteler tamamen pre-built edilmis dosyalardan olustugu icin sadece bant-genisligini arttirarak bile sitenizi yogun trafik altinda ayakta tutabilirsiniz.

## Static WebSite Generators

---

1. Hugo
2. VuePress
3. Jekyll
4. Hexo
5. Gatsby JS

## Gatsby JS

Gatsby React tabanli acik kaynak bir framework. Blog, Portfolyo sitesi, sirket tanitim sayfasi uretebilirsiniz. Sundugu eklentiler ile birlikte kolay ve efektif bir gelistirme sureci olusturuyor yazimizin ilerleyen kisimlarinda bunlara deginecegiz. Ufak bir blog olusturarak hem gatsby'i taniyalim hem de ilk projemizi gelistirelim.

**Kurulum**

https://gist.github.com/2226f07a5e4d37f8f7202c195a7234c8

terminal ekraninda gelistirme surecini hizlandirmak icin size bir kac onayar soracak sade bir kurulum yapacagim.

![https://i.imgur.com/huziW4j.png](https://i.imgur.com/huziW4j.png)

Y tusuna veya enter tusuna basarak kurulumu baslatabilirsiniz. kurulum bittikten sonra 

https://gist.github.com/9561fff37dff7a2bf47a0b8271fba82e

ardindan tarayicinizda **localhost:8000** baglantisina gittinizde bu sayfayi goruyorsaniz basariyla kurulumu tamamlamissiniz demektir.

![https://i.imgur.com/wgmsQXx.png](https://i.imgur.com/wgmsQXx.png)

herhangi bir kod editorunde projeyi actiginiz zaman dosya dizininiz soyle olacaktir.

![https://i.imgur.com/31QxuG2.png](https://i.imgur.com/31QxuG2.png)

hazir gelen index.js dosyasini duzenleyerek projemizi gelistirmeye baslayabiliriz

https://gist.github.com/7a6fd9459fe808695a0d4714bd4f6e3f

## Gatsby Dosyalari

GatsbyJS projenizi yapilandirmak icin bazi ayar dosyalarini sahiptir bu dosyalar sayesinde verilerinizi site icerisinde kullanmak, eklenti kurmak, sayfa olusturmak gibi imkanlar sunar.

Bu dosyalar projenin ana dizininde olmalidir.

### Gatsby Config

gatsby-config.js  en temel ayar dosyasidir en sade kurulumda bile hali hazirda projenin icinde bulunur cunku gatsby'nin temel ayarlarini barindirir

1. Site MetaData
2. Eklentiler
3. Proxy
4. PathPrefix
5. Haritalama
6. Proxy

### Site Metadata

Sitenin Basligini, Linkini, Aciklamasini barindiri ve nerede kullanmak isterseniz buradan cekebilirsiniz bu bilgileri.

https://gist.github.com/a75679414fe1a2844e6e8eb0a0412b41

### Eklentiler

Eklentiler Gatsby icin uyarlanmis npm paketleridir. Gatsby icin uyarlanmis npm eklenti paketlerini indirmek **eklentileri aktif etmez**

eklentileri aktif etmek icin gatsby-config.js dosyasina eklemelisiniz eklentileri aktif etmek iki turlu gerceklesir birincisi sadece eklentilerin ismini girerek digeri ise eklentilerin gerekli veya tercihen duzenlenebilecek ayarlari icin obje olarak girmek

https://gist.github.com/a085eb3c85189de904e68913082c01b7

## Polyfill

Gatsby ES6 Promise API'sini kullaniyor. Gatsby varsayilan olarak Promise polyfill aktif olarak geliyor, cunku bazi tarayicilar desteklemiyor.

https://gist.github.com/bcbca8ba601970ff963a2aec1a7aee43

### Haritalama

Gatsby veriler arasinda haritalama imkani sagliyor ama bu ne demek? 

bu yazi icerisinde gelistirecegimiz boog projesi icin bir senaryo olusturalim. Blogumuz icin olusturacagimiz yazilarin tekrar eden bir kismi olacak *Yazar*, *Yazarin Biyografisi* bu veriler tekrar eden veriler olacagi icin bunlar tekrar tekrar yazilara eklemek yerine bunlari otomatik olarak butun yazilara entegre etmemiz bize zaman kazandiracaktir.

https://gist.github.com/f9cee2eec0fe0bcbb58d69963aad72a3

https://gist.github.com/8890ac1b3770a45480c6fa93acf5f323

olusturdugumuz author dosyasini markdown dosyalarina haritalayip verileri otomatik olarak kullanabiliriz.

https://gist.github.com/9811e32b6d059d0d2cfd277d43a61c36

https://gist.github.com/81a1f473ba22afed48821127f9ec53e1

https://gist.github.com/d0ad39bb54e0f5e1cf632498881210ce

## Gatsby Node

Gatsby gelistirme surecinde bize bircok eklenti ve API verir. bunlarla GraphQL veri katmanina node ekleyebilir, sayfalar olusturabiliriz(Blog Postlari icin vb.). [Buradan sunulan API'larin listesine ulasabilirsiniz](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/). Yapacagimiz ornek projede bu API'lardan bir kacini kullanacagiz. Bir orner vermek gerekirse

https://gist.github.com/ccb92157a631a7c3d727d97914ffb00e

## Gatsby Browser

Gatsby Browser API kullanici tarafi ile etkilesim kurmaniz icin bir cok API sunar. Ayrica kullanici tarafinda tarayici ustunde aksiyon almanizi saglar.

https://gist.github.com/d069aca5e4507aaa65d07f5f9ee7f6e8

## Gastby Veri Katmani

Gatsby'nin en buyuk avantajlarindan bir tanesi ise hali hazirda GraphQL ile entegre olmasi

## GraphQL Nedir?

API'ler icin veri sorgulama ve isleme dilidir. Her Sorgu ve Mutaston icin endpointler hazirlamak yerine tek bir endpoint ustunden bu islemleri yapmaniza olanak saglar.

localhost:8000/__graphql adresinde GraphQL editorunu kullanarak sorgularinizi calistirabilirsiniz

https://gist.github.com/46e4a735cea78e7e7e1d3da197fa576b

Gatsby sorugular icin iki cesit component ve bir tane hook kullanir bunlar

1. PageQuery(Compenent)
2. StaticQuery(Component)
3. useStaticQuery(Hooks)  

> Tek bir dosya icinde birden fazla query componentini kullanamazsiniz. Yani tek bir dosya icerisinde birden fazla PageQuery veya staticQuery olusturamazsiniz.

### PageQuery

PageQuery yerlesik bir bilesendir ve veri katmanindan bilgileri gatsby sayfalarina iletir. Sayfa basina tek bir sayfa sorgusu olusturulabilir.

https://gist.github.com/0bb1f3cf4a5bee2b9cf065e4490ae263

Sayfa sorgusu olusturmak icin graphql sorugusu bir degiskene atamak gerekmez. Gatsby sayfa icerisinde export edilmis bir graphql yapisi olup olmadigini kontrol eder

**Kullanimi**

https://gist.github.com/63662fb8b941dda33a44f110cdfbefd8

### StaticQuery

StaticQuery yerlesik bir bilesendir ve veri katmanindan bilgileri sayfa disi bilesenlere iletir. Bir bilesen sadece bir StaticQuery bilesenine sahip olabilir. 

Iki parametre alir.

1. query: graphql string
2. render: veri dondugunde ekrana gosterecek olan bilesen

https://gist.github.com/3a50c4b3ba964b9e211e582c4a9b34ba

### useStaticQuery

Bu hook StaticQuery ile benzer isleve sahiptir. Bir ihtiyac duymaz veri katmanindan donecek olan sonucu bir degiskene aktarir, bu degisken bilesen icinde kullanilabilir.

https://gist.github.com/40d28e39a1c6bf7989acc2db7b3243b7

## Ornek Proje

Bu bilgiler dogrultusunda bir proje yapalim, kendi adimiza bir blog olusturalim.

Bu ornek bir proje olacagi icin tasarim kismina fazla ozen gostermeyecegim. Burada amac gatsby'nin veri katmanini tanitmak ve kullanisini gostermek.

https://gist.github.com/112e7b34659c32b069140039f1c61aad

![https://i.imgur.com/huziW4j.png](https://i.imgur.com/huziW4j.png)

https://gist.github.com/29359e61ca2a05f1f6843c92011ae65c

https://gist.github.com/e7152195d70fcacbdce25a850f762dcd

yazdigimiz yazilari sunmak icin bize bir blog sayfasi lazim bunu olusturmak icin ise **src** klasorunun altinda **template** klasoru olusturup icinde **blog-template.jsx** olusturalim

https://gist.github.com/0428fe3f285ae7d9e8277f3012bed3b1

simdi sirada blog klasoru aslinda olusturdugumuz markdown dosyalarini birer gatsby sayfasi haline getirmek var. Bunun icin gatsby-node.js icinde gatsby tarafindan bize sunulan APIlari kullanacagiz

https://gist.github.com/7e5164a9e2400241f5c79b505a6e4bae

artik blog klasoru altinda olusturdugumuz her markdown dosyasini gatsby sayfasi haline getirmis bulunuyoruz sirada bir anasayfa olusturup bu bloglarin linkleri liste seklinde anasayfada gostermek.

https://gist.github.com/b3d6a0fcb80e4e5d92af7a659931c9a1

blog altinda olusturdugumuz her markdown dosyasini gatsby sayfasi haline getirip bu sayfalarin linklerini artik anasayfamizda gosteriyoruz

![https://i.imgur.com/ijlUr5I.png](https://i.imgur.com/ijlUr5I.png)

Projeye bu [**linkten ulasabilirisiniz**](https://github.com/canertuzunar/example-gatsby-project)

## Kaynakca

1. [https://www.sanity.io/what-is-a-static-site](https://www.sanity.io/what-is-a-static-site)
2. [https://www.techgenyz.com/2018/02/09/6-reasons-go-static-website/](https://www.techgenyz.com/2018/02/09/6-reasons-go-static-website/)
3. [https://blog.callr.tech/static-website-performance-seo/](https://blog.callr.tech/static-website-performance-seo/)
4. [https://www.gatsbyjs.com/docs/reference/](https://www.gatsbyjs.com/docs/reference/)
5. [https://www.gatsbyjs.com/docs/how-to/](https://www.gatsbyjs.com/docs/how-to/)