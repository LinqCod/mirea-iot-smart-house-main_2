from devices import Lamp, TV, Teapot, CoffeeMachine, Humidifier, Conditioner, Music
from rich.traceback import install
install(show_locals = True)
from threading import Thread

lmp1 = Lamp('Lamp1', 'Гостиная')
lmp2 = Lamp('Lamp2', 'Комната')

tv1 = TV('TV1', 'Гостиная')
tv2 = TV('TV2', 'Комната')

tea1 = Teapot('Teapot1', 'Кухня')
tea2 = Teapot('Teapot2', 'Кухня')

coffee1 = CoffeeMachine('Coffee1', 'Кухня')
coffee2 = CoffeeMachine('Coffee2', 'Кухня')


humd1 = Humidifier('Humd1', 'Кухня')
humd2 = Humidifier('Humd2', 'Гостиная')

cond1 = Conditioner('Cond1', 'Гостиная')
cond2 = Conditioner('Cond2', 'Комната')

Music1 = Music('Music1', 'Кухня')
Music2 = Music('Music2', 'Комната')


Thread(target= lmp1.start).start()
Thread(target= lmp2.start).start()

Thread(target= tv1.start).start()
Thread(target= tv2.start).start()

Thread(target= tea1.start).start()
Thread(target= tea2.start).start()

Thread(target= coffee1.start).start()
Thread(target= coffee2.start).start()


Thread(target= humd1.start).start()
Thread(target= humd2.start).start()

Thread(target= cond1.start).start()
Thread(target= cond2.start).start()


Thread(target= Music1.start).start()
Thread(target= Music2.start).start()

