/* Config Sample
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/configuration/introduction.html
 * and https://docs.magicmirror.builders/modules/configuration.html
 *
 * You can use environment variables using a `config.js.template` file instead of `config.js`
 * which will be converted to `config.js` while starting. For more information
 * see https://docs.magicmirror.builders/configuration/introduction.html#enviromnent-variables
 */
let config = {
	//address: "localhost",	// Address to listen on, can be:
	address: "0.0.0.0",	
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/",	// The URL path where MagicMirror² is hosted. If you are using a Reverse proxy
									// you must set the sub path here. basePath must end with a /
	//ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"],	// Set [] to allow all IP addresses
	ipWhitelist: [],
									// or add a specific IPv4 of 192.168.1.5 :
									// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
									// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
									// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false,			// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "",	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "",	// HTTPS Certificate path, only require when useHttps is true

	language: "vi",
	locale: "vi-VN",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 24,
	units: "metric",

	modules: [
		{
			module: "alert",
			classes: 'always'
		},
		{
			module: "updatenotification",
			position: "top_bar",
			classes: 'always'
		},
		{
			module: "clock",
			position: "top_left",
			classes: 'always'
		},
		
		{
			module: "MMM-VietNamEventsCalendar",
			position: "top_left",
			classes: 'default',
			config: {
				lunarColor: "LightGreen",
				calendars: [/*
				{
					url: "https://calendar.google.com/calendar/ical/en.vietnamese%23holiday%40group.v.calendar.google.com/public/basic.ics",
					color: "Violet",
					title: "vn calen"
				}, 
			{
					url: "https://calendar.google.com/calendar/ical/khangvipro37%40gmail.com/private-587224217c0a73ca05ade87bd7cd1f94/basic.ics",
					color: "Yellow",
					title: "Lich cua khang"
				}*/], 
				personalDateEvent:[
				{
					day: 21,
					month: 10,
					title: "Khang BirthDay <3"
				}]
			}
		},
		{
			module: "calendar",
			classes: 'khang',
			header: "LICH CUA KHANG",
			position: "top_left",
			config: {
				calendars: [
					{
						fetchInterval: 7 * 24 * 60 * 60 * 1000,
						symbol: "calendar-check",
						maximumNumberOfDays: 7,
						//maximumEntries: 3,
						url: "https://calendar.google.com/calendar/ical/khangvipro37%40gmail.com/private-587224217c0a73ca05ade87bd7cd1f94/basic.ics"
					//	url: "https://ics.calendarlabs.com/76/mm3137/US_Holidays.ics"  
						
					}
				]
			}
		},
		{
			module: "calendar",
			classes: 'phuc',
			header: "LICH CUA PHUC",
			position: "top_left",
			config: {
				calendars: [
					{
						fetchInterval: 7 * 24 * 60 * 60 * 1000,
						symbol: "calendar-check",
						maximumNumberOfDays: 7,
						//maximumEntries: 3,
				//		url: "https://calendar.google.com/calendar/ical/khangvipro37%40gmail.com/private-587224217c0a73ca05ade87bd7cd1f94/basic.ics"
						url: "https://calendar.google.com/calendar/ical/fd53963766037ab0a9b70dd467633f8b8637dc292f35feaad41134e3545147e5%40group.calendar.google.com/private-99ff07cdae05e5d7179a46de26e70e1b/basic.ics"  
						
					}
				]
			}
		},
		{
			 module: 'MMM-GmailFeed',
			 classes: 'khang',
			 position: 'top_right',
			 config: {
			  username: 'khang.nguyen2013432@hcmut.edu.vn',
			  password: 'szvb faiv pjyn zjqt',
			  updateInterval: 60000,
			  maxEmails: 5,
			  maxSubjectLength: 38,
			  maxFromLength: 15,
			  playSound: true,
			  autoHide: true,
			  displayMode: "table",
			 }
			
		},
		{
			 module: 'MMM-GmailFeed',
			 classes: 'phuc',
			 position: 'top_right',
			 config: {
			  username: 'khangvipro37@gmail.com',
			  password: 'knvn jhfn wegm xodv',
			  updateInterval: 60000,
			  maxEmails: 5,
			  maxSubjectLength: 38,
			  maxFromLength: 15,
			  playSound: true,
			  autoHide: true,
			  displayMode: "table",
			 }
			
		},
		{
			  module: 'MMM-Tools',
			  position: 'top_right',
			  classes: 'default',
			  config: {
				device : "RPI", // "RPI" is also available
				refresh_interval_ms : 10000,
				warning_interval_ms : 1000 * 60 * 5,
				enable_warning : true,
				warning : {
				  CPU_TEMPERATURE : 65,
				  GPU_TEMPERATURE : 65,
				  CPU_USAGE : 75,
				  STORAGE_USED_PERCENT : 80,
				  MEMORY_USED_PERCENT : 80
				}
			  }
		},
		{
		    module: "MMM-CalendarExt3Agenda",
		    position: "top_right",
		    classes: 'always',
		    language: "vi",
		    header: "Lich trinh cua toi",
		    config: {
			  instanceId: "basicCalendar",
			  firstDayOfWeek: 1,
			  startDayIndex: -1,
				   endDayIndex: 10,
			  alendarSet: ['lich_hoc'],
			
		  }
		},
		{
		    module: "MMM-CalendarExt3",
		    position: "bottom_bar",
		    classes: 'always'
		},
		{
			module: "compliments",
			classes: 'always',
			position: "lower_third"
		},
		{
			module: 'MMM-Remote-Control',
			classes: 'always',
			// uncomment the following line to show the URL of the remote control on the mirror
			 position: 'bottom_right',
			// you can hide this module afterwards from the remote control itself
			config: {
				customCommand: {},  // Optional, See "Using Custom Commands" below
				showModuleApiMenu: true, // Optional, Enable the Module Controls menu
				secureEndpoints: true, // Optional, See API/README.md
				// uncomment any of the lines below if you're gonna use it
				// customMenu: "custom_menu.json", // Optional, See "Custom Menu Items" below
				// apiKey: "", // Optional, See API/README.md for details
				// classes: {} // Optional, See "Custom Classes" below
			}
		},
		{
			  module: 'MMM-Pir',
			  classes: 'always',
			  position: 'bottom_left',
			  config: {
				debug: false,
				Display: {
				  timeout: 2 * 60 * 1000,
				  animate: true,
				  style: 1,
				  mode: 0
				},
				Pir: {
				  mode: 0,
				  gpio: 21
				}
			  }
			}, 
		{
			module: 'MMM-Gestures',
			classes: 'always'
		},
		{
			module: 'MMM-Face-Reco-DNN',
			classes: 'always',
    		config: {
    			  // Logout 5 seconds after user was not detecte anymore, if they will be detected between this 15
			      // Seconds, they delay will start again
			      logoutDelay: 5000,
			      // How many time the recognition starts, with a RasPi 3+ it would be good every 2 seconds
			      checkInterval: 2000,
			      // Module set used for when there is no face detected ie no one is in front of the camera
			      noFaceClass: 'noface',
			      // Module set used for when there is an unknown/unrecognised face detected
			      unknownClass: 'unknown',
			      // Module set used for when there is a known/recognised face detected
			      knownClass: 'known',
			      // Module set used for strangers and if no user is detected
			      defaultClass: 'default',
			      // Set of modules which should be shown for any user ie when there is any face detected
			      everyoneClass: 'everyone',
			      // Set of modules that are always shown - show if there is a face or no face detected
			      alwaysClass: 'always',
			      // xml to recognize with haarcascade
			      cascade: 'modules/MMM-Face-Reco-DNN/model/haarcascade_frontalface_default.xml',
			      // pre encoded pickle with the faces
			      encodings: 'modules/MMM-Face-Reco-DNN/model/encodings.pickle',
			      // Brightness (0-100)
			      brightness: 0,
			      // Contrast (0-127)
			      contrast: 0,
			      // Rotate camera image (-1 = no rotation, 0 = 90°, 1 = 180°, 2 = 270°)
			      rotateCamera: -1,
			      // method of face recognition (dnn = deep neural network, haar = haarcascade)
			      method: 'dnn',
			      // which face detection model to use. "hog" is less accurate but faster on CPUs. "cnn" is a more accurate
			      // deep-learning model which is GPU/CUDA accelerated (if available). The default is "hog".
			      detectionMethod: 'hog',
			      // how fast in ms should the modules hide and show (face effect)
			      animationSpeed: 0,
			      // Path to Python to run the face recognition (null / '' means default path, with Bookworm you need to set the virutal environment like /home/youruser/python-facereco/bin/python3. You can also find out the correct path if you are activated the virtual environment and run "which python3")
			      pythonPath: null,
			      // Boolean to toggle welcomeMessage
			      welcomeMessage: true,
			      // Dictionary for person name mapping in welcome message
			      // Allows for displaying name with complex character sets in welcome message
			      // e.g. jerome => Jérôme, hideyuki => 英之, mourad => مراد
			      usernameDisplayMapping: null,
			      // Save some pictures from recognized people, if unknown we save it in folder "unknown"
			      // So you can extend your dataset and retrain it afterwards for better recognitions
			      extendDataset: false,
			      // if extenDataset is set, you need to set the full path of the dataset
			      dataset: 'modules/MMM-Face-Reco-DNN/dataset/',
			      // How much distance between faces to consider it a match. Lower is more strict.
			      tolerance: 0.45,
			      // allow multiple concurrent user logins, 0=no, any other number is the maximum number of concurrent logins
			      multiUser: 0,
			      // resoltuion of the image
			      resolution: [1920, 1080],
			      // width of the image for processing
			      processWidth: 500,
			      // output image on mm
			      outputmm: 0,
			      // turn on extra debugging 0=no, 1=yes
			      debug: 0,
			      // If specified, conditionally run face recognition when a notification with a name as specified by this 
			      // option is received with a boolean true/false payload. A True payload activates face recognition, False 
			      // deactivates it. An empty string here disables this functionality so face recognition always runs. Use for 
			      // exmaple with with MMM-Pir with notification name 'MMM_PIR-SCREEN_POWERSTATUS' to only run face 
			      // recognition when screen is on.
			      external_trigger_notification: '',
			    }
		},
		
		{
			module: 'MMM-page-indicator',
			classes: 'always',
			position: 'bottom_bar',
			config: {
				pages: 3,
			}
		},
		{
			module: 'MMM-pages',
			classes: 'always',
			config: {
					modules:
						[[ "MMM-GmailFeed" ,"calendar","MMM-Remote-Control","MMM-VietNamEventsCalendar","MMM-Tools","compliments"],
						 ["MMM-CalendarExt3"],
						 ["MMM-CalendarExt3Agenda"]],
					fixed: [ "clock", "MMM-page-indicator","MMM-Face-Reco-DNN","MMM-Gesture","MMM-Pir","MMM-pages"]
                // hiddenPages: {
                //     "screenSaver": [ "clock", "MMM-SomeBackgroundImageModule" ],
                //     "admin": [ "MMM-ShowMeSystemStatsModule", "MMM-AnOnScreenMenuModule" ],
                // },
        }
    	}
		/*
		
		
		{
		    module: "MMM-CalendarExt3",
		    position: "bottom_bar",
		},
/*
		{
			module: 'MMM-page-indicator',
			position: 'bottom_bar',
			config: {
				pages: 3,
			}
		},
		
		{
			module: "weather",
			position: "top_right",
			classes: 'always',
			config: {
				location: "ThànhphốHồChíMinh",
				locationid: "1566083",
				apiKey: "051e061779258242dcdebd2bf3c52162", 
				
			}
		},
		{
			module: "weather",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				weatherProvider: "openmeteo",
				type: "forecast",
				lat: 40.776676,
				lon: -73.971321
			}
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "New York Times",
						url: "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},
		
		{
			module: 'MMM-pages',
			config: {
					modules:
						[[ "MMM-GmailFeed", "compliments" ,"calendar"],
						 ["MMM-CalendarExt3"  ],
						 ["MMM-CalendarExt3Agenda"]],
					fixed: [ "clock", "MMM-page-indicator"]
                // hiddenPages: {
                //     "screenSaver": [ "clock", "MMM-SomeBackgroundImageModule" ],
                //     "admin": [ "MMM-ShowMeSystemStatsModule", "MMM-AnOnScreenMenuModule" ],
                // },
        }
    	}
    	*/
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") { module.exports = config; }
