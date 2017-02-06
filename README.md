# Skyminer
_A simple game about mining up asteroids for valuable metals._


Hello and welcome to Skyminer! In this game, you must send missions to asteroids to mine up their resources. At the beginning, you have a 50/50 chance of having your mission succeed in not ending in a disproportionate ball of flames. If you make it, you gain XP. Gaining XP will reduce the chance of failure. And remember, no matter how 'jinxed' your game seems, it's all random. Good luck! :)

(Read the version log for more details about the current version.)

## Version log
**2017-02-05** Skyminer pre-alpha 0.02 is out! It added:
* **Shop** This place is rather boring at first glance, because it's empty! You need 5XP to unlock the first (and only) upgrade: Drills. Hovering over the button gives you information about it, such as how much it will cost and how much money it will put on each mission (both of which multiply by 1.1 each time you make a purchase). What it _doesn't_ show you is that it multiplies the potential monetary output of missions by 1.5. Why isn't it 1.1, you ask? Because it would put your space agency in a position where launches cost more and with very little income change.
* **Secret #1** ...Well there's a reason its called a secret, now, ain't there?

***

**2017-02-04** Skyminer pre-alpha 0.01 is [live](https://skyminer-game.github.io)! It includes:
* **Experience system** - every mission has a 1 / (XP+2) chance of crashing, and every successful mission rewards you with +1XP.
* **Money system** - every mission costs $1,000,000, and if it succeeds, has a profit output of -$100,000 to $1,900,000. I'm planning to include a basic shop in pre-alpha 0.02.
* **Loading system** - you may save and load games using _localStorage()_.
