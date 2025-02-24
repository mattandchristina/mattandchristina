let topTitleDiv = "<h4></h4>";

let titleDiv =
  "<h1>Dear Friends & Family,</h1>";

let bylineDiv = "<p>By Juan Francisco Saldarriaga and Michael Krisch</p>";

let descriptionDiv = 
  '<h1 style="text-align:right">With love, Christina & Matt</h1>' +
  '<p style="text-align:center">Scroll to continue<br>▼</p>';

let footerDiv =
  '<p>This story is based on data by the <a href="http://web.mta.info/developers/turnstile.html">Metropolitan Transit Authority</a> and reporting by the <a href="https://www.nytimes.com/2020/04/09/nyregion/coronavirus-queens-corona-jackson-heights-elmhurst.html">New York Times</a>, <a href="https://ny.curbed.com/2020/3/24/21192454/coronavirus-nyc-transportation-subway-citi-bike-covid-19">Curbed</a>, and <a href="https://thecity.nyc/2020/03/subway-ridership-plunge-deepest-at-big-manhattan-stations.html">The City</a>.</p>' +
  '<p><a href="https://www.mapbox.com/about/maps/" target="_blank">© Mapbox</a> | <a href="http://www.openstreetmap.org/about/" target="_blank">© OpenStreetMap</a> | <a href="https://brown.columbia.edu">The Brown Institute for Media Innovation</a></p>';

let divChapter1 =
  "<h3>This is where we met</h3>" +
  '<img src="images/Chapter_1_Image.jpg">' +
  '<p class="imageCredit"><a href="http://www.metouhey.com/">Max Touhey</a></p>' +
  "<p>All around the city subway ridership plummeted during the first two weeks of the Covid-19 outbreak. On average, stations saw a decrease of more than 50% in entries and exits between March 6th and March 20th, 2020. But as this map shows, the drop in ridership did not happen uniformly throughout the city.</p>";

let divChapter2 =
  "<h3>Wedding</h3>" +
  '<img src="images/Chapter_2_Image.jpg">' +
  '<p class="imageCredit"><a href="https://www.nytimes.com/2020/04/09/nyregion/coronavirus-queens-corona-jackson-heights-elmhurst.html">The New York Times</a></p>' +
  "<p>Income inequality certainly played a role in the uneven distribution of subway usage. By overlaying median household income and change in subway entries it becomes clear that those stations with less change are located in low-income areas, specially in the Bronx and outer Queens and Brooklyn.</p>";

let divChapter3 =
  "<h3>Accommodation</h3>" +
  '<img src="images/Chapter_3_Image.jpg">' +
  '<p class="imageCredit"><a href="https://www.nytimes.com/2020/04/09/nyregion/coronavirus-queens-corona-jackson-heights-elmhurst.html">The New York Times</a></p>' +
  "<p>Elmhurst Hospital Center has been identified as one of the hospitals most overwhelmed by the number of patients with COVID-19 it has received. Located in a low-middle-income area of the city, with a median household income of around $50,000, the hospital serves one of the most diverse and immigrant dense areas of the city. The three subway stations around the hospital have all seen relatively small change in their usage compare to the rest of the city.</p>";

let divChapter4 =
  "<h3 style='max-width:600px; margin-left:auto; margin-right:auto'>Overall collapse of subway usage</h3>" +
  '<div style="max-width:1200px; margin-left:auto; margin-right:auto"><img src="pic.jpg"></div>' +
  '<div style="max-width:600px; margin-left:auto; margin-right:auto">' +
  '<script async src="https://tally.so/widgets/embed.js"></script>' +
  '<iframe src="https://tally.so/r/3yd0r0?transparentBackground=1" width="100%" height="580" frameborder="0" marginheight="0" marginwidth="0" title="Tally Form"></iframe>' +
'</div>' + 
  "<p style='max-width:600px; margin-left:auto; margin-right:auto'>That being said, other transportation networks have fared differently. For example, after a similar decline right after the state of emergency was declared, Citibike has seen its number of users reach and even surpass 2019 levels. City buses, on the other hand, also remain underutilized compared to their usage pre-pandemic.</p>";

  var config = {
  style: "mapbox://styles/ch3427/cm2m8f1n8001u01qs9q1s07n6",
  accessToken: "pk.eyJ1IjoiY2gzNDI3IiwiYSI6ImNtMm03eTkycTBrYXoyaXE4bzNkYzBrZnMifQ.ZrXH-n96h30QylZrCLxJCw",
  showMarkers: false,
  markerColor: "#3FB1CE",
  theme: "light",
  use3dTerrain: false,
  topTitle: topTitleDiv,
  title: titleDiv,
  subtitle: "",
  byline: bylineDiv,
  description: descriptionDiv,
  //footer: footerDiv,
  chapters: [
    {
      id: "overallMap",
      alignment: "left",
      hidden: false,
      chapterDiv: divChapter1,
      location: {
        center: [-74, 40.725],
        zoom: 10,
        zoomSmall: 9,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "wedding-1",
      alignment: "left",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter2,
      location: {
        center: [-73.9601, 44.2821],  // Lake Placid coordinates (Longitude: -73.9601, Latitude: 44.2821)
        zoom: 10,
        zoomSmall: 9,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "medianIncome",
          opacity: 1,
          duration: 300,
        },
      ],
      onChapterExit: [
        {
          layer: "medianIncome",
          opacity: 0,
          duration: 300,
        },
      ],
    },
    {
      id: "elmhurstHospital",
      alignment: "left",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter3,
      location: {
        center: [139.6917, 35.6895],  // Tokyo coordinates (Longitude: 139.6917, Latitude: 35.6895)
        zoom: 10,
        zoomSmall: 9,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "medianIncome",
          opacity: 0,
          duration: 300,
        },
      ],
      onChapterExit: [
        {
          layer: "medianIncome",
          opacity: 0,
          duration: 300,
        },
      ],
    },
    {
      id: "Chapter4",
      alignment: "full",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter4,
      location: {
        center: [-73.886201, 40.744566],
        zoom: 16,
        zoomSmall: 14,
        pitch: 40,
        bearing: -7,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "medianIncome",
          opacity: 0,
          duration: 300,
        },
      ],
      onChapterExit: [
        {
          layer: "medianIncome",
          opacity: 0,
          duration: 300,
        },
      ],
    },
  ],
};