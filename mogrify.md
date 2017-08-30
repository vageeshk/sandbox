Installation  
=============
Installing ImageMagick

	sudo apt-get update

	sudo apt-get install imagemagick --fix-missing

Link : https://help.ubuntu.com/community/ImageMagick

After Installing, Add a imgaemagik reference in bash.rc file 

	export MAGICK_HOME="home/system-user-name/ImageMagick-6.9.2"

copy and paste in the bash.rc file

	smartresize() {
	  mogrify -path $3 -filter Triangle -define filter:support=2 -thumbnail $2 -unsharp 0.25x0.08+8.3+0.045 -dither None -posterize 136 -quality 82 -define jpeg:fancy-upsampling=off -define png:compression-filter=5 -define png:compression-level=9 -define png:compression-strategy=1 -define png:exclude-chunk=all -interlace none -colorspace sRGB $1
	}

Steps to mogrify (optimise the images)
==============

Create a blank folder.

Add the selected photos in the blank folder.

cd into the blank folder which you have created. 

	cd folder_Name

Make one more folder called as "output (prefered_name) [1]" using terminal. As,

	 mkdir output

Copy and paste to convert the images 

	mogrify -quality "80" -path output/ -resize 260 *.jpg

[1]The -path name should match the (prefered_name)

- quality of the image can be changed the as per the requirement.

Useful links
=========
Installation : https://help.ubuntu.com/community/ImageMagick

Documention:http://www.imagemagick.org/script/index.php

Resizing for different formats:https://www.smashingmagazine.com/2015/06/efficient-image-resizing-with-imagemagick/
