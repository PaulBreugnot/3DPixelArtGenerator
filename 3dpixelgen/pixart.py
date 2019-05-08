# -*- coding: utf-8 -*-
"""
Created on Mon Feb 25 20:50:28 2019

@author: aubin
"""

from PIL import Image
from stl import mesh
import numpy

import fct





##########  Dertermining the colors in the sprite     #################

im = Image.open("megamanX_vile.png", "r")
pixval = list(im.getdata())
nulpix = 0
for i in pixval :
    if i[3] == 0: 
        nulpix+=1
print(nulpix)

listcol = []
for i in pixval:
    if i not in listcol:
        if i[3] != 0 :
            listcol.append(i)
print(len(listcol))
listcolRGB= RGBAtoRGB(listcol)
imsize= im.size
im.close()


#############   Ranking the colors  #####################
#we will rank the different colors from 0 to 1

#outside color(first in listcol) : ranking of 1
#for the ranking of the rest, we will be using the rank at which they appear in listcol in a decreasing order


#fct.cube(1,3)

data = numpy.zeros(0, dtype=mesh.Mesh.dtype)
pixelArt = mesh.Mesh(data, remove_empty_areas=False)


for i in range(imsize[1]):
    for j in range(imsize[0]):
        if pixval[i*imsize[0]+j][3] != 0 :
            height = 1-listcol.index(pixval[i*imsize[0]+j])/len(listcol)
            newpixel = fct.cube(1, height) #generate the pixel at origin
            newpixel.translate([i,j, 0.0])             #translate to the position in x an y
            pixelArt = mesh.Mesh(numpy.concatenate([
                pixelArt.data,
                newpixel.data,
            ]))


pixelArt.save('pixel2.stl')


