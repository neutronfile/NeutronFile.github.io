#!/bin/sh
apt-ftparchive packages ./debfiles/ > ./Packages;
#sed -i -e '/^SHA/d' ./Packages;
bzip2 -c9k ./Packages > ./Packages.bz2;
printf "Origin: NeutronFile's Repo\nLabel: NeutronFile\nSuite: stable\nVersion: 1.0\nCodename: NuetronFile\nArchitecture: iphoneos-arm\nComponents: main\nDescription: NeutronFile's Best Repo for all Packages! Cydia + Sileo + Installer + Zebra! & Saily.\nMD5Sum:\n "$(cat ./Packages | md5sum | cut -d ' ' -f 1)" "$(stat ./Packages --printf="%s")" Packages\n "$(cat ./Packages.bz2 | md5sum | cut -d ' ' -f 1)" "$(stat ./Packages.bz2 --printf="%s")" Packages.bz2\n" >Release;
exit 0;