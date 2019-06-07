/*  Execute this file from the command line by typing:
 *    mysql -u root -p < schema.sql
 *  to create the database and the tables.*/

DROP DATABASE IF EXISTS state_parks;

CREATE DATABASE state_parks;

USE state_parks;

CREATE TABLE parks (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(50) NOT NULL,
  longitude integer NOT NULL,
  latitude integer NOT NULL,
  location varchar(200) NOT NULL,
  price varchar(200) NOT NULL,
  activities varchar(200) NOT NULL,
  hours varchar(200) NOT NULL,
  PRIMARY KEY (id)
);

-- Populates California State Parks

INSERT into parks (name, longitude, latitude, location, price, activities, hours) VALUES ("Akaka Falls State Park", 19.8539, -155.1522, "Akaka Falls Rd, Honomu, HI 96728", "$5.00 per car or $1 per person for pedestrians. No charge for Hawaii residents", "Hiking and Sightseeing", "8:30am. to 6pm");
INSERT into parks (name, longitude, latitude, location, price, contact, hours) VALUES ("Heeia State Park", 21.4408, -157.8099, "46-465 Kamehameha Hwy, Kaneohe, HI 96744", "Depends on Activity Reservations", "Boat Tours, Kayaking, Snorkeling, Sailing, Paddel Boarding and Hiking", "Mon to Sun,  7am to Sunset");
INSERT into parks (name, longitude, latitude, location, price, contact, hours) VALUES ("Ahupuaʻa ʻO Kahana State Park", 21.544, -157.884, "52-222 Kamehameha Hwy, Kaaawa, HI 96730", "No Entrance Fee!", "Beaches, Dogs on Leash, Hiking, Sightseeing, Camping, Fishing, Boating and Hunting", "7am to 7:45pm");
INSERT into parks (name, longitude, latitude, location, price, contact, hours) VALUES ("Kōkeʻe State Park", 22.1396, -159.6394, "Hanapepe, HI 96716", "No Entrance Fee!", "Hiking, Camping and Museum Visit", "9am to 4pm");
INSERT into parks (name, longitude, latitude, location, price, contact, hours) VALUES ("Lava Tree State Park", 19.4837, -154.9023, "HI-132, Pāhoa, HI 96778", "No Entrance Fee!", "Hiking, Sightseeing, Volcanoes", "Daily During Daylight Hours");
INSERT into parks (name, longitude, latitude, location, price, contact, hours) VALUES ("Mackenzie State Park", 6950, 7700);
INSERT into parks (name, longitude, latitude, location, price, contact, hours) VALUES ("Palaau State Park", 6950, 7400);
INSERT into parks (name, longitude, latitude, location, price, contact, hours) VALUES ("Wailua River State Park", 6950, 7620);
INSERT into parks (name, longitude, latitude, location, price, contact, hours) VALUES ("Waimea Canyon State Park", 6330, 6950);
INSERT into parks (name, longitude, latitude, location, price, contact, hours) VALUES ("Haleakala National Park", 6330, 6950);
INSERT into parks (name, longitude, latitude, location, price, contact, hours) VALUES ("Hawaii Volcanoes National Park", 6950, 7220);


/*  Execute this file from the command line by typing:
 *    mysql -u root -p < schema.sql
 *  to create the database and the tables.*/