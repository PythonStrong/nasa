import React from 'react'
import './List.css'
import Navbar from '../../components/Navbar/Navbar'
import centuari from '../../img/cent.jpg'
import wolf_audio from '../../audio/wolf.wav'
export default function List() {
    return (
      <div className="body">
        <Navbar />
        <input class="planet9" id="pluto" name="planet" type="radio" />
        <label class="pluto menu" for="pluto">
          <div class="preview"></div>
          <div class="info">
            <h2>
              <div class="pip"></div>
              Proxima Centauri
            </h2>
            <h3>4.24 light-years</h3>
          </div>
        </label>
        <input class="planet8" id="neptune" name="planet" type="radio" />
        <label class="neptune menu" for="neptune">
          <div class="preview"></div>
          <div class="info">
            <h2>
              <div class="pip"></div>
              TRAPPIST-1e
            </h2>
            <h3>39 light-years</h3>
          </div>
        </label>
        <input class="planet7" id="uranus" name="planet" type="radio" />
        <label class="uranus menu" for="uranus">
          <div class="preview"></div>
          <div class="info">
            <h2>
              <div class="pip"></div>
              LHS 1140 b
            </h2>
            <h3>40 light-years</h3>
          </div>
        </label>
        <input class="planet6" id="saturn" name="planet" type="radio" />
        <label class="saturn menu" for="saturn">
          <div class="preview"></div>
          <div class="info">
            <h2>
              <div class="pip"></div>
              Kepler-452b
            </h2>
            <h3>1,400 light-years</h3>
          </div>
        </label>
        <input class="planet5" id="jupiter" name="planet" type="radio" />
        <label class="jupiter menu" for="jupiter">
          <div class="preview"></div>
          <div class="info">
            <h2>
              <div class="pip"></div>
              Ross 128 b
            </h2>
            <h3>11 light-years</h3>
          </div>
        </label>
        <input
          checked="checked"
          class="planet4"
          id="mars"
          name="planet"
          type="radio"
        />
        <label class="menu mars" for="mars">
          <div class="preview"></div>
          <div class="info">
            <h2>
              <div class="pip"></div>
              Gliese 667 Cc
            </h2>
            <h3>23.62 light-years</h3>
          </div>
        </label>
        <input
          checked="checked"
          class="planet3"
          id="earth"
          name="planet"
          type="radio"
        />
        <label class="menu earth" for="earth">
          <div class="preview"></div>
          <div class="info">
            <h2>
              <div class="pip"></div>
              K2-18b
            </h2>
            <h3>124 light-years</h3>
          </div>
        </label>
        <input
          checked="checked"
          class="planet2"
          id="venus"
          name="planet"
          type="radio"
        />
        <label class="menu venus" for="venus">
          <div class="preview"></div>
          <div class="info">
            <h2>
              <div class="pip"></div>
              Teegarden's Star b
            </h2>
            <h3>12 light-years</h3>
          </div>
        </label>
        <input
          checked="checked"
          class="planet1"
          id="mercury"
          name="planet"
          type="radio"
        />
        <label class="menu mercury" for="mercury">
          <div class="preview"></div>
          <div class="info">
            <h2>
              <div class="pip"></div>
              Wolf 1061c
            </h2>
            <h3>14 light-years</h3>
          </div>
        </label>
        <div class="solar">
          <div class="solar_systm">
            <div class="planet mercury">
              <div class="planet_description mercury">
                <h2>Exo-Planet</h2>
                <h1>Wolf 1061c</h1>
                <p>
                  Wolf 1061c is a rocky exoplanet that lies within the habitable
                  zone of its host star, a red dwarf. It is about 4.3 times the
                  mass of Earth and has a relatively short orbital period.
                </p>
                <label for="readMercury">
                  <a>
                    Read Mor
                    <span>e</span>
                  </a>
                </label>
              </div>
              <div class="overlay"></div>
            </div>
          </div>
          <div class="solar_systm">
            <div class="planet venus">
              <div class="planet_description venus">
                <h2>Exo-Planet</h2>
                <h1>Teegarden's Star b</h1>
                <p>
                  Teegarden's Star b is one of two potentially habitable planets
                  discovered around Teegarden's Star, a red dwarf. The planet is
                  very close to its host star but still lies within the
                  habitable zone
                </p>
                <label for="readVenus">
                  <a>
                    Read Mor
                    <span>e</span>
                  </a>
                </label>
              </div>
              <div class="overlay"></div>
            </div>
          </div>
          <div class="solar_systm">
            <div class="planet earth">
              <div class="planet_description earth">
                <h2>Exo-Planet</h2>
                <h1>K2-18b</h1>
                <p>
                  K2-18b is an exoplanet that lies within the habitable zone of
                  its host star and has evidence of water vapor in its
                  atmosphere, which is a key factor for potential habitability.
                  It is classified as a mini-Neptune, with a mass about 8.6
                  times that of Earth.
                </p>
                <label for="readEarth">
                  <a>
                    Read Mor
                    <span>e</span>
                  </a>
                </label>
              </div>
              <div class="overlay"></div>
            </div>
          </div>
          <div class="solar_systm">
            <div class="planet mars">
              <div class="planet_description mars">
                <h2>Exo-Planet</h2>
                <h1>Gliese 667 Cc</h1>
                <p>
                  Gliese 667 Cc is a super-Earth that lies in the habitable zone
                  of its host star, Gliese 667 C. It is about 4.5 times the mass
                  of Earth and receives a similar amount of stellar radiation as
                  Earth
                </p>
                <label for="readMars">
                  <a>
                    Read Mor
                    <span>e</span>
                  </a>
                </label>
              </div>
              <div class="overlay"></div>
            </div>
          </div>
          <div class="solar_systm">
            <div class="planet jupiter">
              <div class="planet_description jupiter">
                <h2>Exo-Planet</h2>
                <h1>Ross 128 b</h1>
                <p>
                  Ross 128 b is an Earth-sized exoplanet that orbits a
                  relatively quiet red dwarf star. It lies within the habitable
                  zone, and its proximity makes it an ideal target for further
                  exploration
                </p>
                <label for="readJupiter">
                  <a>
                    Read Mor
                    <span>e</span>
                  </a>
                </label>
              </div>
              <div class="overlay"></div>
            </div>
          </div>
          <div class="solar_systm">
            <div class="planet saturn">
              <div class="planet_description saturn">
                <h2>Exo-Planet</h2>
                <h1>Kepler-452b</h1>
                <p>
                  Kepler-452b is often referred to as "Earth's cousin" because
                  of its location in the habitable zone of a Sun-like star. It
                  is approximately 1.6 times the size of Earth, and it orbits
                  its star in about 385 days, similar to Earth's orbital period.
                </p>
                <label for="readSaturn">
                  <a>
                    Read Mor
                    <span>e</span>
                  </a>
                </label>
              </div>
              <div class="overlay"></div>
            </div>
          </div>
          <div class="solar_systm">
            <div class="planet uranus">
              <div class="moon miranda">
                <h3>Moon</h3>
                <h2>Miranda</h2>
              </div>
              <div class="moon ariel">
                <h3>Moon</h3>
                <h2>Ariel</h2>
              </div>
              <div class="moon umbriel">
                <h3>Moon</h3>
                <h2>Umbriel</h2>
              </div>
              <div class="trajectory mir"></div>
              <div class="trajectory ari"></div>
              <div class="trajectory umb"></div>
              <div class="planet_description uranus">
                <h2>Exo-Planet</h2>
                <h1>LHS 1140 b</h1>
                <p>
                  LHS 1140 b is a super-Earth that orbits within the habitable
                  zone of its red dwarf star. It is about 6.98 times the mass of
                  Earth and is highly dense, suggesting it is composed of rock
                  and metal
                </p>
                <label for="readUranus">
                  <a>
                    Read Mor
                    <span>e</span>
                  </a>
                </label>
              </div>
              <div class="overlay"></div>
            </div>
          </div>
          <div class="solar_systm">
            <div class="planet neptune">
              <div class="trajectory tri"></div>
              <div class="trajectory pro"></div>
              <div class="trajectory ner"></div>
              <div class="planet_description neptune">
                <h2>Exo-Planet</h2>
                <h1>TRAPPIST-1e</h1>
                <p>
                  TRAPPIST-1e is one of seven Earth-sized planets in the
                  TRAPPIST-1 system, all of which orbit a cool red dwarf star.
                  It is located within the habitable zone, and scientists
                  believe it has a rocky composition with conditions that could
                  allow for liquid water
                </p>
                <label for="readNeptune">
                  <a>
                    Read Mor
                    <span>e</span>
                  </a>
                </label>
              </div>
              <div class="overlay"></div>
            </div>
          </div>
          <div class="solar_systm">
            <div class="planet pluto">
              <div class="planet_description pluto">
                <h2>Exo-Planet</h2>
                <h1>Proxima Centauri</h1>
                <p>
                  Proxima Centauri b is located within the habitable zone of the
                  red dwarf Proxima Centauri, meaning it could have conditions
                  that allow liquid water to exist on its surface. It is similar
                  in size to Earth, with an estimated mass of about 1.17 times
                  that of Earth
                </p>
                <label for="readPluto">
                  <a>
                    Read Mor
                    <span>e</span>
                  </a>
                </label>
              </div>
              <div class="overlay"></div>
            </div>
          </div>
        </div>
        <input class="read" id="readMercury" name="mercuryRead" type="radio" />
        <label class="closeBig" for="closeMercury"></label>
        <input class="read" id="closeMercury" name="mercuryRead" type="radio" />
        <div class="panel">
                <h1>Wolf 1061c</h1>
                <audio controls
                >
                    <source src={wolf_audio}></source>
                </audio>
          <p className='text-audio'>
            In a magical corner of the universe, just 14 light-years from Earth,
            there lived a rocky planet named Wolf 1061c. This little planet was
            special because it was a bit bigger than Earth, about 4.3 times its
            mass! Wolf 1061c danced around its red dwarf star, happily living in
            the habitable zone where it could possibly have water and life.
            Every day, Wolf would complete its orbit around the star, feeling
            the warm rays on its surface. “What a lovely day to play!” it
            cheered, imagining rivers flowing and plants blooming everywhere.
            Wolf 1061c loved to dream about friendly creatures who could splash
            in its waters and run through its fields. “Let’s have a party with
            lots of fun!” it imagined, wishing for friends to share in its
            happiness. With a short orbital period, Wolf felt like it was always
            having adventures. It gazed at the sparkling stars and wondered
            about the other planets out there. “I hope to meet friends who share
            my dreams!” it said, feeling hopeful. As Wolf spun around its star,
            it filled its heart with joy and excitement. The little planet knew
            that it could have a bright future filled with laughter and love,
            making every day an adventure to remember! The End.
          </p>
          <p>
            MVolf 1061c is a captivating exoplanet located approximately 22
            light-years away from Earth, orbiting the star system Volf 1061.
            This planet is classified as a super-Earth due to its size, which is
            about 1.5 times that of Earth, and it lies within the habitable zone
            of its host star. The gravitational pull on Volf 1061c is expected
            to be slightly stronger than that of Earth, providing a unique
            environment that could support diverse ecosystems.
          </p>
          <p></p>
          <img src="https://i2.wp.com/www.astronomytrek.com/wp-content/uploads/2012/11/mercury-1.jpg?fit=678%2C381&amp;ssl=1" />
          <h2>A year on Mercury is just 88 days long.</h2>
          <p>
            One solar day (the time from noon to noon on the planet’s surface)
            on Mercury lasts the equivalent of 176 Earth days while the sidereal
            day (the time for 1 rotation in relation to a fixed point) lasts 59
            Earth days. Mercury is nearly tidally locked to the Sun and over
            time this has slowed the rotation of the planet to almost match its
            orbit around the Sun. Mercury also has the highest orbital
            eccentricity of all the planets with its distance from the Sun
            ranging from 46 to 70 million km.
          </p>
          <h2>Mercury is the smallest planet in the Solar Systm.</h2>
          <p>
            One of five planets visible with the naked eye a, Mercury is just
            4,879 Kilometres across its equator, compared with 12,742 Kilometres
            for the Earth.
          </p>
          <h2>Mercury is the second densest planet.</h2>
          <p>
            Even though the planet is small, Mercury is very dense. Each cubic
            centimetre has a density of 5.4 grams, with only the Earth having a
            higher density. This is largely due to Mercury being composed mainly
            of heavy metals and rock.
          </p>
          <h2>Mercury has wrinkles.</h2>
          <p>
            As the iron core of the planet cooled and contracted, the surface of
            the planet became wrinkled. Scientist have named these wrinkles,
            Lobate Scarps. These Scarps can be up to a mile high and hundreds of
            miles long.
          </p>
          <br />
        </div>
        <input class="read" id="readVenus" name="venusRead" type="radio" />
        <label class="closeBig" for="closeVenus"></label>
        <input class="read" id="closeVenus" name="venusRead" type="radio" />
        <div class="panel">
          <h1>Venus</h1>
          <p>
            Venus, the second planet from the sun, is named for the Roman
            goddess of love and beauty. The planet — the only planet named after
            a female — may have been named for the most beautiful deity of her
            pantheon because it shone the brightest of the five planets known to
            ancient astronomers.
          </p>
          <p>
            In ancient times, Venus was often thought to be two different stars,
            the evening star and the morning star — that is, the ones that first
            appeared at sunset and sunrise. In Latin, they were respectively
            known as Vesper and Lucifer. In Christian times, Lucifer, or
            "light-bringer," became known as the name of Satan before his fall.
            However, further observations of Venus in the space age show a very
            hellish environment. This makes Venus a very difficult planet to
            observe from up close, because spacecraft do not survive long on its
            surface.
          </p>
          <img src="https://3c1703fe8d.site.internapcdn.net/newman/gfx/news/hires/2014/2-whatistheave.jpg" />
          <h2>A day on Venus lasts longer than a year.</h2>
          <p>
            It takes 243 Earth days to rotate once on its axis (sidereal day).
            The planet’s orbit around the Sun takes 225 Earth days, compared to
            the Earth’s 365. A day on the surface of Venus (solar day) takes 117
            Earth days.
          </p>
          <h2>
            Venus rotates in the opposite direction to most other planets.
          </h2>
          <p>
            This means that Venus is rotating in the opposite direction to the
            Sun, this is also know as a retrograde rotation. A possible reason
            might be a collision in the past with an asteroid or other object
            that caused the planet to alter its rotational path. It also differs
            from most other planets in our solar systm by having no natural
            satellites.
          </p>
          <h2>Venus is the second brightest object in the night sky.</h2>
          <p>
            Only the Moon is brighter. With a magnitude of between -3.8 to -4.6
            Venus is so bright it can be seen during daytime on a clear day.
          </p>
          <h2>
            Atmospheric pressure on Venus is 92 times greater than the Earth’s.
          </h2>
          <p>
            While its size and mass are similar to Earth, the small asteroids
            are crushed when entering its atmosphere, meaning no small craters
            lie on the surface of the planet. The pressure felt by a human on
            the surface would be equivalent to that experienced deep beneath the
            sea on Earth.
          </p>
          <br />
        </div>
        <input class="read" id="readEarth" name="earthRead" type="radio" />
        <label class="closeBig" for="closeEarth"></label>
        <input class="read" id="closeEarth" name="earthRead" type="radio" />
        <div class="panel">
          <h1>Earth</h1>
          <p>
            Earth, our home, is the third planet from the sun. It is the only
            planet known to have an atmosphere containing free oxygen, oceans of
            liquid water on its surface, and, of course, life.
          </p>
          <p>
            Earth is the fifth largest of the planets in the solar systm —
            smaller than the four gas giants, Jupiter, Saturn, Uranusand
            Neptune, but larger than the three other rocky planets,
          </p>
          <img src="https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=350" />
          <h2>The Earth’s rotation is gradually slowing.</h2>
          <p>
            This deceleration is happening almost imperceptibly, at
            approximately 17 milliseconds per hundred years, although the rate
            at which it occurs is not perfectly uniform. This has the effect of
            lengthening our days, but it happens so slowly that it could be as
            much as 140 million years before the length of a day will have
            increased to 25 hours.
          </p>
          <h2>The Earth was once believed to be the centre of the universe.</h2>
          <p>
            Due to the apparent movements of the Sun and planets in relation to
            their viewpoint, ancient scientists insisted that the Earth remained
            static, whilst other celestial bodies travelled in circular orbits
            around it. Eventually, the view that the Sun was at the centre of
            the universe was postulated by Copernicus, though this is also not
            the case.
          </p>
          <h2>Earth has a powerful magnetic field.</h2>
          <p>
            This phenomenon is caused by the nickel-iron core of the planet,
            coupled with its rapid rotation. This field protects the Earth from
            the effects of solar wind.
          </p>
          <h2>There is only one natural satellite of the planet Earth.</h2>
          <p>
            As a percentage of the size of the body it orbits, the Moon is the
            largest satellite of any planet in our solar systm. In real terms,
            however, it is only the fifth largest natural satellite.
          </p>
          <br />
        </div>
        <input class="read" id="readMars" name="marsRead" type="radio" />
        <label class="closeBig" for="closeMars"></label>
        <input class="read" id="closeMars" name="marsRead" type="radio" />
        <div class="panel">
          <h1>Gliese 667 Cc</h1>
          <p>
            Mars is the fourth planet from the sun. Befitting the red planet's
            bloody color, the Romans named it after their god of war. The Romans
            copied the ancient Greeks, who also named the planet after their god
            of war, Ares. Other civilizations also typically gave the planet
            names based on its color — for example, the Egyptians named it "Her
            Desher," meaning "the red one," while ancient Chinese astronomers
            dubbed it "the fire star."
          </p>
          <img src="https://1.bp.blogspot.com/-ou7Je3OVg6U/WYtxDqjNp_I/AAAAAAAACSQ/fsopS5VtFg4bmlv8hQNfiRYfJqTygCotQCLcBGAs/s2048/Martian%2Blandscape%2Bby%2BAmante%2BLombardi.jpg" />
          <h2>Mars and Earth have approximately the same landmass.</h2>
          <p>
            Even though Mars has only 15% of the Earth’s volume and just over
            10% of the Earth’s mass, around two thirds of the Earth’s surface is
            covered in water. Martian surface gravity is only 37% of the Earth’s
            (meaning you could leap nearly three times higher on Mars).
          </p>
          <h2>Mars is home to the tallest mountain in the solar systm.</h2>
          <p>
            Olympus Mons, a shield volcano, is 21km high and 600km in diameter.
            Despite having formed over billions of years, evidence from volcanic
            lava flows is so recent many scientists believe it could still be
            active.
          </p>
          <h2>Only 18 missions to Mars have been successful.</h2>
          <p>
            As of September 2014 there have been 40 missions to Mars, including
            orbiters, landers and rovers but not counting flybys. The most
            recent arrivals include the Mars Curiosity mission in 2012, the
            MAVEN mission, which arrived on September 22, 2014, followed by the
            Indian Space Research Organization’s MOM Mangalyaan orbiter, which
            arrived on September 24, 2014. The next missions to arrive will be
            the European Space Agency’s ExoMars mission, comprising an orbiter,
            lander, and a rover, followed by NASA’s InSight robotic lander
            mission, slated for launch in March 2016 and a planned arrival in
            September, 2016.
          </p>
          <h2>Mars has the largest dust storms in the solar systm.</h2>
          <p>
            They can last for months and cover the entire planet. The seasons
            are extreme because its elliptical (oval-shaped) orbital path around
            the Sun is more elongated than most other planets in the solar
            systm.
          </p>
          <br />
        </div>
        <input class="read" id="readJupiter" name="jupiterRead" type="radio" />
        <label class="closeBig" for="closeJupiter"></label>
        <input class="read" id="closeJupiter" name="jupiterRead" type="radio" />
        <div class="panel">
          <h1>Jupiter</h1>
          <p>
            Jupiter is the largest planet in the solar systm. Fittingly, it was
            named after the king of the gods in Roman mythology. In a similar
            manner, the ancient Greeks named the planet after Zeus, the king of
            the Greek pantheon.
          </p>
          <p>
            Jupiter helped revolutionize the way we saw the universe and
            ourselves in 1610, when Galileo discovered Jupiter's four large
            moons — Io, Europa, Ganymede and Callisto, now known as the Galilean
            moons. This was the first time that celestial bodies were seen
            circling an object other than Earth, major support of the Copernican
            view that Earth was not the center of the universe.
          </p>
          <img src="http://hanaleikauaivacation.com/wp-content/uploads/parser/jupiter-landscape-1.jpg" />
          <h2>Jupiter is the fourth brightest object in the solar systm.</h2>
          <p>
            Only the Sun, Moon and Venus are brighter. It is one of five planets
            visible to the naked eye from Earth.
          </p>
          <h2>
            The ancient Babylonians were the first to record their sightings of
            Jupiter.
          </h2>
          <p>
            This was around the 7th or 8th century BC. Jupiter is named after
            the king of the Roman gods. To the Greeks, it represented Zeus, the
            god of thunder. The Mesopotamians saw Jupiter as the god Marduk and
            patron of the city of Babylon. Germanic tribes saw this planet as
            Donar, or Thor.
          </p>
          <h2>Jupiter has the shortest day of all the planets.</h2>
          <p>
            It turns on its axis once every 9 hours and 55 minutes. The rapid
            rotation flattens the planet slightly, giving it an oblate shape.
          </p>
          <h2>Jupiter orbits the Sun once every 11.8 Earth years.</h2>
          <p>
            From our point of view on Earth, it appears to move slowly in the
            sky, taking months to move from one constellation to another.
          </p>
          <br />
        </div>
        <input class="read" id="readSaturn" name="saturnRead" type="radio" />
        <label class="closeBig" for="closeSaturn"></label>
        <input class="read" id="closeSaturn" name="saturnRead" type="radio" />
        <div class="panel">
          <h1>Saturn</h1>
          <p>
            Saturn is the sixth planet from the sun and the second largest
            planet in the solar systm. Saturn was the Roman name for Cronus, the
            lord of the Titans in Greek mythology. Saturn is the root of the
            English word "Saturday."
          </p>
          <p>
            Saturn is the farthest planet from Earth visible to the naked human
            eye, but it is through a telescope that the planet's most
            outstanding features can be seen: Saturn's rings. Although the other
            gas giants in the solar systm — Jupiter, Uranus and Neptune — also
            have rings, those of Saturn are without a doubt the most
            extraordinary.
          </p>
          <img src="http://ak0.picdn.net/shutterstock/videos/4049260/thumb/1.jpg" />
          <h2>Saturn can be seen with the naked eye.</h2>
          <p>
            It is the fifth brightest object in the solar systm and is also
            easily studied through binoculars or a small telescope.
          </p>
          <h2>
            Saturn was known to the ancients, including the Babylonians and Far
            Eastern observers.
          </h2>
          <p>
            It is named for the Roman god Saturnus, and was known to the Greeks
            as Cronus.
          </p>
          <h2>Saturn is the flattest planet.</h2>
          <p>
            Its polar diameter is 90% of its equatorial diameter, this is due to
            its low density and fast rotation. Saturn turns on its axis once
            every 10 hours and 34 minutes giving it the second-shortest day of
            any of the solar systm’s planets.
          </p>
          <h2>Saturn orbits the Sun once every 29.4 Earth years.</h2>
          <p>
            Its slow movement against the backdrop of stars earned it the
            nickname of “Lubadsagush” from the ancient Assyrians. The name means
            “oldest of the old”.
          </p>
          <br />
        </div>
        <input class="read" id="readUranus" name="uranusRead" type="radio" />
        <label class="closeBig" for="closeUranus"></label>
        <input class="read" id="closeUranus" name="uranusRead" type="radio" />
        <div class="panel">
          <h1>Uranus</h1>
          <p>
            Uranus is the seventh planet from the sun and the first to be
            discovered by scientists. Although Uranus is visible to the naked
            eye, it was long mistaken as a star because of the planet's dimness
            and slow orbit. The planet is also notable for its dramatic tilt,
            which causes its axis to point nearly directly at the sun.
          </p>
          <p>
            British astronomer William Herschel discovered Uranus accidentally
            on March 13, 1781, with his telescope while surveying all stars down
            to those about 10 times dimmer than can be seen by the naked eye.
            One "star" seemed different, and within a year Uranus was shown to
            follow a planetary orbit.
          </p>
          <img src="http://www.cosmosup.com/wp-content/uploads/2016/02/Uranus-Facts-About-the-Planet-Uranus-700x325.jpg" />
          <h2>
            Uranus was officially discovered by Sir William Herschel in 1781.
          </h2>
          <p>
            It is too dim to have been seen by the ancients. At first Herschel
            thought it was a comet, but several years later it was confirmed as
            a planet. Herscal tried to have his discovery named “Georgian Sidus”
            after King George III. The name Uranus was suggested by astronomer
            Johann Bode. The name comes from the ancient Greek deity Ouranos.
          </p>
          <h2>Uranus turns on its axis once every 17 hours, 14 minutes.</h2>
          <p>
            The planet rotates in a retrograde direction, opposite to the way
            Earth and most other planets turn.
          </p>
          <h2>Uranus makes one trip around the Sun every 84 Earth years.</h2>
          <p>
            During some parts of its orbit one or the other of its poles point
            directly at the Sun and get about 42 years of direct sunlight. The
            rest of the time they are in darkness.
          </p>
          <h2>Uranus is often referred to as an “ice giant” planet.</h2>
          <p>
            Like the other gas giants, it has a hydrogen upper layer, which has
            helium mixed in. Below that is an icy “mantle, which surrounds a
            rock and ice core. The upper atmosphere is made of water, ammonia
            and the methane ice crystals that give the planet its pale blue
            colour.
          </p>
          <br />
        </div>
        <input class="read" id="readNeptune" name="neptuneRead" type="radio" />
        <label class="closeBig" for="closeNeptune"></label>
        <input class="read" id="closeNeptune" name="neptuneRead" type="radio" />
        <div class="panel">
          <h1>Neptune</h1>
          <p>
            Neptune is the eighth planet from the sun. It was the first planet
            to get its existence predicted by mathematical calculations before
            it was actually seen through a telescope on Sept. 23, 1846.
            Irregularities in the orbit of Uranus led French astronomer Alexis
            Bouvard to suggest that the gravitational pull from another
            celestial body might be responsible. German astronomer Johann Galle
            then relied on subsequent calculations to help spot Neptune via
            telescope. Previously, astronomer Galileo Galilei sketched the
            planet, but he mistook it for a star due to its slow motion. In
            accordance with all the other planets seen in the sky, this new
            world was given a name from Greek and Roman mythology — Neptune, the
            Roman god of the sea.
          </p>
          <p>
            Only one mission has flown by Neptune – Voyager 2 in 1989 – meaning
            that astronomers have done most studies using ground-based
            telescopes. Today, there are still many mysteries about the cool,
            blue planet, such as why its winds are so speedy and why its
            magnetic field is offset.
          </p>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy8Dd14tbXAzh1iz-EJl9tulRwH7Bb-SxX6sXpKFDbqb-NKwpE" />
          <h2>Neptune was not known to the ancients.</h2>
          <p>
            It is not visible to the naked eye and was first observed in 1846.
            Its position was determined using mathematical predictions. It was
            named after the Roman god of the sea.
          </p>
          <h2>Neptune spins on its axis very rapidly.</h2>
          <p>
            Its equatorial clouds take 18 hours to make one rotation. This is
            because Neptune is not solid body.
          </p>
          <h2>Neptune is the smallest of the ice giants.</h2>
          <p>
            Despite being smaller than Uranus, Neptune has a greater mass. Below
            its heavy atmosphere, Uranus is made of layers of hydrogen, helium,
            and methane gases. They enclose a layer of water, ammonia and
            methane ice. The inner core of the planet is made of rock.
          </p>
          <h2>
            The atmosphere of Neptune is made of hydrogen and helium, with some
            methane.
          </h2>
          <p>
            The methane absorbs red light, which makes the planet appear a
            lovely blue. High, thin clouds drift in the upper atmosphere.
          </p>
        </div>
        <input class="read" id="readPluto" name="plutoRead" type="radio" />
        <label class="closeBig" for="closePluto"></label>
        <input class="read" id="closePluto" name="plutoRead" type="radio" />
        <div class="panel">
          <h1>Proxima Centauri b</h1>
          <p>
            Proxima Centauri b is a fascinating exoplanet located just over 4.2
            light-years from Earth, orbiting the red dwarf star Proxima
            Centauri. With a diameter of approximately 1.17 times that of Earth,
            it is classified as a terrestrial planet, potentially rocky in
            nature. This exoplanet has an orbital period of about 11.2 Earth
            days, placing it within the habitable zone of its star, where
            conditions may allow for liquid water to exist on its surface.
          </p>
          <p>
            The gravity on Proxima Centauri b is estimated to be around 1.1
            times that of Earth, suggesting that the planet's surface
            environment could be familiar to humans. However, its atmosphere
            remains largely unconfirmed. Speculation suggests it might possess a
            thin atmosphere, which is crucial for determining its potential
            habitability. The surface temperature can vary significantly due to
            its proximity to Proxima Centauri, and while it could be suitable
            for liquid water, the extent of this potential remains to be
            studied.
          </p>
          <img src={centuari} />
          <p>
            The landscape of Proxima Centauri b is likely to be rocky, featuring
            geological formations shaped by volcanic activity and impact
            cratering, which may reveal insights into the planet's history. As
            of now, no moons have been confirmed orbiting Proxima Centauri b,
            and its tectonic activity is unknown, although the planet's size and
            composition might support some level of geological movement. The
            presence of a magnetic field is also uncertain, which would play a
            significant role in protecting any atmosphere from stellar winds.
          </p>
          <p>
            Given its proximity to a red dwarf star, Proxima Centauri b
            experiences varying radiation levels, raising questions about its
            habitability. The planet's potential for supporting life has made it
            a target for future exploration, as researchers are eager to uncover
            whether it possesses the necessary conditions for life as we know
            it.
          </p>
        </div>
      </div>
    );
}
