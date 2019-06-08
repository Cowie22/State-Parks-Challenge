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
INSERT into parks (name, longitude, latitude, location, price, activities, hours) VALUES ("Heeia State Park", 21.4408, -157.8099, "46-465 Kamehameha Hwy, Kaneohe, HI 96744", "Depends on Activity Reservations", "Boat Tours, Kayaking, Snorkeling, Sailing, Paddel Boarding and Hiking", "Mon to Sun,  7am to Sunset");
INSERT into parks (name, longitude, latitude, location, price, activities, hours) VALUES ("Ahupuaʻa ʻO Kahana State Park", 21.544, -157.884, "52-222 Kamehameha Hwy, Kaaawa, HI 96730", "No Entrance Fee!", "Beaches, Dogs on Leash, Hiking, Sightseeing, Camping, Fishing, Boating and Hunting", "7am to 7:45pm");
INSERT into parks (name, longitude, latitude, location, price, activities, hours) VALUES ("Kōkeʻe State Park", 22.1396, -159.6394, "Hanapepe, HI 96716", "No Entrance Fee!", "Hiking, Camping and Museum Visit", "9am to 4pm");
INSERT into parks (name, longitude, latitude, location, price, activities, hours) VALUES ("Lava Tree State Park", 19.4837, -154.9023, "HI-132, Pāhoa, HI 96778", "No Entrance Fee!", "Hiking, Sightseeing and Volcanoes", "Daily During Daylight Hours");
INSERT into parks (name, longitude, latitude, location, price, activities, hours) VALUES ("Mackenzie State Park", 19.4373, -154.8652, "HI-137, Pāhoa, HI 96778", "No Entrance Fee!", "Hiking, Camping, Golf, Fishing, Disc Golf and Sightseeing", "Daily During Daylight Hours");
INSERT into parks (name, longitude, latitude, location, price, activities, hours) VALUES ("Palaʻau State Park", 21.1725, -157.0085, "Highway 47, Ho'olehua, HI 96729", "No Entrance Fee!", "Camping, Hiking and Sightseeing", "Open Daily");
INSERT into parks (name, longitude, latitude, location, price, activities, hours) VALUES ("Wailua River State Park", 22.0424, -159.3355, "Highway 56 Waialua, HI 96791", "No Entrance Fee!", "Hiking, Boat Tours and Sightseeing", "Daily During Daylight Hours");
INSERT into parks (name, longitude, latitude, location, price, activities, hours) VALUES ("Waimea Canyon State Park", 22.0715, -159.6617, "Waimea Canyon Dr, Waimea, HI 96796", "No Entrance Fee!", "Hiking, Fishing, Hunting and Sightseeing", "Daily During Daylight Hours");
INSERT into parks (name, longitude, latitude, location, price, activities, hours) VALUES ("Haleakalā National Park", 20.7204, -156.1552, "Makawao, HI 96768", "Per Vehicle ($25), Per Person – Pedestrian/Bicycle Rider: ($12), Per Motorbike ($20), Tri Park Annual Pass ($30)", "Hiking, Sightseeing, Biking, Horseback Riding, Ziplining, Camping and Helicopter Tours", "24 hours a day year-round");
INSERT into parks (name, longitude, latitude, location, price, activities, hours) VALUES ("Hawaii Volcanoes National Park", 19.4194, -155.2885, "Hawaii Volcanoes National Park, HI 96718", "$25 per vehicle or $20 per motorcycle", "Hiking, Volcanoes, Sightseeing, Lava Tubes, Museums, Petroglyphs, Steam Vents, Bird Watching, Sea Arches, Craters", "24 hours a day, every day of the year");


/*  Execute this file from the command line by typing:
 *    mysql -u root -p < schema.sql
 *  to create the database and the tables.*/