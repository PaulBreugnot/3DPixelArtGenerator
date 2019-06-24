# -*- coding: utf-8 -*-
"""
Created on Mon Feb 25 20:50:28 2019

@author: aubin
"""

import sys
import json
from pixel3d.generators import simple as simple_generator
from pixel3d.exporter import stl_export as stl_exporter
from pixel3d.exporter import height_map_exporter as height_map_exporter
from pixel3d.exporter import color_map_exporter as color_map_exporter
from pixel3d.exporter import pixel_map_exporter as pixel_map_exporter

"""
def generateHeightMap(input_file, max_height):

    pixel_heights = simple_generator.compute_simple_pixel_heights(input_file, max_height)

    height_map_json = height_map_exporter.generate_height_map(pixel_heights)

    return height_map_json
"""

"""
def generateColorMap(input_file, max_height):

    pixel_heights = simple_generator.compute_simple_pixel_heights(input_file, max_height)

    color_map_json = color_map_exporter.generate_color_map(input_file, pixel_heights)

    return color_map_json
"""

def generatePixelMap(input_file):

    return pixel_map_exporter.generatePixelMap(input_file)

def generateColorMap(input_file, max_height):

    return simple_generator.compute_ordered_color_map(input_file, max_height);

def exportToStl(pixel_map, color_map, pixel_size, output_file):
    pixel_art_model = stl_exporter.generate_stl(pixel_map, color_map, pixel_size)

    pixel_art_model.save(output_file)

