Yes, I know. Microsoft's spying on the masses is hardly news. It's old hat and they're not the only ones doing it by a long shot. Every company you give money to channels your money into some kind of marketing analysis with the laser sights focused somehow on you and your stuff. Supermarkets like Winn-Dixie or Wal-Mart use them to such a laser-refined edge that they know when your daughter is pregnant before you do. It seems like a decent man just can't escape this dragnet without going off-grid and living like Jeremiah Johnson (I've tried that too, and failed spectacularly when I ran into a grizzly. More on that later ).
But let's not fall on our sword just yet. You can in fact escape any chance of law enforcement, governments or hackers getting a hold of that data, and that's our aim, as when your data is shared with governments or criminals that abuse this information, well, a lot of nasty surprises come down the pike. Below is Microsoft's privacy statement and FAQ regarding the Diagnostics Tracking Service that comes with Windows 10 :
"As you use Windows, we collect performance and usage information that helps us identify and troubleshoot problems as well as improve our products and services. We recommend that you select Full for this setting ."
 
Full data includes all Basic and Enhanced data, and also turns on advanced diagnostic features that collect additional data from your device, such as system files or memory snapshots, which may unintentionally include parts of a document you were working on when a problem occurred. This information helps us further troubleshoot and fix problems. If an error report contains personal data, we won’t use that information to identify, contact, or target advertising to you. This is the recommended option for the best Windows experience and the most effective troubleshooting .
Them's Microsoft's words, not mine, and note also that only on Enterprise Edition can one turn Diagnostics Tracking Service off completely. Diagnostics Tracking Service consists of these files :
t elemetry.asm- windowsdefault.json
diagtrack.dll
utc.app.json
utcresources.dll
I t's not likely anyone can lockdown Windows 10 enough to know what they send or don't send either by laptop, PC or cell phone. As Ars Technica has found out, it's impossible to know why Windows 10 can't seem to stop talking to Microsoft's servers. Furthermore, Windows takes system files or memory snapshots, which may inadvertently include PARTS OF A DOCUMENT YOU WERE WORKING ON when a problem occurred. Note that Android isn't much different. It has a similar data collection policy as does Mac OS .
Windows Privacy Settings
W indows 10 comes with some privacy settings turned on and some turned off. You can open up the Settings app and tic off what you like or don't, but know that they're all tied to your Unique Advertising Identifier. This Identifier is shared across other apps you use to allow Microsoft to spy on you and show you targeted ads in much the same way Wal-Mart does with your Sam's Club card. Corporations share this with each other and some sell it outright for truckloads of cash - as do Search engines like Bing and Google. With Bing Search sitting there in the start menu, you can bet you rubber-flesh copy of Evil Dead that any search queries will not stay private. They'll be outed just as if you typed them into Bing itself. Even URLs get sent to Microsoft for validation purposes so it goes without saying that some cellar doors should remain shut. Permanently .
Cortana
Cortana comes with Windows 10 automatically enabled after install. With this on you consent to Microsoft to grant a personal assistant of sorts, one that'll send data about your activities (including applications you run, GPS locations, browsing history) back and forth between your PC and Microsoft. It also includes your handwriting and voice imprint. You can disable these within Speech, Inking & Typing within Privacy settings, but know that Cortana isn't unique in this kind of privacy abuse, as Google Now and Siri do the same thing .
It should be obvious that this is a Very Bad Thing if you plan on doing anything remotely shady on the Deep Web. If you absolutely must use Windows 10 (which I strongly recommend you do not), you must -above all else- disable data logging . Here's how .
Disable Data Logging in Windows 10
A few of these fixes are a bit overkill, and if you're not sure what to do then stick to the "before installation" and "after installation" parts. DON'T start mucking about with the Powershell or the registry editor if you don't have at least a good idea of what you're doing though. This goes a bit farther than merely being 'computer literate', obviously, but it illustrates how dangerous Windows really is to anonymity .
Before/During Installation
Do not use Express Settings. Hit Customize, and make sure everything is turned off. It's strongly preferred that you use a local account with Windows 10 .
After Installation
Head to Settings > Privacy, and disable everything, unless there are some things you really need. While within the Privacy page, go to Feedback, select Never in the first box, and Basic in the second box .
Head to Settings > Update and Security > Advanced Options > Choose how updates are delivered, and turn the first switch off .
Disable Cortana by right clicking the Search bar/icon .
(Optional) Disable web search in Search by going to Settings, and turning off Search online and include web results .
Getting More Complex
Open up the Command Prompt by launching CMD as an administrator (hit windows key or click start menu button, type "cmd" then right click on the command prompt icon at the top of the list and select "run as administrator"), then enter the following :
sc delete DiagTrack
sc delete dmwappushservice
echo "" > C:\ProgramData\Microsoft\Diagnosis ETLLogsAutoLogger\AutoLogger-Diagtrack-Listener.etl
Open up the Group Policy Editor by launching gpedit.msc as an administrator (same method as cmd ).
Go through Computer Configuration > Administrative Templates > Windows Components > Data Collection and Preview Builds. Double click Telemetry, hit Disabled, then apply .
While still in the Group Policy Editor, go through Computer Configuration > Administrative Templates > Windows Components > OneDrive, double click Prevent the usage of OneDrive for file storage, hit Enabled, then apply .
Open up the Registry Editor by launching regedit as an administrator (yet again same method as cmd ).
Go through HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\DataCollection, select AllowTelemetry, change its value to 0, then apply .
First, download the Take Ownership tweak here: http://www.howtogeek.com/howto/windows-vista/add-take-ownership-to-explorer-right-click-menu-in-vista/ and enable it .
Then, head to the Hosts File by going to
C:\Windows\System32\Drivers\Etc ,
and take ownership of the hosts file, then add the following IPs into it (using notepad or whatever text editor you prefer ).
127.0.0.1 vortex.data.microsoft.com
127.0.0.1 vortex-win.data.microsoft.com
127.0.0.1 telecommand.telemetry.microsoft.com
127.0.0.1 telecommand.telemetry.microsoft.com.nsatc.net
127.0.0.1 oca.telemetry.microsoft.com
127.0.0.1 oca.telemetry.microsoft.com.nsatc.net
127.0.0.1 sqm.telemetry.microsoft.com
127.0.0.1 sqm.telemetry.microsoft.com.nsatc.net
127.0.0.1 watson.telemetry.microsoft.com
127.0.0.1 watson.telemetry.microsoft.com.nsatc.net
127.0.0.1 redir.metaservices.microsoft.com
127.0.0.1 choice.microsoft.com
127.0.0.1 choice.microsoft.com.nsatc.net
127.0.0.1 df.telemetry.microsoft.com
127.0.0.1 reports.wes.df.telemetry.microsoft.com
127.0.0.1 services.wes.df.telemetry.microsoft.com
127.0.0.1 sqm.df.telemetry.microsoft.com
127.0.0.1 telemetry.microsoft.com
127.0.0.1 watson.ppe.telemetry.microsoft.com
127.0.0.1 telemetry.appex.bing.net
127.0.0.1 telemetry.urs.microsoft.com
127.0.0.1 telemetry.appex.bing.net:443
127.0.0.1 settings-sandbox.data.microsoft.com
127.0.0.1 vortex-sandbox.data.microsoft.com
127.0.0.1 telemetry .*
Additional Fixes :
Replace Microsoft Edge/Internet Explorer with Firefox, Chromium, or any forks/variations you want. Note however that if you install Chrome, you're just choosing to have your data stolen by Google instead of Microsoft if you're surfing naked (i.e. without Tor ).
Replace Windows Media Player with VLC or MPC-HC .
Replace Groove Music with Foobar2000, Winamp, or MusicBee .
Replace Photos/Windows Photo Viewer with ImageGlass or IrfanView .
Some of you are shaking your heads at this, and I agree with your assessment that this barely scratches the surface of what Microsoft's nefarious operating system is capable of doing. This plugs just a few holes but there are just too many to fill if you need rock-solid anonymity. For this reason alone you should use Linux (Tor with Tails) if at all possible 