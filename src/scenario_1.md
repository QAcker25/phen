https://ru.wikipedia.org/wiki/%D0%9E%D0%B1%D0%BD%D0%B0%D1%80%D1%83%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5_%D1%81%D1%82%D0%BE%D0%BB%D0%BA%D0%BD%D0%BE%D0%B2%D0%B5%D0%BD%D0%B8%D0%B9

Подобрать мотив для просмотра, желательно в названии к ролику

Если запланировать серьезную серию видео по физическим движкам, и разбирать конкретные примеры графических (игровых) движков, то мотив сам собой напрашивается:
 - В этой серии видео вы поймете что такое физический движок
- Зачем они существуют 
- Как их используют 
- Какие игровые движки существуют 
- Их особенности
- Научитесь основам работы с движком таким то* 


Структура:
Приветствие
О чем видеоподкаст
Что такое ФД и зачем
Что такое симуляция физики
Объекты симуляции физики и их св-ва
Два основных подхода симуляции физики
Общая схема покадровой симуляции
Заключение?
Прощание

-Доброго времени суток, с вами #Павел Фанасков(бля ну не надо детского сада)))# и в этой серии видео мы будем разбираться в устройстве физических движков.  
заставка с феном в углу и надписью PHysics ENgine посередине, заставку заменяет фен, фен оживает, осматривается вокруг, внизу трехмерный пол.
-Разбираться в том какие основные проблемы возникают перед ними, 
перед феном появляется пазл, он пытается его собрать, вопросики
-какие алгоритмы используются для их решения, 
эврика, лампочка, фен собрал пазл
-каков основной их жизненный цикл.
фен быстро стареет, умирает и заново рождается
-Для простоты мы возьмем только двухмерное пространство
фен переходит в двухмерное пространство, исчезает пол внизу, появляются декартовы оси охватывающие персонажа, он становится схематичным, чертежным
-И каждый алгоритм или подход будем разбирать отдельно
фен рассыпается на детали
-Начнем мы с общих понятий
-Физический движок по своей сути это система имитации или моделирования физических процессов. 
логотип науки (атом)
Например полета снаряда. И те причины из за которых он двигается по своей траектории.
сцена меняется на пушку стреляющую ядром, ядро замедляется, прибегает фен и отрисовывает путь движения, силы, скорости…
-За точным же  определение вы всегда можете сходить в википедию, а здесь я постараюсь объяснять все на пальцах не отходя далеко от истины.
сцена меняется на логотип википедии
-Что значит смоделировать физический закон? Как и при любом процессе моделирования существуют те объекты, которые мы хотим воссоздать. У них есть свойства и состояние. Например мяч, он весит 200 грамм и находится в метре от пола.
появляется мяч, с отображением его характеристик
Так же есть общие законы пространства в котором находится мяч. 
В нашем случае это гравитация и сопротивление воздуха.
показать пространство вокруг и притяжение земли
И что бы с имитировать реальность нам нужно узнать что с ним станет через 5 секунд. Изменится ли его вес? Положение в пространстве? Какое будет его состояние? А через 10 секунд?
Мяч начал падать, прибегает фен и начинает замерять линейкой и секундомером
На эти вопросы и должен отвечать физический движок. 
Таким образом можно выделить следующие основные сущности с которыми он работает: 
Объекты, Сцена и текущее их состояние. 
На застывшей сцене указываем и выделяем выше перечисленное
А физический движок можно представить как черный ящик которому мы отдаем сцену, объекты, их начальные состояния, включаем и после можем получить из него их новые состояния в соответствии с законами через 1, 2, 5 или другое желаемое количество секунд. 
фен превращается в ящик в который закидывают мяч с пространством и оно от туда выскакивает в миниатюре, становясь в очередь.
Это можно представить как фильм - только мы рисуем один первый кадр, кладем его в проектор, а он нам проигрывает весь фильм.
ящик превращается в кинопроектор, с пленкой
Как же он узнает какие кадры должны быть следующими? 
Разберем простой случай - полет мяча по прямой.
 Мячик по центру
