<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/28/section/195
// Platform Version: V1
// Module ID: 28
// Module Name: OSINT: Corporate Recon
// Module Difficulty: Hard
// Section ID: 195
// Section Title: Internal Leaks
// Page Title: OSINT: Corporate Recon
// Page Number: 21
-->

# Internal Leaks

**Module Name:** OSINT: Corporate Recon **Page Number:** 21

#### OSINT: CORPORATE RECON

# Internal Leaks

#### Exiftool - Metadata

``` shell-session
[!bash!]$ exiftool Document.pdf

ExifTool Version Number         : 12.00
File Name                       : Document.pdf
Directory                       : .
File Size                       : 4.0 MB
File Modification Date/Time     : 2020:04:24 16:23:19+02:00
File Access Date/Time           : 2020:07:30 00:30:51+02:00
File Inode Change Date/Time     : 2020:07:30 00:30:51+02:00
File Permissions                : rw-r--r--
File Type                       : PDF
File Type Extension             : pdf
MIME Type                       : application/pdf
PDF Version                     : 1.7
Linearized                      : No
Encryption                      : Standard V4.4 (128-bit)
User Access                     : Print, Extract, Print high-res
Create Date                     : 2020:04:08 10:53:37+02:00
Creator                         : Adobe InDesign CC 13.1 (Macintosh)
Modify Date                     : 2020:04:24 16:15:30+02:00
Has XFA                         : No
Language                        : EN-US
XMP Toolkit                     : Adobe XMP Core 5.4-c006 80.159825, 2016/09/16-03:31:08
Metadata Date                   : 2020:04:24 16:15:30+02:00
Creator Tool                    : Adobe InDesign CC 13.1 (Macintosh)
Instance ID                     : uuid:da179e62-c27b-48f1-8518-538ba698b1e7
Original Document ID            : xmp.did:f625069d-c7b1-4b2c-8945-87eaed62b00c
Document ID                     : xmp.id:46618852-5c98-4e71-85a5-c3c9125f857d
Rendition Class                 : proof:pdf
Derived From Instance ID        : xmp.iid:0849cef1-c44c-4813-9603-2cdaa291c2dd
Derived From Document ID        : xmp.did:7cd2e215-5e40-4c22-8fbe-235713816a03
Derived From Original Document ID: xmp.did:f649061d-c7b1-4b2c-8945-87eadb62a02c
Derived From Rendition Class    : default
History Action                  : converted
History Parameters              : from application/x-indesign to application/pdf
History Software Agent          : Adobe InDesign CC 13.1 (Macintosh)
History Changed                 : /
History When                    : 2020:04:08 10:53:38+02:00
Format                          : application/pdf
Producer                        : Adobe PDF Library 15.0
Trapped                         : False
Page Layout                     : TwoPageRight
Page Count                      : 120
```

#### Download Report

``` shell-session
[!bash!]$ wget https://TARGET_COMPANY.azureedge.net/<SNIP>.pdf -O Report.pdf
```

#### Exiftool - Metadata of Generated Report

``` shell-session
[!bash!]$ exiftool Report.pdf

ExifTool Version Number         : 12.00
File Name                       : Report.pdf
Directory                       : .
File Size                       : 12 kB
File Modification Date/Time     : 2020:07:30 00:52:08+02:00
File Access Date/Time           : 2020:07:30 00:52:08+02:00
File Inode Change Date/Time     : 2020:07:30 00:52:08+02:00
File Permissions                : rw-r--r--
File Type                       : PDF
File Type Extension             : pdf
MIME Type                       : application/pdf
PDF Version                     : 1.5
Linearized                      : Yes
Author                          : Lars Doe
Company                         : Microsoft
Create Date                     : 2020:07:20 09:10:18-05:00
Modify Date                     : 2020:07:28 14:10:29-05:00
Language                        : EN-US
Tagged PDF                      : Yes
XMP Toolkit                     : Adobe XMP Core 5.2-c001 63.139439, 2010/09/27-13:37:26
Metadata Date                   : 2020:07:28 14:10:29-05:00
Creator Tool                    : Acrobat PDFMaker 10.1 for Word
Document ID                     : uuid:70f23a54-45a3-40de-8dc6-1d5b7b07a362
Instance ID                     : uuid:31e1b9ba-210c-4cbe-b912-6b546ed49061
Subject                         : 2
Format                          : application/pdf
Creator                         : Lars Doe
Producer                        : Adobe PDF Library 10.0
Page Layout                     : OneColumn
Page Count                      : 1
```

#### Internal Calendar

![https://academy.hackthebox.com/storage/modules/28/leaks_calendar.png](https://academy.hackthebox.com/storage/modules/28/leaks_calendar.png)

#### Gitlab - Versions

![https://academy.hackthebox.com/storage/modules/28/sm_gitlab.png](https://academy.hackthebox.com/storage/modules/28/sm_gitlab.png)

#### Github - Passwords

![https://academy.hackthebox.com/storage/modules/28/sm_company_repo2.png](https://academy.hackthebox.com/storage/modules/28/sm_company_repo2.png)

# 

# 

#### Questions

####