Если он имеет начальную скорость
Подлетает фен и пинает мяч
и на него не воздействуют сторонние силы
Мяч летит в космическом вакууме
то зная его скорость можно определить его местонахождение через определенное время. 
Раскадровка полета меча с времяной и маштабной линейками под ним, которую выставит фен
Данный процесс называется интегрированием состояния объекта. Более детально мы его рассмотрим в следующих видео. 
мяч опять летит
Нам же важно понять что в данном налаженном процессе могут возникать проблемы, например столкновения.
Мяч врезается в стену, как баран пытается пробиться через нее
Подобные случаи называются коллизиями. Коллизии возникают при попытке объектами нарушить какое либо ограничение. Например мяч и стена не могут пересекаться и проникать друг в друга - это ограничение,
подбигает фен, разнимает мяч от стены, журит его пальцем
Если мяч при движении попадает в стену возникает коллизия. Задача ФД в том чтобы вовремя обнаруживать коллизии и изменять состояния объектов таким образом чтобы наиболее реалистично предотвратить коллизию, например мяч должен не просто отскакивать от стены, но и отскакивать с сохранением угла и с потерей скорости. 
фен отводит мяч, предлагает попробовать еще, сам отходит в сторону и выступает в роли регулировщика/учителя, мяч осторожно врезается в стену и отскакивает
Обнаружение коллизий и их корректное разрешение это является самой главной и самой сложной частью ФД. 
фен утирается от пота
Есть два подхода поиска коллизий - априорный и апостериорный. 
сцена делится на две, с двумя фенами и стеной
Первый подход основан на вычислении состояния объектов на множество шагов вперед. И поиск коллизии заранее.
превый за ранее остнавливает мяч и обьяеснет как надо отскакивать от стены, второй фен наблюдает
Второй способ основан на покадровом вычислении следующего состояния объектов и поиск коллизий в каждом кадре, таким образом коллизия находится уже после ее появления. 
перввый наблюдает, второй прошляпил столкновение и уже после отводит мяч и указывает на правильный отскок
Потому первый способ называется априорный тоесть поиск и разрешение коллизии заранее, а второй апостериорный - поиск и разрешение коллизии после ее появления.
обе сцены повторяются, с появлением надписей на верху
Это два концептуально различных подхода для построения ФД. Я буду рассматривать второй подход так как он проще для понимания, более наглядный. 
Вторяая сцена выделяется, становится больше первой
Он используется практически во всех промышленых ФД от игр до киниматографа. 
Появляются эмблемы движков 
Первый подход требует использование сложной математики и большой вычислительной мощности, но при этом дает возможность построить гораздо более точную модель симуляции физики. поэтому данный подход в большинстве случаев используется в научных экспериментах.
появляются мат формулы, мейнфреймы и ученые
Если расмотреть работу ФД поверхностно то для формирования 
сцена меняется на проектор, заглядываем в нутрь
каждого кадра сцена с объектами проходит три стадии. 
Видно конвеер по которому едет сцена
Интегрирование - процесс вычисления нового состояния на основе предыдущего, например движение.
Сцена проезжает интегратор, Изменеие на сцене
Поиск коллизий - после изменения состояния могут возникнуть нарушения законов и ограничений, их поиск является отдельной, комплексной задачей
Сцена проезжает сложный микроскоп, сцена меняется
Разрешение коллизий - Обнаруженные коллизии должны быть разрешены в соответствии с физическими законами.
сцена проезжает исправляющую фабрику
Таким образом в упрощенной схеме ФД мы имеем конвейер из трех этапов в котором новая получается из предыдущей
Весь конвеер разом со сценами проходящими через этапы, причем в конце сцена делится на две и одна из них едет в начало конвеера
Не так уж и сложно? Правда?
Камера отьезжает обратно к проектору.
Заключение?
 Не уверен что тут хватит на минут 20 
